'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Will AI replace my job, or can I use it to advance my career?',
      answer:
        'AI enhances careers rather than replacing them. Professionals who master AI collaboration have significant competitive advantages. Our research shows each dollar invested in AI skills delivers $3.70 in career returns, with salary gains of $15,000-$50,000 within the first year. We teach you to direct AI systems while maintaining the strategic thinking and relationship skills that make you irreplaceable.',
    },
    {
      question:
        'How do I get started with AI if I have no technical background?',
      answer:
        'Our human-centered approach requires zero technical experience. We start with your current workflows and gradually introduce AI solutions that feel natural—think learning advanced Excel rather than coding. Most clients become proficient in 2-3 weeks with immediate productivity gains. We focus on practical application, not theory.',
    },
    {
      question: 'What makes your approach different from generic AI courses?',
      answer:
        'We combine AI Design Thinking with personalized, industry-specific training based on real market data. Instead of one-size-fits-all solutions, we focus on enhancing and embedding AI into your current workflows. We help you visualize and drive AI solutions where they make the most sense for your specific role and goals. While others teach theory, we provide hands-on experience with the exact tools your industry uses. Our training delivers proven results—67% faster campaign development in marketing, 90% adoption rates in software engineering. You learn practical skills with measurable ROI.',
    },
    {
      question: 'How can AI skills help me land a high-paying job in 2025?',
      answer:
        'AI proficiency is now a baseline requirement. Our research shows 98% of salespeople use AI-generated text, and 80% of software engineers need upskilling by 2027. We help you master in-demand skills like prompt engineering, agentic workflow design, and AI tool integration. Graduates report 25-40% productivity increases and salary bumps within 6 months.',
    },
    {
      question:
        'What specific training do I need for my field—sales, marketing, or engineering?',
      answer:
        'Sales/Marketing: Master agentic AI for lead qualification, personalized outreach, and tools like Salesforce Einstein and HubSpot AI. Engineering: Learn GitHub Copilot integration, agentic workflows, and ML basics for 30-50% efficiency gains. We customize training to your specific role and provide real project portfolios that demonstrate capabilities to employers.',
    },
    {
      question: "I'm a recent graduate—how does AI training help me get hired?",
      answer:
        'Entry-level positions increasingly require AI familiarity, with new "AI engineer" roles combining development, data science, and ML knowledge. We provide hands-on experience with industry-standard tools and portfolio projects that showcase your capabilities. With 38% of companies adding AI tool budgets, opportunities are abundant for AI-skilled graduates.',
    },
    {
      question: 'How quickly can my small business see revenue from AI?',
      answer:
        'Our clients typically see results within 30 days. One accounting firm reduced paperwork by 62%, taking on additional clients without hiring. We start with quick wins—automated customer service and sales follow-ups—then scale to complex operations. Most businesses achieve 3-5x ROI within 90 days through time savings and increased capacity.',
    },
    {
      question: 'Can my startup really compete with larger companies using AI?',
      answer:
        'Absolutely. 91% of small businesses using AI report increased revenue. AI levels the playing field by providing enterprise-grade capabilities—24/7 customer service, predictive analytics, personalized marketing—without enterprise budgets. Tools like Brand24 give startups $99/month access to market intelligence that outmaneuvers larger competitors.',
    },
    {
      question: 'What can AI do for my business beyond customer service?',
      answer:
        'AI transforms operations: automated invoice processing, predictive inventory management, staff scheduling, and cash flow forecasting. Small businesses save 5+ hours weekly (worth $6,500+ annually) through our automation. We identify highest-impact areas first, then systematically optimize your entire workflow.',
    },
    {
      question: 'What is agentic AI and how is it different from chatbots?',
      answer:
        'Agentic AI handles complex, multi-step processes autonomously. Instead of just answering questions, it qualifies leads, processes transactions, manages schedules, and makes decisions based on your business rules. Our agentic systems work 24/7, capturing after-hours opportunities—one client saw 35% booking increases from this alone.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-b from-gray-900 to-black px-6 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-center font-mono text-5xl font-black tracking-tight text-white sm:mb-12 lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white">Frequently Asked </span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Questions
          </span>
        </motion.h2>

        <div className="mx-auto grid max-w-3xl gap-3 sm:gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full rounded-xl border border-gray-700/50 bg-gray-800/50 p-4 text-left shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/10 sm:p-5"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-base font-semibold text-white sm:text-lg">
                    {faq.question}
                  </h3>
                  <motion.svg
                    className="h-4 w-4 text-gray-400 transition-transform duration-300 sm:h-5 sm:w-5"
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
                  animate={{ height: openIndex === index ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="mt-4 pt-2 text-sm leading-relaxed text-gray-300 sm:text-base">
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
          className="mt-8 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
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
