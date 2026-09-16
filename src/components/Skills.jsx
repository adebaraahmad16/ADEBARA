import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const frontendSkills = [
    {
      name: 'HTML5',
      category: 'Frontend',
      badge: 'Core Markup',
      description: 'Semantic structure, accessibility (a11y), SEO-friendly architecture, and modern standards.',
      icon: (
        <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5l2 14 7 3 7-3 2-14-9-3zm6 6h-7.5v2.5H18l-.5 5.5-3.5 1-3.5-1-.2-2h-2.5l.4 3.7 5.8 1.8 5.8-1.8.7-9.7H6V8h12V8z" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      category: 'Frontend',
      badge: 'Styling & Layout',
      description: 'Responsive layouts, Flexbox, CSS Grid, media queries, animations, and modern UI patterns.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 5l2 14 7 3 7-3 2-14-9-3zm5.8 5.5l-.2 2.5H8.2l.2 2.5h8.8l-.5 6-4.7 1.5-4.7-1.5-.3-3.5h2.5l.2 1.5 2.3.7 2.3-.7.3-3.5H6.2l-.6-7.5h12.2z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      badge: 'ES6+ Logic',
      description: 'Modern asynchronous programming, DOM manipulation, functional paradigms, and API handling.',
      icon: (
        <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm10.5 13.5c0 1.4.9 2 2.3 2 1.3 0 2-.6 2-1.7v-4.3h-2v4.2c0 .4-.2.6-.6.6s-.5-.2-.5-.6v-4.2h-2.2v4zm-6.2-1.1c.3.7.8 1.1 1.6 1.1.7 0 1.2-.4 1.2-1 0-.7-.5-.9-1.4-1.3l-.5-.2c-1.3-.6-2.1-1.3-2.1-2.7 0-1.5 1.2-2.7 2.8-2.7 1.3 0 2.2.6 2.7 1.6l-1.3.8c-.3-.5-.7-.8-1.4-.8-.7 0-1.1.4-1.1.9 0 .6.4.8 1.3 1.2l.5.2c1.4.6 2.2 1.4 2.2 2.8 0 1.7-1.3 2.8-3.1 2.8-1.6 0-2.6-.8-3.1-1.9l1.6-.8z" />
        </svg>
      ),
    },
    {
      name: 'React',
      category: 'Frontend',
      badge: 'SPA Architecture',
      description: 'Reusable components, custom hooks, state management, virtual DOM, and modern lifecycle workflows.',
      icon: (
        <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2.2" />
          <path d="M12 2.5c-4.5 0-9 4-9 9.5s4.5 9.5 9 9.5 9-4 9-9.5-4.5-9.5-9-9.5zm0 17c-3.6 0-7.2-3.3-7.2-7.5S8.4 4.5 12 4.5s7.2 3.3 7.2 7.5-3.6 7.5-7.2 7.5z" />
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      badge: 'Utility Styling',
      description: 'Rapid, responsive UI building, bespoke theme tokens, micro-animations, and minimal asset overhead.',
      icon: (
        <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.2 4.7-1.7 1 0.3 1.7 1 2.5 1.8 1.3 1.3 2.8 2.9 6.8 2.9 3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.2-4.7 1.7-1-0.3-1.7-1-2.5-1.8C17.5 7.6 16 6 12 6zm-6 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.9-2.2 4.7-1.7 1 0.3 1.7 1 2.5 1.8C8.5 13.4 10 15 14 15c3.3 0 5.3-1.7 6-5-1.3 1.7-2.9 2.2-4.7 1.7-1-0.3-1.7-1-2.5-1.8C11.5 8.6 10 7 6 7z" />
        </svg>
      ),
    },
    {
      name: 'Bootstrap',
      category: 'Frontend',
      badge: 'Grid & Systems',
      description: 'Rapid UI prototyping, robust grid systems, pre-built interactive components, and cross-browser consistency.',
      icon: (
        <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h10c3 0 6 2 6 5 0 2-1 3.5-3 4.2 2.5.7 3.8 2.5 3.8 5 0 3.5-3 5.8-6.8 5.8H4V4zm4.5 4v4.5h5c1.4 0 2.5-.8 2.5-2.2s-1.1-2.3-2.5-2.3h-5zm0 8.5V21h5.5c1.6 0 2.8-1 2.8-2.5s-1.2-2.5-2.8-2.5H8.5z" />
        </svg>
      ),
    },
  ];

  const professionalSkills = [
    {
      name: 'Teaching',
      category: 'Professional',
      badge: 'Curriculum & Delivery',
      description: 'Breaking down intricate programming concepts into structured, digestible lessons for learners of all ages.',
      icon: (
        <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: 'Mentorship',
      category: 'Professional',
      badge: 'Talent Growth',
      description: 'One-on-one coaching, constructive code reviews, guidance toward competitions, and building student self-confidence.',
      icon: (
        <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'Communication',
      category: 'Professional',
      badge: 'Clarity & Empathy',
      description: 'Articulating technical workflows clearly across students, stakeholders, parents, and cross-functional teams.',
      icon: (
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      name: 'Problem Solving',
      category: 'Professional',
      badge: 'Analytical Thinking',
      description: 'Systematic debugging, decomposing complex UI requirements into modular components, and algorithmic reasoning.',
      icon: (
        <svg className="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: 'Collaboration',
      category: 'Professional',
      badge: 'Team Synergy',
      description: 'Seamless pair programming, collaborative git workflows, sprint planning, and community-driven learning cohorts.',
      icon: (
        <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: 'Digital Education',
      category: 'Professional',
      badge: 'Literacy Empowerment',
      description: 'Fostering tech literacy across underrepresented communities, bridging the digital divide with hands-on practice.',
      icon: (
        <svg className="w-5 h-5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#050806] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical & Professional Skills
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Curated skills across frontend web technologies and educational leadership — designed for building scalable interfaces and mentoring builders.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-[#0a0f0d] text-neutral-400 border border-emerald-950 hover:text-white'
              }`}
            >
              All Skills ({frontendSkills.length + professionalSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('frontend')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'frontend'
                  ? 'bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'bg-[#0a0f0d] text-neutral-400 border border-emerald-950 hover:text-white'
              }`}
            >
              Frontend Tech ({frontendSkills.length})
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'professional'
                  ? 'bg-amber-600 text-white shadow-[0_0_15px_rgba(217,119,6,0.3)]'
                  : 'bg-[#0a0f0d] text-neutral-400 border border-emerald-950 hover:text-white'
              }`}
            >
              Professional & Teaching ({professionalSkills.length})
            </button>
          </div>
        </div>

        {/* Frontend Skills Block */}
        {(activeTab === 'all' || activeTab === 'frontend') && (
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Frontend Engineering Technologies
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-5 rounded-2xl bg-[#090e0b] border border-emerald-900/30 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0e1612] border border-emerald-800/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      {skill.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Professional Skills Block */}
        {(activeTab === 'all' || activeTab === 'professional') && (
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <h3 className="text-lg font-bold text-white tracking-wide">
                Professional Leadership & Teaching
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {professionalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="group p-5 rounded-2xl bg-[#090e0b] border border-emerald-900/30 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0e1612] border border-amber-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-950/70 text-amber-300 border border-amber-800/40">
                      {skill.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
