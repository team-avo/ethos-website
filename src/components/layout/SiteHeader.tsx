'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { business } from '@/data/business';
import { desktopPrimary, mobileFlat, type NavGroup, type NavLink } from '@/data/nav';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return 'items' in item;
}

function DesktopNavItem({ item }: { item: NavLink | NavGroup }) {
  const [open, setOpen] = useState(false);

  if (!isGroup(item)) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-white/80 transition hover:text-highlight"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-highlight"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <svg viewBox="0 0 12 12" aria-hidden="true" className="h-3 w-3 fill-current">
          <path d="M6 8L1 3h10z" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
          <ul className="overflow-hidden rounded-xl border border-ink bg-card py-2 shadow-xl">
            {item.items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-sm text-white/80 transition hover:bg-ink hover:text-highlight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity lg:hidden ${
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        aria-label="Close menu backdrop"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />
      <div
        className={`absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto border-l border-ink bg-page p-6 transition-transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-wider text-highlight">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-ink p-2 text-white hover:border-highlight"
            aria-label="Close menu"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M18.3 5.71L12 12l6.3 6.3-1.4 1.4L10.58 13.4 4.29 19.7 2.88 18.3 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29L17.58 4.3z" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-1">
          {mobileFlat.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/90 hover:bg-card hover:text-highlight"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-3 border-t border-ink pt-6">
          <Button href={business.phone.tel} variant="primary" external>
            Call {business.phone.display}
          </Button>
          <Button href="/contact/" variant="outline">
            Get In Touch
          </Button>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-page/95 backdrop-blur">
      {/* Top ribbon — eBook CTA */}
      <div className="border-b border-ink bg-primary">
        <Container className="flex items-center justify-center py-2 text-xs text-white/80 md:text-sm">
          <Link
            href="/ebook-about-addiction/"
            className="rounded-full bg-cta px-3 py-1 font-semibold text-white transition hover:brightness-110"
          >
            Download our FREE eBook
          </Link>
        </Container>
      </div>

      {/* Main row */}
      <Container className="flex items-center justify-between py-4">
        <Link href="/" aria-label="Ethos Recovery home" className="flex items-center gap-2">
          <Image
            src={business.logo.src}
            alt={business.logo.alt}
            width={business.logo.width}
            height={business.logo.height}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {desktopPrimary.map((item) => (
            <DesktopNavItem key={item.label} item={item} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phone.tel}
            className="text-sm font-semibold text-white/80 hover:text-highlight"
          >
            {business.phone.display}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="rounded-full border border-ink p-2 text-white hover:border-highlight lg:hidden"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg>
        </button>
      </Container>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
