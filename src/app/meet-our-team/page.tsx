import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Meet Our Team';
const description =
  'The people behind Ethos Recovery — founders, case managers, and recovery mentors who make community the method.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/meet-our-team/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/meet-our-team/' },
];

type Member = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const team: readonly Member[] = [
  {
    name: 'Chris Howard',
    role: 'Founder & Executive Director',
    photo: '/images/team/chris-howard.webp',
    bio: 'Chris is a passionate advocate for long-term recovery and mentorship for individuals and families struggling with addiction and mental health disorders.',
  },
  {
    name: 'Tuck Richardson',
    role: 'Case Manager',
    photo: '/images/team/tuck-richardson.webp',
    bio: "Tuck's journey with Ethos is a powerful example of transformation and service. After years of struggling to change the course of his life on his own, Tuck found success through the Ethos process.",
  },
  {
    name: 'Jenna Foster',
    role: 'Clinical Director',
    photo: '/images/team/jenna-foster.webp',
    bio: 'Jenna brings over a decade of experience in substance abuse, mental health, and addictive disorders — spanning residential treatment, long-term care, admissions, crisis intervention, and business development.',
  },
  {
    name: 'Josh Abdekalimi',
    role: 'Recovery Coach',
    photo: '/images/team/josh-abdekalimi.webp',
    bio: 'Josh is committed to walking alongside individuals as they rebuild their lives in sobriety, with a rare combination of structure and empathy.',
  },
  {
    name: 'Jacob Mosios',
    role: 'House Manager',
    photo: '/images/team/jacob-mosios.webp',
    bio: 'Jacob is an example of what happens when someone is willing to take direction, face themselves honestly, and commit to change. He came to Ethos struggling with anxiety and depression, and now helps others through the same journey.',
  },
  {
    name: 'Sebastian Saad',
    role: 'Recovery Mentor',
    photo: '/images/team/sebastian-saad.webp',
    bio: 'Sebastian works with young men to develop self-empowerment, ownership, and direction. He operates from the belief that lasting change is built from within — not imposed from the outside.',
  },
  {
    name: 'Cormac Thomas',
    role: 'Alumni Mentor',
    photo: '/images/team/cormac-thomas.webp',
    bio: 'Cormac is an alumnus of the program who experienced a powerful transformation during his time at Ethos. His journey through the structure and culture of the community gives him a unique ability to lead from the front.',
  },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/meet-our-team/`;
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
        eyebrow="Our team"
        h1="Meet the people behind Ethos."
        lead="A small team of mentors, case managers, and clinicians who make community the method. Several are themselves alumni of the program — they've walked the road residents are on."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="flex flex-col gap-4 rounded-2xl border border-ink bg-card p-6"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-ink bg-primary">
                  <Image
                    src={m.photo}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold text-white">{m.name}</h2>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
                    {m.role}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted">{m.bio}</p>
              </article>
            ))}
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
