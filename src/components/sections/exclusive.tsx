'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import { buttonVariants } from '@/components/ui/button';
import { EXCLUSIVE_BRANDS, EXCLUSIVE_SECTION } from '@/lib/constants';

export default function Exclusive() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="exclusive"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="relative overflow-hidden bg-white dark:bg-neutral-950"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(11,95,255,0.14)_1px,transparent_1px)] bg-[length:20px_20px] opacity-[0.03]"
      />
      <Section>
        <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={EXCLUSIVE_SECTION.eyebrow}
            title={EXCLUSIVE_SECTION.title}
            subtitle={EXCLUSIVE_SECTION.subtitle}
            size="clamp"
          />

          <motion.div
            className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15 } },
            }}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-100px' }}
          >
            {EXCLUSIVE_BRANDS.map((brand) => (
              <motion.article
                key={brand.slug}
                variants={{
                  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
                className="rounded-2xl border border-neutral-200 bg-white p-8 transition-colors hover:border-brand-500/40 md:p-10 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-2xl font-bold text-white">
                    {brand.initial}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{brand.name}</h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {brand.country}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {brand.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {brand.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 size-5 shrink-0 text-emerald-500"
                        strokeWidth={1.75}
                      />
                      <span className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {advantage}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className={buttonVariants({
                    variant: 'outline',
                    size: 'lg',
                    className: 'mt-8 w-full',
                  })}
                >
                  Подробнее о {brand.name}
                  <ArrowRight aria-hidden="true" className="ml-2 size-4" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>
    </motion.section>
  );
}
