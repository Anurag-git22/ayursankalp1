import React from 'react';
import logoMark from '../assets/logo-mark.png';

/**
 * LogoWatermark - Centered background watermark component
 * 
 * A single, centered watermark that appears on all pages as a subtle visual texture.
 * Fixed to viewport center for consistent appearance across all scrolling content.
 * Fully accessible and non-interactive.
 */
export default function LogoWatermark() {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      aria-hidden="true"
      style={{
        opacity: 0.06
      }}
    >
      <img 
        src={logoMark} 
        alt="" 
        className="max-w-[700px] max-h-[700px] w-full h-full object-contain"
        style={{ 
          filter: 'grayscale(0%) contrast(1.05)',
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}
