import Image from 'next/image';
import Link from 'next/link';
import { business } from '@/data/business';
import { footerColumns } from '@/data/nav';
import { Container } from '@/components/ui/Container';

export async function SiteFooter() {
  'use cache';
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink bg-primary">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo + mission column */}
        <div className="space-y-4">
          <Link href="/" aria-label="Ethos Recovery home" className="inline-flex">
            <Image
              src="/images/ethos-footer-logo.png"
              alt={business.logo.alt}
              width={180}
              height={48}
              className="w-[180px] max-w-full"
            />
          </Link>
          <p className="text-sm text-muted">
            Ethos Structured Sober Living is an all male community in recovery
            located in the heart of West Los Angeles. Our primary purpose is to
            foster long-term sobriety through the cultivation of accountability,
            camaraderie, &amp; character development.
          </p>
          <Image
            src="/images/culver-city-chamber.png"
            alt="Culver City Chamber of Commerce member"
            width={120}
            height={120}
            className="w-[120px] max-w-full"
          />
        </div>

        {/* Columns */}
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-highlight">
              {col.heading}
            </h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition hover:text-highlight"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      {/* Get in touch band */}
      <div className="border-t border-ink/60">
        <Container className="flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-highlight">
              Get in touch
            </h3>
            <address className="not-italic text-sm text-muted">
              <a href={business.address.mapHref} className="hover:text-highlight">
                {business.address.street}, {business.address.locality}, {business.address.region}{' '}
                {business.address.postalCode}
              </a>
              <br />
              <a href={business.phone.tel} className="hover:text-highlight">
                {business.phone.display}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Get In Touch
            </Link>
          </div>
        </Container>
      </div>

      {/* Legal row */}
      <div className="border-t border-ink/60">
        <Container className="flex flex-col gap-3 py-5 text-xs text-subtle md:flex-row md:items-center md:justify-between">
          <p>© {year} {business.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy/" className="hover:text-highlight">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions/" className="hover:text-highlight">
              Terms and Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
