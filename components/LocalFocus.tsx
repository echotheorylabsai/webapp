'use client';

import { motion } from 'framer-motion';

export const LocalFocus = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-900 to-black px-6 py-24 text-center lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content side */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-5xl leading-tight font-black tracking-tight text-white lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Proudly Serving the{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Triangle
                </span>
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed font-light text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Raleigh-Durham is at the forefront of AI innovation, with 50% of
                North Carolina businesses already embracing AI to drive growth
                and efficiency. Small businesses are seeing average ROIs up to
                5x on AI investments, unlocking new opportunities in tech,
                biotech, and beyond. Join this exciting transformation and
                position yourself or your business for success in the AI era.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { label: 'NC Businesses Using AI', value: '50%' },
                  { label: 'AI Job Growth vs. Market', value: '3x' },
                  { label: 'Recent AI Investments', value: '$700M+' },
                  { label: 'Potential ROI for SMBs', value: 'Up to 5x' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.a
              href="#businesses"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 sm:px-10 sm:py-4 sm:text-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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

          {/* Visual side - Raleigh Video */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-[576px] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black/20 to-white/5 backdrop-blur-sm">
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
