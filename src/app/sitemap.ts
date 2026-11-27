import type { MetadataRoute } from 'next';
import { business } from '@/data/business';
import { team } from '@/data/team';
import {
  allPosts,
  categories,
  tags,
  postsByCategory,
  postsByTag,
  pageCount,
} from '@/lib/posts';

const base = process.env.NEXT_PUBLIC_SITE_URL ?? business.url;

// Top-level pages (all with trailing slashes, matching the live site).
const staticPaths = [
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
  '/program-overview-for-professionals/',
  '/independence-readiness-checklist/',
  '/sober-living-questions-checklist/',
  '/privacy-policy/',
  '/terms-and-conditions/',
  '/blog/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of staticPaths) {
    entries.push({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: p === '/' ? 'weekly' : 'monthly',
      priority: p === '/' ? 1 : 0.7,
    });
  }

  const posts = allPosts();

  // Blog pagination (page 1 is /blog/ above)
  for (let n = 2; n <= pageCount(posts.length); n++) {
    entries.push({ url: `${base}/blog/page/${n}/`, lastModified: now, priority: 0.4 });
  }

  // Posts
  for (const post of posts) {
    entries.push({
      url: `${base}/post/${post.slug}/`,
      lastModified: new Date(post.modified),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  // Category archives + pagination
  for (const c of categories()) {
    entries.push({ url: `${base}/post/category/${c.slug}/`, lastModified: now, priority: 0.5 });
    for (let n = 2; n <= pageCount(postsByCategory(c.slug).length); n++) {
      entries.push({ url: `${base}/post/category/${c.slug}/page/${n}/`, lastModified: now, priority: 0.3 });
    }
  }

  // Tag archives + pagination
  for (const t of tags()) {
    entries.push({ url: `${base}/post/tag/${t.slug}/`, lastModified: now, priority: 0.4 });
    for (let n = 2; n <= pageCount(postsByTag(t.slug).length); n++) {
      entries.push({ url: `${base}/post/tag/${t.slug}/page/${n}/`, lastModified: now, priority: 0.3 });
    }
  }

  // Team singles
  for (const m of team) {
    entries.push({ url: `${base}/team/${m.slug}/`, lastModified: now, priority: 0.5 });
  }

  return entries;
}
