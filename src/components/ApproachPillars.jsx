import React from 'react';
import { APPROACH_PILLARS } from '../data/clinicData';
import { Microscope, UserCheck, Activity, Check } from 'lucide-react';

export default function ApproachPillars() {
  const pillarIcons = [
    <Microscope className="w-6 h-6 text-[#C08A28]" />,
    <UserCheck className="w-6 h-6 text-[#C08A28]" />,
    <Activity className="w-6 h-6 text-[#C08A28]" />
  ];

  return (
    <section id="approach" className="py-16 sm:py-20 bg-[#F5EFE0]/60 border-b border-[#2F5233]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            Clinical Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Our 3 Pillars of Healing
          </h2>
          <p className="text-base text-[#1F2E22]/75 font-sans mt-3 max-w-xl mx-auto">
            Traditional wisdom meets modern diagnostics. Every protocol at AyurSankalpa Clinic is anchored in these three non-negotiable principles.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {APPROACH_PILLARS.map((pillar, index) => (
            <div
              key={pillar.number}
              className="group relative bg-[#FAF6EC] rounded-2xl p-7 sm:p-8 border border-[#2F5233]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-[#2F5233]/20 rounded-full group-hover:bg-[#C08A28] transition-colors" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#EAF2E8] flex items-center justify-center border border-[#7FA173]/30">
                    {pillarIcons[index]}
                  </div>
                  <span className="text-3xl font-serif font-bold text-[#2F5233]/30 group-hover:text-[#2F5233]/60 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#1F2E22] group-hover:text-[#2F5233] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-[#C08A28] mt-1 font-serif italic">
                    {pillar.tagline}
                  </div>
                </div>

                <p className="text-sm text-[#1F2E22]/80 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#2F5233]/10 flex items-center text-xs font-semibold text-[#2F5233] gap-1.5">
                <Check className="w-4 h-4 text-[#7FA173]" />
                <span>Integrated into every consultation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
