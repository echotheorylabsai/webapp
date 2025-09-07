'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FormattedList } from './FormattedList';
import { SectionHeading } from './SectionHeading';

// --- Type Definitions ---
type SolutionId =
  | 'sales-acceleration'
  | 'marketing-intelligence'
  | 'operations-automation';

interface BusinessSolution {
  id: SolutionId;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  visual: 'sales' | 'marketing' | 'operations';
}

interface Tool {
  name: string;
  logo: string;
}

// --- Data (Now Pure and Style-Free) ---
const businessSolutions: BusinessSolution[] = [
  {
    id: 'sales-acceleration',
    title: 'Sales Acceleration',
    subtitle: 'AI-Powered Lead Intelligence and Customer Acquisition',
    description:
      'AI transforms SMB sales from manual outreach to automated, data-driven pipelines. PwC forecasts AI could boost closing rates by 30%. Our solutions revolutionize:<ul class="list-disc list-inside space-y-1 ml-2"><li><b>Lead management</b></li><li><b>Customer Acquisition</b></li><li><b>Personalized Outreach</b></li><li><b>24/7 Sales Engagement</b></li><li><b>Customer Retention</b></li></ul>',
    impact: [
      '+35% quota achievement',
      '+30% conversion rates',
      '+20% revenue growth',
    ],
    visual: 'sales',
  },
  {
    id: 'marketing-intelligence',
    title: 'Marketing Intelligence',
    subtitle: 'Competitive Analysis and Campaign Optimization',
    description:
      '32.6% of small business owners now use AI for data analysis to generate business insights, improve customer satisfaction. Our marketing intelligence platform provides:<ul class="list-disc list-inside space-y-1 ml-2"><li><b>Advanced Business Analytics</b></li><li><b>Predictive Customer Insights</b></li><li><b>Personalized Content Creation</b></li><li><b>Competition Analysis</b></li><li><b>Pricing Optimization Strategies</b></li></ul>',
    impact: [
      '+40% engagement rates',
      '+50% ROI improvement',
      '+30% customer retention',
    ],
    visual: 'marketing',
  },
  {
    id: 'operations-automation',
    title: 'Back-office Automation',
    subtitle: 'Streamline Your Operations and Customer Service',
    description:
      'Operational transformation is the biggest advantage for resource-constrained small businesses—87% of SMB founders say entrepreneurs wear multiple hats. Our solutions streamline:<ul class="list-disc list-inside space-y-1 ml-2"><li><b>Administrative Task Automation</b></li><li><b>Resource Allocation Optimization</b></li><li><b>Supply Chain and Logistics</b></li><li><b>Inventory management systems</b></li><li><b>Customer Service Operations</b></li></ul>',
    impact: [
      '+40% productivity boost',
      '+50% cost reduction',
      '+60% automation rate',
    ],
    visual: 'operations',
  },
];

