import { useState } from 'react';

/**
 * Reusable ProjectCard component.
 * Displays the project's actual landing page screenshot as the card background,
 * covered by a SOLID semi-transparent dark overlay (no gradients).
 */
export default function ProjectCard({ project, onSelectProject }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden border border-[#27272a] hover:border-[#166534] bg-[#151515] transition-all duration-300 shadow-md hover:shadow-xl min-h-[460px] sm:min-h-[480px] flex flex-col justify-between"
    >
      {/* 1. Full-width Screenshot Background with Smooth Zoom on Hover */}
      <div className="absolute inset-0 overflow-hidden bg-[#111111]">
        {!imageError && project.projectImage ? (
          <img
            src={project.projectImage}
            alt={`${project.title} landing page screenshot`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top filter brightness-[0.82] contrast-[1.05] group-hover:brightness-[0.75] group-hover:scale-105 transition-all duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#151515]" />
        )}
      </div>

      {/* 2. SOLID Semi-Transparent Dark Overlay (ZERO gradients) */}
      <div className="absolute inset-0 bg-[#0a0a0a]/70 group-hover:bg-[#0a0a0a]/60 transition-colors duration-300 pointer-events-none" />

      {/* Top Bar Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
        <span
          className="text-[11px] font-semibold px-3 py-1 rounded-full bg-[#1a1a1a] text-[#22c55e] border border-[#27272a]"
        >
          {project.status}
        </span>
        <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#1a1a1a] text-[#a1a1aa] border border-[#27272a]">
          {project.role}
        </span>
      </div>

      {/* 3. Card Content: Solid elevated container with crisp typography */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col space-y-4 bg-[#111111]/95 border-t border-[#27272a]">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#22c55e] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#c9a84c] font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        <p className="text-[#a1a1aa] text-xs sm:text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Revealed on hover / active highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="space-y-1 text-xs text-[#a1a1aa] max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-out">
            {project.highlights.slice(0, 2).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technology Badges with Solid Colors */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#1a1a1a] text-white border border-[#27272a]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons with Solid Colors */}
        <div className="pt-3 border-t border-[#27272a] flex items-center gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white text-xs font-bold transition-colors duration-200 border border-[#27272a] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              title={`Open ${project.title} live website`}
            >
              <span>View Project</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
              className="flex-1 py-2.5 px-4 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white text-xs font-bold transition-colors duration-200 border border-[#27272a] shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View Project</span>
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
              className="py-2.5 px-3.5 rounded-xl bg-[#1a1a1a] hover:bg-[#27272a] border border-[#27272a] hover:border-[#c9a84c] text-white text-xs font-semibold transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
              title="View Repository"
            >
              <svg className="w-4 h-4 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
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
