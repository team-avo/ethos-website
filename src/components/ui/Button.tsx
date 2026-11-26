import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'ghost' | 'onCta';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-page';

const variants: Record<Variant, string> = {
  primary: 'bg-cta text-white hover:brightness-110',
  outline:
    'border border-highlight bg-transparent text-white hover:bg-highlight hover:text-primary',
  ghost: 'bg-card text-white hover:bg-ink hover:text-highlight',
  onCta: 'bg-white text-primary hover:bg-highlight',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  external,
  ariaLabel,
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
