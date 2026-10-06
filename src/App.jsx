import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import Footer from './components/Footer';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#166534] hover:bg-[#22c55e] text-white font-extrabold flex items-center justify-center border border-[#27272a] shadow-lg transition-colors duration-200 cursor-pointer"
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

function CvModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#151515] border border-[#27272a] p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#27272a] text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* CV Header */}
        <div className="border-b border-[#27272a] pb-6 mb-6">
          <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#1a1a1a] text-[#22c55e] border border-[#27272a] mb-2">
            CURRICULUM VITAE SUMMARY
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Adebara Ahmad</h3>
          <p className="text-xs sm:text-sm font-semibold text-[#c9a84c] mt-1">
            Frontend Developer <span className="text-[#22c55e]">•</span> Technology Instructor <span className="text-[#c9a84c]">•</span> Digital Educator
          </p>
          <p className="text-xs text-[#a1a1aa] mt-2 leading-relaxed">
            Specializing in modern web applications (React, Tailwind CSS, JavaScript) and empowering the next generation of software builders through hands-on technical instruction and project-driven mentorship.
          </p>
        </div>

        {/* Experience Snapshot */}
        <div className="space-y-4 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#22c55e]">
            Professional Experience & Teaching
          </h4>
          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">KidsTech Africa Summer Bootcamp 2026</span>
              <p className="text-[#a1a1aa] mt-0.5">Lead Technology Instructor & Frontend Mentorship</p>
            </div>
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">Kwara Coding & Digital Literacy Programme (2024, 2026)</span>
              <p className="text-[#a1a1aa] mt-0.5">Frontend & Digital Literacy Trainer — Mentored students winning 6/10 awards and Top 10 national ranks.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">Flora School</span>
              <p className="text-[#a1a1aa] mt-0.5">Technology & Coding Instructor — Structured digital literacy and web foundations.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">KidsTech Africa</span>
              <p className="text-[#a1a1aa] mt-0.5">Technology Instructor & Frontend Mentor</p>
            </div>
          </div>
        </div>

        {/* Certifications Snapshot */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
            Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">Web Development Using React & Tailwind CSS</span>
              <span className="block text-[10px] text-[#c9a84c] font-mono mt-0.5">2026</span>
            </div>
            <div className="p-3 rounded-lg bg-[#111111] border border-[#27272a]">
              <span className="font-bold text-white">Frontend Web Development</span>
              <span className="block text-[10px] text-[#22c55e] font-mono mt-0.5">2022</span>
            </div>
          </div>
        </div>

        {/* Core Skills Snapshot */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300 mb-2">
            Core Stack & Capabilities
          </h4>
          <div className="flex flex-wrap gap-1.5 text-[11px]">
            {['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Teaching', 'Mentorship', 'Problem Solving'].map((s) => (
              <span key={s} className="px-2.5 py-1 rounded bg-[#111111] border border-[#27272a] text-white">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons with Solid Colors */}
        <div className="pt-4 border-t border-[#27272a] flex items-center justify-between gap-3">
          <a
            href="/docs/Adebara-Bamigbola-Ahmad-CV.docx"
            download="Adebara-Bamigbola-Ahmad-CV.docx"
            className="px-4 py-2 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white text-xs font-semibold flex items-center gap-1.5 border border-[#27272a] shadow-sm transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Word CV (.docx)
          </a>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-[#1a1a1a] hover:bg-[#27272a] border border-[#27272a] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print / PDF
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1a1a1a] hover:bg-[#27272a] border border-[#27272a] text-[#a1a1aa] hover:text-white text-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, mode, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#151515] border border-[#27272a] p-6 sm:p-8 shadow-2xl text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#27272a] text-[#a1a1aa] hover:text-white flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="border-b border-[#27272a] pb-5 mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#1a1a1a] text-[#22c55e] border border-[#27272a]">
              {project.status}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#1a1a1a] text-[#a1a1aa] border border-[#27272a]">
              {project.role}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#c9a84c] font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Project Description */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#22c55e] mb-1.5">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] mb-2">
              Key Frontend Architecture & Features
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-[#a1a1aa]">
                  <span className="text-[#22c55e] font-bold mt-0.5">✓</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Technologies Utilized
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-[#1a1a1a] text-white border border-[#27272a] font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[#27272a] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white text-xs font-semibold border border-[#27272a] transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Visit Live Application</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#1a1a1a] border border-[#27272a] hover:border-[#166534] text-white text-xs font-semibold transition-colors"
            >
              Inquire →
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1a1a1a] hover:bg-[#27272a] border border-[#27272a] text-[#a1a1aa] hover:text-white text-xs font-semibold"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

function MainPortfolio() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalMode, setProjectModalMode] = useState('view');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#22c55e] selection:text-black">
      <Navbar onOpenCV={() => setCvModalOpen(true)} />
      <main>
        <Hero onOpenCV={() => setCvModalOpen(true)} />
        <About />
        <Services />
        <Experience />
        <Projects
          onSelectProject={(proj, mode = 'view') => {
            setSelectedProject(proj);
            setProjectModalMode(mode);
          }}
        />
        <Skills />
        <Certifications />
        <Teaching />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <ProjectModal
        project={selectedProject}
        mode={projectModalMode}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainPortfolio />
    </ThemeProvider>
  );
}
