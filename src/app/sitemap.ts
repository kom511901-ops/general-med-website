import type { MetadataRoute } from 'next';
import { CATEGORIES } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://general-med.ru';
  const now = new Date();

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/cases`, priority: 0.8, changeFrequency: 'weekly' as const },
    { url: `${base}/service`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/knowledge`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/exclusive`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${base}/contacts`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${base}/privacy`, priority: 0.3, changeFrequency: 'yearly' as const },
    { url: `${base}/terms`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const categoryPages = CATEGORIES.map((category) => ({
    url: `${base}/catalog/${category.slug}`,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
    lastModified: now,
  }));

  return [...staticPages.map((page) => ({ ...page, lastModified: now })), ...categoryPages];
}
