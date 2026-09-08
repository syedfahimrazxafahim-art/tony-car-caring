import React, { useState } from 'react';
import { USER_ASSETS } from '../data/businessData';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const iconSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Official Tony's Car Care Logo Image */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center bg-black border border-white/20 rounded-sm overflow-hidden flex-shrink-0 group-hover:border-white transition-colors duration-300 shadow-md`}
      >
        {!imageFailed ? (
          <img
            src={USER_ASSETS.logo.local}
            alt={USER_ASSETS.logo.alt}
            referrerPolicy="no-referrer"
            loading="eager"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== USER_ASSETS.logo.remote) {
                target.src = USER_ASSETS.logo.remote;
              } else {
                setImageFailed(true);
              }
            }}
            className="w-full h-full object-cover object-center filter contrast-125"
          />
        ) : (
          <div className="text-white font-black text-xs sm:text-sm tracking-wider">
            TCC
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-wider text-white uppercase ${textSizes[size]}`}
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Tony’s
        </span>
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#D9D9D9] uppercase mt-0.5">
          Car Care
        </span>
        {showSubtitle && (
          <span className="text-[8px] font-semibold tracking-[0.2em] text-[#AFAFAF] uppercase mt-0.5 hidden sm:block">
            Los Angeles • Mobile
          </span>
        )}
      </div>
    </div>
  );
};
