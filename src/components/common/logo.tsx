import Link from 'next/link';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Дженерал Медицина — главная"
      className={cn(
        'focus-visible:ring-brand-500 focus-visible:ring-offset-background inline-flex shrink-0 items-center gap-3 rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
        <Plus aria-hidden="true" className="size-6 text-white" strokeWidth={1.5} />
      </span>
      <span className="text-foreground whitespace-nowrap text-xl font-bold">Дженерал Медицина</span>
    </Link>
  );
}
