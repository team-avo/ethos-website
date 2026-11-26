import { business } from '@/data/business';

export function PhoneCtaBar() {
  return (
    <a
      href={business.phone.tel}
      className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110 md:bottom-6 md:right-6"
      aria-label={`Call ${business.phone.display}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1L6.6 10.8z" />
      </svg>
      <span>{business.phone.display}</span>
    </a>
  );
}
