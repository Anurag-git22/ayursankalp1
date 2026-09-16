import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SPECIALTIES } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import { 
  Activity, 
  Flame, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  ChevronDown,
  ChevronUp,
  Heart,
  Droplets,
  Moon,
  Crosshair,
  Stethoscope,
  Info
} from 'lucide-react';

export default function Specialties({ onSelectSpecialty }) {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);

  const categories = [
    'All',
    'Metabolic & Endocrine',
    'Gut & Digestion',
    'Musculoskeletal & Pain',
    'Hormonal & Vitality',
    'Dermatology & Trichology',
    'Mind & Lifestyle',
    'Internal Medicine'
  ];

  const filteredSpecialties = SPECIALTIES.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      item.title.toLowerCase().includes(query) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(query)) ||
      item.description.toLowerCase().includes(query) ||
      (item.consultationDetail && item.consultationDetail.toLowerCase().includes(query)) ||
      item.symptoms.some(s => s.toLowerCase().includes(query));
      
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpand = (id) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Metabolic & Endocrine': return <Activity className="w-4 h-4 text-[#C08A28]" />;
      case 'Gut & Digestion': return <Flame className="w-4 h-4 text-[#C08A28]" />;
      case 'Musculoskeletal & Pain': return <Crosshair className="w-4 h-4 text-[#C08A28]" />;
      case 'Hormonal & Vitality': return <Heart className="w-4 h-4 text-[#C08A28]" />;
      case 'Dermatology & Trichology': return <Droplets className="w-4 h-4 text-[#C08A28]" />;
      case 'Mind & Lifestyle': return <Moon className="w-4 h-4 text-[#C08A28]" />;
      default: return <ShieldCheck className="w-4 h-4 text-[#C08A28]" />;
    }
  };

  const handleBookCondition = (specialtyTitle) => {
    if (onSelectSpecialty) {
      onSelectSpecialty(specialtyTitle);
    }
    navigate(`/appointment?specialty=${encodeURIComponent(specialtyTitle)}`);
  };

  return (
    <section id="specialties" className="py-16 sm:py-24 bg-[#FAF6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold tracking-wider text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            {language === 'mr' ? '१३ प्रमुख उपचार विभाग' : 'Our 13 Clinical Specialities'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            {language === 'mr' ? 'मुळापासून उपचार करणारी शास्त्रीय चिकित्सा' : 'Targeted Root-Cause Therapies'}
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-3">
            {language === 'mr'
              ? 'प्राचीन संहितेवर आधारित आणि आधुनिक जीवनशैलीतील चयापचय व जुनाट विकारांवर अचूक उपचार.'
              : 'Derived directly from classical Samhitas and fine-tuned for contemporary metabolic and lifestyle conditions. Click any specialty to view what your consultation involves.'}
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-10 space-y-4">
          
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#2F5233]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === 'mr' ? 'त्रास शोधा (उदा. मधुमेह, ॲसिडिटी, थायरॉईड, पाठदुखी)...' : 'Search condition (e.g., Diabetes, IBS, Thyroid, Back Pain, PCOS)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 rounded-full bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] placeholder:text-[#1F2E22]/50 focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#1F2E22]/60 hover:text-[#1F2E22] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2F5233] text-[#FAF6EC] shadow-sm font-semibold'
                    : 'bg-white/80 text-[#1F2E22] border border-[#2F5233]/15 hover:bg-[#EAF2E8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* 13 Specialties Cards Grid with Expandable Consultation Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((item) => {
            const isExpanded = expandedCardId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-white p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isExpanded 
                    ? 'border-[#2F5233] shadow-lg ring-1 ring-[#2F5233]/20' 
                    : 'border-[#2F5233]/15 shadow-xs hover:shadow-md hover:border-[#2F5233]/30'
                }`}
              >
                {/* Organic Leaf sprig icon on card corner */}
                <div className="absolute -top-3 -right-3 w-12 h-12 text-[#7FA173]/15 pointer-events-none">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM11 18C8.8 18 7 16.2 7 14C7 10 11 6 11 6C11 6 15 10 15 14C15 16.2 13.2 18 11 18Z" />
                  </svg>
                </div>

                <div className="space-y-3.5">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2F5233]">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </div>
                    <span className="text-[10px] font-medium text-[#C08A28] bg-[#FAF6EC] px-2 py-0.5 rounded-md border border-[#C08A28]/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1F2E22] leading-snug">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs text-[#2F5233] font-medium mt-0.5 font-serif italic">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Clinical Description */}
                  <p className="text-xs sm:text-sm text-[#1F2E22]/80 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Symptoms & Key focus chips */}
                  <div className="pt-2">
                    <div className="text-[11px] font-semibold text-[#1F2E22]/60 uppercase tracking-wider mb-1.5">
                      Common Indications
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.symptoms.map((symptom, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-[#FAF6EC] border border-[#2F5233]/10 text-[#1F2E22]/85"
                        >
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Ayurvedic Protocols */}
                  <div className="pt-2 border-t border-[#2F5233]/10 space-y-1">
                    <div className="text-[11px] font-semibold text-[#2F5233] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#C08A28]" />
                      <span>Ayurvedic Chikitsa Focus</span>
                    </div>
                    <div className="text-xs text-[#1F2E22]/70 leading-snug">
                      {item.keyProtocols.join(' • ')}
                    </div>
                  </div>

                  {/* Expandable "What Consultation Involves" Drawer */}
                  <div className="pt-3 border-t border-[#2F5233]/10">
                    <button
                      type="button"
                      onClick={() => toggleExpand(item.id)}
                      className="w-full flex items-center justify-between gap-2 text-xs font-bold text-[#2F5233] hover:text-[#C08A28] py-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5233] rounded"
                      aria-expanded={isExpanded}
                    >
                      <span className="flex items-center gap-1.5">
                        <Stethoscope className="w-3.5 h-3.5 text-[#C08A28]" />
                        <span>{language === 'mr' ? 'तपासणीत काय घडते?' : 'What Consultation Involves'}</span>
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#C08A28]" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-[#2F5233]" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2.5 p-3.5 rounded-xl bg-[#FAF6EC] border border-[#2F5233]/15 text-xs text-[#1F2E22]/85 leading-relaxed font-sans space-y-2 animate-in fade-in duration-200">
                        <p>{item.consultationDetail}</p>
                        <div className="pt-1 text-[11px] text-[#2F5233] font-semibold flex items-center gap-1">
                          <Info className="w-3 h-3 text-[#C08A28]" />
                          <span>Includes personalized Ahara food chart & pulse assessment.</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Bottom Action Button */}
                <div className="mt-5 pt-3 border-t border-[#2F5233]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => handleBookCondition(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2F5233] hover:text-[#C08A28] transition-colors py-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5233] rounded"
                  >
                    <span>{language === 'mr' ? 'या त्रासासाठी वेळ आरक्षित करा' : 'Book For This Condition'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-[#1F2E22]/50 italic">
                    Aundh, Pune
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Result Fallback */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-white/60 rounded-2xl border border-[#2F5233]/10">
            <p className="text-base text-[#1F2E22]/80 font-medium">
              No matching clinical specialty found for "{searchQuery}".
            </p>
            <p className="text-xs text-[#2F5233] mt-1">
              Dr. Ruturaj Kadam also treats complex chronic & multi-system conditions. Please book a general consultation.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs font-semibold cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
