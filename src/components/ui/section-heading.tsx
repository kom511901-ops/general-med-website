import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-4xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow ? (
        <span className="inline-flex rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-2 text-sm font-semibold text-brand-600 dark:text-brand-100">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          'text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          eyebrow && 'mt-5',
          align === 'center' && 'mx-auto',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
