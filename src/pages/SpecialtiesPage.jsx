import React from 'react';
import { Link } from 'react-router-dom';
import Specialties from '../components/Specialties';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SpecialtiesPage({ onSelectSpecialty }) {
  const { language } = useLanguage();

  return (
    <div className="relative">
      <div className="relative z-10">
        
        {/* Page Header */}
        <div className="bg-[#F5EFE0]/60 border-b border-[#2F5233]/10 py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22]">
              {language === 'mr' ? 'आमचे १३ प्रमुख उपचार विभाग' : 'Our 13 Clinical Specialities'}
            </h1>
            <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2 max-w-2xl">
              {language === 'mr'
                ? 'डॉ. ऋतुराज कदम यांच्या मार्गदर्शनाखाली जुनाट व आधुनिक चयापचय विकारांवर संहितेवर आधारित प्रभावी आयुर्वेदिक चिकित्सा.'
                : 'Explore authentic, Samhita-based Ayurvedic treatments designed by Dr. Ruturaj Kadam to resolve acute and chronic disorders from their root cause.'}
            </p>
          </div>
        </div>

        {/* All 13 Specialities with Categories, Search, and Expandable Consultation Involvements */}
        <Specialties onSelectSpecialty={onSelectSpecialty} />

        {/* Booking CTA Strip */}
        <section className="py-12 bg-[#FAF6EC] border-t border-[#2F5233]/10">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#1F2E22]">
              {language === 'mr' ? 'आपल्या आरोग्याविषयी चर्चा करू इच्छिता?' : 'Have a Specific Health Concern?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#1F2E22]/70 max-w-md mx-auto">
              {language === 'mr'
                ? 'औंध क्लिनिकमध्ये थेट भेट किंवा व्हिडिओ कॉलद्वारे डॉ. ऋतुराज कदम यांच्याशी चर्चा करा.'
                : 'Book an in-clinic consultation at Aundh, Pune or schedule a video call with Dr. Ruturaj Kadam.'}
            </p>
            <div className="pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-sm hover:bg-[#1E3721] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#2F5233]"
              >
                <Calendar className="w-4 h-4 text-[#C08A28]" />
                <span>{language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
