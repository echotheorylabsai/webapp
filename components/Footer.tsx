'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="bg-background-primary px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h4 className="mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent sm:mb-4 sm:text-2xl">
            Echo Theory Labs
          </h4>
          <p className="text-text-muted text-sm sm:text-base">
            Transforming Triangle area businesses with cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-border-primary border-t pt-6 sm:pt-8"
        >
          <p className="text-text-muted text-center text-xs sm:text-sm">
            © 2025 Echo Theory Labs, LLC. All rights reserved. |
            Raleigh-Durham, NC
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
