'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ClipboardList,
  FileSignature,
  MessageSquare,
  Truck,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { STEPS_SECTION, WORK_STEPS } from '@/lib/constants';
import SectionHeading from '@/components/ui/section-heading';
import Section from '@/components/ui/section';

const STEP_ICONS: Record<(typeof WORK_STEPS)[number]['icon'], LucideIcon> = {
  MessageSquare,
  ClipboardList,
  FileSignature,
  Truck,
  Wrench,
};

export default function Steps() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="steps"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
    >
      <Section>
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={STEPS_SECTION.eyebrow}
          title={STEPS_SECTION.title}
          subtitle={STEPS_SECTION.subtitle}
        />

        <div className="relative mt-14">
          <motion.div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 w-0.5 origin-top bg-gradient-to-b from-brand-500 to-accent-500 lg:hidden"
            initial={prefersReducedMotion ? false : { scaleY: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: 'easeOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-6 hidden h-0.5 origin-left bg-gradient-to-r from-brand-500 to-accent-500 lg:block"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.9, ease: 'easeOut' }}
          />

          <motion.ol
            className="grid gap-8 lg:grid-cols-5 lg:gap-5"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
            }}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-100px' }}
          >
            {WORK_STEPS.map((step) => {
              const StepIcon = STEP_ICONS[step.icon];

              return (
                <motion.li
                  key={step.number}
                  variants={{
                    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white shadow-lg shadow-brand-500/20 lg:mb-6">
                    {step.number}
                  </div>

                  <div className="min-w-0 flex-1 pb-2 lg:flex lg:h-full lg:flex-col lg:items-center">
                    <div className="flex size-11 items-center justify-center rounded-xl border border-brand-500/15 bg-brand-500/5 text-brand-500">
                      <StepIcon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {step.description}
                    </p>
                    <div className="mt-4 pt-4 lg:mt-auto">
                      <span className="inline-flex rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-6 text-sm font-semibold text-white transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
          >
            {STEPS_SECTION.cta}
          </a>
        </div>
      </div>
      </Section>
    </motion.section>
  );
}
