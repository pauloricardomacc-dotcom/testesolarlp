import React from 'react';
import { motion } from 'motion/react';

// 1. Photovoltaic Solar Cell Grid Pattern
export const SolarCellGridPattern: React.FC<{ opacity?: number; className?: string }> = ({
  opacity = 0.05,
  className = '',
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="solar-cell-pattern" width="60" height="90" patternUnits="userSpaceOnUse">
          {/* Module Outer Frame */}
          <rect x="1" y="1" width="58" height="88" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Photovoltaic Cells (6 Cells per module) */}
          <line x1="1" y1="30" x2="59" y2="30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" />
          <line x1="1" y1="60" x2="59" y2="60" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" />
          <line x1="30" y1="1" x2="30" y2="89" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" />
          {/* Silver Busbars */}
          <line x1="10" y1="1" x2="10" y2="89" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
          <line x1="50" y1="1" x2="50" y2="89" stroke="currentColor" strokeWidth="0.5" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#solar-cell-pattern)" />
    </svg>
  );
};

// 2. Technical Engineering Blueprint Grid
export const TechGridPattern: React.FC<{ opacity?: number; className?: string }> = ({
  opacity = 0.04,
  className = '',
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="tech-blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1" fill="currentColor" />
          <circle cx="40" cy="0" r="1" fill="currentColor" />
          <circle cx="0" cy="40" r="1" fill="currentColor" />
          <circle cx="40" cy="40" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tech-blueprint-grid)" />
    </svg>
  );
};

// 3. Solar Arc & Brand Orbital Ring Graphic
export const SolarArcGraphic: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 600,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="solar-arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F3B62B" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#A8C936" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1686C2" stopOpacity="0.1" />
        </linearGradient>
        <radialGradient id="solar-sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3B62B" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#1686C2" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#073B60" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sun Glow Center */}
      <circle cx="300" cy="300" r="220" fill="url(#solar-sun-glow)" />

      {/* Solar Flare Arc Outer */}
      <circle
        cx="300"
        cy="300"
        r="280"
        stroke="url(#solar-arc-grad)"
        strokeWidth="2"
        strokeDasharray="6 8 18 12 40 8"
        opacity="0.6"
      />

      {/* Orbital Ring Inspired by Solar Planet Icon */}
      <ellipse
        cx="300"
        cy="300"
        rx="240"
        ry="130"
        stroke="#1686C2"
        strokeWidth="1.5"
        strokeDasharray="12 12"
        className="animate-energy-flow"
        transform="rotate(-25 300 300)"
        opacity="0.4"
      />

      {/* Primary Golden Arc */}
      <path
        d="M 60 300 A 240 240 0 0 1 540 300"
        stroke="#F3B62B"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
      />

      {/* Orbiting Energy Node */}
      <circle cx="480" cy="200" r="6" fill="#A8C936" />
      <circle cx="480" cy="200" r="12" fill="#A8C936" opacity="0.3" />
    </svg>
  );
};

// 4. Abstract Topographic Regional Contour Lines (for Rural & Regional context)
export const TopographicContourLines: React.FC<{ opacity?: number; className?: string }> = ({
  opacity = 0.08,
  className = '',
}) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-50,100 C150,180 300,80 500,160 C700,240 850,120 1050,200"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-50,200 C180,280 350,160 550,260 C750,360 880,220 1050,300"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-50,300 C200,380 400,240 600,360 C800,480 900,320 1050,400"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M-50,400 C220,480 450,340 650,460 C850,580 920,420 1050,500"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const TopographicLinesPattern = TopographicContourLines;


// 5. Perspective Solar Panels Vector Art
export const PerspectiveSolarPanels: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 500 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
    >
      <defs>
        <linearGradient id="panel-fill-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1686C2" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#073B60" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Panel 1 */}
      <polygon points="50,200 220,130 380,180 200,260" fill="url(#panel-fill-grad)" stroke="#1686C2" strokeWidth="1.5" opacity="0.6" />
      <line x1="135" y1="165" x2="290" y2="220" stroke="#1686C2" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
      <line x1="110" y1="225" x2="275" y2="155" stroke="#1686C2" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

      {/* Panel 2 (Offset Behind) */}
      <polygon points="150,110 320,50 460,95 280,165" fill="url(#panel-fill-grad)" stroke="#A8C936" strokeWidth="1.5" opacity="0.4" />
      <line x1="235" y1="80" x2="370" y2="130" stroke="#A8C936" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />

      {/* Mounting Rails */}
      <line x1="40" y1="210" x2="140" y2="120" stroke="#536370" strokeWidth="2" opacity="0.4" />
      <line x1="190" y1="270" x2="310" y2="140" stroke="#536370" strokeWidth="2" opacity="0.4" />
    </svg>
  );
};

// 6. Interactive / Animated Energy Connection Line Component
export const AnimatedEnergyLine: React.FC<{
  vertical?: boolean;
  className?: string;
  glowColor?: string;
}> = ({ vertical = false, className = '', glowColor = '#A8C936' }) => {
  return (
    <div className={`relative pointer-events-none overflow-hidden ${className}`}>
      <svg className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line
          x1={vertical ? '50%' : '0'}
          y1={vertical ? '0' : '50%'}
          x2={vertical ? '50%' : '100%'}
          y2={vertical ? '100%' : '50%'}
          stroke={glowColor}
          strokeWidth="2"
          strokeDasharray="6 6"
          className="animate-energy-flow"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};
