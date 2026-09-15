import React, { useState } from 'react';
import { FAQ_LIST } from '../data/clinicData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F5EFE0]/50 border-b border-[#2F5233]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            Frequently Answered
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2E22] mt-3">
            Patient Questions & Clinical Clarity
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#2F5233]/15 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1F2E22]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2F5233] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C08A28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-[#1F2E22]/80 leading-relaxed font-sans border-t border-[#2F5233]/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
