# Echo Theory Labs - AI Consulting Website

> Modern, responsive website for Echo Theory Labs LLC - a boutique AI consulting firm serving the
> Raleigh-Durham Triangle area.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-teal)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.12-purple)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17+
- npm 9+

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd echo-theory-labs

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🏗️ Project Architecture

### Directory Structure

```
echo-theory-labs/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Global styles & Tailwind config
│   └── favicon.ico              # Site favicon
├── components/                   # React components
│   ├── Header.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with AI visualization
│   ├── ValueProposition.tsx     # Three-card benefits grid
│   ├── ServicesOverview.tsx     # Training & business solutions
│   ├── LocalFocus.tsx           # Triangle area focus with map
│   ├── ContactSection.tsx       # Contact form with validation
│   ├── Footer.tsx               # Social links & newsletter
│   └── ThemeToggle.tsx          # Dark/light theme switcher
├── lib/                         # Utilities & contexts
│   ├── ThemeContext.tsx         # Theme management
│   └── animations.ts            # Shared animation variants
├── public/                      # Static assets
│   ├── robots.txt              # SEO robots configuration
│   └── sitemap.xml             # Site structure for SEO
├── .vscode/                     # VS Code configuration
│   ├── settings.json           # Editor settings
│   └── extensions.json         # Recommended extensions
├── DESIGN_SYSTEM.md            # Comprehensive design guidelines
├── DEV_SETUP.md               # Development environment guide
└── [config files]             # ESLint, Prettier, TypeScript, etc.
```

## 🛠️ Technology Stack

### Core Framework

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library with server components
- **TypeScript 5.x** - Type-safe JavaScript

### Styling & Animation

- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **Custom Design System** - Framer-inspired components

### Form Handling & Validation

- **React Hook Form 7.62.0** - Performant form library
- **Zod** - TypeScript-first schema validation

### Development Tools

- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 🧩 Component Architecture

### Core Components

#### `Header.tsx`

- Responsive navigation with mobile menu
- Theme toggle integration
- Smooth scroll navigation

#### `Hero.tsx`

- Animated AI neural network visualization
- Gradient text effects with Framer Motion
- Interactive floating UI elements
- Social proof metrics

#### `ValueProposition.tsx`

- Three-card grid layout
- Staggered entrance animations
- Interactive hover effects with glow
- Responsive design patterns

#### `ServicesOverview.tsx`

- Two-column service layout
- Animated service cards with icons
- Integrated testimonial section
- Professional presentation

#### `LocalFocus.tsx`

- Triangle area targeting
- Embedded Google Maps
- Call-to-action integration
- Local business focus

#### `ContactSection.tsx`

- React Hook Form integration
- Zod schema validation
- Real-time error handling
- Glass morphism design

#### `Footer.tsx`

- Newsletter signup form
- Social media links
- Professional branding

### Shared Utilities

#### `lib/ThemeContext.tsx`

- Dark/light theme management
- LocalStorage persistence
- System preference detection

#### `lib/animations.ts`

- Reusable Framer Motion variants
- Consistent animation timing
- Performance-optimized transitions

## 🎨 Design System

### Color Palette

