import type { Metadata } from 'next';
import { HomeHero, HeroVideoSection } from '@/components/sections/HomeHero';
import { ProgramsGrid } from '@/components/sections/ProgramsGrid';
import { LeadMagnet } from '@/components/sections/LeadMagnet';
import { Partners } from '@/components/sections/Partners';
import { Testimonials } from '@/components/sections/Testimonials';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

export const metadata: Metadata = {
  title: `Sober Living for Men in Los Angeles | ${business.name}`,
  description: business.description,
  alternates: { canonical: '/' },
};

export default async function HomePage() {
  'use cache';
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'WebSite']}
        page={{
          url: business.url,
          title: `Sober Living for Men in Los Angeles | ${business.name}`,
          description: business.description,
        }}
      />
      <HomeHero />
      <HeroVideoSection />
      <ProgramsGrid />
      <LeadMagnet />
      <Partners />
      <Testimonials />
      <CtaBanner
        eyebrow="Ready to begin?"
        heading="Ready to join the Ethos community?"
        subheading="Talk with our team. We'll walk you through our three programs and help find the right fit."
      />
    </>
  );
}
