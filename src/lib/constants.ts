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
  subtitle: 'Реальные истории от главврачей и собственников клиник, с которыми мы работаем',
};

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    initials: string;
    role: string;
    clinic: string;
    city: string;
  };
  photo?: string;
  isPlaceholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Поставили УЗИ Samsung экспертного класса за 2 недели, обучили персонал, работает без нареканий уже 3 года. Гарантия отработана как обещали.',
    author: {
      name: 'Ирина Соколова',
      initials: 'ИС',
      role: 'Главврач',
      clinic: 'сеть "МедСервис"',
      city: 'Москва',
    },
    isPlaceholder: true,
  },
  {
    id: 't2',
    quote:
      'Комплексная поставка МРТ с подготовкой помещения. Все сроки выдержаны, никаких сюрпризов по бюджету. Первый пациент через 51 день от подписания договора.',
    author: {
      name: 'Дмитрий Волков',
      initials: 'ДВ',
      role: 'Директор',
      clinic: 'диагностический центр "Ариадна"',
      city: 'Екатеринбург',
    },
    isPlaceholder: true,
  },
  {
    id: 't3',
    quote:
      'Гибкие условия лизинга помогли запустить клинику без большого стартового капитала. Особенно ценим сервис — инженер приезжает в тот же день.',
    author: {
      name: 'Анна Петрова',
      initials: 'АП',
      role: 'Собственник',
      clinic: 'ЛОР-центр "Слух+"',
      city: 'Краснодар',
    },
    isPlaceholder: true,
  },
  {
    id: 't4',
    quote:
      'Оснастили нам эндоскопический кабинет под ключ — стойка Olympus, обучение врачей, интеграция с МИС. Не пришлось согласовывать с 5 разными подрядчиками.',
    author: {
      name: 'Максим Гончаров',
      initials: 'МГ',
      role: 'Медицинский директор',
      clinic: 'клиника "ГастроМед"',
      city: 'Санкт-Петербург',
    },
    isPlaceholder: true,
  },
  {
    id: 't5',
    quote:
      'Работаем 4 года. За это время оснастили 3 филиала. Каждый раз — предметное предложение с ROI-расчётами, а не просто прайс-лист. Это выделяет.',
    author: {
      name: 'Ольга Мельникова',
      initials: 'ОМ',
      role: 'Финансовый директор',
      clinic: 'сеть "Здоровая семья"',
      city: 'Новосибирск',
    },
    isPlaceholder: true,
  },
];

export const FAQ_SECTION = {
  eyebrow: 'Частые вопросы',
  title: 'На что чаще всего спрашивают клиники',
  subtitle:
    'Собрали ответы на вопросы от собственников и главврачей. Не нашли своего — напишите нам.',
  ctaText: 'Не нашли ответ?',
  ctaButton: 'Написать нам',
};

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Какие сроки поставки оборудования?',
    answer:
      'Наличные позиции — 3-7 дней. Заказные — от 21 до 90 дней в зависимости от производителя и категории. Для критичного оборудования (реанимация, экстренная диагностика) обеспечиваем приоритетную отгрузку. Точный срок фиксируем в договоре.',
  },
  {
    id: 'q2',
    question: 'Какая гарантия на оборудование?',
    answer:
      'Стандартная гарантия производителя — от 1 до 3 лет в зависимости от модели. Наша расширенная гарантия — 3 года на все ключевые позиции. Дополнительно предлагаем сервисные контракты на весь жизненный цикл оборудования.',
  },
  {
    id: 'q3',
    question: 'Можно ли купить в лизинг?',
    answer:
      'Да. Работаем с 15+ ведущими лизинговыми компаниями РФ: Сбербанк Лизинг, ВТБ Лизинг, Газпромбанк Лизинг, Балтийский Лизинг, Альфа-Лизинг и другими. Первый взнос от 0%, срок до 60 месяцев. Оформляем всё под ключ — вам не нужно ходить в банк.',
  },
  {
    id: 'q4',
    question: 'Как проходит обучение персонала?',
    answer:
      'Обучение входит в стоимость поставки. Формат зависит от оборудования: для УЗИ и эндоскопии — 2-3 дня на месте с сертифицированным инженером-инструктором. Для КТ/МРТ — до 2 недель. Все сотрудники получают сертификаты производителя.',
  },
  {
    id: 'q5',
    question: 'В каких городах вы работаете?',
    answer:
      'Поставки и монтаж — по всей России, от Калининграда до Владивостока. Сервисные инженеры базируются в 50+ городах. Для регионов, где нет собственного инженера, обеспечиваем выезд в течение 24 часов на критичное оборудование.',
  },
  {
    id: 'q6',
    question: 'Что с сервисом и запчастями?',
    answer:
      'Собственный склад запчастей в Москве и Санкт-Петербурге по ключевым моделям Siemens, Philips, GE, Mindray. Средний срок замены модуля — 24-72 часа. Все инженеры сертифицированы производителями.',
  },
  {
    id: 'q7',
    question: 'Можно ли посмотреть оборудование вживую?',
    answer:
      'Да. Организуем выезд в клинику-референс, где стоит выбранная модель, или в наш демонстрационный центр в Москве. Также по многим позициям есть возможность демо-установки на 5-14 дней перед покупкой.',
  },
  {
    id: 'q8',
    question: 'Какие условия оплаты?',
    answer:
      'Стандартно — предоплата 30-50%, остаток после монтажа. Для бюджетных учреждений и крупных сетей — 100% постоплата по протоколу ввода в эксплуатацию. Работаем с 44-ФЗ и 223-ФЗ. Все документы в 1С-Документообороте или ЭДО.',
  },
];

export const FINAL_CTA_SECTION = {
  eyebrow: 'Готовы начать?',
  title: 'Обсудим проект вашей клиники',
  subtitle:
    'Оставьте заявку — перезвоним в течение 30 минут. Проведём консультацию, подберём оборудование, подготовим коммерческое предложение под ваши задачи.',
  formTitle: 'Оставить заявку',
};

export const FINAL_CTA_BENEFITS = [
  'Бесплатная консультация',
  'Персональный менеджер на все этапы',
  'Без обязательств и предоплат',
];
