import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { RiseUpModel } from '@/components/sections/RiseUpModel';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Ethos Flagship Program';
const description =
  'At Ethos Recovery, we believe treating substance abuse requires a comprehensive approach that addresses the underlying issues contributing to addiction — trauma, unresolved emotional pain, and a lack of purpose. The Flagship Program is our most structured community.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ethos-flagship-program/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Ethos Flagship Program', href: '/ethos-flagship-program/' },
];

export default async function FlagshipPage() {
  'use cache';
  const canonicalUrl = `${business.url}/ethos-flagship-program/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList', 'Service', 'Place']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        service={{
          name: 'Ethos Flagship Program',
          description,
          serviceType: 'Sober Living',
          areaServed: 'Los Angeles',
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Our flagship community"
        h1="The Ethos Flagship Program."
        lead="At Ethos Recovery, we believe that treating substance abuse requires a comprehensive approach that addresses the underlying issues contributing to addiction. Addiction often stems from trauma, unresolved emotional pain, and a lack of purpose or direction — our flagship community is built around all three."
      />
      <RiseUpModel />
      <CtaBanner
        eyebrow="Visit the community"
        heading="Embrace change and rise up with Ethos."
        subheading="Contact us today to learn more about our Flagship Program and schedule a tour."
      />
    </>
  );
}
