import React, { useState, useRef, useEffect } from 'react';
import { TRUST_BADGES } from '../data/clinicData';
import { UserCheck, BookOpen, Stethoscope, ShieldPlus, HeartHandshake } from 'lucide-react';

export default function TrustBadges() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const badgeIcons = [
    <UserCheck className="w-5 h-5 text-[#C08A28]" />,
    <BookOpen className="w-5 h-5 text-[#C08A28]" />,
    <Stethoscope className="w-5 h-5 text-[#C08A28]" />,
    <ShieldPlus className="w-5 h-5 text-[#C08A28]" />,
    <HeartHandshake className="w-5 h-5 text-[#C08A28]" />
  ];

  // Update active index based on scroll position (mobile only)
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth * 0.85; // 85% of container width
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(newIndex, TRUST_BADGES.length - 1));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Desktop: 5 Badges Grid (hidden on mobile) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-4">
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

        {/* Mobile: Horizontal Swipeable Slider (hidden on desktop) */}
        <div className="lg:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TRUST_BADGES.map((badge, idx) => (
              <div
                key={badge.id}
                className="flex-shrink-0 w-[85%] snap-center p-4 rounded-xl bg-[#1E3721]/70 border border-[#7FA173]/25 flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#2F5233] flex items-center justify-center border border-[#7FA173]/30 shrink-0">
                    {badgeIcons[idx]}
                  </div>
                  <h4 className="text-sm font-semibold text-[#FAF6EC] leading-snug">
                    {badge.title}
                  </h4>
                </div>

                <p className="text-[11px] text-[#EAF2E8]/80 leading-relaxed pt-1">
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {TRUST_BADGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const container = scrollContainerRef.current;
                  if (container) {
                    const cardWidth = container.offsetWidth * 0.85;
                    container.scrollTo({
                      left: idx * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === activeIndex
                    ? 'bg-[#C08A28] w-6'
                    : 'bg-[#FAF6EC]/30 hover:bg-[#FAF6EC]/50'
                }`}
                aria-label={`Go to badge ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
