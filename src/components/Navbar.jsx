import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MapPin, Clock, Calendar, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Specialities', href: '#specialties' },
    { label: 'Dr. Ruturaj Kadam', href: '#doctor' },
    { label: 'Clinical Approach', href: '#approach' },
    { label: 'Healing Journey', href: '#journey' },
    { label: 'Location & Hours', href: '#location' },
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
              <span>Mon–Sat: 9:30 AM - 1:30 PM | 5:00 PM - 8:30 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-1.5 font-medium hover:text-[#C08A28] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C08A28]" />
              <span>{CLINIC_INFO.phoneFormatted}</span>
            </a>
            <span className="text-[#7FA173]/40 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#C08A28] font-serif italic text-xs">
              Evidence-Informed Ayurveda
            </span>
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
          <a href="#" className="focus:outline-none">
            <Logo size={isScrolled ? 'small' : 'default'} />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1F2E22] hover:text-[#2F5233] transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C08A28] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#appointment"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F5233] text-[#FAF6EC] text-sm font-semibold hover:bg-[#1E3721] hover:shadow-lg hover:shadow-[#2F5233]/20 active:scale-95 transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#C08A28]" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1F2E22] hover:bg-[#EAF2E8] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF6EC] border-b border-[#2F5233]/10 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium text-[#1F2E22] hover:bg-[#EAF2E8] hover:text-[#2F5233] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#2F5233]/10 flex flex-col gap-3">
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-center shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C08A28]" />
                <span>Book Appointment</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#2F5233]/20 text-[#2F5233] font-medium text-sm"
              >
                <Phone className="w-4 h-4 text-[#C08A28]" />
                <span>Call Clinic: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
