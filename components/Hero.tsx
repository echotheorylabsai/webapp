'use client';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 sm:py-24 lg:py-32"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Main content - Side by side layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight font-black tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
                Harness AI,
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Lead the next wave.
                </span>
              </h1>

              <p className="max-w-lg text-lg leading-relaxed font-light text-purple-100 sm:text-xl">
                Get personalized AI training that future-proofs careers and
                transforms business operations.
                <br></br>
                <br></br>
                From professionals and job seekers breaking into competitive
                markets to small-businesses and startups automating for growth—
                master latest AI tools and agentic workflows that will make you
                irreplaceable in an intelligence-driven world.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-bold text-purple-900 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 sm:px-8 sm:py-4 sm:text-lg"
              >
                Start Free Assessment
              </a>
              <a
                href="#professionals"
                className="inline-flex items-center justify-center rounded-2xl border-2 border-white/20 px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 scale-110 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-20 blur-3xl" />

            {/* Main video container */}
            <div className="relative overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-800/50 to-blue-800/50 shadow-2xl backdrop-blur-sm">
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
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  );
};
