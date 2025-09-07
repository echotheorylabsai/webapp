'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FormattedText } from './FormattedList';
import { SectionHeading } from './SectionHeading';

// --- TYPE DEFINITIONS ---
type ProfessionalTrackId = 'sales' | 'marketing' | 'engineering';

interface ProfessionalTrack {
  id: ProfessionalTrackId;
  title: string;
  subtitle: string;
  description: string;
  keySkills: string[];
  icon: string;
}

interface ApproachFeature {
  title: string;
  description: string;
  icon: string;
}

// --- DATA CONSTANTS ---
const professionalTracks: ProfessionalTrack[] = [
  {
    id: 'sales',
    title: 'Sales Professionals',
    subtitle: 'AI-Powered Sales Excellence',
    description:
      'Gen AI and agentic workflows have shifted sales from manual grunt work to strategic relationship-building, with Bain reporting potential 20-30% conversion boosts by freeing up 40% of selling time.<br> Transform your sales process with AI that enhances your existing workflows.',
    keySkills: [
      'Lead Generation and Qualification',
      'Hyper-Personalized Outreach',
      'AI Tools Integration',
      'Sales Forecasting',
      'Post-Sale Support',
      'Data Analysis and Interpretation',
    ],
    icon: '/sales.png',
  },
  {
    id: 'marketing',
    title: 'Marketing Professionals',
    subtitle: 'Intelligent Campaign Mastery',
    description:
      'AI-enhanced processes can reduce total campaign development time from 264 hours to 88 hours - a 67% improvement. Elevate your marketing with AI that complements your current strategies. <br>Master content generation, audience segmentation, and campaign optimization.',
    keySkills: [
      'Content Creation',
      'Campaign Optimization',
      'Predictive Customer Insights',
      'Audience Segmentation',
      'Social Media/SEO Management',
      'Prompt Engineering',
      'Agentic Workflows',
    ],
    icon: '/marketing.png',
  },
  {
    id: 'engineering',
    title: 'Software Engineers',
    subtitle: 'Agentic Software Development',
    description:
      'Software engineering has seen explosive AI adoption: 90% of engineering teams now use AI coding tools, up from 61% with a 25% increase in productivity. <br>Upskill and supercharge your career with Gen AI tools and gain a competitive edge in the job market.',
    keySkills: [
      'AI Engineering',
      'Advanced Prompt Engineering',
      'Context Engineering',
      'AI-Assisted Coding',
      'SWE Agents',
      'AI Agents',
      'Multi-Agentic Systems',
      'RAG',
      'Evaluation and Refinement',
    ],
    icon: '/engineer.png',
  },
];

const approachFeatures: ApproachFeature[] = [
  {
    title: 'Personalized Learning Paths',
    description:
      'No one-size-fits-all. We analyze your current workflow and create custom training that enhances what you already do.',
    icon: '🎯',
  },
  {
    title: 'Workflow Integration',
    description:
      'Learn AI tools that seamlessly integrate with your existing processes, not replace them. Design Thinking with AI and embedding them into your existing workflows.',
    icon: '🔗',
  },
  {
    title: 'Practical Application',
    description:
      'Real-world projects using your actual work scenarios, ensuring immediate productivity gains. Get hands-on experience with AI tools and workflows.',
    icon: '💼',
  },
];

// --- FRAMER MOTION VARIANTS ---
const glowVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 0.15, transition: { duration: 0.3 } },
};

const borderVariants = {
  initial: { borderColor: 'hsl(var(--color-border-primary))' },
  hover: {
    borderColor: 'hsl(var(--color-accent-primary) / 0.5)',
    transition: { duration: 0.3 },
  },
};

// --- MAIN COMPONENT ---
export const ServicesOverview = () => {
  return (
    <section
      id="professionals"
      className="from-background-primary to-background-secondary bg-gradient-to-b px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          level="h2"
          description="Personalized AI training that enhances your existing workflows, not replaces them. Learn the latest GenAI and Agentic solutions relevant to your role."
        >
          <span>For </span>
          <span className="text-gradient-primary">Professionals</span>
        </SectionHeading>

        <div className="mb-16 sm:mb-24">
          <SectionHeading level="h3">Choose Your Path</SectionHeading>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {professionalTracks.map((track, index) => (
              <motion.div
                key={track.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="card-glow-radial h-full rounded-3xl">
                  {/* --- THIS IS THE FINAL CORRECTED IMPLEMENTATION --- */}
                  <motion.div
                    className="card-modern group-hover:border-accent-primary/50 relative h-full rounded-3xl p-6 transition-colors duration-300 sm:p-8"
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.3, ease: 'easeOut' },
                    }}
                  >
                    <div className="flex h-full flex-col">
                      <div className="mb-6 flex-shrink-0 text-center">
                        <div className="from-accent-primary to-accent-secondary shadow-modern-lg relative mb-4 h-48 w-full overflow-hidden rounded-2xl bg-gradient-to-br sm:h-56">
                          <Image
                            src={track.icon}
                            alt={`${track.title} icon`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <h4 className="text-primary mb-2 text-xl font-bold sm:text-2xl">
                          {track.title}
                        </h4>
                        <p className="text-gradient-primary text-base font-semibold sm:text-lg">
                          {track.subtitle}
                        </p>
                      </div>

                      <div className="mb-6 flex min-h-24 flex-1 items-center sm:min-h-28">
                        <div className="text-secondary text-center text-sm leading-relaxed sm:text-base">
                          <FormattedText text={track.description} />
                        </div>
                      </div>

                      <div className="mb-6 flex-shrink-0 space-y-3">
                        <h5 className="text-primary text-center text-xs font-semibold tracking-wide uppercase sm:text-sm">
                          Key Skills You&apos;ll Master
                        </h5>
                        <div className="flex flex-wrap justify-center gap-2">
                          {track.keySkills.map((skill, i) => (
                            <motion.span
                              key={skill}
                              className="from-accent-primary/20 to-accent-secondary/20 text-primary rounded-full border border-current bg-gradient-to-r px-2 py-1 text-xs font-medium sm:px-3"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                              viewport={{ once: true }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <SectionHeading level="h3">Why Our Approach Works</SectionHeading>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {approachFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                className="relative"
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 },
                  },
                }}
                whileInView="animate"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={glowVariants}
                  className="absolute inset-[-1rem] z-[-1] rounded-2xl"
                  style={{
                    background:
                      'radial-gradient(circle at center, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
                    filter: 'blur(2.5rem)',
                  }}
                />
                <motion.div
                  variants={borderVariants}
                  className="card-modern shadow-modern-lg backdrop-blur-modern relative h-full rounded-2xl p-6"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex-shrink-0 text-center text-3xl sm:text-4xl">
                      {feature.icon}
                    </div>
                    <h4 className="text-primary mb-3 flex-shrink-0 text-center text-lg font-bold sm:text-xl">
                      {feature.title}
                    </h4>
                    <div className="flex min-h-24 flex-1 items-center sm:min-h-28">
                      <p className="text-secondary text-center text-sm leading-relaxed sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
