'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="from-background-secondary to-background-primary bg-gradient-to-t px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h4 className="text-gradient-primary mb-3 text-xl font-bold sm:mb-4 sm:text-2xl">
            Echo Theory Labs
          </h4>
          <p className="text-muted text-sm sm:text-base">
            Cut the noise, transform your work — engineering-first, outcome obsessed, see ROI in 30 days.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-primary border-t pt-6 sm:pt-8"
        >
          <p className="text-muted text-center text-xs sm:text-sm">
            © {currentYear} Echo Theory Labs, LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
