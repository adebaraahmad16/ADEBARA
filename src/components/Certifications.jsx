export default function Certifications() {
  const certifications = [
    {
      title: 'Web Development Using React and Tailwind CSS',
      year: '2026',
      badge: 'Modern Frontend Architecture',
      focus:
        'Advanced component-driven architecture, state management, modern CSS workflows, performant build pipelines, and production-ready application design.',
      skills: ['React', 'Tailwind CSS', 'Component Design', 'Web Performance'],
      sealColor: 'text-[#c9a84c] bg-[#1a1a1a] border-[#27272a]',
    },
    {
      title: 'Frontend Web Development',
      year: '2022',
      badge: 'Foundational Web Engineering',
      focus:
        'Semantic HTML5 structure, comprehensive CSS3 layout styling, core JavaScript programming, responsive multi-device design, and DOM manipulation.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Layouts'],
      sealColor: 'text-[#22c55e] bg-[#1a1a1a] border-[#27272a]',
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-24 bg-[#0a0a0a] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c] mb-2 inline-block">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="mt-3 text-[#a1a1aa] text-sm sm:text-base">
            Formal technical certifications validating specialized expertise in core frontend web development and modern React engineering.
          </p>
        </div>

        {/* Prominent Certification Cards (Solid Colors, Zero Gradients) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative rounded-2xl bg-[#151515] border border-[#27272a] hover:border-[#166534] p-7 sm:p-8 shadow-xl transition-colors duration-200 overflow-hidden"
            >
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
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#27272a] text-[#c9a84c]">
                    Year {cert.year}
                  </span>
                  <span className="block text-[10px] text-[#a1a1aa] mt-1 font-mono">
                    Credential Verified
                  </span>
                </div>
              </div>

              {/* Title & Badge */}
              <span className="inline-block text-[11px] font-semibold text-[#22c55e] uppercase tracking-wider mb-1.5">
                {cert.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight">
                {cert.title}
              </h3>

              {/* Scope & Focus */}
              <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed mb-6">
                {cert.focus}
              </p>

              {/* Key Competencies tags */}
              <div className="pt-4 border-t border-[#27272a] flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#1a1a1a] text-white border border-[#27272a]"
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
