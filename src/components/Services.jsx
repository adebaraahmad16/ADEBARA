export default function Services() {
  const services = [
    {
      title: 'Frontend Development',
      badge: 'Core Focus',
      description:
        'Building responsive, fast, and accessible single-page web applications with React, modern JavaScript, and clean component architectures.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      deliverables: ['React Single Page Apps', 'Clean Component Libraries', 'API Integration & State'],
    },
    {
      title: 'UI Development',
      badge: 'Visual Precision',
      description:
        'Translating designs and wireframes into pixel-perfect, responsive user interfaces with Tailwind CSS, fluid typography, and micro-interactions.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      deliverables: ['Tailwind CSS Systems', 'Mobile-First Responsiveness', 'Micro-Interactions & A11y'],
    },
    {
      title: 'Technology Training',
      badge: 'Education & Mentorship',
      description:
        'Delivering structured coding bootcamps, workshops, and digital literacy curricula for schools, youth programmes, and aspiring developers.',
      icon: (
        <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      deliverables: ['Hands-on Web Bootcamps', 'Student Hackathon Coaching', 'Digital Literacy Modules'],
    },
    {
      title: 'Digital Product Development',
      badge: 'End-to-End Delivery',
      description:
        'Collaborating from initial problem definition and user flow mapping to building functional, testable frontend web applications.',
      icon: (
        <svg className="w-6 h-6 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      deliverables: ['Prototype to MVP Builds', 'Agricultural & Community Tech', 'E-Commerce Frontends'],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-[#050806] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Professional Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & Expertise
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Focused, high-impact services bridging frontend engineering and digital education.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => (
            <div
              key={srv.title}
              className="p-6 rounded-2xl bg-[#090e0b] border border-emerald-900/30 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-lg hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0e1612] border border-emerald-800/30 flex items-center justify-center">
                    {srv.icon}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#0f1712] text-neutral-300 border border-neutral-800">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {srv.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <ul className="space-y-1.5">
                  {srv.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
