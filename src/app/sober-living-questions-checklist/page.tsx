import type { Metadata } from 'next';
import { InteractivePage } from '@/components/sections/InteractivePage';
import { getPage } from '@/lib/pages';

const slug = 'sober-living-questions-checklist';
const data = getPage(slug)!;

export const metadata: Metadata = {
  title: { absolute: data.seoTitle },
  description: data.seoDescription || undefined,
  alternates: { canonical: `/${slug}/` },
};

export default async function Page() {
  return <InteractivePage slug={slug} />;
}
