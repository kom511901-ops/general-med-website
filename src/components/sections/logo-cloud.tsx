'use client';

import { motion, useReducedMotion } from 'framer-motion';
import PlaceholderLogo from '@/components/common/placeholder-logo';
import { CLIENT_LOGOS } from '@/lib/constants';

const repeatedClientLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

export default function LogoCloud() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      className="border-y border-neutral-200 bg-white py-16 md:py-20 dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium tracking-wider text-neutral-500 uppercase">
          Нам доверяют 500+ клиник от Калининграда до Владивостока
        </p>

        <div className="mt-10 hidden flex-wrap items-center justify-center gap-x-12 gap-y-8 md:flex">
          {CLIENT_LOGOS.map((name) => (
            <PlaceholderLogo key={name} name={name} />
          ))}
        </div>

        <div className="mt-10 overflow-hidden md:hidden">
          <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
            {repeatedClientLogos.map((name, index) => (
              <span key={`${name}-${index}`} aria-hidden={index >= CLIENT_LOGOS.length}>
                <PlaceholderLogo name={name} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
