'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Message too short'),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create FormData object for Web3Forms
      const formData = new FormData();

      // Add Web3Forms configuration
      formData.append('access_key', '32844e0c-392a-4f0b-aa08-abbaca370f99');
      formData.append(
        'subject',
        'New AI Assessment Request from Echo Theory Labs'
      );
      formData.append('from_name', 'Echo Theory Labs Contact Form');

      // Add form fields
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('company', data.company);
      formData.append('message', data.message);

      // Add honeypot for spam protection
      formData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset(); // Clear the form

        // Optional: Redirect to thank you page after 2 seconds
        setTimeout(() => {
          // window.location.href = '/thank-you';
        }, 2000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="from-background-secondary to-background-primary bg-gradient-to-b px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="text-text-primary mb-4 text-center text-3xl font-black tracking-tight sm:mb-6 sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-text-primary">Ready to </span>
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Transform Your Business?
          </span>
        </motion.h2>

        <motion.p
          className="text-text-muted mx-auto mb-8 max-w-2xl text-base leading-relaxed font-light sm:mb-12 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get your free AI assessment and discover how our solutions can drive
          measurable results for your business.
        </motion.p>

        {/* Contact Form */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center text-green-400"
            >
              ✓ Thank you! We&apos;ll get back to you within 24 hours with your
              personalized AI roadmap.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-center text-red-400"
            >
              ✗ Sorry, there was an error sending your message. Please try
              again.
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-text-secondary mb-2 block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName')}
                  className={`bg-background-secondary text-text-primary placeholder-text-muted focus:border-accent-primary focus:ring-accent-primary/20 w-full rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none ${
                    errors.firstName
                      ? 'border-red-500'
                      : 'border-border-primary'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-text-secondary mb-2 block text-sm font-medium"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                  className={`bg-background-secondary text-text-primary placeholder-text-muted focus:border-accent-primary focus:ring-accent-primary/20 w-full rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none ${
                    errors.lastName ? 'border-red-500' : 'border-border-primary'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-text-secondary mb-2 block text-sm font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`bg-background-secondary text-text-primary placeholder-text-muted focus:border-accent-primary focus:ring-accent-primary/20 w-full rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-border-primary'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="text-text-secondary mb-2 block text-sm font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                {...register('company')}
                className={`bg-background-secondary text-text-primary placeholder-text-muted focus:border-accent-primary focus:ring-accent-primary/20 w-full rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none ${
                  errors.company ? 'border-red-500' : 'border-border-primary'
                }`}
                placeholder="Enter your company name"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-text-secondary mb-2 block text-sm font-medium"
              >
                Tell us about your AI needs
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={4}
                className={`bg-background-secondary text-text-primary placeholder-text-muted focus:border-accent-primary focus:ring-accent-primary/20 w-full resize-none rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none ${
                  errors.message ? 'border-red-500' : 'border-border-primary'
                }`}
                placeholder="Describe your current challenges and how AI could help..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-xl px-6 py-3 font-semibold shadow-lg transition-all duration-200 ${
                isSubmitting
                  ? 'bg-background-tertiary cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/25'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                'Get Your Free AI Assessment'
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-8 text-center sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted mb-4 text-sm">
            No commitment required • 30-minute consultation • Custom AI roadmap
          </p>
          <div className="text-text-muted flex flex-col items-center justify-center gap-4 text-xs sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-400"></div>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400"></div>
              <span>No Sales Pitch</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-teal-400"></div>
              <span>Local Triangle Focus</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
