import React from 'react';
import logoMark from '../assets/logo-mark.png';

export default function Logo({ variant = 'full', size = 'default', className = '' }) {
  // Sizes: 'small', 'default', 'large'
  const isSmall = size === 'small';
  const isLarge = size === 'large';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Canonical Green Gradient Lotus/Mandala Logo Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isSmall ? 'w-9 h-9' : isLarge ? 'w-16 h-16' : 'w-12 h-12'
      }`}>
        <img
          src={logoMark}
          alt="AyurSankalpa Clinic Mark"
          className="w-full h-full object-contain drop-shadow-xs filter"
        />
      </div>

      {/* Typography: AYURSANKALPA CLINIC + Healing with Clarity & Care */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className={`font-serif tracking-[0.12em] font-bold text-[#1F2E22] uppercase ${
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
