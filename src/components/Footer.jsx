export default function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#27272a] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#27272a]">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold text-white">
              <span className="w-7 h-7 rounded-md bg-[#166534] border border-[#27272a] flex items-center justify-center text-white font-extrabold text-xs">
                A
              </span>
              <span>
                Adebara Ahmad<span className="text-[#c9a84c]">.</span>
              </span>
            </a>
            <p className="text-xs text-[#a1a1aa] mt-1 font-medium">
              Frontend Developer <span className="text-[#22c55e]">•</span> Technology Instructor <span className="text-[#c9a84c]">•</span> Digital Educator
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium text-[#a1a1aa]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#22c55e] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a1a1aa]">
          <p>
            © {new Date().getFullYear()} Adebara Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