- **Primary**: Blue spectrum (#0ea5e9)
- **Brand**: Teal (#00bfa5)
- **Gradients**: Blue to purple combinations
- **Neutrals**: Sophisticated gray scale

### Typography

- **Display**: Responsive hero text (40-96px)
- **Headline**: Section headers (30-64px)
- **Body**: Standard content (16-18px)
- **Inter Font**: Modern, professional typeface

### Animation Patterns

- **Entrance**: Fade in with upward motion
- **Stagger**: Sequential child animations
- **Hover**: Scale and glow effects
- **Scroll**: Viewport-triggered animations

### Responsive Design

- **Mobile-first**: Tailwind breakpoint system
- **Breakpoints**: sm(640px), md(768px), lg(1024px), xl(1280px)
- **Containers**: Max-width with responsive padding

## 🎯 Key Features

### Performance

- **Server Components**: Optimized React 19 patterns
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic bundle optimization
- **SEO Ready**: Meta tags, sitemap, robots.txt

### Accessibility

- **WCAG AA Compliance**: Color contrast ratios
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML structure
- **Focus Management**: Visible focus indicators

### User Experience

- **Smooth Animations**: 60fps Framer Motion
- **Theme Switching**: Dark/light mode persistence
- **Form Validation**: Real-time error feedback
- **Mobile Responsive**: Touch-friendly interactions

### Business Features

- **Lead Capture**: Contact form with validation
- **Local Focus**: Triangle area targeting
- **Social Proof**: Success metrics display
- **Professional Branding**: AI consulting positioning

## ⚙️ Development Scripts

### Core Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Start production server
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format with Prettier
npm run type-check   # TypeScript validation
```

### Combined Commands

```bash
npm run check-all    # Run all quality checks
npm run fix-all      # Auto-fix all issues
```

## 🎨 Styling Guidelines

### Tailwind Classes

- **Consistent patterns**: `bg-gray-900`, `text-white`
- **Responsive prefixes**: `md:text-4xl`, `lg:grid-cols-3`
- **Hover states**: `hover:bg-blue-700`, `hover:scale-1.02`
- **Glass morphism**: `backdrop-blur-sm`, `bg-gray-800/50`

### Animation Implementation

```tsx
// Standard entrance animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Usage in components
<motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
  Content
</motion.div>;
```

### Theme Integration

```tsx
// Access theme context
const { isDark, toggleTheme } = useTheme();

// Theme-aware styling
<div className={isDark ? 'bg-black' : 'bg-white'}>Theme-aware content</div>;
```

## 🧪 Development Environment

### VS Code Setup

- **Auto-formatting**: Format on save enabled
- **Extensions**: TypeScript, ESLint, Prettier, Tailwind CSS
- **Error detection**: Real-time TypeScript and ESLint feedback
- **IntelliSense**: Full Tailwind class autocomplete

### Code Standards

- **TypeScript**: Strict mode enabled
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **Import organization**: Automatic sorting

## 📱 Responsive Design

### Breakpoint Strategy

- **Mobile-first**: Base styles for mobile
- **Progressive enhancement**: Larger screens add complexity
- **Touch-friendly**: 44px minimum touch targets
- **Performance**: Conditional loading for larger screens

### Layout Patterns

```tsx
// Responsive grid
<div className="grid gap-8 lg:grid-cols-3">

// Responsive typography
<h1 className="text-4xl lg:text-6xl">

// Responsive spacing
<section className="py-16 lg:py-24">
```

## 🚀 Deployment

### Build Process

```bash
npm run build        # Creates optimized production build
npm start           # Serves production build locally
```

### Performance Targets

- **Lighthouse Score**: >95 for all metrics
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Bundle Size**: Optimized code splitting

## 📚 Documentation

- **[DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)**: Complete design guidelines
- **[DEV_SETUP.md](./docs/DEV_SETUP.md)**: Development environment setup
- **Component Documentation**: JSDoc comments in source code

## 🤝 Contributing

### Before Committing

1. Run `npm run check-all` to verify code quality
2. Ensure all TypeScript errors are resolved
3. Test responsive design across breakpoints
4. Verify accessibility standards

### Code Review Checklist

- [ ] TypeScript types properly defined
- [ ] Components follow design system patterns
- [ ] Animations are performance-optimized
- [ ] Responsive design implemented
- [ ] Accessibility standards met

## 📞 Business Context

Echo Theory Labs is a boutique AI consulting firm specializing in:

- **AI Training**: LangGraph, LangChain workshops for Triangle professionals
- **Business Solutions**: Custom multi-agent systems for SMEs
- **Local Focus**: Serving Raleigh-Durham area businesses
- **Proven Results**: 93% success rate, 40% efficiency improvements

## 🔗 Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

---

Built with ❤️ for the Triangle area AI community by Echo Theory Labs LLC.
