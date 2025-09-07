'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

export const LocalFocus = () => {
  const stats = [
    { label: 'NC Businesses Using AI', value: '50%' },
    { label: 'AI Job Growth vs. Market', value: '3x' },
    { label: 'Recent AI Investments', value: '$700M+' },
    { label: 'Potential ROI for SMBs', value: 'Up to 5x' },
  ];

  return (
    <section
      id="about"
      className="from-background-secondary to-background-primary bg-gradient-to-b px-6 py-24 text-center lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Mobile Layout: Flex column with specific order */}
        <div className="flex flex-col gap-12 lg:hidden">
          {/* 1. Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              level="h2"
              className="!mb-4 text-left !tracking-normal"
            >
              Proudly Serving the{' '}
              <span className="text-gradient-primary">Triangle</span>
            </SectionHeading>
          </motion.div>

          {/* 2. Video */}
          <motion.div
            className="relative -mt-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="border-primary bg-background-primary/20 backdrop-blur-modern h-[576px] w-full overflow-hidden rounded-3xl border">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/raleigh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          {/* 3. Description Text */}
          <motion.div
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-secondary text-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Raleigh-Durham is at the forefront of AI innovation, with 50% of
              North Carolina businesses already embracing AI to drive growth and
              efficiency. Small businesses are seeing average ROIs up to 5x on
              AI investments, unlocking new opportunities in tech, biotech, and
              beyond. Join this exciting transformation and position yourself or
              your business for success in the AI era.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="border-primary backdrop-blur-modern bg-background-secondary/5 rounded-xl border p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 4. Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#businesses"
              className="btn-primary shadow-modern-lg inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3 text-base font-semibold transition-all duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Business Solutions</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Desktop Layout: Grid with content left, video right */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left Column: Content */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading level="h2" className="text-left !tracking-normal">
              Proudly Serving the{' '}
              <span className="text-gradient-primary">Triangle</span>
            </SectionHeading>

            <motion.p
              className="text-secondary text-xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Raleigh-Durham is at the forefront of AI innovation, with 50% of
              North Carolina businesses already embracing AI to drive growth and
              efficiency. Small businesses are seeing average ROIs up to 5x on
              AI investments, unlocking new opportunities in tech, biotech, and
              beyond. Join this exciting transformation and position yourself or
              your business for success in the AI era.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="border-primary backdrop-blur-modern bg-background-secondary/5 rounded-xl border p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary text-2xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#businesses"
              className="btn-primary shadow-modern-lg inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3 text-base font-semibold transition-all duration-200 hover:scale-105 sm:px-10 sm:py-4 sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Business Solutions</span>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right Column: Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="border-primary bg-background-primary/20 backdrop-blur-modern h-[576px] w-full overflow-hidden rounded-3xl border">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/raleigh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
