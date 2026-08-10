import React from 'react';
import iconLogoImg from '../assets/images/icon_logo.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'full-color';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full-color', className = '', size = 'md' }) => {
  const sizeConfig = {
    sm: {
      container: 'h-10 sm:h-12',
      img: 'h-10 sm:h-12',
      title: 'text-base sm:text-lg',
      subtitle: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      container: 'h-14 sm:h-16',
      img: 'h-14 sm:h-16',
      title: 'text-lg sm:text-xl',
      subtitle: 'text-[9px] sm:text-[10px]',
      gap: 'gap-2.5',
    },
    lg: {
      container: 'h-16 sm:h-20',
      img: 'h-16 sm:h-20',
      title: 'text-xl sm:text-2xl',
      subtitle: 'text-[10px] sm:text-[11px]',
      gap: 'gap-3',
    },
  };

  const config = sizeConfig[size];
  const isDarkBg = variant === 'light';

  return (
    <div className={`flex items-center ${config.gap} ${config.container} ${className}`}>
      {/* Official Company Icon Logo Image */}
      <img
        src={iconLogoImg}
        alt="Solar Planet Logo"
        className={`${config.img} w-auto object-contain shrink-0`}
      />

      {/* Official Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-black tracking-tight font-sans ${config.title}`}>
          <span style={{ color: '#1A79B9' }}>SOLAR</span>
          <span style={{ color: '#A6CD40' }}>PLANET</span>
        </span>
        <span
          className={`${config.subtitle} uppercase tracking-[0.2em] font-semibold mt-0.5 transition-colors duration-300 ${
            isDarkBg ? 'text-white' : 'text-[#536370]'
          }`}
        >
          Energia Solar
        </span>
      </div>
    </div>
  );
};

