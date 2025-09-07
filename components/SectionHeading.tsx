'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 'h2' | 'h3';
  className?: string;
  description?: string; // Add optional description prop
}

export const SectionHeading = ({
  children,
  level = 'h2',
  className = '',
  description, // Destructure the new prop
}: SectionHeadingProps) => {
  const Tag = level;

  const baseStyles = 'font-black tracking-tight text-center';
  const sizeStyles =
    level === 'h2'
      ? 'text-4xl sm:text-5xl lg:text-6xl'
      : 'text-2xl sm:text-3xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={level === 'h2' ? 'mb-16 sm:mb-20' : 'mb-12 sm:mb-16'}
    >
      <Tag
        className={`${baseStyles} ${sizeStyles} ${className}`}
        style={{ color: 'hsl(var(--color-text-primary))' }}
      >
        {children}
      </Tag>

      {/* Conditionally render the description if it exists */}
      {description && (
        <motion.p
          className="mx-auto mt-4 max-w-3xl px-4 text-lg leading-relaxed font-light sm:text-xl"
          style={{ color: 'hsl(var(--color-text-secondary))' }}
          // Add a slight delay to the animation
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};
