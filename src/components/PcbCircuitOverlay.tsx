import React from 'react';

export const PcbCircuitOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      <svg
        className="w-full h-full opacity-40 md:opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pcbGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0052FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.1" />
          </linearGradient>

          <linearGradient id="pcbGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top left circuits */}
        <path
          d="M 60 40 L 180 40 L 240 100 L 420 100 L 480 160 L 680 160"
          stroke="url(#pcbGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 8"
          filter="url(#glow)"
        />
        <circle cx="60" cy="40" r="3.5" fill="#00F0FF" />
        <circle cx="240" cy="100" r="2.5" fill="#00D2FF" />
        <circle cx="680" cy="160" r="4" fill="#00F0FF" filter="url(#glow)" />

        {/* Branch down from top-left */}
        <path
          d="M 180 40 L 180 140 L 220 180 L 220 320"
          stroke="#00F0FF"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
        <circle cx="220" cy="320" r="3" fill="#38BDF8" />

        {/* Diagonal main bus line connecting down to the search bar position */}
        <path
          d="M 100 240 L 320 240 L 380 300 L 520 300 L 560 340 L 560 520 L 620 580"
          stroke="url(#pcbGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
          filter="url(#glow)"
        />
        <circle cx="100" cy="240" r="3" fill="#00F0FF" />
        <circle cx="380" cy="300" r="2" fill="#0052FF" />
        <circle cx="620" cy="580" r="4" fill="#00F0FF" filter="url(#glow)" />

        {/* Right side high-tech traces and chip breakout */}
        <path
          d="M 1380 80 L 1260 80 L 1200 140 L 980 140 L 920 200 L 860 200"
          stroke="url(#pcbGradient2)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          filter="url(#glow)"
        />
        <circle cx="1380" cy="80" r="3.5" fill="#38BDF8" />
        <circle cx="1200" cy="140" r="2.5" fill="#00D2FF" />
        <circle cx="860" cy="200" r="3.5" fill="#00F0FF" />

        {/* Secondary right track downwards */}
        <path
          d="M 1320 200 L 1180 200 L 1120 260 L 1120 420 L 1060 480 L 940 480"
          stroke="url(#pcbGradient1)"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />
        <circle cx="1320" cy="200" r="2.5" fill="#00F0FF" />
        <circle cx="1120" cy="260" r="2" fill="#00D2FF" />
        <circle cx="940" cy="480" r="3" fill="#00F0FF" />

        {/* Center-bottom connections feeding into exploration bar area */}
        <path
          d="M 440 640 L 520 720 L 720 720 L 800 640 L 960 640"
          stroke="url(#pcbGradient1)"
          strokeWidth="1.5"
          strokeDasharray="2 4"
        />
        <circle cx="440" cy="640" r="3" fill="#00F0FF" />
        <circle cx="720" cy="720" r="2.5" fill="#38BDF8" />
        <circle cx="960" cy="640" r="3" fill="#00F0FF" />

        {/* Microchip pin footprint schematic overlay */}
        <g transform="translate(1160, 280)" opacity="0.4">
          <rect x="0" y="0" width="90" height="90" rx="4" stroke="#00F0FF" strokeWidth="1" fill="none" />
          <circle cx="12" cy="12" r="3" fill="#00F0FF" />
          {/* Pins left */}
          <line x1="-12" y1="20" x2="0" y2="20" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="-12" y1="36" x2="0" y2="36" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="-12" y1="52" x2="0" y2="52" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="-12" y1="68" x2="0" y2="68" stroke="#00F0FF" strokeWidth="1.5" />
          {/* Pins right */}
          <line x1="90" y1="20" x2="102" y2="20" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="90" y1="36" x2="102" y2="36" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="90" y1="52" x2="102" y2="52" stroke="#00F0FF" strokeWidth="1.5" />
          <line x1="90" y1="68" x2="102" y2="68" stroke="#00F0FF" strokeWidth="1.5" />
          {/* Micro text inside IC */}
          <text x="45" y="48" fill="#00F0FF" fontSize="10" fontFamily="monospace" textAnchor="middle">
            ESP32
          </text>
          <text x="45" y="60" fill="#38BDF8" fontSize="7" fontFamily="monospace" textAnchor="middle">
            MCU-CORE
          </text>
        </g>

        {/* Pulsing signal nodes */}
        <circle cx="480" cy="160" r="4" fill="#00F0FF" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="1120" cy="420" r="3.5" fill="#38BDF8" className="animate-ping" style={{ animationDuration: '4s' }} />
      </svg>
    </div>
  );
};
