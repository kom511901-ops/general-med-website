export const COMPANY = {
  name: 'Дженерал Медицина',
  phone: '+7 (920) 977-12-11',
  phoneRaw: '+792097712111',
  email: 'info@general-med.ru',
  telegram: 'https://t.me/kompleksnye_resheniya',
  whatsapp: 'https://wa.me/792097712111',
};

export const METRICS = [
  { value: 500, suffix: '+', label: 'реализованных проектов' },
  { value: 50, suffix: '+', label: 'городов присутствия' },
  { value: 20, suffix: '+', label: 'брендов-партнёров' },
  { value: 30, suffix: ' мин', label: 'среднее время ответа' },
];

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: 'Activity' | 'Scan' | 'Layers' | 'Search' | 'Ear' | 'HeartPulse';
  brands: string[];
  image: string;
  size: 'large' | 'default';
}

export const CATEGORIES: Category[] = [
  {
    slug: 'uzi',
    name: 'УЗИ-аппараты',
    description:
      'Стационарные и портативные системы от среднего до премиум-класса. От базовой диагностики до экспертной кардиологии и акушерства.',
    icon: 'Activity',
    brands: ['Siemens', 'Philips', 'GE', 'Mindray', 'Samsung', 'Canon'],
    image: '/images/hero-image.jpg',
    size: 'large',
  },
  {
    slug: 'rentgen',
    name: 'Рентген и маммография',
    description: 'Цифровые и аналоговые решения для клиник любого профиля.',
    icon: 'Scan',
    brands: ['Siemens', 'Philips', 'GEMSS', 'POSKOM'],
    image: '/images/hero-image.jpg',
    size: 'default',
  },
  {
    slug: 'kt-mrt',
    name: 'КТ и МРТ',
    description: 'Высокопольные томографы 1.5 Тл и 3 Тл, 16–128 срезовые КТ.',
    icon: 'Layers',
    brands: ['Siemens', 'Philips', 'Canon', 'GE'],
    image: '/images/hero-image.jpg',
    size: 'default',
  },
  {
    slug: 'endoskopy',
    name: 'Эндоскопия',
    description: 'Видеосистемы FullHD и 4K, гибкая и жёсткая оптика, стойки в сборе.',
    icon: 'Search',
    brands: ['Olympus', 'Pentax', 'Fujifilm'],
    image: '/images/hero-image.jpg',
    size: 'default',
  },
  {
    slug: 'lor',
    name: 'ЛОР-оборудование',
    description: 'Комбайны, операционные микроскопы, эндоскопы и аудиометры.',
    icon: 'Ear',
    brands: ['ATMOS', 'Karl Storz', 'Zeiss'],
    image: '/images/hero-image.jpg',
    size: 'default',
  },
  {
    slug: 'anesteziya',
    name: 'Анестезия и реанимация',
    description:
      'Наркозно-дыхательные аппараты, ИВЛ, мониторы, дефибрилляторы, инфузионная техника.',
    icon: 'HeartPulse',
    brands: ['Dräger', 'Mindray', 'Philips', 'GE'],
    image: '/images/hero-image.jpg',
    size: 'default',
  },
];

export const BRANDS = [
  'Siemens',
  'Philips',
  'GE HealthCare',
  'Canon',
  'Mindray',
  'Samsung Medison',
  'Olympus',
  'Pentax',
  'Dräger',
  'GEMSS',
  'POSKOM',
  'SonoScape',
];

export const CLIENT_LOGOS: string[] = [
  'МедЭксперт',
  'Здоровье+',
  'КлиникаПро',
  'МедСити',
  'Диагностика',
  'ПрофМед',
  'АльфаМед',
  'МедЦентр',
];
