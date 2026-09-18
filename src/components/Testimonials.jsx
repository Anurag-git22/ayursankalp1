import React, { useState, useRef } from 'react';
import { TESTIMONIALS } from '../data/testimonialsData';
import { Star, Quote, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function Testimonials({ variant = 'home' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const displayItems = variant === 'home' ? TESTIMONIALS.slice(0, 3) : TESTIMONIALS;

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
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FAF6EC] via-[#F6EFE0] to-[#FAF6EC] border-b border-[#2F5233]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C08A28]" />
            <span>Trust & Healing</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2E22] mt-3">
            Patient Experiences & Healing Journeys
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2.5 leading-relaxed">
            Real voices of Pune residents who found lasting root-cause relief, restored vitality, and metabolic balance through personalized Ayurvedic care.
          </p>
        </div>

        {/* Testimonials Cards: Mobile Horizontal Swipeable Carousel / Desktop Grid */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className={`flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 md:gap-6 pb-4 md:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 ${displayItems.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}
        >
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="shrink-0 w-[85vw] max-w-[340px] md:w-auto md:max-w-none md:shrink snap-center rounded-2xl bg-white/90 p-6 sm:p-7 border border-[#2F5233]/15 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Header: Stars & Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#C08A28]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold tracking-wide text-[#2F5233] bg-[#EAF2E8] px-2.5 py-0.5 rounded-md border border-[#7FA173]/30">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative">
                  <Quote className="w-7 h-7 text-[#7FA173]/20 absolute -top-2.5 -left-2 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-[#1F2E22]/85 leading-relaxed font-sans italic relative z-10 pt-1">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Patient Footer */}
              <div className="mt-5 pt-4 border-t border-[#2F5233]/10 flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-base text-[#1F2E22]">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#1F2E22]/65 font-sans">
                    {item.role} • <span className="text-[#2F5233] font-medium">{item.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#7FA173] font-semibold bg-[#FAF6EC] px-2 py-0.5 rounded border border-[#7FA173]/30">
                    <CheckCircle2 className="w-3 h-3 text-[#2F5233]" />
                    <span>{item.condition}</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicators & Scroll Hint */}
        <div className="md:hidden mt-4 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            {displayItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToCard(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'w-6 bg-[#2F5233]'
                    : 'w-2 bg-[#2F5233]/25 hover:bg-[#2F5233]/50'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-sans text-[#2F5233]/65 flex items-center gap-1.5">
            <span>Swipe to read patient stories</span>
            <span className="text-[#C08A28]">({activeIndex + 1}/{displayItems.length})</span>
          </span>
        </div>

        {/* Holistic Reassurance Banner */}
        <div className="mt-10 max-w-2xl mx-auto p-4 rounded-xl bg-white/60 border border-[#2F5233]/10 text-center text-xs text-[#1F2E22]/70 font-sans">
          <span>🌿 Every human constitution (Prakriti) is distinct. Healing plans are uniquely customized following in-depth clinical diagnosis.</span>
        </div>

      </div>
    </section>
  );
}

