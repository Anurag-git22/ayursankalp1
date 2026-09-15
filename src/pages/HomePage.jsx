import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import { CLINIC_INFO, APPROACH_PILLARS, SPECIALTIES } from '../data/clinicData';
import { 
  Award, 
  ArrowRight, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  Activity, 
  Flame, 
  Heart, 
  ChevronRight,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

export default function HomePage() {
  const { doctor } = CLINIC_INFO;

  // Curated subset of ~6 specialties for the homepage teaser
  const curatedSpecialties = SPECIALTIES.slice(0, 6);

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Doctor Summary Strip (Short teaser linking to /about) */}
      <section className="py-14 bg-[#FAF6EC] border-b border-[#2F5233]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 rounded-2xl p-6 sm:p-8 border border-[#2F5233]/15 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C08A28]">
                <Stethoscope className="w-4 h-4 text-[#2F5233]" />
                <span>Senior Ayurvedic Physician</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2E22]">
                {doctor.name}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#2F5233]">
                {doctor.qualifications} • PGDEMS • DDM (Diabetes) • Certified in Integrative Therapies (USA)
              </p>
              <p className="text-xs sm:text-sm text-[#1F2E22]/75 leading-relaxed pt-1">
                Combining timeless pulse diagnostics with contemporary metabolic medicine, Dr. Kadam focuses on root-cause recovery and personalized Ahara-Vihara protocols in Aundh, Pune.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EAF2E8] border border-[#7FA173]/30 text-[#2F5233] font-semibold text-sm hover:bg-[#2F5233] hover:text-[#FAF6EC] transition-all duration-200 group"
              >
                <span>Learn More About Doctor</span>
                <ArrowRight className="w-4 h-4 text-[#C08A28] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Brief Approach Pillars Teaser */}
      <section className="py-14 sm:py-16 bg-[#F5EFE0]/60 border-b border-[#2F5233]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
              Clinical Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F2E22] mt-2.5">
              3 Pillars of Authentic Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {APPROACH_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#FAF6EC] rounded-2xl p-6 border border-[#2F5233]/15 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C08A28] bg-[#FAF6EC] px-2 py-0.5 rounded border border-[#C08A28]/30">
                      Pillar {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#1F2E22]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#1F2E22]/75 leading-relaxed">
                    {pillar.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2F5233]/10">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F5233] hover:text-[#C08A28] transition-colors"
                  >
                    <span>Read pillar details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Curated Specialities Subset (6 of 13) */}
      <section className="py-16 sm:py-20 bg-[#FAF6EC] border-b border-[#2F5233]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
                Featured Clinical Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2E22] mt-2.5">
                Our Specialities
              </h2>
              <p className="text-xs sm:text-sm text-[#1F2E22]/70 mt-1 max-w-xl">
                Classical, root-cause treatments targeting chronic metabolic, digestive, joint, and lifestyle conditions.
              </p>
            </div>

            <Link
              to="/specialties"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs sm:text-sm font-semibold hover:bg-[#1E3721] transition-colors shrink-0"
            >
              <span>View All 13 Specialities</span>
              <ArrowRight className="w-4 h-4 text-[#C08A28]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedSpecialties.map((item) => (
              <div
                key={item.id}
                className="bg-white/90 rounded-2xl p-6 border border-[#2F5233]/15 shadow-xs hover:shadow-md hover:border-[#2F5233]/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#2F5233]">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-medium text-[#C08A28] bg-[#FAF6EC] px-2 py-0.5 rounded border border-[#C08A28]/30">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#1F2E22]">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs text-[#2F5233] font-serif italic mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-[#1F2E22]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#2F5233]/10 flex items-center justify-between">
                  <Link
                    to={`/appointment?specialty=${encodeURIComponent(item.title)}`}
                    className="text-xs font-bold text-[#2F5233] hover:text-[#C08A28] transition-colors"
                  >
                    Book Consultation →
                  </Link>
                  <span className="text-[11px] text-[#1F2E22]/50 italic">
                    Evidence-informed
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/specialties"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5233] hover:text-[#1E3721] group"
            >
              <span>Explore all 13 clinical specialities with symptoms & protocols</span>
              <ArrowRight className="w-4 h-4 text-[#C08A28] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Trust Badges Strip (Keep as-is) */}
      <TrustBadges />

      {/* 6. CTA Band linking to /appointment */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#1E3721] via-[#2F5233] to-[#1E3721] text-[#FAF6EC] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C08A28]">
            Holistic Ayurvedic Care for Modern Living
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FAF6EC]">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xs sm:text-sm text-[#EAF2E8]/80 max-w-xl mx-auto leading-relaxed">
            Schedule a comprehensive, unhurried 45-minute clinical consultation with Dr. Ruturaj Kadam at Saket Apartment, Seasons Rd, Aundh, Pune or via video.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C08A28] text-[#1F2E22] font-bold text-sm hover:bg-[#FAF6EC] shadow-lg transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#1F2E22]" />
              <span>Book In-Clinic or Video Consultation</span>
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-[#FAF6EC]/30 text-[#FAF6EC] font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <span>Learn About Dr. Kadam</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
