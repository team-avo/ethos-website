import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function LeadMagnet() {
  return (
    <section className="bg-primary">
      <Container className="grid gap-12 py-20 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Free resource for families
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Get the guide.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            <span className="italic">After Treatment</span> — a free family
            planning guide for the first 90 days, covering what to plan before
            discharge and what to expect in the months that follow.
          </p>
          <div>
            <Link
              href="/after-treatment-family-guide/"
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Read the guide
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              >
                <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 7.4L12 18l5-6H5z" />
              </svg>
            </Link>
          </div>
          <p className="max-w-xl text-xs text-subtle">
            This guide is a planning tool for families. It isn&apos;t medical advice.
          </p>
        </div>

        {/* Cover placeholder — stylized card, no image yet */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-ink bg-card p-10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-cta/30 via-transparent to-highlight/20" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight">
                Ethos Recovery
              </p>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white md:text-4xl">
                  After Treatment
                </h3>
                <p className="text-sm text-muted">
                  A family planning guide for the first 90 days.
                </p>
              </div>
              <p className="text-xs text-subtle">Free · 2026 Edition</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
