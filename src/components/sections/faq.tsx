'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LeadDialog from '@/components/common/lead-dialog';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FAQ_ITEMS, FAQ_SECTION } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const prefersReducedMotion = useReducedMotion();
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);

  return (
    <>
      <motion.section
        id="faq"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
        className={cn('bg-neutral-50 dark:bg-neutral-900/50')}
      >
        <Section>
          <div className="container mx-auto max-w-4xl px-6 lg:px-8">
            <SectionHeading
              eyebrow={FAQ_SECTION.eyebrow}
              title={FAQ_SECTION.title}
              subtitle={FAQ_SECTION.subtitle}
            />

            <Accordion className="mt-12" multiple={false}>
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-base font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <p className="text-neutral-600 dark:text-neutral-400">{FAQ_SECTION.ctaText}</p>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => setIsLeadDialogOpen(true)}
              >
                {FAQ_SECTION.ctaButton}
                <ArrowRight aria-hidden="true" className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </Section>
      </motion.section>
      <LeadDialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen} />
    </>
  );
}
