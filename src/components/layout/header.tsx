'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useReducedMotion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Activity,
  Ear,
  HeartPulse,
  Layers,
  Menu,
  MessageCircle,
  Moon,
  Scan,
  Search,
  Send,
  Sun,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import LeadDialog from '@/components/common/lead-dialog';
import Logo from '@/components/common/logo';
import { COMPANY, CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const categoryIcons: Record<string, LucideIcon> = {
  uzi: Activity,
  rentgen: Scan,
  'kt-mrt': Layers,
  endoskopy: Search,
  lor: Ear,
  anesteziya: HeartPulse,
};

const navigationLinks = [
  { label: 'Эксклюзив', href: '/exclusive' },
  { label: 'Сервис', href: '/service' },
  { label: 'Кейсы', href: '/cases' },
  { label: 'База знаний', href: '/knowledge' },
  { label: 'О нас', href: '/about' },
];

const iconButtonClassName =
  'focus-visible:ring-brand-500 focus-visible:ring-offset-background inline-flex size-9 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-muted hover:text-neutral-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-neutral-200 dark:hover:text-white';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLeadDialogOpen, setIsLeadDialogOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 20);
  });

  const openLeadDialog = () => setIsLeadDialogOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full border-b transition-all duration-300',
          prefersReducedMotion && 'duration-0',
          isScrolled
            ? 'border-neutral-200/60 bg-white/80 backdrop-blur-lg dark:border-neutral-800/60 dark:bg-neutral-950/80'
            : 'border-transparent bg-background',
        )}
      >
        <div
          className={cn(
            'container mx-auto flex items-center justify-between gap-4 px-6 lg:px-8',
            isScrolled ? 'h-16' : 'h-20',
          )}
        >
          <Logo />

          <NavigationMenu
            delay={150}
            closeDelay={200}
            className="hidden flex-1 justify-center lg:flex"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto rounded-md px-4 py-2 text-[15px] font-medium text-neutral-700 transition hover:bg-transparent hover:text-neutral-900 focus:bg-transparent dark:text-neutral-200 dark:hover:text-white">
                  Каталог
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-2xl border border-neutral-200/60 bg-background p-6 shadow-xl dark:border-neutral-800/60">
                  <div className="grid w-[720px] max-w-[calc(100vw-3rem)] grid-cols-3 gap-4">
                    {CATEGORIES.map((category) => {
                      const CategoryIcon = categoryIcons[category.slug];

                      return (
                        <NavigationMenuLink
                          key={category.slug}
                          closeOnClick
                          render={
                            <Link
                              href={`/catalog/${category.slug}`}
                              aria-label={`${category.name}: ${category.description}`}
                              className="focus-visible:ring-brand-500 focus-visible:ring-offset-background flex items-start gap-3 rounded-lg p-3 transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            />
                          }
                        >
                          <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500">
                            <CategoryIcon
                              aria-hidden="true"
                              className="size-5 text-white"
                              strokeWidth={1.5}
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-foreground">
                              {category.name}
                            </span>
                            <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">
                              {category.description}
                            </span>
                          </span>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {navigationLinks.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    closeOnClick
                    render={<Link href={item.href} />}
                    className="whitespace-nowrap rounded-md px-4 py-2 text-[15px] font-medium text-neutral-700 transition hover:bg-transparent hover:text-neutral-900 focus:bg-transparent dark:text-neutral-200 dark:hover:text-white"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Переключить тему"
              className={iconButtonClassName}
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <Sun aria-hidden="true" className="size-5" strokeWidth={1.5} />
              ) : (
                <Moon aria-hidden="true" className="size-5" strokeWidth={1.5} />
              )}
            </button>
            <a
              href={COMPANY.telegram}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className={iconButtonClassName}
            >
              <Send aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={iconButtonClassName}
            >
              <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden whitespace-nowrap font-semibold text-neutral-900 xl:inline-flex dark:text-neutral-100"
            >
              {COMPANY.phone}
            </a>
            <Button
              type="button"
              onClick={openLeadDialog}
              className="rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-6 text-white transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Оставить заявку
            </Button>
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Button
              type="button"
              onClick={openLeadDialog}
              className="rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 px-4 text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              Оставить заявку
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger
                aria-label="Открыть меню"
                className={cn(iconButtonClassName, 'size-10')}
              >
                <Menu aria-hidden="true" className="size-6" strokeWidth={1.5} />
              </SheetTrigger>
              <SheetContent side="right" className="w-[min(24rem,90vw)] gap-0 overflow-y-auto p-6">
                <SheetHeader className="p-0 pr-10">
                  <SheetTitle className="sr-only">Навигация</SheetTitle>
                  <Logo />
                </SheetHeader>
                <nav aria-label="Мобильная навигация" className="mt-8">
                  <ul>
                    <li className="border-b border-neutral-200/60 dark:border-neutral-800/60">
                      <Link
                        href="/catalog"
                        onClick={closeSheet}
                        className="block py-3 text-lg font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        Каталог
                      </Link>
                      <ul className="grid grid-cols-2 gap-x-4 pb-3">
                        {CATEGORIES.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/catalog/${category.slug}`}
                              onClick={closeSheet}
                              className="block py-2 text-sm text-muted-foreground focus-visible:ring-2 focus-visible:ring-brand-500"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    {navigationLinks.map((item) => (
                      <li key={item.href} className="border-b border-neutral-200/60 dark:border-neutral-800/60">
                        <Link
                          href={item.href}
                          onClick={closeSheet}
                          className="block py-3 text-lg font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-brand-500"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8 flex items-center gap-5">
                  <a
                    href={COMPANY.telegram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className={iconButtonClassName}
                  >
                    <Send aria-hidden="true" className="size-6" strokeWidth={1.5} />
                  </a>
                  <a
                    href={COMPANY.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className={iconButtonClassName}
                  >
                    <MessageCircle aria-hidden="true" className="size-6" strokeWidth={1.5} />
                  </a>
                  <a
                    href={`tel:${COMPANY.phoneRaw}`}
                    className="text-base font-semibold text-foreground focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <LeadDialog open={isLeadDialogOpen} onOpenChange={setIsLeadDialogOpen} />
    </>
  );
}
