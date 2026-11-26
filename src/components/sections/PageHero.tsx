import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

type Props = {
  eyebrow?: string;
  h1: string;
  lead: string;
  backdrop?: 'primary' | 'page';
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  h1,
  lead,
  backdrop = 'primary',
  children,
}: Props) {
  const bg = backdrop === 'primary' ? 'bg-primary' : 'bg-page';
  return (
    <section className={`${bg} border-b border-ink`}>
      <Container className="py-16 md:py-24">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
          {h1}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
          {lead}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
