import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  size?: 'standard' | 'clamp';
  tone?: 'default' | 'inverse';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  size = 'standard',
  tone = 'default',
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-4xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow ? (
        <span className={cn(
          'inline-flex rounded-full border px-4 py-2 text-sm font-semibold',
          tone === 'inverse'
            ? 'border-white/30 bg-white/10 text-white'
            : 'border-brand-500/20 bg-brand-500/5 text-brand-600 dark:text-brand-100',
        )}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          size === 'clamp'
            ? 'text-balance text-[clamp(32px,4vw,56px)] font-extrabold tracking-tight'
            : 'text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          eyebrow && 'mt-5',
          align === 'center' && 'mx-auto',
          tone === 'inverse' && 'text-white',
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-lg',
            align === 'center' && 'mx-auto',
            tone === 'inverse' ? 'text-white/80' : 'text-muted-foreground',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
