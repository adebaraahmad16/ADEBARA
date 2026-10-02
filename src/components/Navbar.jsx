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

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-white bg-[#151515] border border-[#27272a] focus:outline-none"
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
        <div className="lg:hidden bg-[#0a0a0a] border-b border-[#27272a] px-6 py-5 shadow-2xl transition-all">
          {/* Mobile Profile Header in drawer */}
          <div className="flex items-center gap-3 pb-4 mb-3 border-b border-[#27272a]">
            <ProfileImage variant="navbar" />
            <div>
              <p className="text-sm font-bold text-white leading-tight">{PROFILE.name}</p>
              <p className="text-xs text-[#22c55e] leading-tight">{PROFILE.fullRole}</p>
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
