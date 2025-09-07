'use client';

export const Hero = () => {
  return (
    <section
      id="home"
      // Note: Gradient stops now use theme variables.
      // This requires you to add them to your tailwind.config.js if you want to use them as utilities.
      // For now, we will assume they are mapped correctly.
      className="from-background-primary via-background-primary to-background-secondary relative overflow-hidden bg-gradient-to-br py-16 sm:py-24 lg:py-32"
    >
      {/* Background pattern - Now uses CSS variables for theme-awareness */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-teal-900/20 to-emerald-900/20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, hsl(var(--color-accent-primary) / 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Main content - Side by side layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-primary text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl">
                Harness AI,
                <span className="text-gradient-primary block">
                  Lead the next wave.
                </span>
              </h1>

              <div className="text-secondary space-y-4 text-lg leading-relaxed font-light sm:text-xl">
                <p>
                  Get personalized AI training that future-proofs careers and
                  transforms business operations.
                </p>
                <p>
                  From professionals and job seekers breaking into competitive
                  markets to small-businesses and startups automating for
                  growth— master latest AI tools and agentic workflows that will
                  make you irreplaceable in an intelligence-driven world.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="btn-secondary shadow-modern-lg hover-glow inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
              >
                Start Free Assessment
              </a>
              <a
                href="#professionals"
                className="btn-secondary shadow-modern-lg hover-glow inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            {/* Background glow effect - Now uses theme variables */}
            <div
              className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br opacity-20 blur-3xl"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom right, hsl(var(--color-accent-primary)), hsl(var(--color-accent-secondary)))',
              }}
            />

            {/* Main video container */}
            <div className="border-accent-primary/30 from-background-secondary/50 to-background-tertiary/50 shadow-modern-2xl backdrop-blur-modern relative overflow-hidden rounded-3xl border bg-gradient-to-br">
              <div className="aspect-square w-full">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="from-background-primary/50 absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t to-transparent" />
    </section>
  );
};