const topRowTools: Tool[] = [
  { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail' },
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai' },
  { name: 'Facebook', logo: 'https://cdn.simpleicons.org/facebook' },
  { name: 'Google Drive', logo: 'https://cdn.simpleicons.org/googledrive' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion' },
  { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets' },
  { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack' },
  { name: 'Zoho', logo: 'https://cdn.simpleicons.org/zoho' },
  { name: 'Calendly', logo: 'https://cdn.simpleicons.org/calendly' },
  { name: 'Webflow', logo: 'https://cdn.simpleicons.org/webflow' },
  { name: 'Twilio', logo: 'https://cdn.simpleicons.org/twilio' },
  { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira' },
  { name: 'Intercom', logo: 'https://cdn.simpleicons.org/intercom' },
];

const bottomRowTools: Tool[] = [
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Zendesk', logo: 'https://cdn.simpleicons.org/zendesk' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce' },
  { name: 'Trello', logo: 'https://cdn.simpleicons.org/trello' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Dropbox', logo: 'https://cdn.simpleicons.org/dropbox' },
  { name: 'Mailchimp', logo: 'https://cdn.simpleicons.org/mailchimp' },
  { name: 'Discord', logo: 'https://cdn.simpleicons.org/discord' },
  { name: 'Google Forms', logo: 'https://cdn.simpleicons.org/googleforms' },
  { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana' },
  { name: 'Todoist', logo: 'https://cdn.simpleicons.org/todoist' },
  { name: 'AdSense', logo: 'https://cdn.simpleicons.org/googleadsense' },
  { name: 'ChatGPT', logo: 'https://cdn.simpleicons.org/openai' },
  { name: 'Square', logo: 'https://cdn.simpleicons.org/square' },
];

// --- Reusable Visual Components (Now Theme-Aware) ---
const SalesVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center p-2">
    <div className="w-full max-w-xs space-y-3">
      {['Lead Analysis', 'Personalization', 'Conversion'].map((step, i) => (
        <motion.div
          key={step}
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.3, duration: 0.6 }}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{
              background:
                'linear-gradient(to bottom right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
            }}
          >
            {i + 1}
          </div>
          <div
            className="h-1.5 flex-1 rounded-full"
            style={{
              background:
                'linear-gradient(to right, hsl(var(--color-accent-primary) / 0.2), hsl(var(--color-accent-secondary) / 0.2))',
            }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{
                background:
                  'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
              }}
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: i * 0.3 + 0.3, duration: 0.8 }}
            />
          </div>
          <span
            className="text-xs font-medium"
            style={{ color: 'hsl(var(--color-accent-primary))' }}
          >
            {step}
          </span>
        </motion.div>
      ))}
    </div>
  </div>
);

const MarketingVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center p-2">
    <div className="relative h-28 w-28">
      <motion.div
        className="flex h-28 w-28 items-center justify-center rounded-2xl"
        style={{
          background:
            'linear-gradient(to bottom right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
        }}
        animate={{
          rotate: [0, 3, -3, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <span className="text-4xl">📊</span>
      </motion.div>

      {/* Surrounding marketing elements */}
      {['📧', '📱', '🎯', '📈'].map((icon, i) => (
        <motion.div
          key={icon}
          className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br text-sm"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) translate(${Math.cos((i * 90 * Math.PI) / 180) * 60}px, ${Math.sin((i * 90 * Math.PI) / 180) * 60}px)`,
            background:
              'linear-gradient(to bottom right, hsl(var(--color-accent-primary) / 0.8), hsl(var(--color-accent-secondary) / 0.8))',
          }}
          animate={{
            y: [0, -5, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  </div>
);

const OperationsVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center p-2">
    <div className="relative h-32 w-40">
      {/* Central Processing Node */}
      <motion.div
        className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        style={{
          borderColor: 'hsl(var(--color-accent-primary) / 0.8)',
          background:
            'linear-gradient(to bottom right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
        }}
        animate={{
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 0 0 hsl(var(--color-accent-primary) / 0.4)',
            '0 0 0 8px hsl(var(--color-accent-primary) / 0)',
            '0 0 0 0 hsl(var(--color-accent-primary) / 0)',
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Input Nodes */}
      {[
        { x: 10, y: 16, delay: 0 },
        { x: 10, y: 60, delay: 0.3 },
        { x: 10, y: 104, delay: 0.6 },
      ].map((node, i) => (
        <motion.div
          key={`input-${i}`}
          className="absolute h-4 w-4 rounded-full bg-gradient-to-br"
          style={{
            left: node.x,
            top: node.y,
            background:
              'linear-gradient(to bottom right, hsl(var(--color-accent-primary) / 0.9), hsl(var(--color-accent-secondary) / 0.9))',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.delay, duration: 0.5 }}
        />
      ))}

      {/* Output Nodes */}
      {[
        { x: 136, y: 16, delay: 1 },
        { x: 136, y: 60, delay: 1.3 },
        { x: 136, y: 104, delay: 1.6 },
      ].map((node, i) => (
        <motion.div
          key={`output-${i}`}
          className="absolute h-4 w-4 rounded-full bg-gradient-to-br"
          style={{
            left: node.x,
            top: node.y,
            background:
              'linear-gradient(to bottom right, hsl(var(--color-accent-secondary) / 0.9), hsl(var(--color-accent-primary) / 0.9))',
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: node.delay, duration: 0.5 }}
        />
      ))}

      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full">
        {[24, 68, 112].map((y, i) => (
          <motion.path
            key={`input-line-${i}`}
            d={`M 26 ${y} Q 50 ${y} 76 64`}
            stroke="hsl(var(--color-accent-primary) / 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.3 + 0.2, duration: 0.8 }}
          />
        ))}
        {[24, 68, 112].map((y, i) => (
          <motion.path
            key={`output-line-${i}`}
            d={`M 92 64 Q 116 64 136 ${y}`}
            stroke="hsl(var(--color-accent-primary) / 0.6)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: i * 0.3 + 1.2, duration: 0.8 }}
          />
        ))}
      </svg>

      {/* Data flow animation */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: 'hsl(var(--color-accent-primary) / 0.8)' }}
        animate={{
          x: [26, 76, 92, 136],
          y: [24, 64, 64, 24],
          opacity: [0, 1, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
      />
    </div>
  </div>
);

// --- Main Component ---
export const ValueProposition = () => {
  return (
    <section
      id="businesses"
      className="relative overflow-hidden bg-gradient-to-b from-[hsl(var(--color-background-secondary))] to-[hsl(var(--color-background-primary))] py-16 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          level="h2"
          description="Transform your business operations with custom AI solutions that deliver measurable results and competitive advantage."
        >
          <span>For </span>
          <span
            className="bg-gradient-to-r bg-clip-text text-transparent"
            style={{
              backgroundImage:
                'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
            }}
          >
            SMBs and Startups
          </span>
        </SectionHeading>

        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3 lg:gap-16">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group" // The 'group' class triggers the hover effect
            >
              {/* === CARD WITH GLOW EFFECT === */}
              <div className="card-glow-container h-full rounded-2xl">
                <motion.div
                  className="relative h-full rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-colors duration-300 group-hover:border-[hsl(var(--color-accent-primary)_/_0.5)] sm:p-8"
                  style={{
                    backgroundColor: 'hsl(var(--color-background-secondary))',
                    borderColor: 'hsl(var(--color-border-primary))',
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className="flex h-full flex-col">
                    {/* Visual Section */}
                    <div
                      className="mb-6 flex h-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border"
                      style={{
                        borderColor: 'hsl(var(--color-border-secondary))',
                        backgroundColor:
                          'hsl(var(--color-background-tertiary))',
                      }}
                    >
                      {solution.visual === 'sales' && <SalesVisual />}
                      {solution.visual === 'marketing' && <MarketingVisual />}
                      {solution.visual === 'operations' && <OperationsVisual />}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col">
                      <motion.h3
                        className="mb-4 flex-shrink-0 text-xl font-bold sm:text-2xl"
                        style={{ color: 'hsl(var(--color-text-primary))' }}
                      >
                        {solution.title}
                        <span
                          className="block bg-gradient-to-r bg-clip-text text-base text-transparent sm:text-lg"
                          style={{
                            backgroundImage:
                              'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
                          }}
                        >
                          {solution.subtitle}
                        </span>
                      </motion.h3>
                      <div className="mb-4 min-h-24 flex-1 sm:min-h-28">
                        <div
                          className="text-sm leading-relaxed sm:text-base"
                          style={{ color: 'hsl(var(--color-text-secondary))' }}
                        >
                          <FormattedList content={solution.description} />
                        </div>
                      </div>
                      <div className="flex-shrink-0 space-y-4">
                        <h5
                          className="text-center text-xs font-semibold tracking-wide uppercase"
                          style={{ color: 'hsl(var(--color-text-primary))' }}
                        >
                          Key Impact
                        </h5>
                        <div className="flex flex-wrap justify-center gap-2">
                          {solution.impact.map((metric, i) => (
                            <motion.span
                              key={metric}
                              className="rounded-full border border-current bg-gradient-to-r from-[hsl(var(--color-accent-primary)_/_0.2)] to-[hsl(var(--color-accent-secondary)_/_0.2)] px-2 py-1 text-xs font-medium sm:px-3"
                              style={{
                                color: 'hsl(var(--color-text-primary))',
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              {metric}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl sm:px-10 sm:py-4 sm:text-lg"
            style={{
              backgroundImage:
                'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
              filter: 'brightness(1.1)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Your Free AI Assessment</span>
            <motion.svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        {/* Integration Component */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            level="h3"
            description="Connect your existing workflow seamlessly. Our AI enhances the tools you already love."
          >
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(to right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
              }}
            >
              Seamless Integration
            </span>
            <span style={{ color: 'hsl(var(--color-text-primary))' }}>
              {' '}
              with Your Favorite Tools
            </span>
          </SectionHeading>

          <div className="relative mt-8 overflow-hidden">
            <div
              className="relative rounded-2xl border p-8 backdrop-blur-sm"
              style={{
                borderColor: 'hsl(var(--color-border-primary))',
                background:
                  'linear-gradient(to bottom right, hsl(var(--color-background-secondary) / 0.02), hsl(var(--color-background-secondary) / 0.06))',
              }}
            >
              {/* Top Row - Slides Right */}
              <div className="mb-8">
                <motion.div
                  className="flex items-center gap-8"
                  animate={{ x: [0, -100, 0] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {topRowTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="group relative flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-16 w-16 transition-all duration-300 hover:scale-110">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          unoptimized // This tells Next.js to serve the SVG as-is
                          className="object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <motion.p
                        className="mt-2 text-center text-xs font-medium transition-colors duration-300"
                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {tool.name}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Row - Slides Left */}
              <div className="mb-8">
                <motion.div
                  className="flex items-center gap-8"
                  animate={{ x: [0, 100, 0] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {bottomRowTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="group relative flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-16 w-16 transition-all duration-300 hover:scale-110">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          fill
                          unoptimized // This tells Next.js to serve the SVG as-is
                          className="object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <motion.p
                        className="mt-2 text-center text-xs font-medium transition-colors duration-300"
                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + index * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        {tool.name}
                      </motion.p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Integration Count Badge */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 backdrop-blur-sm"
                  style={{
                    borderColor: 'hsl(var(--color-accent-primary) / 0.2)',
                    background:
                      'linear-gradient(to right, hsl(var(--color-accent-primary) / 0.1), hsl(var(--color-accent-secondary) / 0.1))',
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ backgroundColor: '#4ade80' }}
                  ></div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: '#4ade80' }}
                  >
                    200+ Integrations
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: 'hsl(var(--color-text-secondary))' }}
                  >
                    Endless Possibilities
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
