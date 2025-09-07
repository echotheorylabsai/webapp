'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define nav items in one place for reuse
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Professionals', href: '#professionals' },
    { name: 'Business', href: '#businesses' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ backgroundColor: 'hsl(var(--color-background-primary) / 0.8)' }}
    >
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-full px-6 py-3 shadow-lg"
      >
        {/* Animated border background */}
        <div
          className="absolute inset-0 animate-[border-race_3s_linear_infinite] rounded-full bg-gradient-to-r bg-[length:300%_100%] p-[2px]"
          style={{
            backgroundImage:
              'linear-gradient(to right, hsl(var(--color-accent-secondary)), hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
          }}
        >
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{
              backgroundColor: 'hsl(var(--color-background-secondary))',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-bold drop-shadow-lg"
              style={{
                color: 'hsl(var(--color-text-primary))',
                textShadow:
                  '0 0 10px hsl(var(--color-accent-secondary) / 0.5), 0 0 20px hsl(var(--color-accent-secondary) / 0.3)',
              }}
            >
              Echo Theory Labs
            </motion.div>
          </div>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 animate-[glow-pulse_2s_linear_infinite_alternate] rounded-full bg-gradient-to-r blur-sm"
          style={{
            backgroundImage:
              'linear-gradient(to right, hsl(var(--color-accent-primary) / 0.3), hsl(var(--color-accent-secondary) / 0.3))',
          }}
        />

        {/* Invisible content for spacing */}
        <div className="invisible text-sm font-bold">Echo Theory Labs</div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden rounded-full border-2 px-8 py-3 shadow-lg backdrop-blur-md md:flex"
        style={{
          backgroundColor: 'hsl(var(--color-background-secondary))',
          borderColor: 'hsl(var(--color-text-primary))',
        }}
      >
        <nav className="flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: 'hsl(var(--color-text-secondary))' }}
              onMouseOver={e =>
                (e.currentTarget.style.color = 'hsl(var(--color-text-primary))')
              }
              onMouseOut={e =>
                (e.currentTarget.style.color =
                  'hsl(var(--color-text-secondary))')
              }
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Right side controls */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden rounded-full border shadow-lg backdrop-blur-md md:block"
          style={{
            backgroundColor: 'hsl(var(--color-background-secondary))',
            borderColor: 'hsl(var(--color-border-primary))',
          }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r px-6 py-3 text-sm font-bold text-white transition-all duration-200"
            style={{
              backgroundImage:
                'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
            }}
            whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="rounded-full border p-3 backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{
            backgroundColor: 'hsl(var(--color-background-secondary))',
            borderColor: 'hsl(var(--color-border-primary))',
            color: 'hsl(var(--color-text-primary))',
          }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full right-6 left-6 mt-2 flex flex-col items-center rounded-2xl border py-4 backdrop-blur-md md:hidden"
          style={{
            backgroundColor: 'hsl(var(--color-background-secondary))',
            borderColor: 'hsl(var(--color-border-primary))',
          }}
        >
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="py-2 font-bold transition-colors duration-200"
              style={{ color: 'hsl(var(--color-text-secondary))' }}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseOver={e =>
                (e.currentTarget.style.color = 'hsl(var(--color-text-primary))')
              }
              onMouseOut={e =>
                (e.currentTarget.style.color =
                  'hsl(var(--color-text-secondary))')
              }
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-bold text-white"
            style={{ backgroundColor: 'hsl(var(--color-accent-primary))' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join waitlist
          </a>
        </motion.nav>
      )}
    </header>
  );
};
