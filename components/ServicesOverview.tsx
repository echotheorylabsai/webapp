'use client';

import { motion } from 'framer-motion';

export const ServicesOverview = () => {
  const professionalTracks = [
    {
      id: 'sales',
      title: 'Sales Professionals',
      subtitle: 'AI-Powered Sales Excellence',
      description:
        'Gen AI and agentic workflows have shifted sales from manual grunt work to strategic relationship-building, with Bain reporting <b>potential 20-30% conversion boosts by freeing up 40% of selling time.</b><br> Transform your sales process with AI that enhances your existing workflows.',
      keySkills: [
        'Lead Generation and Qualification',
        'Hyper-Personalized Outreach',
        'AI Tools Integration',
        'Sales Forecasting',
        'Post-Sale Support',
        'Data Analysis and Interpretation',
      ],
      icon: '/sales.png',
      accentColor: 'from-blue-500 to-indigo-500',
      gradient: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 'marketing',
      title: 'Marketing Professionals',
      subtitle: 'Intelligent Campaign Mastery',
      description:
        'AI-enhanced processes <b>can reduce total campaign development time from 264 hours to 88 hours - a 67% improvement.</b> Elevate your marketing with AI that complements your current strategies. <br>Master content generation, audience segmentation, and campaign optimization.',
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
      accentColor: 'from-indigo-500 to-purple-500',
      gradient: 'from-indigo-500/20 to-purple-500/20',
    },
    {
      id: 'engineering',
      title: 'Software Engineers',
      subtitle: 'Agentic Software Development',
      description:
        'Software engineering has seen explosive AI adoption: <b>90% of engineering teams now use AI coding tools, up from 61% with a 25% increase in productivity.</b> <br>Upskill and supercharge your career with Gen AI tools and gain a competitive edge in the job market.',
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
      accentColor: 'from-purple-500 to-blue-500',
      gradient: 'from-purple-500/20 to-blue-500/20',
    },
  ];

  const approachFeatures = [
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

  return (
    <section
      id="professionals"
      className="bg-gradient-to-b from-black to-gray-900 px-4 py-16 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-20"
        >
          <motion.h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:mb-6 sm:text-5xl lg:text-6xl">
            <span className="text-white">For </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professionals
            </span>
          </motion.h2>
          <motion.p className="mx-auto max-w-3xl px-4 text-lg leading-relaxed font-light text-gray-300 sm:text-xl">
            Personalized AI training that enhances your existing workflows, not
            replaces them. Learn the latest GenAI and Agentic solutions relevant
            to your role.
          </motion.p>
        </motion.div>

        {/* Professional Tracks */}
        <div className="mb-16 sm:mb-24">
          <motion.h3
            className="mb-12 text-center text-2xl font-bold text-white sm:mb-16 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Choose Your Path
          </motion.h3>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {professionalTracks.map((track, index) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${track.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`}
                />

                {/* Main card */}
                <div className="relative h-full rounded-3xl border border-gray-700/50 bg-gray-900/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/80 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8">
                  {/* Fixed height container to ensure consistent card heights */}
                  <div className="flex h-full flex-col">
                    {/* Header Section - Fixed height */}
                    <div className="mb-6 flex-shrink-0 text-center">
                      <div
                        className={`h-48 w-full rounded-2xl bg-gradient-to-br sm:h-56 ${track.accentColor} mb-4 overflow-hidden shadow-lg`}
                      >
                        <img
                          src={track.icon}
                          alt={track.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h4 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                        {track.title}
                      </h4>
                      <p
                        className={`bg-gradient-to-r text-base sm:text-lg ${track.accentColor} bg-clip-text font-semibold text-transparent`}
                      >
                        {track.subtitle}
                      </p>
                    </div>

                    {/* Description Section - Flexible height but contained */}
                    <div className="mb-6 flex min-h-[80px] flex-1 items-center sm:min-h-[100px]">
                      <div
                        className="text-center text-sm leading-relaxed text-gray-300 sm:text-base"
                        dangerouslySetInnerHTML={{ __html: track.description }}
                      />
                    </div>

                    {/* Key Skills Section - Fixed height */}
                    <div className="mb-6 flex-shrink-0 space-y-3">
                      <h5 className="text-center text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
                        Key Skills You&apos;ll Master
                      </h5>
                      <div className="flex flex-wrap justify-center gap-2">
                        {track.keySkills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            className={`rounded-full bg-gradient-to-r px-2 py-1 sm:px-3 ${track.accentColor} bg-opacity-20 border-opacity-20 border border-current text-xs font-medium text-white`}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="text-center">
          <motion.h3
            className="mb-12 text-2xl font-bold text-white sm:mb-16 sm:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Our Approach Works
          </motion.h3>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {approachFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-gray-600/50 hover:bg-gray-800/70 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* Fixed height container for consistent alignment */}
                  <div className="flex h-full flex-col">
                    {/* Icon Section - Fixed height */}
                    <div className="mb-4 flex-shrink-0 text-center text-3xl sm:text-4xl">
                      {feature.icon}
                    </div>

                    {/* Title Section - Fixed height */}
                    <h4 className="mb-3 flex-shrink-0 text-center text-lg font-bold text-white sm:text-xl">
                      {feature.title}
                    </h4>

                    {/* Description Section - Flexible height but contained */}
                    <div className="flex min-h-[80px] flex-1 items-center sm:min-h-[100px]">
                      <p className="text-center text-sm leading-relaxed text-gray-300 sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 sm:px-10 sm:py-4 sm:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Get Your Personalized Training Plan</span>
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
      </div>
    </section>
  );
};
