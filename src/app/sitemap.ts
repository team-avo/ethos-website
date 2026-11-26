import type { MetadataRoute } from 'next';
import { business } from '@/data/business';

const paths = [
  '/',
  '/ethos-flagship-program/',
  '/ethos-recovery-apartments/',
  '/ethos-independent-living/',
  '/the-ethos-difference/',
  '/meet-our-team/',
  '/outcomes/',
  '/contact/',
  '/mental-health-support/',
  '/substance-abuse-support/',
  '/lifestyle-interventions/',
  '/pulse-tms/',
  '/sober-living-guide/',
  '/long-term-recovery-guide/',
  '/interventions/',
  '/a-parents-guide-to-addiction/',
  '/after-treatment-family-guide/',
  '/ebook-about-addiction/',
  '/blog/',
  '/privacy-policy/',
  '/terms-and-conditions/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? business.url;
  const now = new Date();
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: p === '/' ? 'weekly' : 'monthly',
    priority: p === '/' ? 1 : 0.7,
  }));
}
