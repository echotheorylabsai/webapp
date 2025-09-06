export const themes = {
  light: {
    '--color-background-primary': '0 0% 100%',
    '--color-background-secondary': '0 0% 98%',
    '--color-background-tertiary': '0 0% 96%',
    '--color-text-primary': '0 0% 9%',
    '--color-text-secondary': '0 0% 45%',
    '--color-text-muted': '0 0% 65%',
    '--color-border-primary': '0 0% 90%',
    '--color-border-secondary': '0 0% 85%',
    '--color-accent-primary': '217 91% 60%',
    '--color-accent-secondary': '262 83% 58%',
    '--font-family-primary':
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  dark: {
    '--color-background-primary': '0 0% 4%',
    '--color-background-secondary': '0 0% 6%',
    '--color-background-tertiary': '0 0% 8%',
    '--color-text-primary': '0 0% 98%',
    '--color-text-secondary': '0 0% 70%',
    '--color-text-muted': '0 0% 50%',
    '--color-border-primary': '0 0% 15%',
    '--color-border-secondary': '0 0% 20%',
    '--color-accent-primary': '217 91% 60%',
    '--color-accent-secondary': '262 83% 58%',
    '--font-family-primary':
      'DM Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
} as const;

export type ThemeName = keyof typeof themes;
