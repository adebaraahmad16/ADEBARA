export default function About() {
  const pillars = [
    {
      title: 'Frontend Development',
      badge: 'Engineering',
      badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
      description:
        'Building responsive, accessible web interfaces using React, JavaScript, and Tailwind CSS, focusing on performant component architecture and seamless user journeys.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Technology Education',
      badge: 'Pedagogy',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-950/40',
      description:
        'Equipping aspiring coders with practical digital literacy, fundamental computing concepts, and hands-on coding experience that turn curious students into confident builders.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Innovation & Impact',
      badge: 'Problem Solving',
      badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-950/40',
      description:
        'Bridging technical implementation with human solutions — guiding teams to build impactful applications from rural healthcare locators to community platforms.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#060a08] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            About Adebara
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frontend Development <span className="text-emerald-400">+</span> Education <span className="text-amber-400">+</span> Innovation
          </h2>
          <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
            I combine rigorous frontend development practices with a dedication to digital education. Whether crafting responsive user interfaces or mentoring students toward national innovation challenges, I focus on practical execution and long-term impact.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group p-6 rounded-2xl bg-[#090e0b] border border-emerald-900/30 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#0d1712] border border-emerald-800/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#09140e] via-[#0b1b13] to-[#09140e] border border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Committed to Modern Web Standards & Next-Gen Talent
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Applying clean code principles, accessible UI patterns, and hands-on teaching frameworks.
            </p>
          </div>
          <a
            href="#experience"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
          >
            Explore Experience →
          </a>
        </div>
      </div>
    </section>
  );
}
