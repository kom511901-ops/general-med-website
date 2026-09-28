import Image from 'next/image';
import { Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/constants';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { author } = testimonial;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-start justify-between gap-4">
        <Quote aria-hidden="true" className="size-10 text-brand-500/30" strokeWidth={1.5} />
        {testimonial.isPlaceholder && process.env.NODE_ENV !== 'production' ? (
          <span className="rounded-full border border-brand-500/20 bg-brand-500/5 px-2.5 py-1 text-xs font-medium text-brand-700 dark:text-brand-100">
            Пример
          </span>
        ) : null}
      </div>

      <p className="mt-6 flex-grow leading-relaxed text-neutral-700 dark:text-neutral-300">
        «{testimonial.quote}»
      </p>

      <div className="mt-6 border-t border-neutral-200 dark:border-neutral-800" />

      <footer className="mt-6 flex items-center gap-3">
        <div
          className={cn(
            'relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-500 to-accent-500',
          )}
        >
          {testimonial.photo ? (
            <Image
              src={testimonial.photo}
              alt={author.name}
              fill
              sizes="48px"
              loading="lazy"
              className="object-cover"
            />
          ) : (
            <span className="font-bold text-white">{author.initials}</span>
          )}
        </div>
        <div className="min-w-0">
          <div className="truncate font-bold">{author.name}</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {author.role}, {author.clinic}
          </div>
          <div className="mt-0.5 text-xs text-neutral-400">{author.city}</div>
        </div>
      </footer>
    </article>
  );
}
