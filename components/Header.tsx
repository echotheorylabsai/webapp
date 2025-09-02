'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-transparent px-6 py-4">
      {/* Logo - Left oval container with animated border */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative rounded-full px-6 py-3 shadow-lg backdrop-blur-md"
      >
        {/* Animated border background */}
        <div className="absolute inset-0 animate-[border-race_3s_linear_infinite] rounded-full bg-gradient-to-r from-purple-500 via-cyan-500 via-pink-500 to-purple-500 bg-[length:300%_100%] p-[2px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-black/80">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm font-bold text-white drop-shadow-lg"
              style={{
                textShadow:
                  '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)',
              }}
            >
              Echo Theory Labs
            </motion.div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 animate-[glow-pulse_2s_linear_infinite_alternate] rounded-full bg-gradient-to-r from-blue-500/30 via-teal-500/30 to-cyan-500/30 blur-sm"></div>

        {/* Content (invisible but maintains spacing) */}
        <div className="invisible text-sm font-bold">Echo Theory Labs</div>
      </motion.div>

      {/* Navigation - Center oval container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="hidden rounded-full border border-white/10 bg-black/80 px-8 py-3 shadow-lg backdrop-blur-md md:flex"
      >
        <nav className="flex space-x-8">
          {[
            { name: 'Home', href: '#home' },
            { name: 'Professionals', href: '#professionals' },
            { name: 'Business', href: '#businesses' },
            { name: 'About', href: '#about' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contact', href: '#contact' },
          ].map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-gray-300 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Right side - Theme Toggle and CTA Button */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden rounded-full border border-white/10 bg-black/80 shadow-lg backdrop-blur-md md:block"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="rounded-full border border-white/10 bg-black/80 p-3 text-white backdrop-blur-md md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
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
          className="absolute top-full right-6 left-6 mt-2 flex flex-col items-center rounded-2xl border border-white/10 bg-black/90 py-4 backdrop-blur-md md:hidden"
        >
          {[
            { name: 'Home', href: '#home' },
            { name: 'Professionals', href: '#professionals' },
            { name: 'Business', href: '#businesses' },
            { name: 'About', href: '#about' },
            { name: 'FAQ', href: '#faq' },
            { name: 'Contact', href: '#contact' },
          ].map(item => (
            <a
              key={item.name}
              href={item.href}
              className="py-2 font-bold text-gray-300 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-2 text-sm font-bold text-white"
          >
            Join waitlist
          </a>
        </motion.nav>
      )}
    </header>
  );
};
