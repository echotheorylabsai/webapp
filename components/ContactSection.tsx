'use client';

import { motion } from 'framer-motion';
import { InputHTMLAttributes, TextareaHTMLAttributes, useState } from 'react';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { z } from 'zod';
import { SectionHeading } from './SectionHeading';

// --- FORM SCHEMA and TYPES ---
const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(
      /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/,
      'Please enter a valid US phone number (e.g., (555) 123-4567 or 555-123-4567)'
    ),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

// --- TYPE DEFINITIONS FOR COMPONENT PROPS ---
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: keyof FormData;
  label: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: keyof FormData;
  label: string;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

// --- REUSABLE INPUT COMPONENTS ---
const FormInput = ({
  id,
  label,
  register,
  errors,
  ...props
}: FormInputProps) => {
  const error = errors[id];
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium"
        style={{ color: 'hsl(var(--color-text-secondary))' }}
      >
        {label}
      </label>
      <input
        id={id}
        {...register(id)}
        className="w-full rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none"
        style={
          {
            backgroundColor: 'hsl(var(--color-background-secondary))',
            color: 'hsl(var(--color-text-primary))',
            borderColor: error
              ? 'hsl(var(--color-danger))'
              : 'hsl(var(--color-border-primary))',
            '--tw-ring-color': 'hsl(var(--color-accent-primary) / 0.2)',
          } as React.CSSProperties
        }
        {...props}
      />
      {error && (
        <p
          className="mt-1 text-sm"
          style={{ color: 'hsl(var(--color-danger))' }}
        >
          {error.message}
        </p>
      )}
    </div>
  );
};

const FormTextarea = ({
  id,
  label,
  register,
  errors,
  ...props
}: FormTextareaProps) => {
  const error = errors[id];
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium"
        style={{ color: 'hsl(var(--color-text-secondary))' }}
      >
        {label}
      </label>
      <textarea
        id={id}
        {...register(id)}
        rows={4}
        className="w-full resize-none rounded-xl border px-4 py-3 backdrop-blur-sm transition-all duration-200 focus:ring-2 focus:outline-none"
        style={
          {
            backgroundColor: 'hsl(var(--color-background-secondary))',
            color: 'hsl(var(--color-text-primary))',
            borderColor: error
              ? 'hsl(var(--color-danger))'
              : 'hsl(var(--color-border-primary))',
            '--tw-ring-color': 'hsl(var(--color-accent-primary) / 0.2)',
          } as React.CSSProperties
        }
        {...props}
      />
      {error && (
        <p
          className="mt-1 text-sm"
          style={{ color: 'hsl(var(--color-danger))' }}
        >
          {error.message}
        </p>
      )}
    </div>
  );
};

// --- MAIN COMPONENT ---
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
    setError,
    clearErrors,
  } = useForm<FormData>({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = async (data: FormData) => {
    // Clear previous errors
    clearErrors();

    // Validate data manually
    const validationResult = formSchema.safeParse(data);

    if (!validationResult.success) {
      // Set errors for each field that failed validation
      validationResult.error.issues.forEach(issue => {
        const fieldName = issue.path[0] as keyof FormData;
        setError(fieldName, {
          type: 'manual',
          message: issue.message,
        });
      });
      return; // Don't proceed with submission
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append('access_key', '32844e0c-392a-4f0b-aa08-abbaca370f99');
    formData.append(
      'subject',
      'New AI Assessment Request from Echo Theory Labs'
    );
    formData.append('from_name', 'Echo Theory Labs Contact Form');
    formData.append('botcheck', '');

    // Split full name into first and last for the API
    const nameParts = data.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('company', data.company);
    formData.append('message', data.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
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
      className="bg-gradient-to-b from-[hsl(var(--color-background-secondary))] to-[hsl(var(--color-background-primary))] px-6 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          level="h2"
          description="Get your free AI assessment and discover how our solutions can drive measurable results for your business."
        >
          <span>Ready to </span>
          <span
            className="block bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
            }}
          >
            Transform Your Business?
          </span>
        </SectionHeading>

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
              className="mb-6 rounded-xl border p-4 text-center backdrop-blur-sm"
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--color-accent-primary) / 0.1), hsl(var(--color-accent-secondary) / 0.1))',
                borderColor: 'hsl(var(--color-accent-primary) / 0.3)',
                color: 'hsl(var(--color-text-primary))',
                boxShadow:
                  '0 4px 6px -1px hsl(var(--color-accent-primary) / 0.1), 0 2px 4px -1px hsl(var(--color-accent-secondary) / 0.1)',
              }}
            >
              <span className="inline-flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span className="font-medium">
                  Thank you! We&apos;ll get back to you within 24 hours.
                </span>
              </span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 rounded-xl border p-4 text-center"
              style={{
                backgroundColor: 'hsl(var(--color-danger) / 0.1)',
                borderColor: 'hsl(var(--color-danger) / 0.2)',
                color: 'hsl(var(--color-danger))',
              }}
            >
              ✗ Sorry, there was an error. Please try again.
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-6"
            noValidate
          >
            <FormInput
              id="fullName"
              label="Full Name"
              register={register}
              errors={errors}
              placeholder="Enter your full name"
              type="text"
            />

            <FormInput
              id="email"
              label="Email Address"
              register={register}
              errors={errors}
              placeholder="Enter your email address"
              type="text"
            />

            <FormInput
              id="phone"
              label="Phone Number"
              register={register}
              errors={errors}
              placeholder="(555) 123-4567"
              type="text"
            />

            <FormInput
              id="company"
              label="Company Name"
              register={register}
              errors={errors}
              placeholder="Enter your company name"
              type="text"
            />

            <FormTextarea
              id="message"
              label="Tell us about your AI needs"
              register={register}
              errors={errors}
              placeholder="Describe your current challenges..."
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundImage: isSubmitting
                  ? 'none'
                  : 'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
                backgroundColor: isSubmitting
                  ? 'hsl(var(--color-background-tertiary))'
                  : 'transparent',
              }}
              whileHover={
                !isSubmitting ? { scale: 1.02, filter: 'brightness(1.1)' } : {}
              }
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
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
      </div>
    </section>
  );
};
