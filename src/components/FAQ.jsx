import React, { useState } from 'react';
import { FAQ_LIST, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappMessage = encodeURIComponent("Hello Dr. Ruturaj Kadam, I have a question regarding consultation at AyurSankalpa Clinic.");

  return (
    <section className="py-16 sm:py-20 bg-[#F5EFE0]/50 border-b border-[#2F5233]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#C08A28]" />
            <span>{language === 'mr' ? 'वारंवार विचारले जाणारे प्रश्न' : 'Frequently Answered'}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F2E22] mt-3">
            {language === 'mr' ? 'तपासणी व उपचारांविषयी शंका निरसन' : 'Patient Questions & Clinical Clarity'}
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2 max-w-xl mx-auto">
            {language === 'mr' 
              ? 'पहिल्या भेटीत काय घडते, आहाराचे नियम, पंचकर्म व उपचारांचा कालावधी याविषयी संपूर्ण स्पष्टता.'
              : 'Clear answers on what to expect during your first consultation, diet planning, Panchakarma therapies, and treatment timelines.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#2F5233]/15 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#1F2E22] pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2F5233] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C08A28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1F2E22]/80 leading-relaxed font-sans border-t border-[#2F5233]/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-10 p-5 rounded-2xl bg-white/80 border border-[#2F5233]/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left text-xs text-[#1F2E22]/80 font-sans">
            <span className="font-bold text-[#1F2E22] block">
              {language === 'mr' ? 'इतर काही प्रश्न आहेत का?' : 'Have a specific clinical question?'}
            </span>
            <span>
              {language === 'mr' 
                ? 'डॉ. ऋतुराज कदम यांच्याशी व्हॉट्सॲपवर संपर्क करा किंवा थेट कॉल करा.'
                : 'Dr. Ruturaj Kadam and our clinic desk are happy to clarify any doubts.'}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/919028536848?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs font-semibold hover:bg-[#1E3721] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>Call Clinic</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
