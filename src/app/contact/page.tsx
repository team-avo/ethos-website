import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Contact';
const description =
  "Get in touch with Ethos Recovery. Call, email, or send a message — we'll walk you through our three programs and help find the right fit.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/contact/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/contact/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Talk with us"
        h1="Get in touch."
        lead="Send us a message, give us a call, or come visit the community in Culver City. We'll walk you through our three programs and help you decide on the right next step."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left: form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                Send a message
              </h2>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/9vtER8qy62NY25LptzzK"
                title="Contact Ethos Recovery"
                className="h-[700px] w-full rounded-2xl border border-ink bg-card"
                loading="lazy"
              />
            </div>

            {/* Right: contact details + map */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">
                  Or reach us directly
                </h2>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-ink bg-card p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
                      Call
                    </p>
                    <a
                      href={business.phone.tel}
                      className="text-2xl font-bold text-white hover:text-highlight"
                    >
                      {business.phone.display}
                    </a>
                  </div>

                  <div className="rounded-2xl border border-ink bg-card p-6">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
                      Visit
                    </p>
                    <address className="not-italic text-base text-white">
                      <a
                        href={business.address.mapHref}
                        className="hover:text-highlight"
                        target="_blank"
                        rel="noopener"
                      >
                        {business.address.street}
                        <br />
                        {business.address.locality}, {business.address.region}{' '}
                        {business.address.postalCode}
                      </a>
                    </address>
                  </div>
                </div>
              </div>

              <a
                href={business.address.mapHref}
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-between rounded-2xl border border-ink bg-card p-6 transition hover:border-highlight"
              >
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
                    Directions
                  </p>
                  <p className="text-base font-semibold text-white">
                    Open in Google Maps
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Culver City, West Los Angeles
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta text-white transition group-hover:brightness-110"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 7.4L12 18l5-6H5z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
