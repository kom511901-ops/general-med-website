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

const CASE_PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1600&q=85';

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
    image: CASE_PLACEHOLDER_IMAGE,
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
    image: CASE_PLACEHOLDER_IMAGE,
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
    image: CASE_PLACEHOLDER_IMAGE,
  },
];

export interface ExclusiveBrand {
  slug: string;
  name: string;
  initial: string;
  country: string;
  description: string;
  advantages: string[];
}

export const EXCLUSIVE_SECTION = {
  eyebrow: 'Эксклюзивные партнёры',
  title: 'Оборудование, которого нет у конкурентов',
  subtitle:
    'Официальные представители GEMSS и POSKOM в России — прямые поставки без прослоек и наценок',
};

export const EXCLUSIVE_BRANDS: ExclusiveBrand[] = [
  {
    slug: 'gemss',
    name: 'GEMSS',
    initial: 'G',
    country: 'Южная Корея',
    description:
      'Ведущий производитель рентгеновского оборудования из Южной Кореи. Специализация — стационарные рентгеновские комплексы, флюорографы, палатные аппараты для клиник любого уровня.',
    advantages: [
      'Соотношение цена/качество лучше европейских аналогов на 30-40%',
      'Собственный склад запчастей в России — сервис за 24 часа',
      'Официальная гарантия 3 года и продлеваемое сервисное обслуживание',
    ],
  },
  {
    slug: 'poskom',
    name: 'POSKOM',
    initial: 'P',
    country: 'Южная Корея',
    description:
      'Один из крупнейших мировых производителей мобильных рентгеновских аппаратов и C-дуг. Портативные решения для реанимации, операционных, палатной диагностики.',
    advantages: [
      'Единственный официальный дистрибьютор в РФ без параллельного импорта',
      'Сертификация Росздравнадзора на все модели линейки',
      'Обучение персонала и техническая поддержка на русском языке',
    ],
  },
];

export interface WorkStep {
  number: string;
  icon: 'MessageSquare' | 'Search' | 'FileText' | 'Wrench' | 'ShieldCheck';
  title: string;
  description: string;
}

export const STEPS_SECTION = {
  eyebrow: 'Как мы работаем',
  title: 'От первой заявки до сервисной поддержки',
  subtitle: 'Прозрачный процесс из 5 этапов. Точные сроки, никаких скрытых доработок.',
};

export const WORK_STEPS: WorkStep[] = [
  {
    number: '01',
    icon: 'MessageSquare',
    title: 'Консультация',
    description:
      'Разбираем задачи клиники, специализацию, объём пациентопотока, бюджет. Согласуем требования и SLA.',
  },
  {
    number: '02',
    icon: 'Search',
    title: 'Подбор',
    description:
      'Предлагаем 2-3 варианта оборудования разных производителей под ваш бюджет и профиль. Прогоняем через ROI-калькулятор.',
  },
  {
    number: '03',
    icon: 'FileText',
    title: 'Договор и финансирование',
    description:
      'Заключаем договор поставки. Оформляем лизинг от 0% или рассрочку — работаем с 15+ лизинговыми компаниями.',
  },
  {
    number: '04',
    icon: 'Wrench',
    title: 'Монтаж и обучение',
    description:
      'Доставка, монтаж, пусконаладка, лицензирование. Обучаем врачей и медтехников работе с оборудованием.',
  },
  {
    number: '05',
    icon: 'ShieldCheck',
    title: 'Сервис',
    description:
      'Гарантия 3 года. SLA 24 часа на критичное оборудование. Собственный склад запчастей — быстрая замена узлов.',
  },
];

export const TESTIMONIALS_SECTION = {
  eyebrow: 'Отзывы',
  title: 'Что говорят наши клиенты',
};

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  clinic: string;
  city: string;
  equipment: string;
  photo?: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Команда помогла подобрать систему под задачи нашего отделения и организовала поставку с обучением врачей. Все этапы прошли спокойно и по согласованному плану.',
    author: 'Анна Примерова',
    role: 'Главный врач',
    clinic: 'Медицинский центр',
    city: 'Казань',
    equipment: 'УЗИ Samsung HERA W10',
    isPlaceholder: true,
  },
  {
    quote:
      'Получили несколько вариантов комплектации и понятный расчёт. Специалисты сопровождали нас от подготовки кабинета до первого рабочего дня.',
    author: 'Елена Примерова',
    role: 'Заведующая отделением лучевой диагностики',
    clinic: 'Диагностическая клиника',
    city: 'Москва',
    equipment: 'КТ Canon Aquilion',
    isPlaceholder: true,
  },
  {
    quote:
      'Поставка и монтаж прошли в оговорённые сроки. Персонал прошёл обучение на месте, а сервисная команда остаётся на связи после запуска.',
    author: 'Ирина Примерова',
    role: 'Главный врач',
    clinic: 'Клиника семейной медицины',
    city: 'Екатеринбург',
    equipment: 'Рентген POSKOM AirRay',
    isPlaceholder: true,
  },
  {
    quote:
      'Нам помогли учесть особенности помещения и подобрать оборудование для ежедневного потока пациентов. Проект включал доставку, монтаж и ввод в эксплуатацию.',
    author: 'Сергей Примеров',
    role: 'Медицинский директор',
    clinic: 'Многопрофильный центр',
    city: 'Новосибирск',
    equipment: 'Рентген GEMSS SPINEL',
    isPlaceholder: true,
  },
  {
    quote:
      'Получили решение под наши задачи и поддержку на каждом этапе. Особенно ценим подробную консультацию и помощь с подготовкой к запуску кабинета.',
    author: 'Ольга Примерова',
    role: 'Заведующая диагностическим отделением',
    clinic: 'Городская клиника',
    city: 'Самара',
    equipment: 'УЗИ экспертного класса',
    isPlaceholder: true,
  },
];
