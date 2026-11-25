/**
 * Typography scale — placeholder.
 *
 * Replace fontFamily values with the fonts pulled from the WordPress audit.
 * Keep the scale consistent across all pages — don't introduce ad-hoc sizes.
 */

export const fontFamily = {
  // TO BE REPLACED after WordPress audit
  sans: 'var(--font-sans)',
  display: 'var(--font-display)',
  mono: 'var(--font-mono)',
} as const;

export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }], // 12 / 16
  sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14 / 20
  base: ['1rem', { lineHeight: '1.5rem' }], // 16 / 24
  lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18 / 28
  xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20 / 28
  '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24 / 32
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30 / 36
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36 / 40
  '5xl': ['3rem', { lineHeight: '1' }], // 48
  '6xl': ['3.75rem', { lineHeight: '1' }], // 60
  '7xl': ['4.5rem', { lineHeight: '1' }], // 72
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
} as const;

/**
 * Semantic text roles — reference these in components, not raw sizes.
 * Keeps typography coherent and makes a global restyle one-file-change.
 */
export const textRoles = {
  hero: 'text-5xl md:text-7xl font-bold tracking-tight',
  h1: 'text-4xl md:text-5xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-semibold tracking-tight',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
  lead: 'text-lg md:text-xl text-ink-600',
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs text-ink-500',
} as const;

export type TextRole = keyof typeof textRoles;
