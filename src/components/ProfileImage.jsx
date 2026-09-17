import { useState } from 'react';
import PROFILE from '../data/profile';

/**
 * Reusable ProfileImage component.
 * Displays the profile portrait from PROFILE.imageSrc in both Navbar and Hero sections.
 * Automatically handles missing image with a clean, non-AI luxury monogram fallback.
 */
export default function ProfileImage({
  variant = 'navbar',
  className = '',
  alt = PROFILE.name,
  src = PROFILE.imageSrc,
}) {
  const [imgError, setImgError] = useState(false);

  // Navbar compact avatar
  if (variant === 'navbar') {
    return (
      <div
        className={`relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-emerald-500 via-emerald-400/40 to-amber-400/60 shadow-[0_0_12px_rgba(16,185,129,0.25)] group-hover:shadow-[0_0_16px_rgba(251,191,36,0.35)] transition-all duration-300 ${className}`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#070d0a] flex items-center justify-center">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
              loading="eager"
            />
          ) : (
            // Clean Luxury Monogram Fallback (No synthetic AI face)
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0c1611] to-[#050806] text-amber-300 font-mono font-bold text-xs sm:text-sm tracking-tighter">
              {PROFILE.initials}
            </div>
          )}
        </div>

        {/* Small active status dot */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#050806]" />
      </div>
    );
  }

  // Hero section prominent portrait
  return (
    <div className={`relative group ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-emerald-600/30 via-emerald-400/10 to-amber-500/25 blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative Outer Border Ring with subtle gradient */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-tr from-emerald-600/60 via-emerald-400/20 to-amber-400/50 shadow-[0_0_40px_rgba(16,185,129,0.22)] group-hover:shadow-[0_0_55px_rgba(16,185,129,0.35)] transition-all duration-500">
        <div className="w-full h-full rounded-full overflow-hidden border border-emerald-800/40 bg-[#070c09] flex items-center justify-center relative">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            // Clean Luxury Monogram Fallback Portrait (State-of-the-art dark aesthetic)
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0a140f] via-[#070c09] to-[#050806]">
              {/* Subtle Tech Grid lines */}
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Central Luxury Emblem */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-500 p-0.5 shadow-[0_0_25px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#080d0a] rounded-[14px] flex items-center justify-center">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-tr from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent">
                    {PROFILE.initials}
                  </span>
                </div>
              </div>

              {/* Fallback Identity Text */}
              <div className="relative z-10 mt-3 sm:mt-4">
                <span className="block text-white font-bold text-sm sm:text-base tracking-tight">
                  {PROFILE.name}
                </span>
                <span className="block text-[11px] sm:text-xs text-emerald-400/90 font-medium mt-0.5">
                  {PROFILE.primaryRole}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Experience & Status Badge */}
      <div className="absolute -bottom-2 -right-1 sm:bottom-2 sm:right-2 bg-[#090f0c]/95 border border-emerald-800/60 rounded-xl px-3 py-1.5 shadow-[0_8px_20px_rgba(0,0,0,0.7)] backdrop-blur-md flex items-center gap-2 pointer-events-none group-hover:border-amber-400/40 transition-colors">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-mono font-medium text-neutral-200">
          Frontend &amp; Educator
        </span>
      </div>
    </div>
  );
}
