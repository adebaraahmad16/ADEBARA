import { useState, useEffect } from 'react';
import ProfileImage from './ProfileImage';
import PROFILE from '../data/profile';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ onOpenCV }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isDark } = useTheme();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-[#0a0a0a] border-b border-[#27272a] ${
        scrolled ? 'py-3 shadow-md' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Compact Integrated Profile Section (Clickable to #home) */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 sm:gap-3 transition-colors focus:outline-none"
          aria-label={`${PROFILE.name} — Home`}
        >
          {/* Reusable Circular Profile Image */}
          <ProfileImage variant="navbar" />

          {/* Profile Identity Details */}
          <div className="flex flex-col text-left">
            <span className="text-white font-bold text-sm sm:text-base tracking-tight leading-tight group-hover:text-[#c9a84c] transition-colors">
              {PROFILE.name}
            </span>
            <span className="text-[11px] font-medium text-[#22c55e] tracking-wide leading-tight hidden sm:block">
              {PROFILE.primaryRole}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111111] border border-[#27272a] rounded-full px-3 py-1.5 shadow-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white bg-[#166534] border border-[#27272a]'
                    : 'text-[#a1a1aa] hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons (Desktop & Tablet) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark / Light Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#22c55e] cursor-pointer flex items-center justify-center ${
              isDark
                ? 'bg-[#111111] hover:bg-[#1a1a1a] border-[#27272a] text-[#c9a84c] hover:border-[#c9a84c] shadow-sm'
                : 'bg-white hover:bg-slate-100 border-slate-200 text-amber-500 hover:border-amber-400 shadow-sm'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 transition-transform duration-300 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="/docs/Adebara-Bamigbola-Ahmad-CV.docx"
            download="Adebara-Bamigbola-Ahmad-CV.docx"
            className="text-xs font-semibold px-4 py-2 rounded-full border border-[#c9a84c] text-[#c9a84c] bg-[#111111] hover:bg-[#1a1a1a] transition-colors cursor-pointer flex items-center gap-1.5"
            title="Download CV Document"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV</span>
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-full bg-[#166534] hover:bg-[#22c55e] text-white border border-[#27272a] transition-colors shadow-sm"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Header Controls: Theme Toggle & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-lg border transition-colors focus:outline-none flex items-center justify-center ${
              isDark
                ? 'bg-[#151515] border-[#27272a] text-[#c9a84c]'
                : 'bg-white border-slate-200 text-amber-500 shadow-sm'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#a1a1aa] hover:text-white bg-[#151515] border border-[#27272a] focus:outline-none"
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#27272a] px-6 py-5 shadow-2xl transition-all">
          {/* Mobile Profile Header in drawer */}
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#27272a]">
            <div className="flex items-center gap-3">
              <ProfileImage variant="navbar" />
              <div>
                <p className="text-sm font-bold text-white leading-tight">{PROFILE.name}</p>
                <p className="text-xs text-[#22c55e] leading-tight">{PROFILE.fullRole}</p>
              </div>
            </div>

            {/* In-Drawer Theme Switch */}
            <button
              type="button"
              onClick={toggleTheme}
              className={`px-2.5 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                isDark
                  ? 'bg-[#151515] border-[#27272a] text-[#c9a84c]'
                  : 'bg-slate-100 border-slate-300 text-amber-600'
              }`}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>
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
                      ? 'bg-[#166534] text-white border border-[#27272a]'
                      : 'text-[#a1a1aa] hover:text-white hover:bg-[#151515]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#27272a] flex flex-col gap-2.5">
              <a
                href="/docs/Adebara-Bamigbola-Ahmad-CV.docx"
                download="Adebara-Bamigbola-Ahmad-CV.docx"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-semibold py-2.5 rounded-lg border border-[#c9a84c] text-[#c9a84c] bg-[#111111] hover:bg-[#1a1a1a] cursor-pointer flex items-center justify-center gap-1.5"
                title="Download CV Document"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download CV (.docx)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center text-xs font-semibold py-2.5 rounded-lg bg-[#166534] text-white hover:bg-[#22c55e] border border-[#27272a]"
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
