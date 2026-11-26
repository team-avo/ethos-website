import type { MetadataRoute } from 'next';
import { business } from '@/data/business';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? business.url;
  // Preview deployment — tell every crawler to stay out. Flip to `allow: '/'`
  // and `disallow: ['/api/']` once we go live.
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
