import React from 'react';
import { CONSULTATION_STEPS } from '../data/clinicData';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TreatmentFlow() {
  return (
    <section id="journey" className="py-16 sm:py-20 bg-[#FAF6EC] border-b border-[#2F5233]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C08A28] bg-[#FAF6EC] px-3 py-1 rounded-full border border-[#C08A28]/30">
            The Clinical Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Your Healing Journey
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-3">
            What to expect when you schedule a consultation with Dr. Ruturaj Kadam.
          </p>
        </div>

        {/* 4 Step Sequential Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CONSULTATION_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white/85 p-6 rounded-2xl border border-[#2F5233]/15 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#2F5233] text-[#FAF6EC] flex items-center justify-center font-serif font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#C08A28] bg-[#FAF6EC] px-2 py-0.5 rounded-md border border-[#C08A28]/30">
                    <Clock className="w-3 h-3" />
                    <span>{step.time}</span>
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-[#1F2E22] group-hover:text-[#2F5233] transition-colors pt-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#1F2E22]/75 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#2F5233]/10 flex items-center text-[11px] font-semibold text-[#2F5233]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#7FA173] mr-1.5" />
                <span>Phase {idx + 1} of Healing</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
