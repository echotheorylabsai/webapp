export const designTokens = {
  colors: {
    // Semantic color tokens
    background: {
      primary: 'hsl(var(--color-background-primary))',
      secondary: 'hsl(var(--color-background-secondary))',
      tertiary: 'hsl(var(--color-background-tertiary))',
    },
    text: {
      primary: 'hsl(var(--color-text-primary))',
      secondary: 'hsl(var(--color-text-secondary))',
      muted: 'hsl(var(--color-text-muted))',
    },
    border: {
      primary: 'hsl(var(--color-border-primary))',
      secondary: 'hsl(var(--color-border-secondary))',
    },
    accent: {
      primary: 'hsl(var(--color-accent-primary))',
      secondary: 'hsl(var(--color-accent-secondary))',
    },
  },
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
  },
  typography: {
    fontFamily: {
      primary: 'var(--font-family-primary)',
    },
  },
} as const;
