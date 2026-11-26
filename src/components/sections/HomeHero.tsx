import Link from 'next/link';
import { business } from '@/data/business';

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-page">
      {/* Vimeo background */}
      <div className="absolute inset-0 -z-20">
        <div className="relative h-full w-full">
          <iframe
            src={`https://player.vimeo.com/video/${business.vimeoHeroId}?background=1&muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0`}
            title="Ethos Recovery community"
            allow="autoplay; fullscreen"
            className="absolute inset-0 h-full w-full scale-150 object-cover"
            loading="eager"
          />
        </div>
      </div>
      {/* Dark wash for legibility */}
      <div className="absolute inset-0 -z-10 bg-primary/70" aria-hidden="true" />

      <div className="mx-auto flex min-h-[80svh] w-full max-w-7xl flex-col items-start justify-center gap-6 px-6 py-24 md:px-8 md:py-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
          Sober living for men · Los Angeles
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          Community is <span className="text-highlight">our method</span>.
        </h1>
        <p className="max-w-2xl text-lg text-white/85 md:text-xl">
          Building character, sustaining recovery and resilience. Your community awaits.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/the-ethos-difference/"
            className="rounded-full border border-highlight bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-highlight hover:text-primary"
          >
            Learn more
          </Link>
          <a
            href={business.phone.tel}
            className="rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Call {business.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
