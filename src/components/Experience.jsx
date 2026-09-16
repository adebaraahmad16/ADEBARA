export default function Experience() {
  const experiences = [
    {
      role: 'Lead Technology Instructor',
      organization: 'KidsTech Africa Summer Bootcamp 2026',
      period: '2026',
      badge: 'Summer Intensive',
      type: 'Instruction & Mentorship',
      impact:
        'Headed the high-intensity web development bootcamp for young creators. Mentored student teams through rapid prototyping, agile collaboration, and building working frontend solutions under tight deadlines.',
      tags: ['Frontend Mentorship', 'Curriculum Delivery', 'Project Prototyping', 'Team Leadership'],
    },
    {
      role: 'Advanced Technology Instructor',
      organization: 'Kwara Coding & Digital Literacy Programme 2026',
      period: '2026',
      badge: 'State Programme',
      type: 'Advanced Cohort',
      impact:
        'Trained and guided senior student developers through modern frontend architecture and problem solving. Coached national hackathon finalists selected from a competitive pool of 195 candidates.',
      tags: ['React Basics', 'Modern UI Standards', 'Competition Mentorship', 'Student Growth'],
    },
    {
      role: 'Frontend & Digital Literacy Trainer',
      organization: 'Kwara Coding & Digital Literacy Programme 2024',
      period: '2024',
      badge: 'Award-Winning Cohort',
      type: 'Youth Empowerment',
      impact:
        'Delivered fundamental web programming and computational literacy training. Mentored student cohorts that swept 6 out of 10 category awards for their innovative practical solutions.',
      tags: ['HTML/CSS/JS', 'Digital Literacy', '6/10 Category Awards', 'Project Reviews'],
    },
    {
      role: 'Technology & Coding Instructor',
      organization: 'Flora School',
      period: 'Academic Session',
      badge: 'Institutional Education',
      type: 'STEM Instruction',
      impact:
        'Designed and taught interactive computer science and coding lessons for secondary students, sparking deep interest in web development, logical thinking, and digital creativity.',
      tags: ['Classroom Teaching', 'Web Fundamentals', 'Logical Problem Solving', 'STEM Pedagogy'],
    },
    {
      role: 'Technology Instructor & Frontend Mentor',
      organization: 'KidsTech Africa',
      period: 'Core Instructor',
      badge: 'Digital Outreach',
      type: 'Developer Mentorship',
      impact:
        'Conducted structured digital skills training, introduction to web technologies, and code reviews. Supported young learners from their very first lines of code to deployable web projects.',
      tags: ['Youth Coding', 'Frontend Fundamentals', 'Hands-on Labs', 'Code Guidance'],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#050806] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2 inline-block">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teaching, Mentorship & Impact
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base">
            Demonstrated track record of delivering impactful technology training, frontend mentorship, and student excellence across prominent educational initiatives.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-emerald-900/50 ml-4 sm:ml-8 md:ml-32 space-y-10">
          {experiences.map((item, idx) => (
            <div key={`${item.organization}-${idx}`} className="relative pl-7 sm:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#080e0b] border-2 border-emerald-500 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.5)] group-hover:border-amber-400 group-hover:scale-110 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              </div>

              {/* Year Label for Desktop */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className="text-xs font-mono font-bold text-amber-400/90 tracking-wider">
                  {item.period}
                </span>
                <span className="block text-[10px] text-neutral-500 font-medium">
                  {item.type}
                </span>
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-2xl bg-[#090d0a] border border-emerald-900/30 hover:border-emerald-600/40 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="md:hidden text-xs font-mono font-bold text-amber-400">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.role}
                </h3>
                <p className="text-amber-400/90 text-sm font-semibold mb-3">
                  {item.organization}
                </p>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.impact}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#0e1611] text-neutral-300 border border-emerald-900/40 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
