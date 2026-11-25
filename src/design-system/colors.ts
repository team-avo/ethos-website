/**
 * Ethos brand palette — extracted from the live WordPress site (2026-11-26 audit).
 *
 * These are the source-of-truth hex values. The Tailwind utility classes
 * (`bg-primary`, `text-highlight`, etc.) are generated from `globals.css`
 * `@theme` — keep the two in sync.
 */

export const colors = {
  // Base palette
  white: '#fefefe',
  black: '#2e2e2e',
  midnight: '#10182f',
  navy: '#0d112b',
  ink: '#0e1638',
  cobalt: '#0c51b7',
  aqua: '#34fafd',
  gold: '#fec84b',
  ash: '#a6a6a6',
  stone: '#73787f',

  // Status
  amberLight: '#fbbf24',
  emeraldLight: '#4ade80',
  crimsonLight: '#f87171',
} as const;

/**
 * Semantic aliases — reference these in code instead of raw hex.
 * Mirrors the `--color-*` semantic tokens exposed as Tailwind utilities.
 */
export const semantic = {
  page: colors.midnight,
  primary: colors.navy,
  card: colors.ink,
  cta: colors.cobalt,
  banner: colors.cobalt,
  highlight: colors.aqua,
  star: colors.gold,
  muted: colors.ash,
  subtle: colors.stone,
  success: colors.emeraldLight,
  danger: colors.crimsonLight,
  warning: colors.amberLight,
} as const;

export type ColorToken = keyof typeof colors;
export type SemanticToken = keyof typeof semantic;
