import { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import PROFILE from '../data/profile';

export default function Hero({ onOpenCV }) {
  const roles = [
    'Frontend Developer',
    'Technology Instructor',
    'Modern Web Architect',
    'Digital Educator',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentFullText.substring(0, displayText.length - 1)
          : currentFullText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#050806] overflow-hidden"
    >
      {/* Background Subtle Gradient Spheres & Matrix Dots */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Introductions, Roles, Description & CTAs */}
          <div
            className={`lg:col-span-7 flex flex-col items-start space-y-6 transition-all duration-700 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >

            {/* Main Headline Introduction */}
            <div>
              <p className="text-amber-400 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-1.5 flex items-center gap-2">
                <span>Hi, I'm</span>
                <span className="inline-block w-8 h-[2px] bg-amber-400/70" />
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Adebara <span className="text-neutral-100">Ahmad</span>
              </h1>
            </div>

            {/* Primary Role Subheading & Dynamic Typing Indicator */}
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300 bg-clip-text text-transparent">
                {PROFILE.headline}
              </h2>
              <div className="flex items-center text-sm sm:text-base md:text-lg font-medium text-neutral-300 min-h-[28px]">
                <span className="text-neutral-400">Specializing in:&nbsp;</span>
                <span className="text-white border-b border-amber-400/80 pb-0.5 font-mono">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-4 sm:h-5 bg-amber-400 ml-1 animate-pulse" />
              </div>
            </div>

            {/* Professional Description */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              I specialize in crafting modern, responsive web interfaces with clean component architectures using React and Tailwind CSS, while empowering students and future developers through hands-on digital education and practical coding literacy.
            </p>

            {/* Action Buttons (CTAs) */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              {/* View My Work */}
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-200"
              >
                View My Work
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#0b120e] border border-neutral-700 text-neutral-200 hover:text-white hover:border-emerald-500/60 font-semibold text-sm transition-all duration-200"
              >
                Contact Me
              </a>

              {/* Download CV */}
              <a
                href="/docs/Adebara-Bamigbola-Ahmad-CV.docx"
                download="Adebara-Bamigbola-Ahmad-CV.docx"
                className="px-5 py-3 rounded-xl border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 font-semibold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(251,191,36,0.25)]"
                title="Download Adebara Ahmad CV (Word Document)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80 w-full max-w-lg">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-white">3+</span>
                <span className="text-xs text-neutral-400 font-medium">Years Mentoring</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-emerald-400">4</span>
                <span className="text-xs text-neutral-400 font-medium">Key Projects</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-amber-400">195+</span>
                <span className="text-xs text-neutral-400 font-medium">Students Reached</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Profile Portrait & Developer Code Studio */}
          <div
            className={`lg:col-span-5 flex flex-col items-center justify-center transition-all duration-700 delay-150 ease-out ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Prominent Profile Portrait */}
            <div className="mb-6">
              <ProfileImage variant="hero" />
            </div>

            {/* Luxury Developer Snippet Card */}
            <div className="w-full max-w-sm rounded-2xl bg-[#080d0a]/95 border border-emerald-900/40 p-4 shadow-2xl backdrop-blur-xl hover:border-emerald-700/50 transition-colors">
              {/* Header with Traffic Lights & Tab */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="px-2.5 py-0.5 rounded bg-[#0d1612] text-[10px] font-mono text-emerald-400 border border-emerald-900/30">
                  AdebaraAhmad.dev.jsx
                </div>
              </div>

              {/* Code-Inspired Profile Definition */}
              <div className="font-mono text-xs text-neutral-300 space-y-1 p-3 rounded-xl bg-[#040705] border border-neutral-800/60 overflow-x-auto">
                <p className="text-neutral-500">// Personal Identity</p>
                <p>
                  <span className="text-amber-400">const</span>{' '}
                  <span className="text-emerald-400">developer</span> = &#123;
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">name:</span>{' '}
                  <span className="text-amber-300">"{PROFILE.name}"</span>,
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">role:</span>{' '}
                  <span className="text-emerald-300">"Frontend & Instructor"</span>,
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">stack:</span> [
                  <span className="text-amber-300">"React"</span>,{' '}
                  <span className="text-amber-300">"Tailwind"</span>,{' '}
                  <span className="text-amber-300">"JavaScript"</span>],
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">focus:</span>{' '}
                  <span className="text-neutral-300">"UI Craft &amp; Education"</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Footer status */}
              <div className="mt-3 pt-2.5 border-t border-neutral-800/70 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Available for Hire &amp; Training
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">v1.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
