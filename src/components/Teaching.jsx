export default function Teaching() {
  const studentAchievements = [
    {
      title: 'Top 10 in Nigeria — Kids Innovation Challenge 2025',
      year: '2025',
      event: 'Kids Innovation Challenge',
      badge: 'National Finalist',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
      description:
        'Mentored a student team that built an innovative digital project and reached the Top 10 nationwide in Nigeria at the prestigious Kids Innovation Challenge.',
      mentorshipFocus: 'Ideation, frontend prototype development, UI/UX polish, and competition pitch readiness.',
      highlight: 'Top 10 in Nigeria',
    },
    {
      title: 'Top 10 Nationwide After Qualifying From 195 Participants',
      year: '2026',
      event: 'National Innovation Challenge 2026',
      badge: '195 Competitors',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
      description:
        'Guided another standout student team that advanced through rigorous qualification rounds against 195 participants to achieve a Top 10 national ranking.',
      mentorshipFocus: 'Code review, project execution speed, presentation coaching, and frontend responsiveness.',
      highlight: 'Selected from 195 participants',
    },
    {
      title: '6 Awards Out of 10 at Kwara Coding & Digital Literacy Programme',
      year: '2024',
      event: 'Kwara Coding & Digital Literacy Programme',
      badge: '6 / 10 Category Wins',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
      description:
        'Students trained and mentored under Adebara demonstrated outstanding technical proficiency, capturing 6 out of the 10 total awards during the programme’s project showcase.',
      mentorshipFocus: 'Foundational web technologies, design thinking, teamwork, and practical problem solving.',
      highlight: '60% of all awards secured by students',
    },
  ];

  const studentProjects = [
    {
      title: 'Virtual Doctor Bot',
      category: 'Student Health-Tech Project',
      role: 'Mentored by Adebara Ahmad',
      description:
        'A prototype health guidance chatbot created by student coders to assist users with preliminary symptom queries and emergency medical tips.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Chat Logic'],
      impact: 'Showcased during national youth innovation evaluations to demonstrate digital problem solving.',
    },
    {
      title: 'Rural Health Map',
      category: 'Student Civic-Tech Project',
      role: 'Mentored by Adebara Ahmad',
      description:
        'An interactive community directory application designed by students to map out rural clinics and facilitate emergency access to medical centres.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Interactive Maps'],
      impact: 'Developed to tackle real community healthcare navigation challenges in Kwara state.',
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 bg-[#050806] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Teaching & Mentorship
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Student Achievements & Impact
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            Inspiring the next generation of builders. Adebara’s mentorship has guided student teams to top national rankings and competition accolades across Nigeria.
          </p>
        </div>

        {/* Student Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {studentAchievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#090e0b] border border-emerald-900/30 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {item.year}
                  </span>
                </div>

                <div className="text-xs font-bold text-amber-400/90 uppercase tracking-wider mb-1">
                  {item.event}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <p className="text-[11px] text-neutral-400">
                  <span className="font-semibold text-emerald-400">Mentorship Scope: </span>
                  {item.mentorshipFocus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Student Project Showcase Subsection */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#080d0a] border border-emerald-900/40 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Student Project Showcase
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Real-World Prototypes Built by Students
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Under Adebara’s guidance, students translate foundational web concepts into functional prototypes addressing pressing community needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studentProjects.map((proj) => (
              <div
                key={proj.title}
                className="p-6 rounded-2xl bg-[#0b120e] border border-emerald-900/30 hover:border-emerald-600/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-amber-300">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#070b09] text-neutral-400 border border-neutral-800">
                      {proj.role}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {proj.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                    {proj.description}
                  </p>

                  <p className="text-xs text-neutral-400 mb-4">
                    <span className="font-semibold text-emerald-400">Significance: </span>
                    {proj.impact}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#060a08] text-neutral-300 border border-emerald-950"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
