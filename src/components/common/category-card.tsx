'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Activity, ArrowUpRight, Ear, HeartPulse, Layers, Scan, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { Category } from '@/lib/constants';

const ICON_MAP: Record<Category['icon'], LucideIcon> = {
  Activity,
  Scan,
  Layers,
  Search,
  Ear,
  HeartPulse,
};

interface CategoryCardProps {
  category: Category;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  const Icon = ICON_MAP[category.icon];
  const isLarge = category.size === 'large';

  return (
    <Link
      href={`/catalog/${category.slug}`}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:p-8 dark:border-neutral-800 dark:bg-neutral-900',
        className,
      )}
      aria-label={`Оборудование: ${category.name}`}
    >
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
        <Icon aria-hidden="true" className="size-6 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="mt-6 text-xl font-bold md:text-2xl">{category.name}</h3>
      <p className="mt-2 flex-grow text-sm text-neutral-500">{category.description}</p>

      {isLarge ? (
        <>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.brands.map((brand) => (
              <Badge key={brand} variant="secondary">
                {brand}
              </Badge>
            ))}
          </div>
          <div className="relative mt-6 aspect-video overflow-hidden rounded-xl">
            <Image
              src={category.image}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </>
      ) : (
        <p className="mt-6 pr-6 text-xs text-neutral-500">{category.brands.slice(0, 3).join(' · ')}</p>
      )}

      <ArrowUpRight
        aria-hidden="true"
        className="absolute right-6 bottom-6 size-5 text-neutral-400 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brand-500"
        strokeWidth={1.5}
      />
    </Link>
  );
}
