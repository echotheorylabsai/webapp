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

- Node.js 22.x
- npm 10.x

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
├── app/                         # Next.js App Router
│   ├── custom/                  # custom CSS classes like utilities and animations
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Main landing page
│   ├── globals.css              # Global styles & Tailwind config
│   └── favicon.ico              # Site favicon
├── components/                  # React components
│   ├── Header.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with AI visualization
│   ├── ValueProposition.tsx     # Three-card benefits grid
│   ├── ServicesOverview.tsx     # Training & business solutions
│   ├── LocalFocus.tsx           # Triangle area focus with map
│   ├── ContactSection.tsx       # Contact form with validation
│   ├── Footer.tsx               # Social links & newsletter
│   └── ThemeToggle.tsx          # Dark/light theme switcher
├── lib/                         # Utilities & contexts
│   ├── ThemeContext.tsx         # Theme management & context
│   ├── themes.ts                # Theme definitions & CSS variables
├── public/                      # Static assets
│   ├── robots.txt              # SEO robots configuration
│   └── sitemap.xml             # Site structure for SEO
├── .vscode/                     # VS Code configuration
│   ├── settings.json           # Editor settings
│   └── extensions.json         # Recommended extensions
└── [config files]             # ESLint, Prettier, TypeScript, etc.
```

## 🛠️ Technology Stack

### Core Framework

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library with server components
- **TypeScript 5.x** - Type-safe JavaScript

### Styling & Animation

- **Tailwind CSS v4** - Utility-first CSS framework with theme-aware utilities
- **Framer Motion 11.3.28** - Production-ready motion library
- **CSS Custom Properties** - Theme-driven styling with semantic design tokens
- **Theme System** - Scalable light/dark theme architecture with custom fonts

### Form Handling & Validation

- **React Hook Form 7.52.2** - Performant form library
- **Zod 4.0.0** - TypeScript-first schema validation

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

- Theme state management (light/dark)
- LocalStorage persistence
- CSS custom property application
- Theme class management for Tailwind

#### `lib/themes.ts`

- Theme definitions with CSS custom properties
- Color, typography, and spacing tokens
- Type-safe theme names and values
- HSL color format for better manipulation

## 🎯 Key Features

### Performance

- **Server Components**: Optimized React 19 patterns
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic bundle optimization
- **SEO Ready**: Meta tags, sitemap, robots.txt

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
