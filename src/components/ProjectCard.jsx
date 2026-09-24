import { useState } from 'react';

/**
 * Reusable ProjectCard component.
 * Displays the project's actual landing page screenshot as the card background,
 * covered by a finely tuned luxury dark overlay and glassmorphic container.
 */
export default function ProjectCard({ project, onSelectProject }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-emerald-900/35 hover:border-emerald-500/60 transition-all duration-500 shadow-xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.85)] min-h-[440px] sm:min-h-[460px] md:min-h-[480px] flex flex-col justify-between"
    >
      {/* 1. Full-width Screenshot Background with Smooth Zoom on Hover */}
      <div className="absolute inset-0 overflow-hidden bg-[#070c09]">
        {!imageError && project.projectImage ? (
          <img
            src={project.projectImage}
            alt={`${project.title} landing page screenshot`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top filter brightness-[0.72] contrast-[1.05] group-hover:brightness-[0.62] group-hover:scale-105 transition-all duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.mockupBg || 'from-[#0b1611] to-[#040705]'}`} />
        )}
      </div>

      {/* 2. Tuned Luxury Dark Overlay: Keeps screenshot recognizable while maintaining high readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#040705] via-[#050806]/80 to-[#040705]/45 group-hover:via-[#050806]/85 transition-colors duration-500 pointer-events-none" />

      {/* Top Bar Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
        <span
          className={`text-[11px] font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${project.statusColor || 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'}`}
        >
          {project.status}
        </span>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#050806]/85 text-neutral-300 border border-neutral-700/60 backdrop-blur-md">
          {project.role}
        </span>
      </div>

      {/* 3. Card Content: Highly visible with high contrast over dark overlay */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col space-y-4 backdrop-blur-[2px] bg-gradient-to-t from-[#040705]/95 via-[#040705]/80 to-transparent pt-6">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md group-hover:text-emerald-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-amber-400 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300 drop-shadow">
          {project.description}
        </p>

        {/* Revealed on hover / active highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 text-xs text-neutral-300 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#070d0a]/90 text-neutral-300 border border-emerald-900/60 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01]"
              title={`Open ${project.title} live website`}
            >
              <span>View Project</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ) : (
            <button
              onClick={() => onSelectProject(project, 'view')}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-bold transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Project</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          )}

          {project.githubAvailable && (
            <button
              onClick={() => onSelectProject(project, 'github')}
              className="py-2.5 px-3.5 rounded-xl bg-[#090f0c]/90 border border-neutral-700 hover:border-amber-400/60 text-neutral-300 hover:text-white text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="View Repository"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span className="hidden sm:inline">Code</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
