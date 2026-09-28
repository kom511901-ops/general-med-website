'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';
import { TESTIMONIALS, TESTIMONIALS_SECTION } from '@/lib/constants';

function CarouselDots() {
  const { api } = useCarousel();
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateDots = () => {
      setSelectedSnap(api.selectedScrollSnap());
      setSnapCount(api.scrollSnapList().length);
    };

    updateDots();
    api.on('select', updateDots);
    api.on('reInit', updateDots);
    return () => {
      api.off('select', updateDots);
      api.off('reInit', updateDots);
    };
  }, [api]);

  return (
    <div role="group" className="flex items-center justify-center gap-2" aria-label="Выбрать страницу отзывов">
      {Array.from({ length: snapCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Перейти к отзывам ${index + 1}`}
          aria-current={selectedSnap === index ? 'true' : undefined}
          onClick={() => api?.scrollTo(index)}
          className={`size-2.5 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
            selectedSnap === index ? 'bg-brand-500' : 'bg-neutral-300 dark:bg-neutral-700'
          }`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toLocaleUpperCase('ru-RU');
}

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const testimonials =
    process.env.NODE_ENV === 'production'
      ? TESTIMONIALS.filter((testimonial) => !testimonial.isPlaceholder)
      : TESTIMONIALS;

  // TODO: Add approved customer testimonials before enabling this section in production.
  if (testimonials.length === 0) return null;

  return (
    <motion.section
      id="testimonials"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className="bg-neutral-50 dark:bg-neutral-900/50"
    >
      <Section>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading eyebrow={TESTIMONIALS_SECTION.eyebrow} title={TESTIMONIALS_SECTION.title} />

          <Carousel className="mt-12" options={{ loop: true, align: 'start' }}>
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={`${testimonial.author}-${testimonial.city}`}
                  className="flex basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <motion.article
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                    className="flex h-full w-full flex-col rounded-2xl border border-neutral-200/70 bg-white p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                        <Quote aria-hidden="true" className="size-6 text-white" />
                      </span>
                      {testimonial.isPlaceholder && process.env.NODE_ENV !== 'production' ? (
                        <span className="rounded-full border border-brand-500/20 bg-brand-500/5 px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-100">
                          Пример
                        </span>
                      ) : null}
                    </div>

                    <blockquote className="mt-5 line-clamp-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
                      «{testimonial.quote}»
                    </blockquote>

                    <footer className="mt-auto pt-6">
                      <div className="flex items-center gap-3">
                        <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-accent-500 text-sm font-bold text-white">
                          {testimonial.photo ? (
                            <Image
                              src={testimonial.photo}
                              alt={testimonial.author}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          ) : (
                            getInitials(testimonial.author)
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate font-semibold">{testimonial.author}</div>
                          <div className="line-clamp-2 text-sm text-neutral-500 dark:text-neutral-400">
                            {testimonial.role} · {testimonial.clinic}
                          </div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-400">
                            {testimonial.city}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 inline-flex max-w-full rounded-full border border-brand-500/15 bg-brand-500/5 px-3 py-1.5 text-xs font-medium text-foreground">
                        <span className="truncate">{testimonial.equipment}</span>
                      </div>
                    </footer>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-5">
              <CarouselControl direction="previous" />
              <CarouselDots />
              <CarouselControl direction="next" />
            </div>
          </Carousel>
        </div>
      </Section>
    </motion.section>
  );
}
