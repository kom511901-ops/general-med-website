'use client';

import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import LeadDialog from '@/components/common/lead-dialog';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const EQUIPMENT_OPTIONS = [
  { name: 'УЗИ', cost: 3_000_000 },
  { name: 'Рентген', cost: 7_000_000 },
  { name: 'КТ', cost: 40_000_000 },
  { name: 'МРТ', cost: 90_000_000 },
  { name: 'Эндоскопия', cost: 4_000_000 },
] as const;

interface SliderFieldProps {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  formatValue: (value: number) => string;
  onValueChange: (value: number) => void;
}

function SliderField({
  id,
  label,
  value,
  min,
  max,
  step,
  formatValue,
  onValueChange,
}: SliderFieldProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium">
          {label}
        </label>
        <span className="shrink-0 text-sm font-semibold tabular-nums">{formatValue(value)}</span>
      </div>
      <Slider
        id={id}
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(values) => {
          const nextValue = values[0];
          if (nextValue !== undefined) onValueChange(nextValue);
        }}
        className="py-1"
      />
      <div className="flex justify-between text-xs text-neutral-500">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
}

export default function RoiCalculator() {
  const prefersReducedMotion = useReducedMotion();
  const [equipmentCost, setEquipmentCost] = useState<number>(EQUIPMENT_OPTIONS[0].cost);
  const [averageCheck, setAverageCheck] = useState(2500);
  const [patientsPerDay, setPatientsPerDay] = useState(20);
  const [workingDaysPerMonth, setWorkingDaysPerMonth] = useState(22);
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);

  const { monthlyRevenue, yearlyProfit, paybackMonths, chartData } = useMemo(() => {
    const monthlyRevenue = averageCheck * patientsPerDay * workingDaysPerMonth;
    const yearlyProfit = monthlyRevenue * 12;
    const paybackMonths = Math.ceil(equipmentCost / monthlyRevenue);
    const chartData = Array.from({ length: 24 }, (_, index) => ({
      month: index + 1,
      revenue: monthlyRevenue * (index + 1),
    }));

    return { monthlyRevenue, yearlyProfit, paybackMonths, chartData };
  }, [averageCheck, equipmentCost, patientsPerDay, workingDaysPerMonth]);

  const formatCurrency = (value: number) => `${value.toLocaleString('ru-RU')} ₽`;

  return (
    <>
      <motion.section
        id="roi-calculator"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        className="bg-white py-20 md:py-28 lg:py-32 dark:bg-neutral-950"
      >
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-balance text-center text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight">
            Посчитайте окупаемость оборудования
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-500">
            Введите параметры вашей клиники — покажем срок возврата инвестиций и прибыль за первый год
          </p>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div
              className={cn(
                'space-y-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50',
              )}
            >
              <h3 className="text-xl font-bold">Параметры вашей клиники</h3>

              <div className="space-y-3">
                <label htmlFor="equipment-category" className="text-sm font-medium">
                  Категория оборудования
                </label>
                <Select
                  value={String(equipmentCost)}
                  onValueChange={(value) => {
                    if (value) setEquipmentCost(Number(value));
                  }}
                >
                  <SelectTrigger id="equipment-category" className="h-11 bg-white dark:bg-neutral-900">
                    <SelectValue placeholder="Выберите оборудование" />
                  </SelectTrigger>
                  <SelectContent>
                    {EQUIPMENT_OPTIONS.map((option) => (
                      <SelectItem key={option.name} value={String(option.cost)}>
                        {option.name} · около {formatCurrency(option.cost)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <SliderField
                id="average-check"
                label="Средний чек за исследование"
                value={averageCheck}
                min={500}
                max={15000}
                step={100}
                formatValue={formatCurrency}
                onValueChange={setAverageCheck}
              />
              <SliderField
                id="patients-per-day"
                label="Пациентов в день"
                value={patientsPerDay}
                min={5}
                max={100}
                step={1}
                formatValue={(value) => `${value} чел.`}
                onValueChange={setPatientsPerDay}
              />
              <SliderField
                id="working-days"
                label="Рабочих дней в месяц"
                value={workingDaysPerMonth}
                min={15}
                max={30}
                step={1}
                formatValue={(value) => `${value} дн.`}
                onValueChange={setWorkingDaysPerMonth}
              />
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="text-sm text-neutral-500">Окупается за</div>
              <div className="mt-2 bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-5xl font-extrabold text-transparent tabular-nums md:text-6xl">
                {paybackMonths} мес
              </div>

              <div className="mt-6 text-sm text-neutral-500">Прибыль за первый год</div>
              <div className="mt-2 text-3xl font-bold tabular-nums md:text-4xl">
                {formatCurrency(yearlyProfit)}
              </div>

              <div className="mt-8 h-60" aria-label="График накопленной выручки по месяцам">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 8, right: 12, bottom: 4, left: 8 }}>
                    <defs>
                      <linearGradient id="roi-line-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#0B5FFF" />
                        <stop offset="100%" stopColor="#00C2C7" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" opacity={0.1} />
                    <XAxis
                      dataKey="month"
                      tickFormatter={(month: number) => `${month} мес`}
                      tickLine={false}
                      axisLine={false}
                      minTickGap={24}
                      fontSize={12}
                    />
                    <YAxis
                      tickFormatter={(value: number) => `${(value / 1_000_000).toFixed(1)}М`}
                      tickLine={false}
                      axisLine={false}
                      width={48}
                      fontSize={12}
                    />
                    <Tooltip
                      formatter={(value) =>
                        typeof value === 'number' ? formatCurrency(value) : String(value ?? '')
                      }
                      labelFormatter={(month) => `${month} мес`}
                    />
                    <ReferenceLine
                      y={equipmentCost}
                      stroke="#ef4444"
                      strokeDasharray="4 4"
                      label={{ value: 'Стоимость', position: 'insideTopRight', fill: '#ef4444', fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      name="Накопленная выручка"
                      stroke="url(#roi-line-gradient)"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 5 }}
                      isAnimationActive={!prefersReducedMotion}
                      animationDuration={prefersReducedMotion ? 0 : 400}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <Button
                type="button"
                size="lg"
                onClick={() => setIsLeadDialogOpen(true)}
                className="mt-8 w-full rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 text-white hover:shadow-lg"
              >
                Получить персональный расчёт
              </Button>
              <p className="mt-3 text-xs text-neutral-500">
                Расчёт ориентировочный. Месячная выручка по заданным параметрам:{' '}
                {formatCurrency(monthlyRevenue)}.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <LeadDialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen} />
    </>
  );
}
