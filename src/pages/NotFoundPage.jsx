import React from 'react';
import { Link } from 'react-router-dom';
import logoMark from '../assets/logo-mark.png';
import { Home, Calendar, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function NotFoundPage() {
  const { language } = useLanguage();

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center py-16 sm:py-24 bg-[#FAF6EC] overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-[0.05] select-none">
        <img src={logoMark} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10 space-y-6">
        
        {/* Decorative Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2F5233]/10 border border-[#2F5233]/15 text-[#2F5233] text-xs font-semibold">
          <span className="font-mono text-sm font-bold text-[#C08A28]">404</span>
          <span>•</span>
          <span>{language === 'mr' ? 'पृष्ठ सापडले नाही' : 'Page Not Found'}</span>
        </div>

        {/* Lotus Icon */}
        <div className="w-20 h-20 mx-auto flex items-center justify-center">
          <img src={logoMark} alt="AyurSankalpa Logo" className="w-full h-full object-contain opacity-80" />
        </div>

        {/* Heading & Explanation */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22]">
            {language === 'mr' ? 'हे पृष्ठ अस्तित्वात नाही' : 'The Path You Seek Is Not Here'}
          </h1>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans max-w-lg mx-auto leading-relaxed">
            {language === 'mr'
              ? 'आपण शोधत असलेले पान बदलले असावे किंवा उपलब्ध नाही. खालील पर्यायांचा वापर करून मुख्यपृष्ठावर जाऊ शकता.'
              : 'The page you are looking for may have been moved or is currently unavailable. Let us guide you back to equilibrium.'}
          </p>
        </div>

        {/* Helpful navigation options */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-sm hover:bg-[#1E3721] transition-all shadow-md"
          >
            <Home className="w-4 h-4 text-[#C08A28]" />
            <span>{language === 'mr' ? 'मुख्यपृष्ठावर परत जा' : 'Return to Homepage'}</span>
          </Link>

          <Link
            to="/appointment"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#2F5233]/20 text-[#1F2E22] font-semibold text-sm hover:bg-[#EAF2E8] transition-all"
          >
            <Calendar className="w-4 h-4 text-[#2F5233]" />
            <span>{language === 'mr' ? 'अपॉइंटमेंट बुक करा' : 'Book an Appointment'}</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-[#2F5233]/10 text-xs text-[#1F2E22]/60 flex flex-wrap items-center justify-center gap-4 font-sans">
          <span>{language === 'mr' ? 'किंवा इतर विभाग पहा:' : 'Or explore other sections:'}</span>
          <Link to="/about" className="text-[#2F5233] hover:underline font-medium">
            {language === 'mr' ? 'डॉक्टरांविषयी' : 'About Dr. Kadam'}
          </Link>
          <span>•</span>
          <Link to="/specialties" className="text-[#2F5233] hover:underline font-medium">
            {language === 'mr' ? '१३ उपचार विभाग' : '13 Specialities'}
          </Link>
          <span>•</span>
          <Link to="/blog" className="text-[#2F5233] hover:underline font-medium">
            {language === 'mr' ? 'आरोग्य ब्लॉग' : 'Ayurveda Tips & Blog'}
          </Link>
        </div>

      </div>
    </div>
  );
}
