import { useState, useEffect } from 'react';

export default function Hero({ onOpenCV }) {
  const roles = [
    'Frontend Developer',
    'Technology Instructor',
    'Digital Educator',
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 1800);
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
      {/* Background Subtle Gradient Spheres & Grid */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a120e] border border-emerald-800/40 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.12)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend & Training Opportunities</span>
            </div>

            {/* Main Headline */}
            <div>
              <p className="text-amber-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
                Personal Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Adebara <span className="text-neutral-100">Ahmad</span>
              </h1>
            </div>

            {/* Animated Role Text */}
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-300 min-h-[40px]">
              <span className="text-emerald-400 font-medium">I am a&nbsp;</span>
              <span className="text-white border-b-2 border-amber-400 pb-0.5">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 md:h-8 bg-amber-400 ml-1.5 animate-pulse" />
            </div>

            {/* Static Role Subtitle */}
            <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400">
              Frontend Developer <span className="text-emerald-500">•</span> Technology Instructor <span className="text-amber-400">•</span> Digital Educator
            </p>

            {/* Short Professional Introduction */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-xl">
              I specialize in crafting modern, responsive web experiences with clean component architectures, while empowering students and future developers with practical digital skills and hands-on coding literacy.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-semibold text-sm shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-0.5 transition-all duration-200"
              >
                View Projects
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#0b120e] border border-neutral-700 text-neutral-200 hover:text-white hover:border-emerald-500/60 font-semibold text-sm transition-all duration-200"
              >
                Contact Me
              </a>

              {/* Download CV */}
              <button
                onClick={onOpenCV}
                className="px-5 py-3 rounded-xl border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 font-semibold text-sm transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </button>
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

          {/* Right Column: Subtle Visual Element - Luxury Developer Card & Code Studio */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glow Behind Card */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-emerald-600/30 via-transparent to-amber-500/20 blur-xl opacity-70" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#090d0b]/95 border border-emerald-900/40 p-5 shadow-2xl backdrop-blur-xl">
                {/* Header with Traffic Lights & File Tab */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/70">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-3 py-1 rounded bg-[#0f1713] text-[11px] font-mono text-emerald-400 border border-emerald-900/30">
                    AdebaraAhmad.dev.jsx
                  </div>
                </div>

                {/* Developer Profile Header inside Card */}
                <div className="flex items-center gap-3.5 mb-4 p-3 rounded-xl bg-[#0d1410] border border-emerald-900/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-amber-500 p-0.5 flex items-center justify-center">
                    <div className="w-full h-full bg-[#090d0b] rounded-[10px] flex items-center justify-center font-mono font-bold text-base text-amber-300">
                      AA
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Adebara Ahmad</h3>
                    <p className="text-xs text-neutral-400">Frontend Developer & Instructor</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      ACTIVE
                    </span>
                  </div>
                </div>

                {/* Code-Inspired Graphic */}
                <div className="font-mono text-xs text-neutral-300 space-y-1.5 p-3.5 rounded-xl bg-[#050806] border border-neutral-800/60 overflow-x-auto">
                  <p className="text-neutral-500">// Personal Profile Definition</p>
                  <p>
                    <span className="text-amber-400">const</span>{' '}
                    <span className="text-emerald-400">profile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">name:</span>{' '}
                    <span className="text-amber-300">"Adebara Ahmad"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">roles:</span> [
                    <span className="text-emerald-300">"Frontend Dev"</span>,{' '}
                    <span className="text-emerald-300">"Instructor"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">coreStack:</span> [
                    <span className="text-amber-300">"React"</span>,{' '}
                    <span className="text-amber-300">"Tailwind CSS"</span>,{' '}
                    <span className="text-amber-300">"JavaScript"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-neutral-400">mission:</span>{' '}
                    <span className="text-neutral-300">
                      "Building UI & Mentoring Builders"
                    </span>,
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Tech Highlights footer inside Card */}
                <div className="mt-4 pt-3 border-t border-neutral-800/70 flex items-center justify-between text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Clean Architecture
                  </span>
                  <span className="text-neutral-500 font-mono text-[11px]">Ready to Collaborate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
