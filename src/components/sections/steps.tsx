'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { FileText, MessageSquare, Search, ShieldCheck, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import { STEPS_SECTION, WORK_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const STEP_ICONS: Record<(typeof WORK_STEPS)[number]['icon'], LucideIcon> = {
  MessageSquare,
  Search,
  FileText,
  Wrench,
  ShieldCheck,
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
      className={cn('bg-neutral-50 dark:bg-neutral-900/50')}
    >
      <Section>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={STEPS_SECTION.eyebrow}
            title={STEPS_SECTION.title}
            subtitle={STEPS_SECTION.subtitle}
          />

          <div className="relative mt-14">
            <div
              aria-hidden="true"
              className="absolute bottom-7 left-7 top-7 w-px bg-gradient-to-b from-brand-500 to-accent-500 opacity-20 lg:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-brand-500 to-accent-500 opacity-20 lg:block"
            />

            <motion.ol
              className="grid gap-8 lg:grid-cols-5 lg:gap-5"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
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
                      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                    className="relative flex h-full gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                  >
                    <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/20">
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-extrabold text-brand-500/10">
                        {step.number}
                      </span>
                      <StepIcon
                        aria-hidden="true"
                        className="relative z-10 size-6"
                        strokeWidth={1.75}
                      />
                    </div>

                    <div className="min-w-0 flex-1 pb-2 lg:flex lg:h-full lg:flex-col lg:items-center">
                      <h3 className="text-lg font-bold lg:mt-6">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ol>
          </div>
        </div>
      </Section>
    </motion.section>
  );
}
