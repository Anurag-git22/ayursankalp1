import React, { useState, useRef } from 'react';
import { APPROACH_PILLARS } from '../data/clinicData';
import { Microscope, UserCheck, Activity, Check } from 'lucide-react';

export default function ApproachPillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const pillarIcons = [
    <Microscope className="w-6 h-6 text-[#C08A28]" />,
    <UserCheck className="w-6 h-6 text-[#C08A28]" />,
    <Activity className="w-6 h-6 text-[#C08A28]" />
  ];

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const el = sliderRef.current;
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
    setActiveIndex(closestIndex);
  };

  const scrollToCard = (index) => {
    if (!sliderRef.current) return;
    const child = sliderRef.current.children[index];
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

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

        {/* 3 Pillars Cards: Mobile Horizontal Swipeable Carousel / Desktop Grid */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 md:gap-8 pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0"
        >
          {APPROACH_PILLARS.map((pillar, index) => (
            <div
              key={pillar.number}
              className="shrink-0 w-[84vw] max-w-[340px] md:w-auto md:max-w-none md:shrink snap-center group relative bg-[#FAF6EC] rounded-2xl p-7 sm:p-8 border border-[#2F5233]/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
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

        {/* Mobile Swipe Indicators & Scroll Hint */}
        <div className="md:hidden mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            {APPROACH_PILLARS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to pillar ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-[#2F5233]'
                    : 'w-2 bg-[#2F5233]/25 hover:bg-[#2F5233]/50'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-sans text-[#2F5233]/65 flex items-center gap-1.5">
            <span>Swipe to explore pillars</span>
            <span className="text-[#C08A28]">({activeIndex + 1}/{APPROACH_PILLARS.length})</span>
          </span>
        </div>

      </div>
    </section>
  );
}

