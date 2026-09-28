'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LeadDialog from '@/components/common/lead-dialog';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';

export default function CtaBanner() {
  const prefersReducedMotion = useReducedMotion();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.section
        id="get-consultation"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      >
        <Section className="md:py-20">
          <div className="container mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-8 shadow-2xl md:flex-row md:p-12 lg:p-16">
              <div aria-hidden="true" className="absolute inset-0 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="relative flex-grow">
                <SectionHeading
                  eyebrow="Готовы обсудить проект?"
                  title="Расчёт под ключ за 30 минут"
                  subtitle="Обсудим задачи вашей клиники, подберём оборудование, посчитаем бюджет и сроки. Без обязательств."
                  align="left"
                  size="clamp"
                  tone="inverse"
                />
              </div>
              <div className="relative shrink-0">
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  className="h-12 bg-white px-6 text-base text-neutral-950 hover:bg-white/90"
                  onClick={() => setIsDialogOpen(true)}
                >
                  Получить консультацию
                  <ArrowRight aria-hidden="true" className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </motion.section>
      <LeadDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
