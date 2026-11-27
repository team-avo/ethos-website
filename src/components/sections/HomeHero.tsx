import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { business } from '@/data/business';
import { callouts } from '@/data/programs';

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {/* Hero background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={business.heroImage.src}
          alt={business.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90"
        aria-hidden="true"
      />

      <Container className="flex min-h-[70svh] flex-col justify-center py-20 lg:min-h-[860px]">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
            Community is our method
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-xl">
            Building Character, Sustaining Recovery &amp; Resilience: Your
            Community Awaits.
          </p>
          <div className="mt-8">
            <Link
              href="/the-ethos-difference/"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Three callouts inside the hero */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {callouts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-primary/40 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HeroVideoSection() {
  return (
    <section className="bg-page border-y border-ink">
      <Container className="py-16 md:py-20">
        <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-ink bg-primary">
          <iframe
            src={`https://player.vimeo.com/video/${business.vimeoHeroId}?background=1&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
            title="Ethos Recovery community"
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute inset-0 h-full w-full"
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}
