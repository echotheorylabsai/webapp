/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Theme-aware font family
      fontFamily: {
        sans: ['var(--font-family-primary)'],
      },

      // Enhanced theme-aware colors using CSS custom properties
      colors: {
        // Theme-aware semantic colors
        'background-primary': 'hsl(var(--color-background-primary))',
        'background-secondary': 'hsl(var(--color-background-secondary))',
        'background-tertiary': 'hsl(var(--color-background-tertiary))',
        'background-quaternary': 'hsl(var(--color-background-quaternary))',
        'text-primary': 'hsl(var(--color-text-primary))',
        'text-secondary': 'hsl(var(--color-text-secondary))',
        'text-muted': 'hsl(var(--color-text-muted))',
        'text-subtle': 'hsl(var(--color-text-subtle))',
        'border-primary': 'hsl(var(--color-border-primary))',
        'border-secondary': 'hsl(var(--color-border-secondary))',
        'border-tertiary': 'hsl(var(--color-border-tertiary))',
        'accent-primary': 'hsl(var(--color-accent-primary))',
        'accent-secondary': 'hsl(var(--color-accent-secondary))',
        'accent-tertiary': 'hsl(var(--color-accent-tertiary))',
        danger: 'hsl(var(--color-danger))',
        success: 'hsl(var(--color-success))',
        warning: 'hsl(var(--color-warning))',
      },

      // Enhanced shadow system
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        focus: 'var(--shadow-focus)',
        'focus-ring': 'var(--shadow-focus-ring)',
        hover: 'var(--shadow-hover)',
        active: 'var(--shadow-active)',
      },

      // Enhanced border radius system
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
      },

      // Enhanced spacing system
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
      },

      // Enhanced animation system
      animation: {
        'fade-in': 'fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-down': 'fade-in-down 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-left': 'fade-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in-right': 'fade-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'particles-move': 'particles-move 20s linear infinite',
        'border-race': 'border-race 3s linear infinite',
      },

      // Enhanced transition system
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // Enhanced backdrop blur
      backdropBlur: {
        modern: '12px',
      },

      // Keep existing teal for branding
      teal: {
        50: '#f0fdfa',
        100: '#ccfbf1',
        200: '#99f6e4',
        300: '#5eead4',
        400: '#2dd4bf',
        500: '#14b8a6',
        600: '#0d9488',
        700: '#0f766e',
        800: '#115e59',
        900: '#134e4a',
      },
    },
  },
  plugins: [],
};
