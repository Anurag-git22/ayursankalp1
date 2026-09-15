import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, Navigation, Check, ShieldCheck, Compass } from 'lucide-react';

export default function ClinicLocation() {
  const { address, hours, phone, phoneFormatted } = CLINIC_INFO;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF6EC] border-b border-[#2F5233]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C08A28] bg-[#FAF6EC] px-3.5 py-1 rounded-full border border-[#C08A28]/30">
            Visit AyurSankalpa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Clinic Location & Hours
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2">
            Centrally situated in Aundh, Pune with convenient access from Baner, Shivajinagar, and Pimple Saudagar.
          </p>
        </div>

        {/* Two-Column Grid: Location Details & Interactive Visual Map Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Address, Phone, Hours */}
          <div className="lg:col-span-6 flex flex-col space-y-6 h-full">
            
            {/* Address Card */}
            <div className="bg-white/85 p-6 sm:p-7 rounded-2xl border border-[#2F5233]/15 shadow-xs space-y-4 flex-grow">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2E8] text-[#2F5233] flex items-center justify-center shrink-0 border border-[#7FA173]/30">
                  <MapPin className="w-5 h-5 text-[#2F5233]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#1F2E22]">
                    AyurSankalpa Clinic
                  </h3>
                  <p className="text-sm text-[#1F2E22]/90 leading-relaxed font-sans">
                    {address.line1}<br />
                    {address.line2}<br />
                    {address.city} - {address.pin}, {address.state}
                  </p>
                  <p className="text-xs text-[#C08A28] font-medium pt-1">
                    Landmark: {address.landmark}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#2F5233]/10 flex flex-wrap items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C08A28]" />
                  <span className="text-xs text-[#1F2E22]/70">Direct Clinic:</span>
                  <a href={`tel:${phone}`} className="font-semibold text-[#2F5233] hover:underline">
                    {phoneFormatted}
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white/85 p-6 sm:p-7 rounded-2xl border border-[#2F5233]/15 shadow-xs space-y-4 flex-grow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2E8] text-[#2F5233] flex items-center justify-center shrink-0 border border-[#7FA173]/30">
                  <Clock className="w-5 h-5 text-[#2F5233]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1F2E22]">
                  Consultation Timings
                </h3>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-sans">
                {hours.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF6EC] border border-[#2F5233]/10 space-y-1">
                    <div className="font-semibold text-[#1F2E22]">{item.days}</div>
                    <div className="text-xs text-[#1F2E22]/80 flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Morning:</strong> {item.morning}</span>
                      {item.evening !== 'Closed' && (
                        <span><strong>Evening:</strong> {item.evening}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Directional Map Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-white to-[#FAF6EC] rounded-2xl p-6 sm:p-8 border border-[#2F5233]/15 shadow-sm flex flex-col justify-between relative overflow-hidden h-full">
            
            {/* Top Tag */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#2F5233] uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#C08A28]" />
                  <span>Aundh Accessibility</span>
                </div>
                <span className="text-xs text-[#1F2E22]/60 font-sans">Pune, Maharashtra</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F2E22]">
                Reaching Saket Apartment, Seasons Road
              </h3>

              {/* Styled Map Graphic / Navigation Guide */}
              <div className="rounded-xl bg-[#EAF2E8]/70 border border-[#2F5233]/15 p-5 space-y-3">
                <div className="text-xs font-semibold text-[#2F5233] uppercase tracking-wide">
                  Key Transit Landmarks
                </div>
                <ul className="text-xs sm:text-sm text-[#1F2E22]/80 space-y-2 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                    <span><strong>Next to Takalkar Classes</strong> on Seasons Road in Shambhu Vihar Society.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                    <span><strong>1st Floor Elevator Access</strong> available inside Saket Apartment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                    <span><strong>Parking:</strong> Dedicated visitor two-wheeler & designated car parking along Seasons Road.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#7FA173] shrink-0 mt-0.5" />
                    <span><strong>Connectivity:</strong> 5 mins from Aundh DP Road & Parihar Chowk; 10 mins from Baner.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Assistance Action */}
            <div className="pt-6 mt-6 border-t border-[#2F5233]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#1F2E22]/70">
                Need help finding the clinic? Call clinic front-desk:
              </div>
              <a
                href={`tel:${phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] text-xs font-semibold hover:bg-[#1E3721] transition-all shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#C08A28]" />
                <span>Call {phone}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
