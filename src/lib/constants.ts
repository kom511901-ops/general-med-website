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
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
    size: 'large',
  },
  {
    slug: 'rentgen',
    name: 'Рентген и маммография',
    description: 'Цифровые и аналоговые решения для клиник любого профиля.',
    icon: 'Scan',
    brands: ['Siemens', 'Philips', 'GEMSS', 'POSKOM'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
    size: 'default',
  },
  {
    slug: 'kt-mrt',
    name: 'КТ и МРТ',
    description: 'Высокопольные томографы 1.5 Тл и 3 Тл, 16–128 срезовые КТ.',
    icon: 'Layers',
    brands: ['Siemens', 'Philips', 'Canon', 'GE'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
    size: 'default',
  },
  {
    slug: 'endoskopy',
    name: 'Эндоскопия',
    description: 'Видеосистемы FullHD и 4K, гибкая и жёсткая оптика, стойки в сборе.',
    icon: 'Search',
    brands: ['Olympus', 'Pentax', 'Fujifilm'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
    size: 'default',
  },
  {
    slug: 'lor',
    name: 'ЛОР-оборудование',
    description: 'Комбайны, операционные микроскопы, эндоскопы и аудиометры.',
    icon: 'Ear',
    brands: ['ATMOS', 'Karl Storz', 'Zeiss'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
    size: 'default',
  },
  {
    slug: 'anesteziya',
    name: 'Анестезия и реанимация',
    description:
      'Наркозно-дыхательные аппараты, ИВЛ, мониторы, дефибрилляторы, инфузионная техника.',
    icon: 'HeartPulse',
    brands: ['Dräger', 'Mindray', 'Philips', 'GE'],
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
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

export interface Case {
  slug: string;
  clinicName: string;
  city: string;
  equipmentType: string;
  equipmentIcon: 'Activity' | 'Layers' | 'Ear';
  keyMetric: string;
  metricLabel: string;
  description: string;
  image?: string;
}

export const CASES: Case[] = [
  {
    slug: 'medexpert-network',
    clinicName: 'Сеть «МедЭксперт»',
    city: '8 городов России',
    equipmentType: 'УЗИ премиум-класса',
    equipmentIcon: 'Activity',
    keyMetric: '+40%',
    metricLabel: 'к пропускной способности',
    description:
      'Оснастили 8 диагностических центров экспертными УЗИ-аппаратами Samsung HERA W10. Обучили 24 врача, запустили удалённое обслуживание.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
  },
  {
    slug: 'kazan-ct-center',
    clinicName: 'Диагностический центр «Казань»',
    city: 'Казань',
    equipmentType: 'КТ 80 срезов',
    equipmentIcon: 'Layers',
    keyMetric: '45 дней',
    metricLabel: 'от договора до первого пациента',
    description:
      'Запустили КТ-кабинет с 80-срезовым Canon Aquilion Lightning под ключ: подготовка помещения, монтаж, помощь с лицензированием, обучение.',
  },
  {
    slug: 'novosibirsk-lor',
    clinicName: 'ЛОР-центр «Новосибирск»',
    city: 'Новосибирск',
    equipmentType: 'Полное оснащение ЛОР-центра',
    equipmentIcon: 'Ear',
    keyMetric: '3 месяца',
    metricLabel: 'полный цикл от подбора до старта',
    description:
      'Оснастили специализированный ЛОР-центр: комбайны ATMOS, микроскопы Zeiss, эндоскопические стойки Karl Storz, аудиометры Interacoustics.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85',
  },
];

export interface ExclusiveBrand {
  name: string;
  country: string;
  positioning: string;
  icon: 'Scan' | 'ScanLine';
  logo?: string;
  image?: string;
  models: { name: string; description: string }[];
}

export const EXCLUSIVE_SECTION = {
  eyebrow: 'Эксклюзивные поставки',
  title: 'Прямые контракты с корейскими производителями',
  subtitle: 'Без посредников — поэтому цена ниже, а сроки поставки и сервис под нашим контролем',
  benefits: ['Цена производителя', 'Склад и поставка', 'Гарантийный сервис'],
};

export const EXCLUSIVE_BRANDS: ExclusiveBrand[] = [
  {
    name: 'GEMSS',
    country: 'Южная Корея',
    positioning: 'Хирургические С-дуги и цифровая рентгенография',
    icon: 'Scan',
    models: [
      { name: 'SPINEL 12HD', description: 'Хирургическая С-дуга для интервенционных процедур' },
      { name: 'SPINEL 3G', description: 'Мобильная С-дуга для операционной и травматологии' },
      { name: 'TITAN 11', description: 'Стационарная DR-система' },
    ],
  },
  {
    name: 'POSKOM',
    country: 'Южная Корея',
    positioning: 'Портативный рентген на аккумуляторе',
    icon: 'ScanLine',
    models: [
      { name: 'AirRay', description: 'Портативный рентген с аккумулятором, до 90 кВ, ~5,4 кг' },
      { name: 'AirRay-mini', description: 'Ручной аппарат весом 2,9 кг' },
      { name: 'PXM series', description: 'Мобильные рентгеновские генераторы' },
    ],
  },
];
