import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import Logo from '@/components/common/logo';
import SubscriptionForm from '@/components/common/subscription-form';
import { COMPANY, FOOTER_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 pt-16 pb-8 text-neutral-300 dark:bg-black md:pt-20">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo className="[&>span:last-child]:!text-white" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400">
              Официальный поставщик медицинского оборудования от ведущих мировых производителей. Комплексные решения для клиник по всей России.
            </p>

            <div className="mt-8">
              <h2 className="mb-3 font-semibold text-white">Полезное для медицинского бизнеса</h2>
              <p className="mb-4 text-sm text-neutral-400">
                Кейсы, обзоры оборудования, обновления законодательства. Раз в месяц, без спама.
              </p>
              <SubscriptionForm />
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={COMPANY.telegram}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-800 transition hover:border-brand-500 hover:bg-brand-500/10 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Send aria-hidden="true" className="size-4" />
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-800 transition hover:border-brand-500 hover:bg-brand-500/10 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <MessageCircle aria-hidden="true" className="size-4" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                aria-label="Электронная почта"
                className="flex size-10 items-center justify-center rounded-full border border-neutral-800 transition hover:border-brand-500 hover:bg-brand-500/10 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Mail aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Ссылки в подвале" className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <h2 className="mb-4 font-semibold text-white">{group.title}</h2>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-neutral-400 transition hover:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 grid gap-6 border-t border-neutral-800 pt-8 text-sm md:grid-cols-3">
          <div className="flex items-start gap-3">
            <Phone aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-500" />
            <div>
              <a href={`tel:${COMPANY.phoneRaw}`} className="font-semibold text-white transition hover:text-brand-500">
                {COMPANY.phone}
              </a>
              <p className="mt-1 text-xs text-neutral-500">{COMPANY.workingHours}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-500" />
            <div>
              <a href={`mailto:${COMPANY.email}`} className="text-white transition hover:text-brand-500">
                {COMPANY.email}
              </a>
              <p className="mt-1 text-xs text-neutral-500">Отвечаем в течение часа</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-500" />
            <div>
              <p className="text-white">{COMPANY.address}</p>
              <p className="mt-1 text-xs text-neutral-500">Офис и демонстрационный зал</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-800 pt-8 text-xs text-neutral-500 md:flex-row md:items-center">
          <div>
            <p>© {new Date().getFullYear()} ООО «Дженерал Медицина». Все права защищены.</p>
            <p className="mt-1">ИНН {COMPANY.inn} · ОГРН {COMPANY.ogrn}</p>
          </div>
          <nav aria-label="Правовые документы" className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition hover:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none">Политика конфиденциальности</Link>
            <Link href="/terms" className="transition hover:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none">Публичная оферта</Link>
            <Link href="/consent" className="transition hover:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none">Согласие на обработку ПДн</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
