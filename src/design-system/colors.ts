/**
 * Color palette — placeholder tokens.
 *
 * These are neutral starter values. After the WordPress audit (Day 1),
 * replace primary/accent with Ethos brand colors pulled from the live site.
 *
 * Usage:
 *   import { colors } from '@/design-system/colors';
 *   <div style={{ background: colors.primary[500] }} />
 *
 * Or reference via Tailwind config (see tailwind.config.ts) using classes
 * like `bg-primary-500 text-ink-900`.
 */

export const colors = {
  // Brand — TO BE REPLACED with Ethos brand after WordPress audit
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Neutral text + surface
  ink: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },

  // Semantic
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',

  // Surfaces
  background: '#ffffff',
  foreground: '#09090b',
  muted: '#f4f4f5',
  border: '#e4e4e7',
} as const;

export type ColorScale = keyof typeof colors;
