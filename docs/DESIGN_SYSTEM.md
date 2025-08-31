# Echo Theory Labs Design System

## Current Implementation Overview

This document outlines the comprehensive design system for Echo Theory Labs' AI consulting website,
built with Next.js 15, Tailwind CSS v4, and Framer Motion.

## 🎨 Color Palette

### Primary Colors

```css
/* Primary Blue Spectrum - Currently Used */
primary-50:  #f0f9ff
primary-100: #e0f2fe
primary-200: #bae6fd
primary-300: #7dd3fc
primary-400: #38bdf8
primary-500: #0ea5e9  /* Main primary */
primary-600: #0284c7
primary-700: #0369a1
primary-800: #075985
primary-900: #0c4a6e
```

### Neutral Grays

```css
/* Sophisticated Neutral Palette - Currently Used */
neutral-50:  #fafafa
neutral-100: #f5f5f5
neutral-200: #e5e5e5
neutral-300: #d4d4d4
neutral-400: #a3a3a3
neutral-500: #737373
neutral-600: #525252
neutral-700: #404040
neutral-800: #262626
neutral-900: #171717
neutral-950: #0a0a0a
```

### Accent Colors

```css
/* Vibrant Accent Palette - Currently Used */
accent-purple: #8b5cf6
accent-pink:   #ec4899
accent-green:  #10b981
accent-orange: #f59e0b
accent-red:    #ef4444
```

### Brand Color

```css
/* Echo Theory Labs Signature - Currently Used */
teal: #00bfa5;
```

## 📝 Typography Hierarchy

### Font Scale

```css
/* Responsive Typography - Currently Implemented */
text-display:   clamp(2.5rem, 8vw, 6rem)    /* 40-96px */
text-headline:  clamp(1.875rem, 6vw, 4rem)  /* 30-64px */
text-title:     clamp(1.5rem, 4vw, 2.25rem) /* 24-36px */
text-body-large: 1.125rem (18px)
text-body:      1rem (16px)
text-caption:   0.875rem (14px)
```

### Font Weights

```css
font-light:    300
font-normal:   400
font-medium:   500
font-semibold: 600
font-bold:     700
font-extrabold: 800
font-black:    900
```

### Typography Classes

```css
/* Custom Typography Utilities - Currently Available */
.text-display    /* Large hero text with tight line-height */
.text-headline   /* Section headers */
.text-title      /* Card titles, subsections */
.text-body-large /* Large body text */
.text-body       /* Standard body text */
.text-caption    /* Small text, captions */
.text-gradient   /* Blue-purple gradient text */
.text-shimmer    /* Animated shimmer effect */
```

## 🎭 Component Styles

### Buttons

```css
/* Button Variants - Currently Implemented */
.btn-primary     /* Primary CTA - blue gradient */
.btn-secondary   /* Secondary action - neutral */
.btn-ghost       /* Subtle hover - transparent */
.btn-accent      /* Purple accent - special actions */
```

### Cards

```css
/* Card Components - Currently Available */
.card            /* Base card with border and shadow */
.card-hover      /* Hover lift effect */
.card-glow       /* Glowing border on hover */
```

### Form Elements

```css
/* Input Styling - Currently Available */
.input           /* Consistent form input styling */
.focus-ring      /* Accessible focus indicators */
```

## ✨ Animation Patterns

### Framer Motion Variants

```javascript
// Staggered container animations - Currently Used
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

// Item entrance animations - Currently Used
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1], // Framer easing
    },
  },
};

// Button interactions - Currently Used
const buttonVariants = {
  hover: {
    scale: 1.02,
    boxShadow: '0 0 40px rgba(14, 165, 233, 0.6)',
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};
```

### CSS Animations

```css
/* Keyframe Animations - Currently Available */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes particles-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}
```

## 🌈 Background Patterns

### Gradient Collections

```css
/* Framer-Inspired Gradients - Currently Available */
.primary-gradient   /* Blue to purple */
.accent-gradient    /* Pink to purple */
.animated-gradient  /* Shifting multi-color */
```

### Pattern Overlays

```css
/* Background Textures - Currently Available */
.particles          /* Animated particles */
```

## 💫 Glow Effects

### Shadow Variations

