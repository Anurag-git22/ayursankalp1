import React from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import logoMark from '../assets/logo-mark.png';
import { Sparkles, Calendar, ShieldCheck, HeartPulse, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF6EC] via-[#F5EFE0] to-[#FAF6EC] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#2F5233]/10">
      
      {/* Background Watermark (Large, 5% opacity, green gradient tones) */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none opacity-[0.05] select-none">
        <img src={logoMark} alt="" className="w-full h-full object-contain filter" />
      </div>

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
              <Link
                to="/appointment"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-base font-semibold shadow-lg shadow-[#2F5233]/25 hover:bg-[#1E3721] active:scale-[0.98] transition-all duration-200 group"
              >
                <Calendar className="w-4 h-4 text-[#C08A28] group-hover:scale-110 transition-transform" />
                <span>Book Clinic Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#FAF6EC]/80 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/specialties"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6EC] border border-[#2F5233]/25 text-[#1F2E22] text-base font-medium hover:bg-[#EAF2E8] hover:border-[#2F5233]/40 transition-all duration-200"
              >
                <span>Explore 13 Specialities</span>
              </Link>
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

          {/* Right Hero Visual: Lotus/Mandala Centerpiece with Canonical Logo Mark */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#C08A28]/40 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full border border-[#2F5233]/20" />
              <div className="absolute inset-12 rounded-full bg-[#EAF2E8]/40 blur-xl" />

              {/* Central Mandala Card */}
              <div className="relative z-10 w-4/5 aspect-square rounded-3xl bg-[#FAF6EC] p-6 sm:p-8 border border-[#2F5233]/15 shadow-xl flex flex-col items-center justify-center text-center">
                
                {/* Canonical Logo Mark */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 relative flex items-center justify-center">
                  <img
                    src={logoMark}
                    alt="AyurSankalpa Logo Mark"
                    className="w-full h-full object-contain drop-shadow-md"
                  />
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

              {/* Floating Stat Badges */}
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
