import React from 'react';

export default function Logo({ variant = 'full', size = 'default', className = '' }) {
  // Sizes: 'small', 'default', 'large'
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Botanical Mandala Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isSmall ? 'w-10 h-10' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
      }`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Ring with subtle dotted accent */}
          <circle cx="50" cy="50" r="47" stroke="#2F5233" strokeWidth="1.5" strokeOpacity="0.8" fill="#FAF6EC" />
          <circle cx="50" cy="50" r="43" stroke="#C08A28" strokeWidth="0.8" strokeDasharray="2 3" />
          
          {/* 8-Direction Lotus Petals */}
          <g stroke="#2F5233" strokeWidth="1.2" fill="#EAF2E8" fillOpacity="0.6">
            <path d="M50 8 C54 22 58 28 66 34 C58 40 54 46 50 60 C46 46 42 40 34 34 C42 28 46 22 50 8 Z" />
            <path d="M50 92 C54 78 58 72 66 66 C58 60 54 54 50 40 C46 54 42 60 34 66 C42 72 46 78 50 92 Z" />
            <path d="M8 50 C22 54 28 58 34 66 C40 58 46 54 60 50 C46 46 40 42 34 34 C28 42 22 46 8 50 Z" />
            <path d="M92 50 C78 54 72 58 66 66 C60 58 54 54 40 50 C54 46 60 42 66 34 C72 42 78 46 92 50 Z" />
          </g>

          {/* 4 Corner Leaf Motifs */}
          <g fill="#7FA173" fillOpacity="0.7">
            <path d="M22 22 C26 20 30 22 30 26 C28 29 23 28 22 22 Z" />
            <path d="M78 22 C74 20 70 22 70 26 C72 29 77 28 78 22 Z" />
            <path d="M22 78 C26 80 30 78 30 74 C28 71 23 72 22 78 Z" />
            <path d="M78 78 C74 80 70 78 70 74 C72 71 77 72 78 78 Z" />
          </g>

          {/* Inner Golden Ring */}
          <circle cx="50" cy="50" r="23" stroke="#C08A28" strokeWidth="1.2" fill="#FFFFFF" fillOpacity="0.9" />

          {/* Meditating Figure / Lotus Center */}
          <g fill="#2F5233">
            {/* Head */}
            <circle cx="50" cy="40" r="3.8" />
            {/* Torso & Shoulders in Dhyana Mudra */}
            <path d="M43 47 C45 45.5 55 45.5 57 47 C60 49 61 55 58 58 C55 60 52 59 50 59.5 C48 59 45 60 42 58 C39 55 40 49 43 47 Z" />
            {/* Crossed Legs Base / Lotus Base */}
            <path d="M37 60 C42 56 46 60.5 50 61 C54 60.5 58 56 63 60 C64.5 62 61 64.5 50 64.5 C39 64.5 35.5 62 37 60 Z" fill="#C08A28" />
            {/* Rising Sprout above crown */}
            <path d="M50 34 C51.5 31.5 54 32 54.5 34 C53 35.5 51.5 35 50 34 Z" fill="#7FA173" />
            <path d="M50 34 C48.5 31.5 46 32 45.5 34 C47 35.5 48.5 35 50 34 Z" fill="#7FA173" />
          </g>
        </svg>
      </div>

      {/* Typography: AYURSANKALPA CLINIC + Healing with Clarity & Care */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif tracking-[0.12em] font-semibold text-[#1F2E22] uppercase ${
              isSmall ? 'text-base' : isLarge ? 'text-2xl' : 'text-xl'
            }`}>
              AyurSankalpa
            </span>
            <span className={`text-[10px] tracking-widest font-semibold px-1.5 py-0.5 rounded bg-[#2F5233]/10 text-[#2F5233] uppercase ${
              isSmall ? 'hidden sm:inline-block' : ''
            }`}>
              Clinic
            </span>
          </div>
          <span className={`font-sans tracking-wider text-[#C08A28] italic font-medium ${
            isSmall ? 'text-[10px]' : 'text-xs'
          }`}>
            Healing with Clarity & Care
          </span>
        </div>
      )}
    </div>
  );
}
