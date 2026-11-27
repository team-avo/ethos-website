import { business } from '@/data/business';

/**
 * Live site: a full-width fixed call bar pinned to the bottom on mobile only
 * (below the 1024px desktop breakpoint), in the amber `bg-call` colour.
 * Hidden from `lg` up, where the header phone link takes over.
 */
export function PhoneCtaBar() {
  return (
    <a
      href={business.phone.tel}
      aria-label={`Call ${business.phone.display}`}
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-call py-3 text-sm font-bold text-black shadow-[0_-2px_20px_rgba(0,0,0,0.25)] lg:hidden"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1L6.6 10.8z" />
      </svg>
      <span>Call {business.phone.display}</span>
    </a>
  );
}
