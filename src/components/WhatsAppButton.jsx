import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Hello Dr. Ruturaj Kadam, I would like to inquire about a consultation at AyurSankalpa Clinic, Aundh."
  );
  const whatsappLink = `https://wa.me/918291537788?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      
      {/* Small Dismissible Greeting Bubble */}
      {isTooltipOpen && (
        <div className="mb-2.5 max-w-[220px] bg-white rounded-2xl p-3 shadow-xl border border-[#2F5233]/15 text-xs text-[#1F2E22] relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setIsTooltipOpen(false)}
            className="absolute top-1.5 right-1.5 p-1 text-[#1F2E22]/40 hover:text-[#1F2E22] rounded-full cursor-pointer"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="font-semibold text-[#2F5233] pr-3">
            Direct Clinic WhatsApp
          </div>
          <p className="text-[11px] text-[#1F2E22]/75 mt-0.5 leading-snug">
            Have questions or want to book via WhatsApp? Reach out directly.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg shadow-[#25D366]/35 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:ring-3 focus-visible:ring-[#25D366] focus-visible:outline-hidden"
        aria-label={`Chat with AyurSankalpa on WhatsApp at ${CLINIC_INFO.whatsappFormatted}`}
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-5 h-5 fill-current shrink-0"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          WhatsApp
        </span>
      </a>

    </div>
  );
}
