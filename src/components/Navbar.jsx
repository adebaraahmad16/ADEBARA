import { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import PROFILE from '../data/profile';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050806]/92 backdrop-blur-md border-b border-emerald-900/35 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'bg-[#050806]/75 backdrop-blur-md border-b border-emerald-950/50 py-3.5 sm:py-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Compact Integrated Profile Section (Clickable to #home) */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 sm:gap-3 transition-all focus:outline-none"
          aria-label={`${PROFILE.name} — Home`}
        >
          {/* Reusable Circular Profile Image */}
          <ProfileImage variant="navbar" />

          {/* Profile Identity Details (Minimal & Clean) */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                {PROFILE.name}
              </span>
            </div>
            <span className="text-[11px] font-medium text-emerald-400/90 tracking-wide leading-tight hidden sm:block">
              {PROFILE.primaryRole}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090e0b]/85 border border-emerald-950/80 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-emerald-900/60 shadow-[0_0_12px_rgba(16,185,129,0.3)] border border-emerald-700/40'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/[0.04]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="text-xs font-semibold px-4 py-2 rounded-full border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-200 cursor-pointer"
          >
            Download CV
          </button>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-200"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-neutral-300 hover:text-white bg-[#0a0f0d] border border-emerald-900/40 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[59px] bg-[#060907]/98 border-b border-emerald-900/40 backdrop-blur-xl px-6 py-5 shadow-2xl transition-all">
          {/* Mobile Profile Header in drawer */}
          <div className="flex items-center gap-3 pb-4 mb-3 border-b border-emerald-950/80">
            <ProfileImage variant="navbar" />
            <div>
              <p className="text-sm font-bold text-white leading-tight">{PROFILE.name}</p>
              <p className="text-xs text-emerald-400/90 leading-tight">{PROFILE.fullRole}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-900/40 text-amber-300 border border-emerald-800/40'
                      : 'text-neutral-300 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-emerald-950 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full text-center text-xs font-semibold py-2.5 rounded-lg border border-amber-500/30 text-amber-300 hover:bg-amber-500/10 cursor-pointer"
              >
                Download CV
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-semibold py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-500"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
