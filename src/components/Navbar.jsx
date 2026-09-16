import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock, Calendar, Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.specialties, path: '/specialties' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.appointment, path: '/appointment' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-[#2F5233] text-[#FAF6EC] text-xs py-2 px-4 border-b border-[#7FA173]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-[#EAF2E8]/90">
              <MapPin className="w-3.5 h-3.5 text-[#C08A28]" />
              <span className="hidden sm:inline">1st Floor, Saket Apt, Seasons Rd, Aundh, Pune</span>
              <span className="sm:hidden">Aundh, Pune</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-[#EAF2E8]/90">
              <Clock className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>{t.nav.hours}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Phone link */}
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 font-medium hover:text-[#C08A28] transition-colors focus-visible:ring-2 focus-visible:ring-[#C08A28] focus-visible:outline-hidden rounded px-1"
              aria-label={`Call AyurSankalpa Clinic at ${CLINIC_INFO.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>{CLINIC_INFO.phoneFormatted}</span>
            </a>

            <span className="text-[#7FA173]/40 hidden sm:inline">|</span>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FAF6EC]/15 hover:bg-[#FAF6EC]/25 text-[#FAF6EC] text-[11px] font-semibold transition-all border border-[#FAF6EC]/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#C08A28] focus-visible:outline-hidden"
              aria-label={`Switch language to ${language === 'en' ? 'Marathi' : 'English'}`}
            >
              <Globe className="w-3 h-3 text-[#C08A28]" />
              <span>{language === 'en' ? 'मराठी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6EC]/95 backdrop-blur-md shadow-md py-3 border-b border-[#2F5233]/10'
          : 'bg-[#FAF6EC] py-4 border-b border-[#2F5233]/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link to="/" className="focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden rounded-lg" onClick={() => setMobileMenuOpen(false)}>
            <Logo size={isScrolled ? 'small' : 'default'} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 group focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden rounded ${
                    isActive
                      ? 'text-[#2F5233] font-semibold'
                      : 'text-[#1F2E22] hover:text-[#2F5233]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C08A28] transition-all duration-200 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F5233] text-[#FAF6EC] text-sm font-semibold hover:bg-[#1E3721] hover:shadow-lg hover:shadow-[#2F5233]/20 active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
            >
              <Calendar className="w-4 h-4 text-[#C08A28]" />
              <span>{t.nav.bookAppointment}</span>
            </Link>
          </div>

          {/* Mobile Menu Button & Quick Lang */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2 py-1 rounded-md bg-[#EAF2E8] text-[#2F5233] text-xs font-semibold border border-[#7FA173]/30"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2E22] hover:bg-[#EAF2E8] transition-colors focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6EC] border-b border-[#2F5233]/10 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#EAF2E8] text-[#2F5233] font-bold'
                        : 'text-[#1F2E22] hover:bg-[#EAF2E8] hover:text-[#2F5233]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#2F5233]/10 flex flex-col gap-3">
              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-center shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C08A28]" />
                <span>{t.nav.bookAppointment}</span>
              </Link>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#2F5233]/20 text-[#2F5233] font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#C08A28]" />
                <span>{t.nav.callClinic}: {CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
