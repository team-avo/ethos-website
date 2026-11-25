/**
 * Typography — extracted from the live Ethos site (2026-11-26 audit).
 * One sans (Inter), one mono (system stack). No display font.
 */

export const fontFamily = {
  sans: 'var(--font-sans)',
  mono: 'var(--font-mono)',
} as const;

export const fontSize = {
  xs: ['0.75rem', { lineHeight: 'calc(1 / 0.75)' }],
  sm: ['0.875rem', { lineHeight: 'calc(1.25 / 0.875)' }],
  base: ['1rem', { lineHeight: '1.5' }],
  lg: ['1.125rem', { lineHeight: 'calc(1.75 / 1.125)' }],
  xl: ['1.25rem', { lineHeight: 'calc(1.75 / 1.25)' }],
  '2xl': ['1.5rem', { lineHeight: 'calc(2 / 1.5)' }],
  '3xl': ['1.875rem', { lineHeight: '1.2' }],
  '4xl': ['2.25rem', { lineHeight: 'calc(2.5 / 2.25)' }],
  '5xl': ['3rem', { lineHeight: '1' }],
  '7xl': ['4.5rem', { lineHeight: '1' }],
} as const;

export const fontWeight = {
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const letterSpacing = {
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
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
  lead: 'text-lg md:text-xl text-muted',
  body: 'text-base',
  small: 'text-sm',
  caption: 'text-xs text-muted',
} as const;

export type TextRole = keyof typeof textRoles;
