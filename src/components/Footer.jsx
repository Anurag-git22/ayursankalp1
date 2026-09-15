import React from 'react';
import Logo from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E3721] text-[#FAF6EC] pt-14 pb-8 border-t border-[#7FA173]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#7FA173]/20">
          
          {/* Col 1: Brand & Doctor Summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="bg-[#FAF6EC] p-3 rounded-2xl inline-block">
              <Logo size="default" />
            </div>

            <p className="text-sm text-[#EAF2E8]/85 max-w-md leading-relaxed font-sans pt-1">
              <strong>{CLINIC_INFO.doctor.name}</strong> • MD (Ayurveda), BAMS, PGDEMS, DDM, DiH, Certified in Integrative Therapies (USA). Classical Ayurvedic healthcare anchored in clinical diagnostics, cellular rejuvenation, and personalized lifestyle medicine.
            </p>

            <div className="text-xs text-[#C08A28] font-serif italic">
              "{CLINIC_INFO.bannerTagline}"
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-sm">
            <h4 className="font-serif font-bold text-[#FAF6EC] text-base">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-[#EAF2E8]/80 text-xs">
              <li><a href="#specialties" className="hover:text-[#C08A28] transition-colors">13 Clinical Specialities</a></li>
              <li><a href="#doctor" className="hover:text-[#C08A28] transition-colors">Dr. Ruturaj Kadam Profile</a></li>
              <li><a href="#approach" className="hover:text-[#C08A28] transition-colors">3 Pillars of Healing</a></li>
              <li><a href="#journey" className="hover:text-[#C08A28] transition-colors">Patient Consultation Protocol</a></li>
              <li><a href="#appointment" className="hover:text-[#C08A28] transition-colors">Book Consultation</a></li>
              <li><a href="#location" className="hover:text-[#C08A28] transition-colors">Clinic Address & Hours</a></li>
            </ul>
          </div>

          {/* Col 3: Address & Direct Contact */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs text-[#EAF2E8]/80">
            <h4 className="font-serif font-bold text-[#FAF6EC] text-base">
              Clinic Location
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C08A28] shrink-0 mt-0.5" />
              <div>
                <span>{CLINIC_INFO.address.line1}</span><br />
                <span>{CLINIC_INFO.address.line2}</span><br />
                <span>{CLINIC_INFO.address.city} - {CLINIC_INFO.address.pin}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Phone className="w-4 h-4 text-[#C08A28] shrink-0" />
              <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#C08A28] transition-colors font-medium">
                {CLINIC_INFO.phoneFormatted}
              </a>
            </div>

            <div className="pt-2">
              <a
                href="#appointment"
                className="inline-block px-4 py-2 rounded-lg bg-[#2F5233] border border-[#7FA173]/30 text-[#FAF6EC] font-semibold text-xs hover:bg-[#FAF6EC] hover:text-[#1F2E22] transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#EAF2E8]/60 font-sans">
          
          <p className="max-w-2xl text-center md:text-left">
            <strong>Medical Disclaimer:</strong> Information on this website is for educational and clinical awareness purposes only. Treatments and herbal protocols are prescribed individually following pulse (Nadi) and doshic assessment. Individual results may vary.
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} AyurSankalpa Clinic. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#2F5233] text-[#FAF6EC] hover:bg-[#C08A28] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
