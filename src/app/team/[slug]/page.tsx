import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';
import { team } from '@/data/team';

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

function getMember(slug: string) {
  return team.find((m) => m.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<'/team/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) return {};
  const title = `${m.name}${m.role ? ` – ${m.role}` : ''}`;
  return {
    title,
    description: m.excerpt,
    alternates: { canonical: `/team/${m.slug}/` },
  };
}

export default async function Page({ params }: PageProps<'/team/[slug]'>) {
  const { slug } = await params;
  const m = getMember(slug);
  if (!m) notFound();

  const canonicalUrl = `${business.url}/team/${m.slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Meet Our Team', href: '/meet-our-team/' },
    { name: m.name, href: `/team/${m.slug}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList', 'Person']}
        page={{ url: canonicalUrl, title: m.name, description: m.excerpt }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        person={{
          name: m.name,
          jobTitle: [m.role, m.credentials].filter(Boolean).join(', '),
          description: m.excerpt,
          image: `${business.url}${m.photo}`,
        }}
      />
      <Breadcrumbs items={crumbs} />

      <section className="bg-page border-t border-ink">
        <Container className="py-16 md:py-20">
          <div className="grid items-start gap-10 md:grid-cols-[320px_1fr]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-ink bg-primary">
              <Image
                src={m.photo}
                alt={`${m.name}${m.role ? ` — ${m.role}` : ''}`}
                fill
                sizes="(min-width: 768px) 320px, 90vw"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              {m.role && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                  {m.role}
                </p>
              )}
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                {m.name}
              </h1>
              {m.credentials && (
                <p className="mt-2 text-base text-muted">{m.credentials}</p>
              )}
              <div
                className="prose-ethos mt-8"
                dangerouslySetInnerHTML={{ __html: m.bioHtml }}
              />
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Want to talk?"
        heading="Get in touch with our team."
        subheading="We'll walk you through our programs and help find the right fit for you or your loved one."
      />
    </>
  );
}
