import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Award, 
  GraduationCap, 
  Stethoscope, 
  Globe, 
  ArrowRight, 
  Activity, 
  CheckCircle2 
} from 'lucide-react';

export default function DoctorProfile() {
  const { doctor } = CLINIC_INFO;
  const [activeDegreeIndex, setActiveDegreeIndex] = useState(0);
  const degreeSliderRef = useRef(null);

  const credentialsList = [
    {
      number: "01",
      title: "MD (Ayurveda), Pune",
      tagline: "Internal Medicine (Kayachikitsa)",
      desc: "Postgraduate clinical specialization with rigorous classical and hospital-based training in internal medicine.",
      icon: GraduationCap
    },
    {
      number: "02",
      title: "BAMS, Pune",
      tagline: "Classical Foundations & Diagnostics",
      desc: "Comprehensive foundation in Ayurvedic anatomy, physiology (Sharira Kriya), pharmacology (Dravyaguna), and pulse diagnosis.",
      icon: Award
    },
    {
      number: "03",
      title: "DDM (Diabetes Management)",
      tagline: "Metabolic & Glycemic Reversal",
      desc: "Advanced clinical specialization in metabolic pathways, insulin resistance reversal, and lifestyle glycemic regulation.",
      icon: Activity
    },
    {
      number: "04",
      title: "PGDEMS (Emergency Services)",
      tagline: "Modern Acute Triaging & Safety",
      desc: "Modern acute medical triaging, critical care protocols, and patient safety integration with contemporary hospital care.",
      icon: Stethoscope
    },
    {
      number: "05",
      title: "DiH (Pune)",
      tagline: "Holistic Health & Mitigation",
      desc: "Specialized diploma in holistic health management, community wellness, and long-term chronic illness mitigation.",
      icon: CheckCircle2
    },
    {
      number: "06",
      title: "Integrative Therapies (USA)",
      tagline: "Mind-Body Medicine & Neurobiology",
      desc: "International certification in evidence-informed mind-body medicine, stress neurobiology, and integrative therapeutic systems.",
      icon: Globe
    }
  ];

  const handleDegreeScroll = () => {
    if (!degreeSliderRef.current) return;
    const el = degreeSliderRef.current;
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
    setActiveDegreeIndex(closestIndex);
  };

  const scrollToDegree = (index) => {
    if (!degreeSliderRef.current) return;
    const child = degreeSliderRef.current.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <section id="doctor" className="py-16 sm:py-20 bg-[#FAF6EC] border-b border-[#2F5233]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C08A28] bg-[#FAF6EC] px-3 py-1 rounded-full border border-[#C08A28]/30">
            Consultant Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Meet Dr. Ruturaj Kadam
          </h2>
          <p className="text-base text-[#2F5233] font-serif italic mt-2">
            Bridging Classical Ayurvedic Wisdom with Modern Clinical Rigor
          </p>
        </div>

        {/* Doctor Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/80 backdrop-blur-xs p-6 sm:p-8 rounded-2xl border border-[#2F5233]/15 shadow-sm space-y-5">
              
              {/* Profile Card Header with Doctor Headshot */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-5 border-b border-[#2F5233]/10">
                {/* Doctor Headshot Frame (Easy to swap with real photo) */}
                <div className="relative shrink-0">
                  <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#C08A28]/40 shadow-md bg-gradient-to-br from-[#FAF6EC] via-[#F4EEDF] to-[#EAF2E8] relative group">
                    <img
                      src="/doctor-placeholder.svg"
                      alt={`${doctor.name} - ${doctor.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#2F5233]/15 rounded-2xl pointer-events-none" />
                  </div>
                  {/* Stethoscope Accent Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#2F5233] text-[#FAF6EC] p-2 rounded-xl border-2 border-[#FAF6EC] shadow-sm flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-[#C08A28]" />
                  </div>
                </div>

                {/* Doctor Identity */}
                <div className="flex-1 text-center sm:text-left space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#1F2E22]">
                        {doctor.name}
                      </h3>
                      <p className="text-sm font-medium text-[#2F5233] mt-0.5">
                        {doctor.title}
                      </p>
                    </div>
                    <div>
                      <div className="inline-flex px-3.5 py-1.5 rounded-full bg-[#EAF2E8] border border-[#7FA173]/30 text-xs font-semibold text-[#2F5233] items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#C08A28]" />
                        <span>{doctor.experienceYears}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#1F2E22]/70 font-sans leading-relaxed pt-1">
                    {doctor.qualifications} • PGDEMS • DDM (Diabetes) • Integrative Therapies (USA)
                  </p>
                </div>
              </div>


              <div className="space-y-4 text-sm sm:text-base text-[#1F2E22]/85 leading-relaxed font-sans">
                <p>
                  At AyurSankalpa Clinic in Aundh, Pune, <strong>Dr. Ruturaj Kadam</strong> provides a grounded, scientific approach to classical Ayurveda. He believes that true healing requires going beyond symptom suppression to decipher the underlying cellular imbalance (Agni Mandya and Dhatu Dushti).
                </p>
                <p>
                  With specialized qualifications spanning both Ayurvedic Postgraduation and Emergency Medical Services (PGDEMS), Diabetes Management (DDM), and US certification in Integrative Therapies, Dr. Kadam is uniquely equipped to interpret modern diagnostic panels while utilizing time-tested Ayurvedic Chikitsa.
                </p>
              </div>

              {/* Quote / Philosophy Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#EAF2E8]/60 border-l-4 border-[#2F5233] space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#2F5233]">
                  Clinical Philosophy
                </p>
                <p className="text-sm text-[#1F2E22] italic font-serif leading-relaxed">
                  "{doctor.philosophy}"
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5233] hover:text-[#1E3721] group focus-visible:ring-2 focus-visible:ring-[#2F5233] rounded"
                >
                  <span>Schedule a consultation with Dr. Ruturaj Kadam</span>
                  <ArrowRight className="w-4 h-4 text-[#C08A28] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

          {/* Right: Qualifications & Certifications (Pillars style) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="flex items-center justify-between pb-2 border-b border-[#2F5233]/10">
              <div className="flex items-center gap-2 text-[#2F5233] font-serif font-bold text-lg sm:text-xl">
                <GraduationCap className="w-5 h-5 text-[#C08A28]" />
                <span>Degrees & Certifications</span>
              </div>
              <span className="text-[11px] font-semibold text-[#C08A28] bg-white px-2.5 py-0.5 rounded-full border border-[#C08A28]/30">
                6 Credentials
              </span>
            </div>

            {/* Degree Cards: Mobile Horizontal Swipeable Carousel / Tablet 2-col / Desktop 1-col */}
            <div
              ref={degreeSliderRef}
              onScroll={handleDegreeScroll}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-1 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 pb-3 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
            >
              {credentialsList.map((cred) => {
                const IconComponent = cred.icon;
                return (
                  <div
                    key={cred.number}
                    className="shrink-0 w-[84vw] max-w-[340px] md:w-auto md:max-w-none md:shrink snap-center group relative bg-white/85 rounded-2xl p-5 sm:p-6 border border-[#2F5233]/15 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  >
                    {/* Top Accent Line (like Pillars) */}
                    <div className="absolute top-0 left-6 right-6 h-1 bg-[#2F5233]/20 rounded-full group-hover:bg-[#C08A28] transition-colors" />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#EAF2E8] flex items-center justify-center border border-[#7FA173]/30">
                          <IconComponent className="w-5 h-5 text-[#C08A28]" />
                        </div>
                        <span className="text-2xl font-serif font-bold text-[#2F5233]/25 group-hover:text-[#2F5233]/50 transition-colors">
                          {cred.number}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-base font-serif font-bold text-[#1F2E22] group-hover:text-[#2F5233] transition-colors">
                          {cred.title}
                        </h4>
                        <div className="text-xs font-medium text-[#C08A28] mt-0.5 font-serif italic">
                          {cred.tagline}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#1F2E22]/80 leading-relaxed font-sans">
                        {cred.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#2F5233]/10 flex items-center text-[11px] font-semibold text-[#2F5233] gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7FA173]" />
                      <span>Verified Clinical Credential</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Swipe Indicators & Scroll Hint */}
            <div className="md:hidden mt-3 flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                {credentialsList.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToDegree(i)}
                    aria-label={`Go to credential ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeDegreeIndex === i
                        ? 'w-6 bg-[#2F5233]'
                        : 'w-2 bg-[#2F5233]/25 hover:bg-[#2F5233]/50'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[11px] font-sans text-[#2F5233]/65 flex items-center gap-1.5">
                <span>Swipe to view all credentials</span>
                <span className="text-[#C08A28]">({activeDegreeIndex + 1}/{credentialsList.length})</span>
              </span>
            </div>

            {/* Integrative Clinical Standard Banner */}
            <div className="p-4 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs flex items-center gap-3 shadow-xs">
              <Globe className="w-5 h-5 text-[#C08A28] shrink-0" />
              <div>
                <span className="font-semibold text-[#FAF6EC]">Integrative Clinical Standard:</span> Safe co-management with existing conventional treatments with zero conflicting medications.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

