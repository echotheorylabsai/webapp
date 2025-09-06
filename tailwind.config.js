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
      // Theme-aware colors using CSS custom properties
      colors: {
        // Theme-aware semantic colors
        'background-primary': 'hsl(var(--color-background-primary))',
        'background-secondary': 'hsl(var(--color-background-secondary))',
        'background-tertiary': 'hsl(var(--color-background-tertiary))',
        'text-primary': 'hsl(var(--color-text-primary))',
        'text-secondary': 'hsl(var(--color-text-secondary))',
        'text-muted': 'hsl(var(--color-text-muted))',
        'border-primary': 'hsl(var(--color-border-primary))',
        'border-secondary': 'hsl(var(--color-border-secondary))',
        'accent-primary': 'hsl(var(--color-accent-primary))',
        'accent-secondary': 'hsl(var(--color-accent-secondary))',

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

      // Framer Typography Scale
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
        // Custom hero sizes
        hero: ['clamp(2.5rem, 8vw, 6rem)', { lineHeight: '1.1' }],
        'hero-sm': ['clamp(1.875rem, 6vw, 4rem)', { lineHeight: '1.2' }],
      },

      // Font weights
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },

      // Spacing system based on Framer
      spacing: {
        18: '4.5rem',
        88: '22rem',
        128: '32rem',
        144: '36rem',
      },

      // Border radius
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },

      // Shadows inspired by Framer
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        glow: '0 0 20px rgb(14 165 233 / 0.3)',
        'glow-lg': '0 0 40px rgb(14 165 233 / 0.4)',
        'teal-glow': '0 0 20px rgb(0 191 165 / 0.4)',
        'teal-glow-lg': '0 0 40px rgb(0 191 165 / 0.6)',
      },

      // Background gradients
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom, #000000, #171717)',
        'light-gradient': 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
        'primary-gradient': 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
        'accent-gradient': 'linear-gradient(135deg, #ec4899, #8b5cf6)',
        'mesh-gradient':
          'radial-gradient(at 40% 20%, #8b5cf6 0px, transparent 50%), radial-gradient(at 80% 0%, #ec4899 0px, transparent 50%), radial-gradient(at 0% 50%, #0ea5e9 0px, transparent 50%)',
      },

      // Animation durations and timing
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        particles: 'particles 20s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        particles: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgb(14 165 233 / 0.3)' },
          '50%': { boxShadow: '0 0 40px rgb(14 165 233 / 0.6)' },
        },
      },

      // Transition timing functions
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'ease-in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};
