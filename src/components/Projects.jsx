import ProjectCard from './ProjectCard';

export default function Projects({ onSelectProject }) {
  // All portfolio projects with dedicated screenshots and details
  const projects = [
    {
      id: 'poultrypro',
      title: 'PoultryPro',
      tagline: 'Poultry Management Platform',
      projectImage: '/projects/poultrypro.png',
      status: 'Production Ready',
      statusColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      role: 'Frontend Developer & Creator',
      description:
        'A comprehensive commercial poultry farm management SaaS platform engineered with React, Tailwind CSS, and Recharts. Streamlines flock lifecycle management, feed inventory logs, egg production tracking, mortality analytics, financial records, and real-time operational reporting.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Recharts', 'Lucide React', 'Context API'],
      highlights: [
        'Interactive flock health, mortality analytics & egg production logs',
        'Daily feed consumption tracking and live inventory management',
        'Real-time financial summary dashboards and profitability metrics',
        'Fully responsive mobile-friendly UX for on-farm field workers',
      ],
      mockupBg: 'from-emerald-950/40 via-[#0a120e] to-amber-950/40',
      accentColor: 'text-emerald-400',
      githubAvailable: true,
      liveUrl: 'http://localhost:5175',
    },
    {
      id: 'tradehub',
      title: 'TradeHub',
      tagline: 'Multi-Vendor Marketplace Platform',
      projectImage: '/projects/tradehub.png',
      status: 'Production Ready',
      statusColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
      role: 'Frontend Developer',
      description:
        'A high-performance commercial marketplace platform delivering seamless vendor storefront browsing, dynamic product filtering, responsive cart flows, secure checkout flows, and vendor management.',
      technologies: ['React', 'Tailwind CSS', 'Redux Toolkit', 'JavaScript', 'REST API'],
      highlights: [
        'Dynamic multi-category catalog with instant multi-parameter filtering',
        'Interactive vendor storefront and verified seller verification',
        'Accessible cart drawer and responsive multi-step checkout workflow',
        'Smooth micro-interactions and high-conversion UI patterns',
      ],
      mockupBg: 'from-emerald-950/40 via-[#0a120e] to-teal-950/40',
      accentColor: 'text-emerald-400',
      githubAvailable: true,
    },
    {
      id: 'freelearninghub',
      title: 'Free Learning Hub',
      tagline: 'Education Resource & School Portal',
      projectImage: '/projects/free-learning-hub.png',
      status: 'Production Ready',
      statusColor: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
      role: 'Frontend Developer & Educator',
      description:
        'An accessible digital learning platform connecting students and educators with curated educational materials, structured curriculum portals, online CBT mock examinations, and school administrative tools.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap 5', 'Responsive UI'],
      highlights: [
        'Organized digital learning repository by grade level and curriculum topic',
        'Intuitive student, instructor and administrator dashboard interfaces',
        'Fast lightweight asset delivery and mobile responsiveness for low-bandwidth',
        'Empowering underserved students with accessible digital education',
      ],
      mockupBg: 'from-blue-950/40 via-[#0a120e] to-emerald-950/40',
      accentColor: 'text-blue-400',
      githubAvailable: true,
    },
    {
      id: 'nobelle',
      title: 'NOBELLE',
      tagline: 'Modern African Fashion E-Commerce Experience',
      projectImage: '/projects/nobelle.png',
      status: 'Production Ready',
      statusColor: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
      role: 'Frontend Developer',
      description:
        'A luxury digital storefront celebrating contemporary African haute couture. Features editorial product visuals, curated lookbooks, responsive sizing selectors, and a refined dark brand aesthetic with gold highlights.',
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
            Every application below is built with modern web technologies, showcasing real production interfaces with live landing page screenshots as card backgrounds.
          </p>
        </div>

        {/* Polished Grid Layout: All projects visible without category filters, pagination or carousel restrictions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
