'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-[hsl(var(--color-background-secondary))] to-[hsl(var(--color-background-primary))] px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h4
            className="mb-3 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent sm:mb-4 sm:text-2xl"
            style={{
              backgroundImage:
                'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
            }}
          >
            Echo Theory Labs
          </h4>
          <p
            className="text-sm sm:text-base"
            style={{ color: 'hsl(var(--color-text-muted))' }}
          >
            Your ambition, amplified by AI. For the work and careers of
            tomorrow.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[hsl(var(--color-border-primary))] pt-6 sm:pt-8"
        >
          <p
            className="text-center text-xs sm:text-sm"
            style={{ color: 'hsl(var(--color-text-muted))' }}
          >
            © {currentYear} Echo Theory Labs, LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
