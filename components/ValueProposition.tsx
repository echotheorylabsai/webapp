'use client';

import { motion } from 'framer-motion';

export const ValueProposition = () => {
  const businessSolutions = [
    {
      id: 'sales-acceleration',
      title: 'Sales Acceleration',
      subtitle: 'AI-Powered Lead Intelligence and Customer Acquisition',
      description:
        'AI transforms SMB sales from manual outreach to automated, data-driven pipelines. PwC forecasts AI could boost closing rates by 30%. Our solutions revolutionize:<br/><br/><ul class="list-disc list-inside space-y-1 ml-2"><li><b>Lead management</b></li><li><b>Customer Acquisition</b></li><li><b>Personalized Outreach</b></li><li><b>24/7 Sales Engagement</b></li><li><b>Customer Retention</b></li></ul>',
      impact: [
        '+35% quota achievement',
        '+30% conversion rates',
        '+20% revenue growth',
      ],
      accentColor: 'from-purple-500 to-indigo-500',
      visual: 'sales',
    },
    {
      id: 'marketing-intelligence',
      title: 'Marketing Intelligence',
      subtitle: 'Competitive Analysis and Campaign Optimization',
      description:
        '32.6% of small business owners now use AI for data analysis to generate business insights, improve customer satisfaction. Our marketing intelligence platform provides:<br/><br/><ul class="list-disc list-inside space-y-1 ml-2"><li><b>Advanced Business Analytics</b></li><li><b>Predictive Customer Insights</b></li><li><b>Personalized Content Creation</b></li><li><b>Competition Analysis</b></li><li><b>Pricing Optimization Strategies</b></li></ul>',
      impact: [
        '+40% engagement rates',
        '+50% ROI improvement',
        '+30% customer retention',
      ],
      accentColor: 'from-indigo-500 to-purple-500',
      visual: 'marketing',
    },
    {
      id: 'operations-automation',
      title: 'Back-office Automation',
      subtitle: 'Streamline Your Operations and Customer Service',
      description:
        'Operational transformation is the biggest advantage for resource-constrained small businesses—87% of SMB founders say entrepreneurs wear multiple hats. Our solutions streamline:<br/><br/><ul class="list-disc list-inside space-y-1 ml-2"><li><b>Administrative Task Automation</b></li><li><b>Resource Allocation Optimization</b></li><li><b>Supply Chain and Logistics</b></li><li><b>Inventory management systems</b></li><li><b>Customer Service Operations</b></li></ul>',
      impact: [
        '+40% productivity boost',
        '+50% cost reduction',
        '+60% automation rate',
      ],
      accentColor: 'from-purple-500 to-blue-500',
      visual: 'operations',
    },
  ];

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
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-sm font-bold text-white">
              {i + 1}
            </div>
            <div className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: i * 0.3 + 0.3, duration: 0.8 }}
              />
            </div>
            <span className="text-xs font-medium text-purple-100">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const MarketingVisual = () => (
    <div className="relative flex h-full w-full items-center justify-center p-2">
      <div className="relative h-28 w-28">
        <motion.div
          className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500"
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
            className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-300 to-purple-300 text-sm"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translate(${Math.cos((i * 90 * Math.PI) / 180) * 60}px, ${Math.sin((i * 90 * Math.PI) / 180) * 60}px)`,
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
          className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-purple-300 bg-gradient-to-br from-purple-500 to-blue-500"
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              '0 0 0 0 rgba(147, 51, 234, 0.4)',
              '0 0 0 8px rgba(147, 51, 234, 0)',
              '0 0 0 0 rgba(147, 51, 234, 0)',
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
            className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400"
            style={{ left: node.x, top: node.y }}
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
            className="absolute h-4 w-4 rounded-full bg-gradient-to-br from-purple-400 to-blue-400"
            style={{ left: node.x, top: node.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay, duration: 0.5 }}
          />
        ))}

        {/* Connection Lines */}
        <svg className="absolute inset-0 h-full w-full">
          {/* Input to center connections */}
          {[24, 68, 112].map((y, i) => (
            <motion.path
              key={`input-line-${i}`}
              d={`M 26 ${y} Q 50 ${y} 76 64`}
              stroke="rgba(147, 51, 234, 0.6)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="3,2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: i * 0.3 + 0.2, duration: 0.8 }}
            />
          ))}
          {/* Center to output connections */}
          {[24, 68, 112].map((y, i) => (
            <motion.path
              key={`output-line-${i}`}
              d={`M 92 64 Q 116 64 136 ${y}`}
              stroke="rgba(147, 51, 234, 0.6)"
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
          className="absolute h-1.5 w-1.5 rounded-full bg-purple-300"
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

  return (
    <section
      id="businesses"
      className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black py-16 sm:py-24 lg:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(107, 114, 128, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(107, 114, 128, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="mb-4 text-4xl leading-tight font-black tracking-tight sm:mb-6 sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-white">For </span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Small Business and Startups
            </span>
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-gray-400 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Small Businesses and Startups are leveraging AI to dramatically
            accelerate their business operations, with 39.4% of owners using AI
            primarily for marketing and sales activities.
            <br></br>
            <br></br>
            <strong>
              <i>
                Forbes and Fox Business reports 82% of small businesses believe
                adopting AI is essential to stay competitive, while 91% of SMBs
                using AI report increased revenue and customer satisfaction.
              </i>
            </strong>
            <br></br>
            <br></br>
            Transform your business operations with custom AI solutions that
            deliver measurable results and competitive advantage
          </motion.p>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-3 lg:gap-16">
          {businessSolutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card background glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.accentColor} rounded-3xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* Main card */}
              <motion.div
                className="relative h-full rounded-2xl border border-gray-700/50 bg-gray-800/50 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/70 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-8"
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
              >
                {/* Fixed height container to ensure consistent card heights */}
                <div className="flex h-full flex-col">
                  {/* Visual Section - Fixed height */}
                  <div className="mb-6 flex h-40 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-600/30 bg-gray-700/30">
                    <div className="flex h-full w-full items-center justify-center">
                      {solution.visual === 'sales' && <SalesVisual />}
                      {solution.visual === 'marketing' && <MarketingVisual />}
                      {solution.visual === 'operations' && <OperationsVisual />}
                    </div>
                  </div>

                  {/* Content Section - Flexible height but contained */}
                  <div className="flex flex-1 flex-col">
                    {/* Title and Subtitle - Fixed height */}
                    <motion.h3 className="mb-4 flex-shrink-0 text-xl font-bold text-white sm:text-2xl">
                      {solution.title}
                      <span
                        className={`block bg-gradient-to-r text-base sm:text-lg ${solution.accentColor} bg-clip-text text-transparent`}
                      >
                        {solution.subtitle}
                      </span>
                    </motion.h3>

                    {/* Description - Flexible height but contained */}
                    <div className="mb-4 min-h-[60px] flex-1 sm:min-h-[80px]">
                      <motion.div
                        className="text-sm leading-relaxed text-gray-300 sm:text-base"
                        dangerouslySetInnerHTML={{
                          __html: solution.description,
                        }}
                      />
                    </div>
                    <br></br>

                    {/* Impact metrics and CTA - Fixed height at bottom */}
                    <div className="flex-shrink-0 space-y-4">
                      {/* Impact metrics */}
                      <div className="space-y-2">
                        <h5 className="text-center text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
                          Key Impact
                        </h5>
                        <div className="flex flex-wrap justify-center gap-2">
                          {solution.impact.map((metric, i) => (
                            <motion.span
                              key={metric}
                              className={`rounded-full bg-gradient-to-r px-2 py-1 sm:px-3 ${solution.accentColor} bg-opacity-20 border-opacity-20 border border-current text-xs font-medium text-white`}
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
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-500/25 sm:px-10 sm:py-4 sm:text-lg"
            whileHover={{
              scale: 1.02,
            }}
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
          <div className="mb-8 text-center">
            <motion.h3
              className="mb-3 text-2xl font-bold text-white sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Seamless Integration
              </span>
              <span className="text-white"> with Your Favorite Tools</span>
            </motion.h3>
            <motion.p
              className="mx-auto max-w-2xl text-base text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Connect your existing workflow seamlessly. Our AI enhances the
              tools you already love.
            </motion.p>
          </div>

          {/* Modern Animated Logo Grid */}
          <div className="relative overflow-hidden">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-white/[0.06] p-8 backdrop-blur-sm">
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
                  {[
                    {
                      name: 'Gmail',
                      logo: 'https://cdn.simpleicons.org/gmail',
                    },
                    {
                      name: 'OpenAI',
                      logo: 'https://cdn.simpleicons.org/openai',
                    },
                    {
                      name: 'Facebook',
                      logo: 'https://cdn.simpleicons.org/facebook',
                    },
                    {
                      name: 'Google Drive',
                      logo: 'https://cdn.simpleicons.org/googledrive',
                    },
                    {
                      name: 'Notion',
                      logo: 'https://cdn.simpleicons.org/notion',
                    },
                    {
                      name: 'Google Sheets',
                      logo: 'https://cdn.simpleicons.org/googlesheets',
                    },
                    {
                      name: 'Slack',
                      logo: 'https://cdn.simpleicons.org/slack',
                    },
                    {
                      name: 'Zoho',
                      logo: 'https://cdn.simpleicons.org/zoho',
                    },
                    {
                      name: 'Calendly',
                      logo: 'https://cdn.simpleicons.org/calendly',
                    },
                    {
                      name: 'Webflow',
                      logo: 'https://cdn.simpleicons.org/webflow',
                    },
                    {
                      name: 'Twilio',
                      logo: 'https://cdn.simpleicons.org/twilio',
                    },
                    {
                      name: 'Jira',
                      logo: 'https://cdn.simpleicons.org/jira',
                    },
                    {
                      name: 'Intercom',
                      logo: 'https://cdn.simpleicons.org/intercom',
                    },
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="group relative flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-16 w-16 transition-all duration-300 hover:scale-110">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <motion.p
                        className="mt-2 text-center text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:text-white"
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
                  {[
                    {
                      name: 'Stripe',
                      logo: 'https://cdn.simpleicons.org/stripe',
                    },
                    {
                      name: 'Zendesk',
                      logo: 'https://cdn.simpleicons.org/zendesk',
                    },
                    {
                      name: 'Shopify',
                      logo: 'https://cdn.simpleicons.org/shopify',
                    },
                    {
                      name: 'Salesforce',
                      logo: 'https://cdn.simpleicons.org/salesforce',
                    },
                    {
                      name: 'Trello',
                      logo: 'https://cdn.simpleicons.org/trello',
                    },
                    {
                      name: 'HubSpot',
                      logo: 'https://cdn.simpleicons.org/hubspot',
                    },
                    {
                      name: 'Dropbox',
                      logo: 'https://cdn.simpleicons.org/dropbox',
                    },
                    {
                      name: 'Mailchimp',
                      logo: 'https://cdn.simpleicons.org/mailchimp',
                    },
                    {
                      name: 'Discord',
                      logo: 'https://cdn.simpleicons.org/discord',
                    },
                    {
                      name: 'Google Forms',
                      logo: 'https://cdn.simpleicons.org/googleforms',
                    },
                    {
                      name: 'Asana',
                      logo: 'https://cdn.simpleicons.org/asana',
                    },
                    {
                      name: 'Todoist',
                      logo: 'https://cdn.simpleicons.org/todoist',
                    },
                    {
                      name: 'AdSense',
                      logo: 'https://cdn.simpleicons.org/googleadsense',
                    },
                    {
                      name: 'ChatGPT',
                      logo: 'https://cdn.simpleicons.org/openai',
                    },
                    {
                      name: 'Square',
                      logo: 'https://cdn.simpleicons.org/square',
                    },
                  ].map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      className="group relative flex-shrink-0"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative h-16 w-16 transition-all duration-300 hover:scale-110">
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="h-full w-full object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
                        />
                      </div>
                      <motion.p
                        className="mt-2 text-center text-xs font-medium text-gray-300 transition-colors duration-300 group-hover:text-white"
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
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-2 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium text-green-400">
                    200+ Integrations
                  </span>
                  <span className="text-sm text-gray-300">
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
