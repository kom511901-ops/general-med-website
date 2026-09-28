'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Section from '@/components/ui/section';
import SectionHeading from '@/components/ui/section-heading';
import {
  Carousel,
  CarouselContent,
  CarouselControl,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel';
import TestimonialCard from '@/components/common/testimonial-card';
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
    <div
      role="group"
      className="flex items-center justify-center gap-2"
      aria-label="Выбрать отзыв"
    >
      {Array.from({ length: snapCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Перейти к отзыву ${index + 1}`}
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

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const testimonials =
    process.env.NODE_ENV === 'production'
      ? TESTIMONIALS.filter((testimonial) => !testimonial.isPlaceholder)
      : TESTIMONIALS;

  if (testimonials.length === 0) return null;

  return (
    <motion.section
      id="testimonials"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
      className="bg-white dark:bg-neutral-950"
    >
      <Section>
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow={TESTIMONIALS_SECTION.eyebrow}
            title={TESTIMONIALS_SECTION.title}
            subtitle={TESTIMONIALS_SECTION.subtitle}
          />

          <Carousel
            aria-label="Отзывы клиентов"
            className="mt-12"
            options={{ loop: true, align: 'start' }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="flex basis-full md:basis-1/2 xl:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
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
