import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_ARTICLES } from '../data/blogData';
import { useLanguage } from '../context/LanguageContext';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  User, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  Share2
} from 'lucide-react';

export default function BlogPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  const categories = [
    'All',
    'Gut & Digestion',
    'Mind & Lifestyle',
    'Metabolic & Endocrine',
    'Immunity & Preventive',
    'Hormonal & Vitality'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === selectedCategory);

  const toggleArticle = (id) => {
    setExpandedArticleId(prev => (prev === id ? null : id));
  };

  return (
    <div className="relative">
      <div className="relative z-10">
        
        {/* Page Header */}
        <div className="bg-[#F5EFE0]/60 border-b border-[#2F5233]/10 py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>{language === 'mr' ? 'आयुर्वेद ज्ञान व जीवनशैली' : 'Clinical Wisdom & Lifestyle'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
              {language === 'mr' ? 'आयुर्वेद टिप्स आणि आरोग्य ब्लॉग' : 'Ayurveda Tips & Lifestyle Guide'}
            </h1>
            <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-3 leading-relaxed">
              {language === 'mr'
                ? 'डॉ. ऋतुराज कदम यांच्या अनुभवातून संकलित केलेले सोपे, व्यावहारिक व शास्त्रीय आयुर्वेदिक मार्गदर्शन.'
                : 'Evidence-informed Ayurvedic insights, seasonal routines, and practical metabolic advice written by Dr. Ruturaj Kadam to support your daily wellness journey.'}
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <section className="py-12 sm:py-16 bg-[#FAF6EC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#2F5233] text-[#FAF6EC] shadow-md shadow-[#2F5233]/20 font-semibold'
                      : 'bg-white/80 text-[#1F2E22] border border-[#2F5233]/15 hover:bg-[#EAF2E8] hover:text-[#2F5233]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles List */}
            <div className="space-y-6">
              {filteredArticles.map((article) => {
                const isExpanded = expandedArticleId === article.id;

                return (
                  <article
                    key={article.id}
                    className="bg-white/95 rounded-2xl border border-[#2F5233]/15 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-6 sm:p-8">
                      {/* Meta Information Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#1F2E22]/65 mb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-[#2F5233] bg-[#EAF2E8] px-2.5 py-0.5 rounded-md border border-[#7FA173]/30">
                            {article.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#C08A28]" />
                            <span>{article.readTime}</span>
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[11px]">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5 text-[#7FA173]" />
                            <span>{article.author}</span>
                          </span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>

                      {/* Article Headline */}
                      <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2E22] hover:text-[#2F5233] transition-colors leading-snug">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-[#1F2E22]/80 font-sans leading-relaxed mt-2.5">
                        {article.excerpt}
                      </p>

                      {/* Expanded Full Article Content (Inline expansion) */}
                      {isExpanded && (
                        <div className="mt-6 pt-6 border-t border-[#2F5233]/10 space-y-6 animate-in fade-in duration-300">
                          {/* Rich Text Formatted Body */}
                          <div className="prose prose-sm max-w-none text-[#1F2E22]/85 font-sans leading-relaxed space-y-4">
                            {article.content.trim().split('\n\n').map((paragraph, pIdx) => {
                              if (paragraph.startsWith('### ')) {
                                return (
                                  <h3 key={pIdx} className="font-serif font-bold text-lg text-[#2F5233] pt-2">
                                    {paragraph.replace('### ', '')}
                                  </h3>
                                );
                              }
                              return (
                                <p key={pIdx} className="text-sm sm:text-base leading-relaxed">
                                  {paragraph}
                                </p>
                              );
                            })}
                          </div>

                          {/* Key Takeaways Callout Box */}
                          {article.takeaways && (
                            <div className="p-5 rounded-xl bg-[#FAF6EC] border border-[#C08A28]/30 space-y-2.5">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2F5233]">
                                <Sparkles className="w-4 h-4 text-[#C08A28]" />
                                <span>Key Clinical Takeaways</span>
                              </div>
                              <ul className="space-y-1.5 text-xs sm:text-sm text-[#1F2E22]/85 font-sans">
                                {article.takeaways.map((takeaway, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                                    <span>{takeaway}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Action Strip: Book for this condition */}
                          <div className="pt-3 border-t border-[#2F5233]/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#EAF2E8]/40 p-4 rounded-xl">
                            <div className="text-xs text-[#1F2E22]/80">
                              Dealing with persistent symptoms? Consult with Dr. Ruturaj Kadam in Aundh.
                            </div>
                            <Link
                              to={`/appointment?specialty=${encodeURIComponent(article.specialtyLink)}`}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2F5233] text-[#FAF6EC] text-xs font-semibold hover:bg-[#1E3721] transition-all shrink-0"
                            >
                              <span>Consult on {article.specialtyLink}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#C08A28]" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Expand / Collapse Button */}
                      <div className="mt-5 pt-3 border-t border-[#2F5233]/10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => toggleArticle(article.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F5233] hover:text-[#C08A28] transition-colors cursor-pointer py-1"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? (language === 'mr' ? 'कमी करा' : 'Collapse Article') : (language === 'mr' ? 'संपूर्ण लेख वाचा' : 'Read Full Article')}</span>
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>

                        <span className="text-[11px] text-[#1F2E22]/50 italic">
                          By Dr. Ruturaj Kadam
                        </span>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Disclaimer & Newsletter/Advice Note */}
            <div className="mt-12 text-center p-6 rounded-2xl bg-white/70 border border-[#2F5233]/10 text-xs text-[#1F2E22]/70 font-sans max-w-2xl mx-auto space-y-2">
              <p className="font-medium text-[#1F2E22]">
                <strong>Clinical Note:</strong> Ayurvedic principles and dietary adjustments work best when personalized to your body constitution (Prakriti).
              </p>
              <div className="pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2F5233] hover:underline"
                >
                  <span>Book an unhurried 45-minute clinical consultation at our Aundh clinic</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C08A28]" />
                </Link>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
