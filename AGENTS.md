# AGENTS.md

Инструкции для OpenAI Codex Cloud при работе с этим репозиторием.

## Проект

B2B-сайт для компании «Комплексные Решения» — поставщика медицинского оборудования (УЗИ, рентген, КТ/МРТ, эндоскопия, ЛОР, анестезия и реанимация) на российском рынке.

Целевая аудитория: собственники частных клиник, главные врачи, закупщики медцентров.

Референсы визуального стиля: Linear, Vercel, Ramp, Siemens Healthineers, Philips Healthcare — чистый B2B-tech с медицинской строгостью. Не аптечная эстетика, не стоковые фото, не радужные градиенты.

## Технологический стек

Строго обязательный. Не заменяй библиотеки без явного разрешения в задаче.

- **Next.js 14+** (App Router)
- **TypeScript 5.4+** (strict mode)
- **React 18**
- **Tailwind CSS 3.4+** + **shadcn/ui** (New York style, Zinc base)
- **Framer Motion** — все анимации
- **lucide-react** — иконки
- **react-hook-form + zod + @hookform/resolvers** — формы
- **next/font** (Inter Variable) — шрифты
- **next/image** — все изображения
- **next-themes** — переключение тёмной темы
- **sonner** — toast-уведомления
- **recharts** — графики (только в ROI-калькуляторе)
- **pnpm** — пакетный менеджер

Запрещено использовать: MUI, Chakra, Ant Design, styled-components, emotion, CSS-in-JS кроме Tailwind, Bootstrap, jQuery, moment.js.

## Дизайн-система

### Цвета

В `tailwind.config.ts` расширение:

```typescript
colors: {
  brand: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#0B5FFF',
    600: '#0947d0',
    700: '#062f9a',
    900: '#031459',
  },
  accent: {
    500: '#00C2C7',
    600: '#009ea3',
  },
}
```

Градиент бренда: `from-brand-500 to-accent-500` (используется в CTA-кнопках и акцентных элементах).

### Типографика

- Шрифт: **Inter Variable** через `next/font/google`
- Заголовки: font-weight 800, letter-spacing -0.03em, line-height 1.05
- H1 hero: `text-[clamp(40px,5vw,72px)]`
- H2 секций: `text-[clamp(32px,4vw,56px)]`
- Основной текст: 16-17px, line-height 1.6, neutral-600
- Табличные цифры для метрик: `font-variant-numeric: tabular-nums`

### Отступы

- Секции: `py-20 md:py-28 lg:py-32`
- Контейнер: `container mx-auto px-6 lg:px-8`
- Максимальная ширина контента: `max-w-7xl`

### Скругления и границы

- Кнопки: `rounded-lg`
- Карточки: `rounded-2xl`
- Крупные блоки/hero-изображения: `rounded-3xl`
- Границы: `border border-neutral-200/60` (в тёмной теме: `border-neutral-800/60`)

### Тёмная тема

Всегда поддерживай через `next-themes`. Используй CSS variables из shadcn (`bg-background`, `text-foreground`, `border-border`) плюс явные `dark:` варианты для брендовых цветов.

## Структура проекта

```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
    api/
      lead/route.ts        # POST /api/lead — приём заявок
  components/
    ui/                    # shadcn компоненты
    layout/
      header.tsx
      footer.tsx
    sections/              # секции главной, по одной на файл
    common/                # переиспользуемые компоненты
  lib/
    utils.ts               # cn() и хелперы
    constants.ts           # категории, бренды, метрики, кейсы
    validators.ts          # zod-схемы
  hooks/
  types/
public/
  images/
  logos/
```

## Правила написания кода

### TypeScript

- `strict: true`, никаких `any`, никаких `@ts-ignore`
- Props компонентов — отдельный `interface` с суффиксом `Props`
- Экспорт по умолчанию для компонентов, именованные экспорты для типов
- Дженерики где уместно, discriminated unions вместо флагов

### React / Next.js

- Серверные компоненты по умолчанию
- `"use client"` только когда нужна интерактивность или хуки браузера
- Никогда не импортируй серверный код в клиентский
- Используй `Suspense` и `loading.tsx` для async-компонентов
- Метаданные — через `generateMetadata()` или экспорт `metadata`

### Стили

- Только Tailwind, никаких inline-стилей и CSS-модулей
- Условные классы — через `cn()` из `@/lib/utils`
- Извлекай повторяющиеся комбинации в `cva()` (class-variance-authority)
- Спейсинг только через Tailwind-шкалу, никаких магических пикселей

### Формы

