import ProfileImage from './ProfileImage';

export default function About() {
  const pillars = [
    {
      title: 'Frontend Development',
      badge: 'Engineering',
      badgeColor: 'border-[#27272a] text-[#22c55e] bg-[#1a1a1a]',
      description:
        'Building responsive, accessible web interfaces using React, JavaScript, and Tailwind CSS, focusing on performant component architecture and seamless user journeys.',
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'Technology Education',
      badge: 'Pedagogy',
      badgeColor: 'border-[#27272a] text-[#c9a84c] bg-[#1a1a1a]',
      description:
        'Equipping aspiring coders with practical digital literacy, fundamental computing concepts, and hands-on coding experience that turn curious students into confident builders.',
      icon: (
        <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Innovation & Impact',
      badge: 'Problem Solving',
      badgeColor: 'border-[#27272a] text-[#22c55e] bg-[#1a1a1a]',
      description:
        'Bridging technical implementation with human solutions — guiding teams to build impactful applications from rural healthcare locators to community platforms.',
      icon: (
        <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#111111] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2 inline-block">
            About Adebara
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frontend Development <span className="text-[#22c55e]">+</span> Education <span className="text-[#c9a84c]">+</span> Innovation
          </h2>
          <p className="mt-4 text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
            I combine rigorous frontend development practices with a dedication to digital education. Whether crafting responsive user interfaces or mentoring students toward national innovation challenges, I focus on practical execution and long-term impact.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-[#151515] border border-[#27272a] hover:border-[#166534] transition-colors duration-200 shadow-md"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] border border-[#27272a] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2.5 hover:text-[#c9a84c] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner Callout with Solid Colors (Zero Gradients) */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#151515] border border-[#27272a] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <ProfileImage variant="card" />
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Committed to Modern Web Standards & Next-Gen Talent
              </h4>
              <p className="text-xs sm:text-sm text-[#a1a1aa]">
                Applying clean code principles, accessible UI patterns, and hands-on teaching frameworks.
              </p>
            </div>
          </div>
          <a
            href="#experience"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white text-xs font-semibold border border-[#27272a] transition-colors duration-200 shadow-sm"
          >
            Explore Experience →
          </a>
        </div>
      </div>
    </section>
  );
}
