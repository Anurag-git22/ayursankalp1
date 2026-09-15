import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Award, GraduationCap, Stethoscope, Globe, CheckCircle, ArrowRight } from 'lucide-react';

export default function DoctorProfile() {
  const { doctor } = CLINIC_INFO;

  const credentialsList = [
    {
      title: "MD (Ayurveda), Pune",
      desc: "Postgraduate clinical specialization with rigorous classical and hospital-based training in internal medicine (Kayachikitsa)."
    },
    {
      title: "BAMS, Pune",
      desc: "Comprehensive foundation in Ayurvedic anatomy, physiology (Sharira Kriya), pharmacology (Dravyaguna), and diagnosis."
    },
    {
      title: "DDM (Diploma in Diabetes Management)",
      desc: "Advanced clinical specialization in metabolic pathways, insulin resistance reversal, and lifestyle glycemic regulation."
    },
    {
      title: "PGDEMS (Emergency Medical Services)",
      desc: "Modern acute medical triaging, emergency protocols, and patient safety integration."
    },
    {
      title: "DiH (Pune)",
      desc: "Specialized diploma in holistic health management, community wellness, and chronic illness mitigation."
    },
    {
      title: "Certified in Integrative Therapies & Healing Practices (USA)",
      desc: "International exposure to evidence-informed mind-body medicine, stress neurobiology, and integrative therapeutic systems."
    }
  ];

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
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#2F5233]/10">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#1F2E22]">
                    {doctor.name}
                  </h3>
                  <p className="text-sm font-medium text-[#2F5233] mt-0.5">
                    {doctor.title}
                  </p>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#EAF2E8] border border-[#7FA173]/30 text-xs font-semibold text-[#2F5233] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#C08A28]" />
                  <span>{doctor.experienceYears}</span>
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
                <a
                  href="#appointment"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5233] hover:text-[#1E3721] group"
                >
                  <span>Schedule a consultation with Dr. Ruturaj Kadam</span>
                  <ArrowRight className="w-4 h-4 text-[#C08A28] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Qualifications & Certifications */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF6EC] p-6 sm:p-7 rounded-2xl border border-[#2F5233]/15 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-[#2F5233] font-serif font-bold text-lg">
                <GraduationCap className="w-5 h-5 text-[#C08A28]" />
                <span>Degrees & Clinical Certifications</span>
              </div>

              <div className="space-y-3.5">
                {credentialsList.map((cred, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/70 border border-[#2F5233]/10 hover:border-[#2F5233]/30 transition-colors"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-[#1F2E22]">
                          {cred.title}
                        </div>
                        <div className="text-xs text-[#1F2E22]/70 mt-1 leading-snug">
                          {cred.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#C08A28] shrink-0" />
                <div>
                  <span className="font-semibold text-[#FAF6EC]">Integrative Clinical Standard:</span> Safe co-management with existing conventional treatments with zero conflicting medications.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
