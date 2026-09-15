import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Sparkles, Calendar, ShieldCheck, Award, HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EC] via-[#F5EFE0] to-[#FAF6EC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#2F5233]/10">
      {/* Subtle organic background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#7FA173]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#C08A28]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F5233]/10 border border-[#2F5233]/15 text-[#2F5233] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>{CLINIC_INFO.bannerTagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C08A28]" />
              <span className="text-[#1F2E22]/80">Aundh, Pune</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F2E22] leading-[1.12] tracking-tight">
              Evidence-Informed <br />
              <span className="text-[#2F5233] italic font-normal">Classical Ayurveda</span> for <br />
              Lasting Vitality.
            </h1>

            {/* Approach Line */}
            <p className="text-base sm:text-lg text-[#2F5233] font-medium font-serif italic flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Evidence-Informed Care</span>
              <span className="text-[#C08A28] font-bold">•</span>
              <span>Personalized Treatment</span>
              <span className="text-[#C08A28] font-bold">•</span>
              <span>Lifestyle Medicine</span>
            </p>

            {/* Subtext description */}
            <p className="text-sm sm:text-base text-[#1F2E22]/80 max-w-2xl leading-relaxed font-sans">
              Led by <strong>{CLINIC_INFO.doctor.name}</strong>, AyurSankalpa Clinic brings deep root-cause diagnostic precision, custom herbal rasayanas, and metabolic lifestyle medicine to address chronic disorders without perpetual dependency.
            </p>

            {/* Doctor Credentials Chip */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/70 backdrop-blur-xs border border-[#2F5233]/15 shadow-xs flex flex-wrap items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2F5233] text-[#FAF6EC] flex items-center justify-center font-serif font-bold text-base shrink-0">
                RK
              </div>
              <div className="text-xs sm:text-sm">
                <div className="font-semibold text-[#1F2E22] flex items-center gap-1.5">
                  <span>{CLINIC_INFO.doctor.name}</span>
                  <span className="text-xs font-normal text-[#2F5233] bg-[#EAF2E8] px-2 py-0.5 rounded-md">
                    MD (Ayurveda), Pune
                  </span>
                </div>
                <div className="text-[#1F2E22]/70 text-xs mt-0.5">
                  PGDEMS • DDM (Diabetes) • DiH (Pune) • Certified in Integrative Therapies (USA)
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-base font-semibold shadow-lg shadow-[#2F5233]/25 hover:bg-[#1E3721] active:scale-[0.98] transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#C08A28] group-hover:scale-110 transition-transform" />
                <span>Book Clinic Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#FAF6EC]/80 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#specialties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6EC] border border-[#2F5233]/25 text-[#1F2E22] text-base font-medium hover:bg-[#EAF2E8] hover:border-[#2F5233]/40 transition-all duration-200"
              >
                <span>Explore 13 Specialities</span>
              </a>
            </div>

            {/* Quick trust checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#1F2E22]/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7FA173] shrink-0" />
                <span>In-Depth Nadi & Dosha Pariksha</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7FA173] shrink-0" />
                <span>Standardized Classical Formulations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7FA173] shrink-0" />
                <span>Unhurried 45-Min Consultations</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: Organic Radial Mandala with Clinic Centerpiece */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#C08A28]/40 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#2F5233]/20" />
              <div className="absolute inset-12 rounded-full bg-[#EAF2E8]/40 blur-xl" />

              {/* Central Mandala Card */}
              <div className="relative z-10 w-4/5 aspect-square rounded-3xl bg-[#FAF6EC] p-6 sm:p-8 border border-[#2F5233]/15 shadow-xl flex flex-col items-center justify-center text-center">
                
                {/* SVG Mandala Center */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="#FAF6EC" stroke="#2F5233" strokeWidth="1.5" />
                    <circle cx="50" cy="50" r="42" stroke="#C08A28" strokeWidth="0.8" strokeDasharray="3 3" />
                    
                    {/* Petals */}
                    <g stroke="#2F5233" strokeWidth="1.2" fill="#7FA173" fillOpacity="0.25">
                      <path d="M50 8 C54 22 58 28 66 34 C58 40 54 46 50 60 C46 46 42 40 34 34 C42 28 46 22 50 8 Z" />
                      <path d="M50 92 C54 78 58 72 66 66 C58 60 54 54 50 40 C46 54 42 60 34 66 C42 72 46 78 50 92 Z" />
                      <path d="M8 50 C22 54 28 58 34 66 C40 58 46 54 60 50 C46 46 40 42 34 34 C28 42 22 46 8 50 Z" />
                      <path d="M92 50 C78 54 72 58 66 66 C60 58 54 54 40 50 C54 46 60 42 66 34 C72 42 78 46 92 50 Z" />
                    </g>
                    
                    {/* Inner Golden Meditating Sanctuary */}
                    <circle cx="50" cy="50" r="22" fill="#FAF6EC" stroke="#C08A28" strokeWidth="1.5" />
                    <circle cx="50" cy="40" r="3.5" fill="#2F5233" />
                    <path d="M43 47 C45 45.5 55 45.5 57 47 C60 49 61 55 58 58 C55 60 52 59 50 59.5 C48 59 45 60 42 58 C39 55 40 49 43 47 Z" fill="#2F5233" />
                    <path d="M37 60 C42 56 46 60.5 50 61 C54 60.5 58 56 63 60 C64.5 62 61 64.5 50 64.5 C39 64.5 35.5 62 37 60 Z" fill="#C08A28" />
                    <path d="M50 33 C52 30 55 31 55 33 C53 34 51.5 33.5 50 33 Z" fill="#7FA173" />
                    <path d="M50 33 C48 30 45 31 45 33 C47 34 48.5 33.5 50 33 Z" fill="#7FA173" />
                  </svg>
                </div>

                <div className="font-serif text-xl sm:text-2xl font-bold text-[#1F2E22] tracking-wider uppercase">
                  AyurSankalpa
                </div>
                <div className="text-xs text-[#C08A28] font-serif italic tracking-wide mt-0.5">
                  "Healing with Clarity & Care"
                </div>

                <div className="mt-4 pt-3 border-t border-[#2F5233]/15 w-full flex items-center justify-between text-xs text-[#1F2E22]/70 font-sans">
                  <span>Aundh • Pune</span>
                  <span className="text-[#2F5233] font-semibold">13 Specialities</span>
                </div>
              </div>

              {/* Floating Floating Stat Badges */}
              <div className="absolute top-4 -left-4 sm:left-2 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl shadow-md border border-[#2F5233]/10 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2F5233]" />
                <div className="text-[11px] font-medium text-[#1F2E22]">
                  <span className="font-bold text-[#2F5233]">Classical</span> Chikitsa
                </div>
              </div>

              <div className="absolute bottom-6 -right-4 sm:right-2 bg-white/90 backdrop-blur-xs px-3.5 py-2 rounded-xl shadow-md border border-[#2F5233]/10 flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#C08A28]" />
                <div className="text-[11px] font-medium text-[#1F2E22]">
                  <span className="font-bold text-[#2F5233]">Evidence</span> Informed
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