- react-hook-form + zod для всех форм
- Схемы валидации в `src/lib/validators.ts`
- Валидация в реальном времени (`mode: 'onBlur'`)
- Маска телефона: `+7 (XXX) XXX-XX-XX`, регекс `/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/`
- Обязательный чекбокс согласия на обработку ПДн
- Toast-уведомления через sonner
- Honeypot-поле от ботов
- Отправка через API-route `/api/lead`

### Анимации

- Все анимации через Framer Motion
- Основной паттерн для секций: `whileInView` с `viewport={{ once: true, margin: "-100px" }}`
- Stagger children: `staggerChildren: 0.1`
- Fade + slide-up: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`
- Обязательно уважай `prefers-reduced-motion`: используй хук `useReducedMotion()` из framer-motion
- Никаких autoplay-каруселей без паузы

### Изображения

- Только `next/image`, никогда `<img>`
- Всегда указывай `alt`, для декоративных — `alt=""` и `aria-hidden`
- Placeholder Unsplash-ссылки для разработки: `https://images.unsplash.com/photo-...`
- Для hero-изображения — `priority` и `sizes`
- Для остальных — lazy loading по умолчанию

### Доступность (a11y)

- WCAG 2.1 AA compliance
- Контраст текста не ниже 4.5:1
- Все интерактивные элементы доступны с клавиатуры
- Правильные ARIA-атрибуты на модалках, табах, аккордеонах (обычно shadcn делает это сам, проверяй)
- `focus-visible` кастомный: `focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2`
- Skip-link «Перейти к контенту» в начале body

## Правила коммитов

Формат Conventional Commits:

- `feat(scope): description` — новая функциональность
- `fix(scope): description` — исправление бага
- `refactor(scope): description` — рефакторинг без изменения поведения
- `style(scope): description` — форматирование
- `perf(scope): description` — оптимизация
- `docs(scope): description` — документация
- `chore(scope): description` — служебные изменения

Scope — область изменений: `header`, `hero`, `catalog`, `forms`, `layout`, `config`, `deps` и т.д.

Один коммит — одна логическая задача. Не смешивай несколько фич в одном коммите.

## Правила PR

При создании PR:
- Заголовок PR = описание задачи
- В теле PR: краткое описание что сделано, список изменённых файлов, скриншоты (если UI)
- Один PR — одна задача из плана
- Перед пушем убедись, что: `pnpm build`, `pnpm lint`, `pnpm type-check` — все проходят без ошибок и warnings

## Проверка перед завершением задачи

Всегда выполняй в конце задачи:

```bash
pnpm lint
pnpm type-check
pnpm build
```

Если что-то падает — исправь до создания PR. Не мержь красный код.

## Контент-константы

В `src/lib/constants.ts` держи следующие данные для использования по всему сайту:

```typescript
export const COMPANY = {
  name: 'Комплексные Решения',
  phone: '+7 (800) 333-32-83',
  phoneRaw: '+78003333283',
  email: 'info@general-med.ru',
  telegram: 'https://t.me/kompleksnye_resheniya',
  whatsapp: 'https://wa.me/78003333283',
};

export const METRICS = [
  { value: 500, suffix: '+', label: 'реализованных проектов' },
  { value: 50, suffix: '+', label: 'городов присутствия' },
  { value: 20, suffix: '+', label: 'брендов-партнёров' },
  { value: 30, suffix: ' мин', label: 'среднее время ответа' },
];

export const CATEGORIES = [
  { slug: 'uzi', name: 'УЗИ-аппараты', description: 'Стационарные и портативные системы' },
  { slug: 'rentgen', name: 'Рентген и маммография', description: 'Цифровые и аналоговые решения' },
  { slug: 'kt-mrt', name: 'КТ и МРТ', description: 'Высокопольные томографы' },
  { slug: 'endoskopy', name: 'Эндоскопия', description: 'Видеосистемы и гибкая оптика' },
  { slug: 'lor', name: 'ЛОР-оборудование', description: 'Комбайны и микроскопы' },
  { slug: 'anesteziya', name: 'Анестезия и реанимация', description: 'НДА, ИВЛ, мониторы, дефибрилляторы' },
];

export const BRANDS = [
  'Siemens', 'Philips', 'GE HealthCare', 'Canon', 'Mindray',
  'Samsung Medison', 'Olympus', 'Pentax', 'Dräger', 'GEMSS',
  'POSKOM', 'SonoScape',
];
```

## Что запрещено

- Изменять `AGENTS.md` без явного указания в задаче
- Устанавливать пакеты вне утверждённого стека
- Использовать deprecated API (например, `next/image` legacy)
- Оставлять `console.log`, `TODO`-комментарии в production-коде
- Хардкодить контент, который должен быть в `constants.ts`
- Использовать русские названия в путях и файлах
- Импортировать что-либо с CDN
- Инлайнить SVG длиннее 20 строк (выноси в отдельные файлы)