```css
/* Glow Effect Library - Currently Available */
.shadow-glow        /* Interactive glow */
.shadow-glow-lg     /* Large glow effect */
```

## 📱 Responsive Design

### Breakpoint System

```css
/* Tailwind Breakpoints - Currently Used */
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large */
2xl: 1536px  /* 2X large */
```

### Container Utilities

```css
/* Layout Containers - Currently Available */
.container-framer   /* Max-width with responsive padding */
.section-padding    /* Standard section spacing */
```

## 🎯 Spacing System

### Custom Spacing

```css
/* Extended Spacing Scale - Currently Available */
spacing-18:  4.5rem  (72px)
spacing-88:  22rem   (352px)
spacing-128: 32rem   (512px)
spacing-144: 36rem   (576px)
```

## 🎪 Interactive States

### Hover Effects

```css
/* Interaction Utilities - Currently Available */
.transition-hover   /* Smooth transitions */
```

### Loading States

```css
/* Loading Animations - Currently Available */
.loading-dots       /* Three dot animation */
.loading-pulse      /* Pulse animation */
```

## 🔧 Implementation Guidelines

### Component Structure

```jsx
// Consistent component pattern - Currently Used
export const ComponentName = () => {
  // Animation variants defined inline per component
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" />

      {/* Content container */}
      <motion.div
        className="container-framer relative z-10"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Component content */}
      </motion.div>
    </section>
  );
};
```

### Animation Best Practices

1. **Define animations inline** per component for better maintainability
2. **Use viewport triggers** for scroll-based animations
3. **Implement reduced motion** for accessibility
4. **Optimize performance** with transform properties
5. **Consistent easing** with Framer-style curves

### Accessibility Standards

1. **Proper color contrast** (WCAG AA)
2. **Focus indicators** on all interactive elements
3. **Semantic HTML** structure
4. **Screen reader friendly** text
5. **Keyboard navigation** support

### Performance Optimization

1. **Lazy load images** below the fold
2. **Use CSS transforms** for animations
3. **Minimize layout thrashing**
4. **Optimize animation duration**
5. **Implement will-change** for heavy animations

## 🎨 Design Tokens Reference

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #0ea5e9;
  --color-background: #ffffff;
  --color-foreground: #171717;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

  /* Border radius */
  --radius: 0.5rem;
}
```

### Dark Theme Support

```css
.dark {
  --color-background: #0a0a0a;
  --color-foreground: #fafafa;
  /* ... other dark theme values */
}
```

## 📋 Component Checklist

When creating new components, ensure:

- [ ] Uses semantic HTML elements
- [ ] Implements proper animation variants inline
- [ ] Includes hover and focus states
- [ ] Supports dark/light theme
- [ ] Mobile-first responsive design
- [ ] Proper TypeScript interfaces
- [ ] Accessibility attributes
- [ ] Performance optimizations

## 🚀 Usage Examples

### Hero Section Pattern

```jsx
<section className="relative flex min-h-screen items-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-60" />
  <motion.div className="container-framer relative z-10">
    <h1 className="text-4xl font-bold text-white lg:text-6xl">Your Hero Title</h1>
  </motion.div>
</section>
```

### Card Grid Pattern

```jsx
<motion.div
  className="grid gap-8 lg:grid-cols-3"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
    >
      {/* Card content */}
    </motion.div>
  ))}
</motion.div>
```

## 🔄 Current Theme Implementation

### Theme Context

- **Default**: Dark theme
- **Storage**: LocalStorage persistence
- **Toggle**: Available via ThemeToggle component in Header
- **Usage**: Wraps entire app in ThemeProvider

### Dark Mode Classes

- Uses Tailwind's `dark:` prefix system
- CSS custom properties for theme switching
- Automatic class management via ThemeContext

## 📝 Animation Implementation Notes

**Current Approach**: Each component defines its own animation variants inline rather than using a
shared animations file. This approach:

- Provides better component isolation
- Makes animations more maintainable per component
- Reduces bundle size by not importing unused animations
- Allows for component-specific animation customization

This design system provides the foundation for a modern, interactive, and accessible web experience
that matches Framer's sophisticated aesthetic while maintaining Echo Theory Labs' brand identity.
