'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from './SectionHeading';

const faqs = [
  {
    question: 'Will AI replace my job, or can I use it to advance my career?',
    answer:
      'Think of AI as a powerful assistant that helps you shine in your career, not as a replacement. However, it is important to know that professionals and businesses with AI skills will have a significant competitive advantage going forward. By learning to work with AI, you can focus on what humans do best—strategic thinking, creativity, and building relationships—leading to significant career growth and salary increases.',
  },
  {
    question: 'How do I get started with AI if I have no technical background?',
    answer:
      "You don't need any technical experience to start. We begin with the work you already do and show you how to use AI in simple, practical ways. It's more like learning a new software tool than learning to code. Most people feel comfortable and see results in just a few weeks because we focus on hands-on skills you can use right away.",
  },
  {
    question: 'What makes your approach different from generic AI courses?',
    answer:
      "Unlike generic courses that teach theory, we focus entirely on you and your specific job. We tailor our training to your industry and role, teaching you how to use the exact AI tools that will make the biggest impact on your work. We believe in learning by doing, so you'll gain practical, hands-on experience that delivers real results.",
  },
  {
    question: 'How can AI skills help me land a high-paying job in 2025?',
    answer:
      "In today's job market, knowing how to use AI gives you a major advantage. Companies are actively looking for professionals who can leverage AI to be more effective and innovative. We'll teach you the most in-demand skills, which can lead to significant salary increases and make you a top candidate for high-paying roles.",
  },
  {
    question:
      'What specific training do I need for my field—sales, marketing, or engineering?',
    answer:
      "We customize the training for your exact field to ensure it's relevant and impactful. For Sales & Marketing, you'll learn how to use AI for tasks like finding leads and creating personalized campaigns with industry-standard tools. For Engineering, you'll focus on using AI to write accurate code faster, automate tasks with agentic workflows, and streamline your projects. No matter your field, you'll build a portfolio of real projects to show employers what you can do.",
  },
  {
    question: "I'm a recent graduate—how does AI training help me get hired?",
    answer:
      'As a recent graduate, having AI skills makes your resume stand out. Many companies now expect new hires to be comfortable with AI tools. We provide you with the hands-on experience and portfolio projects that prove you have the practical skills employers are looking for, opening up more job opportunities right from the start.',
  },
  {
    question: 'How quickly can my small business see revenue from AI?',
    answer:
      'You can start seeing benefits very quickly, often within the first month. We begin with simple changes that offer immediate results, like automating customer service or sales tasks. Our clients often find they can grow their business and save significant time and money within the first 90 days.',
  },
  {
    question: 'Can my startup really compete with larger companies using AI?',
    answer:
      'Yes, absolutely! AI is a powerful way for startups and small businesses to level the playing field. It gives you access to the same kinds of powerful tools that large companies use for marketing, customer service, and data analysis, but without the huge price tag. This allows you to work smarter, move faster, and compete effectively.',
  },
  {
    question: 'What can AI do for my business beyond customer service?',
    answer:
      'AI can streamline almost every part of your business. Imagine automating tedious tasks like invoicing, predicting your inventory needs, or even optimizing staff schedules. By helping you identify where AI can have the biggest impact, we can free up your time to focus on what really matters—growing your business.',
  },
  {
    question: 'What is agentic AI and how is it different from chatbots?',
    answer:
      'Think of a standard chatbot as someone who can only answer questions. Agentic AI is like a proactive team member that can complete entire tasks on its own. For example, it can not only talk to a customer but also qualify them as a lead, schedule a meeting, and update your calendar—all without your direct involvement.',
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
