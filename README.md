# Echo Theory Labs — Echo Intelligence

> Production AI platform and implementation studio for Series A/B SaaS: engineering-first implementations, production in 4 weeks, measurable ROI in 30 days.

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

- Three-card grid layout (Assessment → Implementation → Scale)
- Staggered entrance animations
- Product-focused copy and outcome-driven CTAs
- Responsive design patterns

#### `ServicesOverview.tsx`

- Echo Intelligence platform overview and engagement models
- Implementation patterns, integrations, and pilot outcomes
- Case study placeholders and technical capabilities

#### `LocalFocus.tsx`

- Regional credibility for the Raleigh-Durham Triangle with engineering-first positioning
- Local trust signals and customer metrics
- Call-to-action integration

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

### Production-Ready AI

- Engineering-first implementations: production deployments in ~4 weeks
- Platform integrations: helpdesk, CRM, knowledge bases, and observability
- Rapid ROI: measurable gains within 30 days for typical engagements
- Continuous optimization: monitoring, feedback loops, and model maintenance

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

Echo Theory Labs builds and implements Echo Intelligence — a production AI offering for Series A/B SaaS companies. We combine a platform, integrations, and engineering services to accelerate support automation and product-grade AI features.

- Assessment: AI Readiness Assessment and implementation roadmap
- Implementation: production integrations and engineering pipelines (4-week delivery)
- Scale: automation, observability, and continuous improvement for long-term ROI
- Typical outcomes: high ticket deflection on routine cases, faster time-to-production, and measurable ROI within 30 days (pilot metrics available under NDA)

## 🔗 Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

---

Built with practical engineering and outcomes-first design by Echo Theory Labs LLC.
