'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import LeadForm from '@/components/common/lead-form';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import { FINAL_CTA_BENEFITS, FINAL_CTA_SECTION } from '@/lib/constants';

export default function FinalCta() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="get-started"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500" />
      <div aria-hidden="true" className="absolute inset-0 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
      <Section className="relative">
        <div className="container relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow={FINAL_CTA_SECTION.eyebrow}
                title={FINAL_CTA_SECTION.title}
                subtitle={FINAL_CTA_SECTION.subtitle}
                align="left"
                size="clamp"
                tone="inverse"
              />
              <ul className="mt-8 space-y-4">
                {FINAL_CTA_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white">
                    <CheckCircle2 aria-hidden="true" className="size-5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-2xl dark:bg-neutral-900 sm:p-8">
              <h3 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">{FINAL_CTA_SECTION.formTitle}</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </Section>
    </motion.section>
  );
}
