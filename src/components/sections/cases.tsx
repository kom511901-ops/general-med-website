'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import CaseCard from '@/components/common/case-card';
import { CASES } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function Cases() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="cases"
      aria-labelledby="cases-heading"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className={cn('bg-neutral-50 py-20 dark:bg-neutral-900/50 md:py-28 lg:py-32')}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="cases-heading"
          className="text-balance text-center text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight"
        >
          Кейсы наших клиентов
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-500">
          Как мы помогаем клиникам запускать новые направления и увеличивать выручку
        </p>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-100px' }}
        >
          {CASES.map((caseItem) => (
            <motion.div
              key={caseItem.slug}
              variants={{
                hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
            >
              <CaseCard caseItem={caseItem} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            // TODO: Link to the full cases page when it is available.
            href="#contact"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            Смотреть все кейсы
            <ArrowRight aria-hidden="true" className="ml-2 size-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
