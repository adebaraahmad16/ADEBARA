import { useState } from 'react';

export default function Projects({ onSelectProject }) {
  const projects = [
    {
      id: 'poultrypro',
      title: 'PoultryPro',
      tagline: 'Poultry Management Application',
      status: 'Currently Building',
      statusColor: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
      role: 'Frontend Developer & Creator',
      description:
        'A modern poultry management system designed to streamline flock tracking, daily egg and feed recording, mortality analysis, and inventory reporting for poultry farm operations.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'State Management', 'Data Visualization'],
      highlights: [
        'Interactive flock health & mortality tracking dashboard',
        'Daily feed consumption and egg production logs',
        'Real-time inventory calculation and financial summaries',
        'Responsive mobile-first layout for on-field farm management',
      ],
      mockupBg: 'from-amber-950/40 via-[#0a120e] to-emerald-950/40',
      accentColor: 'text-amber-400',
      githubAvailable: true,
    },
    {
      id: 'tradehub',
      title: 'TradeHub',
      tagline: 'Multi-Vendor Marketplace Platform',
      status: 'Completed Build',
      statusColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
      role: 'Frontend Developer',
      description:
        'A high-performance commercial marketplace platform delivering seamless vendor storefront browsing, dynamic product filtering, responsive cart flows, and optimized checkout experiences.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI', 'REST API Integration'],
      highlights: [
        'Dynamic multi-category catalog with instant filtering',
        'Interactive vendor profile and storefront showcase',
        'Accessible cart drawer and responsive multi-step checkout',
        'Smooth micro-interactions and high-conversion UI patterns',
      ],
      mockupBg: 'from-emerald-950/40 via-[#0a120e] to-teal-950/40',
      accentColor: 'text-emerald-400',
      githubAvailable: true,
    },
    {
      id: 'freelearninghub',
      title: 'Free Learning Hub',
      tagline: 'Education Resource & School Management Platform',
      status: 'Production Ready',
      statusColor: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
      role: 'Frontend Developer',
      description:
        'An accessible digital learning platform connecting students and educators with curated educational materials, structured curriculum portals, and intuitive school administrative tools.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      highlights: [
        'Organized digital learning repository by grade level and topic',
        'Intuitive student and instructor dashboard interfaces',
        'Fast lightweight asset delivery and mobile responsiveness',
        'Designed to empower underserved learners with open knowledge',
      ],
      mockupBg: 'from-blue-950/40 via-[#0a120e] to-emerald-950/40',
      accentColor: 'text-emerald-400',
      githubAvailable: true,
    },
    {
      id: 'nobelle',
      title: 'NOBELLE',
      tagline: 'Modern African Fashion E-Commerce Experience',
      status: 'Production Ready',
      statusColor: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
      role: 'Frontend Developer',
      description:
        'A luxury digital storefront celebrating contemporary African haute couture. Features editorial product visuals, curated lookbooks, responsive sizing selectors, and a refined brand aesthetic.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Interactive UI', 'Modern Styling'],
      highlights: [
        'Editorial fashion layout with immersive hero storytelling',
        'Curated African print collections with high-res product galleries',
        'Interactive size and variant selectors with instant cart updates',
        'Dark luxury aesthetic with gold accents and smooth transitions',
      ],
      mockupBg: 'from-amber-950/40 via-[#0f110c] to-yellow-950/40',
      accentColor: 'text-amber-400',
      githubAvailable: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#040705] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Selected Projects
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Carefully engineered frontend applications focusing on performance, usability, responsive design, and real-world utility.
          </p>
        </div>

        {/* Large Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col rounded-2xl bg-[#080d0a] border border-emerald-900/30 hover:border-emerald-600/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Project Visual / Mockup Area */}
              <div
                className={`relative h-56 sm:h-64 bg-gradient-to-br ${proj.mockupBg} border-b border-emerald-950 p-6 flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Top Bar with Status and Role */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${proj.statusColor}`}
                  >
                    {proj.status}
                  </span>
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#050806]/80 text-neutral-300 border border-neutral-700/50 backdrop-blur-sm">
                    {proj.role}
                  </span>
                </div>

                {/* Mockup Graphic / Wireframe Card */}
                <div className="relative z-10 my-auto p-4 rounded-xl bg-[#090e0b]/90 border border-emerald-800/30 shadow-2xl backdrop-blur-md transform group-hover:scale-[1.02] transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="text-[11px] font-mono text-neutral-400 ml-1">
                      {proj.title}.interface
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 rounded bg-emerald-500/20" />
                    <div className="h-2 w-1/2 rounded bg-amber-500/20" />
                    <div className="flex gap-2 pt-1">
                      <div className="h-5 w-16 rounded bg-neutral-800/80 text-[9px] font-mono text-neutral-400 flex items-center justify-center">
                        Active UI
                      </div>
                      <div className="h-5 w-20 rounded bg-neutral-800/80 text-[9px] font-mono text-emerald-400 flex items-center justify-center">
                        Responsive
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Title overlay */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium">
                    {proj.tagline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-5">
                    {proj.highlights.slice(0, 2).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-400"
                      >
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#0d1410] text-neutral-300 border border-emerald-950 hover:border-emerald-800 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-neutral-800/70 flex items-center gap-3">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center justify-center gap-1.5"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => onSelectProject(proj, 'github')}
                    className="py-2.5 px-4 rounded-xl bg-[#0d1410] border border-neutral-700 hover:border-amber-400/50 text-neutral-300 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    title="View Code Repository Details"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
