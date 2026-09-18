import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Testimonials from '../components/Testimonials';
import { CLINIC_INFO, APPROACH_PILLARS } from '../data/clinicData';
import { 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  Stethoscope, 
  BookOpen 
} from 'lucide-react';

export default function HomePage() {
  const { doctor } = CLINIC_INFO;
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const pillarSliderRef = useRef(null);

  const handlePillarScroll = () => {
    if (!pillarSliderRef.current) return;
    const el = pillarSliderRef.current;
    const children = Array.from(el.children);
    const scrollCenter = el.scrollLeft + el.clientWidth / 2;
    let closestIndex = 0;
    let minDiff = Infinity;
    children.forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const diff = Math.abs(scrollCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    });
    setActivePillarIndex(closestIndex);
  };

  const scrollToPillar = (index) => {
    if (!pillarSliderRef.current) return;
    const child = pillarSliderRef.current.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Doctor Summary Strip (Teaser linking to /about) */}
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
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EAF2E8] border border-[#7FA173]/30 text-[#2F5233] font-semibold text-sm hover:bg-[#2F5233] hover:text-[#FAF6EC] transition-all duration-200 group focus-visible:ring-2 focus-visible:ring-[#2F5233]"
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

          {/* 3 Pillars Cards: Mobile Horizontal Swipeable Carousel / Desktop Grid */}
          <div
            ref={pillarSliderRef}
            onScroll={handlePillarScroll}
            className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
          >
            {APPROACH_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="shrink-0 w-[84vw] max-w-[340px] md:w-auto md:max-w-none md:shrink snap-center group relative bg-[#FAF6EC] rounded-2xl p-6 border border-[#2F5233]/15 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-[#2F5233]/20 rounded-full group-hover:bg-[#C08A28] transition-colors" />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#C08A28] bg-white px-2 py-0.5 rounded border border-[#C08A28]/30">
                      Pillar {pillar.number}
                    </span>
                    <span className="text-2xl font-serif font-bold text-[#2F5233]/25 group-hover:text-[#2F5233]/50 transition-colors">
                      {pillar.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#1F2E22] group-hover:text-[#2F5233] transition-colors">
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

          {/* Mobile Swipe Indicators & Scroll Hint */}
          <div className="md:hidden mt-4 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {APPROACH_PILLARS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToPillar(i)}
                  aria-label={`Go to pillar ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePillarIndex === i
                      ? 'w-6 bg-[#2F5233]'
                      : 'w-2 bg-[#2F5233]/25 hover:bg-[#2F5233]/50'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] font-sans text-[#2F5233]/65 flex items-center gap-1.5">
              <span>Swipe to explore pillars</span>
              <span className="text-[#C08A28]">({activePillarIndex + 1}/{APPROACH_PILLARS.length})</span>
            </span>
          </div>


        </div>
      </section>

      {/* 4. Specialities Section - Link to Full Page */}
      <section className="py-16 sm:py-20 bg-[#FAF6EC] border-b border-[#2F5233]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-semibold tracking-wider text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
              Featured Clinical Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2E22] mt-2.5">
              Our Specialities
            </h2>
            <p className="text-sm text-[#1F2E22]/70 mt-3 max-w-2xl mx-auto leading-relaxed">
              Classical, root-cause treatments targeting chronic metabolic, digestive, joint, and lifestyle conditions. Explore all 13 clinical specialities with detailed symptoms, protocols, and booking options.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/specialties"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-sm font-semibold hover:bg-[#1E3721] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#2F5233]"
              >
                <span>View All 13 Specialities</span>
                <ArrowRight className="w-4 h-4 text-[#C08A28]" />
              </Link>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white border border-[#2F5233]/20 text-[#1F2E22] text-sm font-semibold hover:bg-[#EAF2E8] transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#2F5233]" />
                <span>Read Ayurveda Tips</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Patient Testimonials Section */}
      <Testimonials variant="home" />

      {/* 6. Trust Badges Strip */}
      <TrustBadges />

      {/* 7. CTA Band linking to /appointment */}
      <section className="py-14 sm:py-16 bg-gradient-to-r from-[#1E3721] via-[#2F5233] to-[#1E3721] text-[#FAF6EC] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <span className="text-xs font-serif uppercase tracking-[0.2em] text-[#C08A28]">
            {CLINIC_INFO.bannerTagline}
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#C08A28] text-[#1F2E22] font-bold text-sm hover:bg-[#FAF6EC] shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#C08A28]"
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
