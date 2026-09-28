import type { Metadata } from 'next';
import localFont from 'next/font/local';
import ThemeProvider from '@/components/common/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const inter = localFont({
  src: '../../public/fonts/InterVariable.woff2',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Дженерал Медицина — медицинское оборудование для клиник',
    template: '%s | Дженерал Медицина',
  },
  description:
    'Официальный поставщик медицинского оборудования: УЗИ, рентген, КТ, МРТ, эндоскопия. Прямые поставки, лизинг от 0%, сервис по всей России. 500+ клиник уже работают с нами.',
  keywords: [
    'медицинское оборудование',
    'УЗИ аппараты',
    'рентген',
    'КТ МРТ',
    'эндоскопия',
    'поставщик медтехники',
    'клиника',
    'лизинг оборудования',
  ],
  authors: [{ name: 'Дженерал Медицина' }],
  creator: 'Дженерал Медицина',
  publisher: 'Дженерал Медицина',
  metadataBase: new URL('https://general-med.ru'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://general-med.ru',
    siteName: 'Дженерал Медицина',
    title: 'Дженерал Медицина — медицинское оборудование для клиник',
    description:
      'Прямые поставки медтехники от Siemens, Philips, GE, Mindray. Лизинг от 0%, монтаж, обучение и сервис — включены в стоимость.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Дженерал Медицина — поставщик медицинского оборудования',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Дженерал Медицина — медицинское оборудование для клиник',
    description: 'Прямые поставки медтехники, лизинг от 0%, сервис по всей России.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Перейти к контенту
        </a>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
