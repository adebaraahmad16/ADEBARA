import { useState } from 'react';
import PROFILE from '../data/profile';

/**
 * Reusable ProfileImage component with 100% solid colors and zero gradients.
 * Displays the profile portrait from PROFILE.imageSrc in both Navbar and Hero sections.
 * Glow is created using subtle box-shadow only.
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
        className={`relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[2px] bg-[#151515] border border-[#27272a] shadow-sm group-hover:border-[#166534] transition-colors duration-200 ${className}`}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#111111] flex items-center justify-center">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              loading="eager"
            />
          ) : (
            // Clean Monogram Fallback
            <div className="w-full h-full flex items-center justify-center bg-[#151515] text-[#c9a84c] font-mono font-bold text-xs sm:text-sm">
              {PROFILE.initials}
            </div>
          )}
        </div>

        {/* Small active status dot */}
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#22c55e] border-2 border-[#0a0a0a]" />
      </div>
    );
  }

  // Hero section prominent portrait:
  // Circular portrait with solid border, subtle monochromatic box-shadow, and zero gradients.
  return (
    <div className={`relative group ${className}`}>
      {/* Container with solid border and subtle box-shadow glow */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-2 bg-[#151515] border-2 border-[#166534] shadow-[0_0_24px_rgba(22,101,52,0.35)] transition-all duration-300 hover:border-[#22c55e]">
        <div className="w-full h-full rounded-full overflow-hidden border border-[#27272a] bg-[#111111] flex items-center justify-center relative">
          {!imgError ? (
            <img
              src={src}
              alt={alt}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="eager"
            />
          ) : (
            // Clean Luxury Monogram Fallback with Solid Colors
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#151515]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#1a1a1a] border border-[#27272a] flex items-center justify-center shadow-inner">
                <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#22c55e]">
                  {PROFILE.initials}
                </span>
              </div>

              <div className="relative z-10 mt-3 sm:mt-4">
                <span className="block text-white font-bold text-sm sm:text-base tracking-tight">
                  {PROFILE.name}
                </span>
                <span className="block text-[11px] sm:text-xs text-[#a1a1aa] font-medium mt-0.5">
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
