'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, Award, CheckCircle2, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import LeadDialog from '@/components/common/lead-dialog';
import CountUp from '@/components/common/count-up';
import { METRICS } from '@/lib/constants';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const reducedContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeContainerVariants = prefersReducedMotion
    ? reducedContainerVariants
    : containerVariants;
  const activeItemVariants = prefersReducedMotion ? reducedItemVariants : itemVariants;

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-160px] left-[-160px] size-[500px] rounded-full bg-brand-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-160px] bottom-[-160px] size-[500px] rounded-full bg-accent-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:24px_24px] opacity-40 dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        />

        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              variants={activeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <motion.div variants={activeItemVariants}>
                <Badge
                  variant="outline"
                  className="inline-flex h-auto w-fit items-center gap-2 rounded-full border-brand-500/20 bg-brand-50 px-4 py-1.5 text-sm text-brand-700 dark:bg-brand-500/10 dark:text-brand-400"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  500+ клиник уже работают с нами
                </Badge>
              </motion.div>

              <motion.h1
                variants={activeItemVariants}
                className="mt-6 text-[clamp(40px,4vw,60px)] leading-[1.05] font-extrabold tracking-tight text-pretty"
              >
                Не переплачивайте за медтехнику
                <br />
                <span className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-transparent">
                  500+ клиник уже сэкономили с нами до 40%
                </span>
              </motion.h1>

              <motion.p
                variants={activeItemVariants}
                className="mt-6 max-w-xl text-lg text-neutral-600 dark:text-neutral-400"
              >
                Прямые поставки от Siemens, Philips, GE, Mindray, GEMSS. Лизинг от 0%, монтаж,
                обучение и сервис — включены в стоимость.
              </motion.p>

              <motion.div variants={activeItemVariants} className="mt-10 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  type="button"
                  onClick={() => setIsLeadDialogOpen(true)}
                  className="rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-8 text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                >
                  Подобрать оборудование
                  <ArrowRight aria-hidden="true" className="ml-2 size-4" strokeWidth={1.5} />
                </Button>
                <Button size="lg" type="button" variant="outline">
                  <Download aria-hidden="true" className="mr-2 size-4" strokeWidth={1.5} />
                  Скачать каталог PDF
                </Button>
              </motion.div>

              <motion.div
                variants={activeItemVariants}
                className="mt-5 flex items-center gap-2 text-sm text-neutral-500"
              >
                <Clock aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.5} />
                Бесплатная консультация · Перезвоним за 30 минут
              </motion.div>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85"
                alt="Компьютерный томограф — оборудование для современной диагностики"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
                className="object-cover"
              />
              <div className="absolute top-6 right-6 flex items-center gap-2 rounded-2xl border border-white/50 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-lg dark:border-neutral-800/50 dark:bg-neutral-900/80">
                <Award aria-hidden="true" className="size-5 text-brand-500" strokeWidth={1.5} />
                <span className="text-sm font-semibold">Экспертный класс</span>
              </div>
              <div className="absolute right-6 bottom-6 flex min-w-[240px] items-center gap-3 rounded-2xl border border-white/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-neutral-800/50 dark:bg-neutral-900/80">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20">
                  <CheckCircle2
                    aria-hidden="true"
                    className="size-6 text-emerald-500"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold">Оборудование в наличии</div>
                  <div className="text-xs text-neutral-500">Отгрузка за 3 дня</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 border-t border-neutral-200 pt-12 md:mt-24 dark:border-neutral-800">
            <div className="grid grid-cols-2 divide-x divide-neutral-200 md:grid-cols-4 dark:divide-neutral-800">
              {METRICS.map((metric) => (
                <div key={metric.label} className="px-6 first:pl-0">
                  <div className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-4xl font-extrabold text-transparent tabular-nums md:text-5xl">
                    <CountUp value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-neutral-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LeadDialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen} />
    </>
  );
}
