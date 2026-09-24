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
    <footer className="bg-[#030604] border-t border-emerald-950/80 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Brand & Subtitle */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold text-white">
              <span className="w-7 h-7 rounded-md bg-gradient-to-br from-emerald-500 to-amber-400 flex items-center justify-center text-black font-extrabold text-xs">
                A
              </span>
              <span>
                Adebara Ahmad<span className="text-amber-400">.</span>
              </span>
            </a>
            <p className="text-xs text-neutral-400 mt-1 font-medium">
              Frontend Developer <span className="text-emerald-500">•</span> Technology Instructor <span className="text-amber-400">•</span> Digital Educator
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-xs font-medium text-neutral-400">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-emerald-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} Adebara Ahmad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
