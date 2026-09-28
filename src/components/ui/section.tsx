import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return <div className={cn('py-16 md:py-24', className)}>{children}</div>;
}
