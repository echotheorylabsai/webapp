'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const faqs = [
  {
    question: "Why can't we just use ChatGPT or Claude directly?",
    answer:
      "You can, but production AI support requires more than an LLM. It needs integration with your helpdesk, knowledge base, CRM, and communication tools, plus training data, escalation workflows, and continuous optimization. That's the engineering work that takes ~4 weeks, not the model itself.",
  },
  {
    question: 'We have a technical team — why not build it ourselves?',
    answer:
      'Custom builds typically cost 3–5x more and take 12–18 months. Your engineering team should focus on product, not rebuilding platform-grade support systems. We bring proven implementation patterns, integrations, and an engineering pipeline that gets you to production in 4 weeks.',
  },
  {
    question: "What if our knowledge base is a mess?",
    answer:
      "You're not alone — most companies have messy KBs. Our Knowledge Base Optimizer analyzes, restructures, deduplicates, and fills content gaps so AI can learn reliably. This reduces training time and speeds up launch.",
  },
  {
    question: 'How long until we see ROI?',
    answer:
      'We aim for measurable benefits within 30 days; most companies see initial gains in 60–90 days and reach optimal performance in 90–120 days. Our engagements include optimization so the system improves quickly after launch.',
  },
  {
    question: "What's your success rate?",
    answer:
      "We're launching publicly in Q1 2026. Our pilot implementations (under NDA) have hit the industry benchmarks cited on this site — ask for specific metrics during your assessment and we'll share what we can under NDA.",
  },
  {
    question: 'Do you replace our support team?',
    answer:
      'No. The winning approach is AI + humans: AI handles routine, high-volume tickets (often 60–70%) and humans focus on complex, high-value cases. We train your team to collaborate with AI rather than be replaced by it.',
  },
];

// --- MAIN COMPONENT ---
export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(-1); // Default first item to be open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="from-background-secondary to-background-primary bg-gradient-to-b px-6 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading level="h2">
          <span>Frequently Asked </span>
          <span className="text-gradient-primary block">Questions</span>
        </SectionHeading>

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:mt-12 sm:gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={`backdrop-blur-modern w-full rounded-xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                  openIndex === index
                    ? 'border-secondary shadow-modern-focus'
                    : 'border-primary shadow-modern-sm hover:shadow-modern-md'
                }`}
                style={{
                  backgroundColor: 'hsl(var(--color-background-secondary))',
                }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-primary text-base font-semibold sm:text-lg">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="text-muted h-4 w-4 shrink-0 transition-transform duration-300 sm:h-5 sm:w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </div>

                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    marginTop: openIndex === index ? '1rem' : '0',
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="text-secondary pt-2 text-sm leading-relaxed sm:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center sm:mt-12"
        >
          <motion.a
            href="#contact"
            className="btn-primary shadow-modern-lg inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold transition-all duration-200"
            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Still have questions? Let&apos;s talk</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.991 8.991 0 01-4.916-1.481L3 21l2.519-5.084A9.001 9.001 0 0121 12z"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
