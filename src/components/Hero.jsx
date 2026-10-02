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
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Profile Column — Kept as the FIRST thing shown in the Hero */}
          <div
            className={`order-first lg:order-last lg:col-span-5 flex flex-col items-center justify-center transition-all duration-500 ease-out ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            {/* Prominent Profile Portrait */}
            <div className="mb-6">
              <ProfileImage variant="hero" />
            </div>

            {/* Developer Code Studio Card */}
            <div className="w-full max-w-sm rounded-2xl bg-[#151515] border border-[#27272a] p-4 shadow-xl hover:border-[#166534] transition-colors">
              {/* Header with Traffic Lights & Tab */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#27272a]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block" />
                </div>
                <div className="px-2.5 py-0.5 rounded bg-[#1a1a1a] text-[10px] font-mono text-[#22c55e] border border-[#27272a]">
                  AdebaraAhmad.dev.jsx
                </div>
              </div>

              {/* Code-Inspired Profile Definition */}
              <div className="font-mono text-xs text-[#a1a1aa] space-y-1 p-3 rounded-xl bg-[#111111] border border-[#27272a] overflow-x-auto">
                <p className="text-neutral-500">// Personal Identity</p>
                <p>
                  <span className="text-[#c9a84c]">const</span>{' '}
                  <span className="text-[#22c55e]">developer</span> = &#123;
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">name:</span>{' '}
                  <span className="text-white">"{PROFILE.name}"</span>,
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">role:</span>{' '}
                  <span className="text-[#22c55e]">"Frontend & Instructor"</span>,
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">stack:</span> [
                  <span className="text-[#c9a84c]">"React"</span>,{' '}
                  <span className="text-[#c9a84c]">"Tailwind"</span>,{' '}
                  <span className="text-[#c9a84c]">"JavaScript"</span>],
                </p>
                <p className="pl-3.5">
                  <span className="text-neutral-400">focus:</span>{' '}
                  <span className="text-white">"UI Craft &amp; Education"</span>,
                </p>
                <p>&#125;;</p>
              </div>

              {/* Footer status */}
              <div className="mt-3 pt-2.5 border-t border-[#27272a] flex items-center justify-between text-[11px] text-[#a1a1aa]">
                <span className="flex items-center gap-1.5 text-[#22c55e] font-medium">
                  <span className="" />
                  Available for Hire &amp; Training
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">v2.0</span>
              </div>
            </div>
          </div>

          {/* Headline Column: Introductions, Roles, Description & CTAs */}
          <div
            className={`lg:col-span-7 flex flex-col items-start space-y-6 transition-all duration-500 ease-out ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Main Headline Introduction */}
            <div>
              <p className="text-[#c9a84c] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-1.5 flex items-center gap-2">
                <span>Hi, I'm</span>
                <span className="inline-block w-8 h-[2px] bg-[#c9a84c]" />
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Adebara Ahmad
              </h1>
            </div>

            {/* Primary Role Subheading & Dynamic Typing Indicator */}
            <div className="space-y-1.5">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#22c55e]">
                {PROFILE.headline}
              </h2>
              <div className="flex items-center text-sm sm:text-base md:text-lg font-medium text-neutral-300 min-h-[28px]">
                <span className="text-[#a1a1aa]">Specializing in:&nbsp;</span>
                <span className="text-white border-b border-[#c9a84c] pb-0.5 font-mono">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-4 sm:h-5 bg-[#c9a84c] ml-1 animate-pulse" />
              </div>
            </div>

            {/* Professional Description */}
            <p className="text-[#a1a1aa] text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              I specialize in crafting modern, responsive web interfaces with clean component architectures using React and Tailwind CSS, while empowering students and future developers through hands-on digital education and practical coding literacy.
            </p>

            {/* Action Buttons (CTAs) with Solid Colors */}
            <div className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
              {/* Primary button: solid deep green */}
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#166534] hover:bg-[#22c55e] text-white font-semibold text-sm border border-[#27272a] shadow-md transition-colors duration-200"
              >
                View My Work
              </a>

              {/* Secondary button: transparent/dark solid background with a solid border */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#151515] hover:bg-[#1a1a1a] border border-[#27272a] hover:border-[#166534] text-white font-semibold text-sm transition-colors duration-200"
              >
                Contact Me
              </a>

              {/* Download CV button */}
              <a
                href="/docs/Adebara-Bamigbola-Ahmad-CV.docx"
                download="Adebara-Bamigbola-Ahmad-CV.docx"
                className="px-5 py-3 rounded-xl bg-[#151515] hover:bg-[#1a1a1a] border border-[#c9a84c] text-[#c9a84c] font-semibold text-sm transition-colors duration-200 flex items-center gap-2 cursor-pointer shadow-sm"
                title="Download Adebara Ahmad CV (Word Document)"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick Micro-stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#27272a] w-full max-w-lg">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-white">3+</span>
                <span className="text-xs text-[#a1a1aa] font-medium">Years Mentoring</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#22c55e]">4</span>
                <span className="text-xs text-[#a1a1aa] font-medium">Key Projects</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#c9a84c]">195+</span>
                <span className="text-xs text-[#a1a1aa] font-medium">Students Reached</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
