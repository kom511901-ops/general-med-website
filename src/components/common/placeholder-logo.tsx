import { cn } from '@/lib/utils';

interface PlaceholderLogoProps {
  name: string;
}

export default function PlaceholderLogo({ name }: PlaceholderLogoProps) {
  return (
    <span
      aria-label={name}
      className={cn(
        'inline-flex h-10 min-w-[120px] items-center justify-center px-4',
        'font-bold text-neutral-400 grayscale opacity-70 transition duration-300 hover:text-neutral-900 hover:opacity-100',
        'dark:text-neutral-500 dark:hover:text-neutral-100',
      )}
    >
      {name}
    </span>
  );
}
