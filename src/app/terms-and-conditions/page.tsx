import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Terms and Conditions';
const description =
  'The terms that govern your use of ethosrecovery.com and our services.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms-and-conditions/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/terms-and-conditions/' },
];

const sections = [
  {
    h2: 'Acceptance of terms',
    body: 'By accessing or using this website you agree to these terms. If you do not agree, please do not use the site. We may update the terms from time to time; continued use after an update constitutes acceptance of the revised terms.',
  },
  {
    h2: 'Use of the site',
    body: 'You agree to use the site for lawful purposes only. You will not attempt to interfere with the site, probe its security, upload malicious code, or scrape it in ways that violate applicable law or impose unreasonable load on our infrastructure.',
  },
  {
    h2: 'Intellectual property',
    body: 'All content on this site — text, imagery, video, trademarks, and software — is owned by Ethos Recovery or licensed to us. You may share links to our pages. Any other use requires written permission.',
  },
  {
    h2: 'Disclaimer of warranties',
    body: 'The site and its content are provided on an "as is" basis without warranties of any kind. Information on this site is educational and does not constitute medical advice or a substitute for a clinical consultation.',
  },
  {
    h2: 'Governing law',
    body: 'These terms are governed by the laws of the State of California, without regard to its conflict-of-laws principles. Any dispute will be resolved in the courts of Los Angeles County, California.',
  },
] as const;

export default async function TermsPage() {
  'use cache';
  const canonicalUrl = `${business.url}/terms-and-conditions/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Legal"
        h1="Terms and Conditions."
        lead="By accessing or using the Ethos Recovery website and services, you agree to be bound by the following terms. Please read them carefully."
      />
      {sections.map((s, i) => (
        <section
          key={s.h2}
          className={`${i % 2 === 0 ? 'bg-page' : 'bg-primary'} border-t border-ink`}
        >
          <Container className="py-20 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                {s.h2}
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {s.body}
              </p>
            </div>
          </Container>
        </section>
      ))}
      <CtaBanner
        eyebrow="Legal questions?"
        heading="Need to reach legal?"
        subheading="Contact our team."
      />
    </>
  );
}
