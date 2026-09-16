export default function Certifications() {
  const certifications = [
    {
      title: 'Web Development Using React and Tailwind CSS',
      year: '2026',
      badge: 'Modern Frontend Architecture',
      focus:
        'Advanced component-driven architecture, state management, modern CSS workflows, performant build pipelines, and production-ready application design.',
      skills: ['React', 'Tailwind CSS', 'Component Design', 'Web Performance'],
      accent: 'border-amber-500/40 from-amber-950/30 to-emerald-950/20',
      sealColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    },
    {
      title: 'Frontend Web Development',
      year: '2022',
      badge: 'Foundational Web Engineering',
      focus:
        'Semantic HTML5 structure, comprehensive CSS3 layout styling, core JavaScript programming, responsive multi-device design, and DOM manipulation.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layouts'],
      accent: 'border-emerald-500/40 from-emerald-950/30 to-teal-950/20',
      sealColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-24 bg-[#040705] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Formal technical certifications validating specialized expertise in core frontend web development and modern React engineering.
          </p>
        </div>

        {/* Prominent Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`relative rounded-2xl bg-gradient-to-br ${cert.accent} bg-[#080d0a] border ${cert.accent.split(' ')[0]} p-7 sm:p-8 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              {/* Corner Watermark Graphic */}
              <div className="absolute -right-8 -bottom-8 w-36 h-36 opacity-5 pointer-events-none">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Header with Seal and Year */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${cert.sealColor}`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#050806] border border-neutral-700 text-amber-300">
                    Year {cert.year}
                  </span>
                  <span className="block text-[10px] text-neutral-400 mt-1 font-mono">
                    Credential Verified
                  </span>
                </div>
              </div>

              {/* Title & Badge */}
              <span className="inline-block text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
                {cert.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                {cert.title}
              </h3>

              {/* Scope & Focus */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                {cert.focus}
              </p>

              {/* Key Competencies tags */}
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#050806] text-neutral-300 border border-emerald-950"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
