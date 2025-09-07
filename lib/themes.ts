/**
 * A constant array of available theme names.
 * This is the single source of truth for what themes are available.
 */
export const THEME_NAMES = ['dark', 'light'] as const;

/**
 * A TypeScript type derived from the THEME_NAMES array.
 * This ensures type safety wherever a theme name is used.
 * e.g., 'dark' | 'light'
 */
export type ThemeName = (typeof THEME_NAMES)[number];
