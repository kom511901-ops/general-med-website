'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Radiation, ScanLine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { EXCLUSIVE_BRANDS, EXCLUSIVE_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';

const BRAND_ICONS: Record<(typeof EXCLUSIVE_BRANDS)[number]['icon'], LucideIcon> = {
  Radiation,
  ScanLine,
};

export default function Exclusive() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="exclusive"
      aria-labelledby="exclusive-heading"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className={cn('py-20 md:py-28 lg:py-32')}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-2 text-sm font-semibold text-brand-600 dark:text-brand-100">
            {EXCLUSIVE_SECTION.eyebrow}
          </span>
          <h2
            id="exclusive-heading"
            className="mt-5 text-balance text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight"
          >
            {EXCLUSIVE_SECTION.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400">
            {EXCLUSIVE_SECTION.subtitle}
          </p>
        </div>

        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-2"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 } },
          }}
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-100px' }}
        >
          {EXCLUSIVE_BRANDS.map((brand) => {
            const BrandIcon = BRAND_ICONS[brand.icon];

            return (
              <motion.article
                key={brand.name}
                variants={{
                  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
                className="rounded-3xl bg-gradient-to-br from-brand-500/50 via-brand-500/20 to-accent-500/50 p-px"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-background/90 p-6 backdrop-blur-xl sm:p-8">
                  {brand.image ? (
                    <div className="relative -mx-6 -mt-6 mb-6 aspect-[2/1] overflow-hidden sm:-mx-8 sm:-mt-8">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} equipment`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mb-6 flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/10 via-brand-500/5 to-accent-500/10">
                      <BrandIcon
                        aria-hidden="true"
                        className="size-16 text-brand-500/70"
                        strokeWidth={1.25}
                      />
                    </div>
                  )}

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      {brand.logo ? (
                        <Image src={brand.logo} alt={`${brand.name} logo`} width={144} height={40} />
                      ) : (
                        <div className="text-3xl font-extrabold tracking-tight">{brand.name}</div>
                      )}
                      <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                        {brand.country}
                      </div>
                    </div>
                    <BrandIcon aria-hidden="true" className="mt-1 size-6 text-brand-500" />
                  </div>

                  <p className="mt-6 text-lg font-semibold text-foreground">{brand.positioning}</p>

                  <ul className="mt-6 divide-y divide-border/70">
                    {brand.models.map((model) => (
                      <li key={model.name} className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                        <span className="font-semibold">{model.name}</span>
                        <span className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {model.description}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Преимущества поставки">
                    {EXCLUSIVE_SECTION.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="rounded-full border border-brand-500/15 bg-brand-500/5 px-3 py-1.5 text-xs font-medium text-foreground"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-5 text-sm font-semibold text-white transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
                    >
                      Запросить КП
                    </a>
                    {/* TODO: Link to the product catalog when the catalog page is available. */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:gap-3 dark:text-brand-100"
                    >
                      Все модели
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
