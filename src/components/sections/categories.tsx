'use client';

import { motion, useReducedMotion } from 'framer-motion';
import CategoryCard from '@/components/common/category-card';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Categories() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="categories"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="bg-white py-20 md:py-28 lg:py-32 dark:bg-neutral-950"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-balance text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight">
          Оборудование для любых задач
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-neutral-500">
          От базовой диагностики до экспертных решений — подберём под бюджет и специфику клиники
        </p>

        <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6">
          {CATEGORIES.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              className={cn(category.size === 'large' && 'md:col-span-2 md:row-span-2')}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
