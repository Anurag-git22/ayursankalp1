import React from 'react';
import { TRUST_BADGES } from '../data/clinicData';
import { UserCheck, BookOpen, Stethoscope, ShieldPlus, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const badgeIcons = [
    <UserCheck className="w-5 h-5 text-[#C08A28]" />,
    <BookOpen className="w-5 h-5 text-[#C08A28]" />,
    <Stethoscope className="w-5 h-5 text-[#C08A28]" />,
    <ShieldPlus className="w-5 h-5 text-[#C08A28]" />,
    <HeartHandshake className="w-5 h-5 text-[#C08A28]" />
  ];

  return (
    <section className="py-12 bg-[#2F5233] text-[#FAF6EC] relative overflow-hidden">
      {/* Delicate background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-mandala-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <p className="text-xs font-serif uppercase tracking-[0.2em] text-[#C08A28]">
            AyurSankalpa Clinical Standard
          </p>
          <h3 className="text-xl sm:text-2xl font-serif text-[#FAF6EC] mt-1 font-semibold">
            Our 5 Pillars of Clinical Trust
          </h3>
        </div>

        {/* 5 Badges Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRUST_BADGES.map((badge, idx) => (
            <div
              key={badge.id}
              className="p-4 rounded-xl bg-[#1E3721]/70 border border-[#7FA173]/25 hover:border-[#C08A28]/50 transition-all duration-200 flex flex-col justify-between space-y-2 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#2F5233] flex items-center justify-center border border-[#7FA173]/30 shrink-0 group-hover:scale-105 transition-transform">
                  {badgeIcons[idx]}
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#FAF6EC] leading-snug">
                  {badge.title}
                </h4>
              </div>

              <p className="text-[11px] text-[#EAF2E8]/80 leading-relaxed pt-1">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
