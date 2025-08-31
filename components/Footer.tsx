'use client';

import { motion } from 'framer-motion';

export const Footer = () => {
  // const socialLinks = [
  //   { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  //   { name: 'X (Twitter)', href: 'https://x.com', icon: '🐦' },
  // ];

  return (
    <footer className="bg-black px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h4 className="mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-mono text-xl font-bold text-transparent sm:mb-4 sm:text-2xl">
            Echo Theory Labs
          </h4>
          <p className="text-sm text-gray-400 sm:text-base">
            Transforming Triangle area businesses with cutting-edge AI solutions
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 sm:pt-8"
        >
          <p className="text-center text-xs text-gray-500 sm:text-sm">
            © 2025 Echo Theory Labs, LLC. All rights reserved. |
            Raleigh-Durham, NC
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
