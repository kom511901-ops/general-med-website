'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CreditCard, Layers, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ADVANTAGES = [
  {
    icon: 'Layers',
    title: 'Комплексное решение',
    description:
      'Не просто продаём оборудование, а закрываем всё — подбор под задачи клиники, поставка, монтаж, обучение персонала, сервисное сопровождение.',
  },
  {
    icon: 'MapPin',
    title: 'Сервис по всей России',
    description:
      'Инженеры в 50+ городах. Выезд по SLA 24 часа для критичного оборудования. Собственный склад запасных частей — быстрая замена компонентов.',
  },
  {
    icon: 'CreditCard',
    title: 'Гибкое финансирование',
    description:
      'Лизинг от 0% первоначального взноса. Рассрочка до 24 месяцев без переплат. Работаем с медицинским лизингом от 15+ ведущих компаний РФ.',
  },
] as const;

const ICON_MAP: Record<(typeof ADVANTAGES)[number]['icon'], LucideIcon> = {
  Layers,
  MapPin,
  CreditCard,
};

export default function WhyUs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="why-us"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="bg-neutral-50 py-20 md:py-28 lg:py-32 dark:bg-neutral-900/50"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-balance text-center text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight">
          Почему нас выбирают 500+ клиник
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-500">
          Мы не просто поставщик оборудования — мы партнёр, который отвечает за результат
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {ADVANTAGES.map((advantage, index) => {
            const Icon = ICON_MAP[advantage.icon];

            return (
              <motion.div
                key={advantage.title}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                className={cn('flex flex-col items-center px-4 text-center')}
              >
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 shadow-lg">
                  <Icon aria-hidden="true" className="size-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl font-bold md:text-2xl">{advantage.title}</h3>
                <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
