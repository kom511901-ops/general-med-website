import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/common/theme-provider';
import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Дженерал Медицина — медицинское оборудование для клиник',
  description:
    'Поставка медицинского оборудования для клиник и медицинских центров: подбор, проектирование и сервисное сопровождение.',
  openGraph: {
    title: 'Дженерал Медицина — медицинское оборудование для клиник',
    description:
      'Поставка медицинского оборудования для клиник и медицинских центров: подбор, проектирование и сервисное сопровождение.',
    locale: 'ru_RU',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="bg-background text-foreground sr-only z-50 rounded-md p-3 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Перейти к контенту
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
