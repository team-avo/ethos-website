import { business } from '@/data/business';
import { Container } from '@/components/ui/Container';

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
};

export function CtaBanner({ eyebrow, heading, subheading }: Props) {
  return (
    <section className="bg-cta">
      <Container className="flex flex-col items-center gap-6 py-20 text-center md:py-24">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {heading}
        </h2>
        {subheading && (
          <p className="max-w-2xl text-base text-white/90 md:text-lg">
            {subheading}
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href={business.phone.tel}
            className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-page px-6 py-3 text-sm font-semibold text-white transition hover:border-highlight hover:text-highlight"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1L6.6 10.8z" />
            </svg>
            Call {business.phone.display}
          </a>
          <a
            href="/contact/"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-highlight"
          >
            Get In Touch
          </a>
        </div>
      </Container>
    </section>
  );
}
