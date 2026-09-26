'use client';

import Image from 'next/image';
import { Activity, ArrowRight, Ear, Layers } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Case } from '@/lib/constants';

const EQUIPMENT_ICONS: Record<Case['equipmentIcon'], LucideIcon> = {
  Activity,
  Layers,
  Ear,
};

interface CaseCardProps {
  caseItem: Case;
}

export default function CaseCard({ caseItem }: CaseCardProps) {
  const EquipmentIcon = EQUIPMENT_ICONS[caseItem.equipmentIcon];

  return (
    // TODO: Link to the case detail page when case pages are available.
    <a
      href="#contact"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <div className="relative aspect-video overflow-hidden">
        {caseItem.image ? (
          <Image
            src={caseItem.image}
            alt={caseItem.clinicName}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex size-full items-center justify-center bg-gradient-to-br from-brand-500/15 to-accent-500/15"
          >
            <EquipmentIcon className="size-20 text-brand-500/70" strokeWidth={1.25} />
          </div>
        )}
      </div>

      <div className="flex flex-grow flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>{caseItem.city}</span>
          <span aria-hidden="true">·</span>
          <span>{caseItem.equipmentType}</span>
        </div>

        <h3 className="mt-3 min-h-14 line-clamp-2 text-xl font-bold">{caseItem.clinicName}</h3>

        <div className="mt-6">
          <div className="bg-gradient-to-r from-brand-500 to-accent-500 bg-clip-text text-4xl font-extrabold text-transparent">
            {caseItem.keyMetric}
          </div>
          <div className="mt-1 text-sm text-neutral-500">{caseItem.metricLabel}</div>
        </div>

        <p className="mt-6 flex-grow text-sm text-neutral-600 dark:text-neutral-400">
          {caseItem.description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-500 transition-all group-hover:gap-3">
          Читать кейс
          <ArrowRight aria-hidden="true" className="size-4" />
        </div>
      </div>
    </a>
  );
}
