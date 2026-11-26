import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Privacy Policy';
const description =
  'How Ethos Recovery collects, uses and protects your personal information.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy-policy/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/privacy-policy/' },
];

const sections = [
  {
    h2: 'Information we collect',
    body: 'We collect information you provide directly (name, email, phone, and any messages you send through contact and inquiry forms) and basic analytics about how you use the site (pages viewed, approximate location, device type). We do not collect clinical or medical information through this website.',
  },
  {
    h2: 'How we use information',
    body: 'We use the information you provide to respond to your inquiries, schedule tours or admissions calls, send resources you request, and improve the site. We do not sell your information. We do not use it for advertising profiles outside our own operations.',
  },
  {
    h2: 'How we share information',
    body: 'We share information only with vendors who help us operate — hosting, email delivery, analytics, and our phone-call attribution partner — all under written contracts that restrict how they may use it. We may disclose information when required by law.',
  },
  {
    h2: 'Your choices',
    body: 'You can ask us at any time to access, update, or delete the personal information we hold about you by contacting us at the number or address below. You can opt out of marketing emails using the unsubscribe link in any message we send.',
  },
  {
    h2: 'Contact us',
    body: `Questions about this policy can be directed to ${business.name}, ${business.address.street}, ${business.address.locality}, ${business.address.region} ${business.address.postalCode}, or by phone at ${business.phone.display}.`,
  },
] as const;

export default async function PrivacyPolicyPage() {
  'use cache';
  const canonicalUrl = `${business.url}/privacy-policy/`;
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
        h1="Privacy Policy."
        lead="This Privacy Policy explains how Ethos Recovery (we, our, us) collects, uses, and safeguards your information when you interact with our website, programs, and services. For questions, contact us at the address and phone below."
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
        eyebrow="Questions?"
        heading="Questions about your data?"
        subheading="Our team is here to help."
      />
    </>
  );
}
