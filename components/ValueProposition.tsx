'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FormattedList } from './FormattedList';
import { SectionHeading } from './SectionHeading';

// --- Type Definitions ---
type SolutionId = 'assess-and-plan' | 'echo-intelligence' | 'command-center';

interface BusinessSolution {
  id: SolutionId;
  title: string;
  subtitle: string;
  description: string;
  impact: string[];
  visual: 'assessment' | 'platform' | 'scale';
}

interface Tool {
  name: string;
  logo: string;
}

// --- Data (Now Pure and Style-Free) ---
const businessSolutions: BusinessSolution[] = [
  {
    id: 'assess-and-plan',
    title: 'AI Readiness Assessment',
    subtitle: 'Start Your AI Support Journey in 15 Minutes',
    description:
      'Begin with our free diagnostic tool that maps your path to AI support transformation:<ul class="list-disc list-inside space-y-1 ml-2"><li>Support Volume Analysis</li><li>Tech Stack Compatibility</li><li>Knowledge Base Evaluation</li><li>Implementation Roadmap</li><li>Custom ROI Calculator</li></ul>',
    impact: [
      'Clear Implementation Path',
      'Accurate Cost Projection',
      'Custom Success Metrics'
    ],
    visual: 'assessment',
  },
  {
    id: 'echo-intelligence',
    title: '4-Week Implementation',
    subtitle: 'Echo Intelligence Platform & Engineering',
    description:
      'Our engineering team delivers a complete AI support solution in max 4 weeks:<ul class="list-disc list-inside space-y-1 ml-2"><li>Knowledge Base Optimization</li><li>Custom AI Model Training</li><li>Integration Orchestra Setup</li><li>Workflow Automation</li><li>Production Deployment</li></ul>',
    impact: [
      '4-week delivery guarantee',
      'No retainers or lock-ins',
      'ROI within 30 days'
    ],
    visual: 'platform',
  },
  {
    id: 'command-center',
    title: 'Scale & Optimize',
    subtitle: 'Your AI Command Center',
    description:
      'Monitor, control, and scale your AI support operations from day one:<ul class="list-disc list-inside space-y-1 ml-2"><li>Real-time Analytics</li><li>Auto-learning System</li><li>Knowledge Gap Detection</li><li>Cost Controls</li><li>Performance Optimization</li></ul>',
    impact: [
      '60% ticket reduction',
      '24/7 support coverage',
      'Continuous improvement'
    ],
    visual: 'scale',
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
const AssessmentVisual = () => (
  <div className="relative flex h-full w-full items-center justify-center p-2">
    <div className="w-full max-w-xs space-y-3">
      {['Analysis', 'Planning', 'Success'].map((step, i) => (
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

const PlatformVisual = () => (
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

const ScaleVisual = () => (
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
    id="platform"
      className="from-background-secondary to-background-primary relative overflow-hidden bg-gradient-to-b py-16 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          level="h2"
          description="Raleigh's premier AI engineering lab, purpose-built for ambitious Series A/B companies. We turn support from a cost center into your technological edge."
        >
          <span>Engineering </span>
          <span className="text-gradient-primary">New AI Realities</span>
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
              <div className="card-glow-radial h-full rounded-2xl">
                <motion.div
                  className="card-modern group-hover:border-accent-primary/50 relative h-full rounded-2xl p-6 transition-colors duration-300 sm:p-8"
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: 'easeOut' },
                  }}
                >
                  <div className="flex h-full flex-col">
                    {/* Visual Section */}
                    <div className="border-secondary bg-background-tertiary mb-6 flex h-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border">
                      {solution.visual === 'assessment' && <AssessmentVisual />}
                      {solution.visual === 'platform' && <PlatformVisual />}
                      {solution.visual === 'scale' && <ScaleVisual />}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col">
                      <motion.h3 className="text-primary mb-4 flex-shrink-0 text-xl font-bold sm:text-2xl">
                        {solution.title}
                        <span className="text-gradient-primary block text-base sm:text-lg">
                          {solution.subtitle}
                        </span>
                      </motion.h3>
                      <div className="mb-4 min-h-24 flex-1 sm:min-h-28">
                        <div className="text-secondary text-sm leading-relaxed sm:text-base">
                          <FormattedList content={solution.description} />
                        </div>
                      </div>
                      <div className="flex-shrink-0 space-y-4">
                        <h5 className="text-primary text-center text-xs font-semibold tracking-wide uppercase">
                          Key Impact
                        </h5>
                        <div className="flex flex-wrap justify-center gap-2">
                          {solution.impact.map((metric, i) => (
                            <motion.span
                              key={metric}
                              className="from-accent-primary/20 to-accent-secondary/20 text-primary rounded-full border border-current bg-gradient-to-r px-2 py-1 text-xs font-medium sm:px-3"
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
            className="btn-primary shadow-modern-lg hover:shadow-modern-xl inline-flex items-center justify-center gap-3 rounded-xl px-8 py-3 text-base font-semibold transition-all duration-200 sm:px-10 sm:py-4 sm:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Take the AI Readiness Assessment</span>
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
            description="Connect your existing workflow seamlessly. Our solutions enhance the tools you already love and integrate with your favorite tools."
          >
            <span className="text-gradient-primary">Seamless Integration</span>
            <span className="text-primary"> with Your Favorite Tools</span>
          </SectionHeading>

          <div className="relative mt-8 overflow-hidden">
            <div className="border-primary backdrop-blur-modern from-background-secondary/2 to-background-secondary/6 relative rounded-2xl border bg-gradient-to-br p-8">
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
                        className="text-secondary mt-2 text-center text-xs font-medium transition-colors duration-300"
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
                        className="text-secondary mt-2 text-center text-xs font-medium transition-colors duration-300"
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
                  className="border-accent-primary/20 backdrop-blur-modern from-accent-primary/10 to-accent-secondary/10 inline-flex items-center gap-2 rounded-xl border bg-gradient-to-r px-4 py-2"
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
                  <span className="text-secondary text-sm">
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
