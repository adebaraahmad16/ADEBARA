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
            // Clean Luxury Monogram Fallback
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

  // Hero section prominent portrait:
  // Circular portrait with subtle deep-green border, soft glow, elegant shadow, and smooth entrance animation
  return (
    <div className={`relative group ${className}`}>
      {/* Soft ambient glow */}
      <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gradient-to-tr from-emerald-600/35 via-emerald-500/20 to-amber-500/25 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Subtle deep-green border with soft glow and elegant shadow */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-2 bg-gradient-to-tr from-emerald-700/80 via-emerald-600/50 to-emerald-500/40 border border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.28)] group-hover:shadow-[0_0_50px_rgba(16,185,129,0.42)] transition-all duration-500">
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-emerald-900/60 bg-[#070c09] flex items-center justify-center relative shadow-2xl">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />
          ) : (
            // Clean Luxury Monogram Fallback Portrait
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0a140f] via-[#070c09] to-[#050806]">
              <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-emerald-600 to-amber-500 p-0.5 shadow-[0_0_25px_rgba(16,185,129,0.25)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#080d0a] rounded-[14px] flex items-center justify-center">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-tr from-emerald-400 via-emerald-200 to-amber-300 bg-clip-text text-transparent">
                    {PROFILE.initials}
                  </span>
                </div>
              </div>

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
    </div>
  );
}
