import { Container } from '@/components/ui/Container';

export type ReportItem = {
  year: number;
  title: string;
  href: string;
  sizeLabel?: string;
  byline?: string;
};

type Props = {
  eyebrow?: string;
  heading: string;
  body: string;
  reports: readonly ReportItem[];
};

export function ReportDownloads({ eyebrow, heading, body, reports }: Props) {
  return (
    <section className="bg-page">
      <Container className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-ink bg-card p-10 md:p-14">
          <div className="max-w-3xl space-y-4">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              {heading}
            </h2>
            <p className="text-base leading-relaxed text-muted">{body}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {reports.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener"
                className="group flex items-start justify-between gap-6 rounded-2xl border border-ink bg-primary p-6 transition hover:border-highlight"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                    {r.year}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {r.title}
                  </h3>
                  {r.byline && (
                    <p className="text-sm text-muted">by {r.byline}</p>
                  )}
                  {r.sizeLabel && (
                    <p className="text-xs text-subtle">{r.sizeLabel}</p>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cta text-white transition group-hover:brightness-110"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                    <path d="M12 3v11.17l3.59-3.58L17 12l-5 5-5-5 1.41-1.41L11 14.17V3h1zm-7 16h14v2H5v-2z" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
