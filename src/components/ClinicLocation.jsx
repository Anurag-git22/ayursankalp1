import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Clock, ExternalLink, Check, Compass, Navigation } from 'lucide-react';

export default function ClinicLocation() {
  const { address, hours, phone, phoneFormatted, mapEmbedUrl } = CLINIC_INFO;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FAF6EC] border-b border-[#2F5233]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            Visit AyurSankalpa
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Clinic Location & Hours
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2">
            Centrally situated in Aundh, Pune with convenient access from Baner, Shivajinagar, and Pimple Saudagar.
          </p>
        </div>

        {/* Two-Column Grid: Location Details & Interactive Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Phone, Hours */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Address Card */}
            <div className="bg-white/90 p-6 sm:p-7 rounded-2xl border border-[#2F5233]/15 shadow-xs space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF2E8] text-[#2F5233] flex items-center justify-center shrink-0 border border-[#7FA173]/30">
                  <MapPin className="w-5 h-5 text-[#2F5233]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-lg text-[#1F2E22]">
                    {CLINIC_INFO.name}
                  </h3>
                  <p className="text-sm text-[#1F2E22]/90 leading-relaxed font-sans">
                    {address.line1}<br />
                    {address.line2}<br />
                    {address.city} - {address.pin}, {address.state}
                  </p>
                  <p className="text-xs text-[#C08A28] font-semibold pt-1">
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

                <a
                  href="https://maps.google.com/?q=Saket+Apartment+Seasons+Rd+Aundh+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F5233] bg-[#EAF2E8] px-3 py-1 rounded-lg hover:bg-[#2F5233] hover:text-[#FAF6EC] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white/90 p-6 sm:p-7 rounded-2xl border border-[#2F5233]/15 shadow-xs space-y-4">
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

            {/* Transit Landmarks Card */}
            <div className="bg-white/80 p-5 rounded-2xl border border-[#2F5233]/15 text-xs text-[#1F2E22]/80 space-y-2.5 font-sans">
              <div className="font-semibold text-[#2F5233] uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#C08A28]" />
                <span>Transit & Parking Convenience</span>
              </div>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7FA173] shrink-0 mt-0.5" />
                  <span><strong>Elevator Access:</strong> Full 1st-floor elevator available inside Saket Apartment.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7FA173] shrink-0 mt-0.5" />
                  <span><strong>Parking:</strong> Two-wheeler parking and street parking along Seasons Road.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#7FA173] shrink-0 mt-0.5" />
                  <span><strong>From Baner / Parihar Chowk:</strong> Only 5-8 minutes travel time.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Embedded Interactive Google Maps Iframe */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white/95 rounded-2xl p-4 sm:p-5 border border-[#2F5233]/15 shadow-md flex flex-col h-full">
              
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#2F5233]/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C08A28]" />
                  <span className="font-serif font-bold text-base text-[#1F2E22]">
                    Interactive Google Map — Saket Apartment, Seasons Rd
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Saket+Apartment+Seasons+Rd+Aundh+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#2F5233] hover:text-[#C08A28] font-medium"
                >
                  <span>Open App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* The Google Maps Iframe */}
              <div className="w-full flex-grow min-h-[380px] sm:min-h-[460px] rounded-xl overflow-hidden border border-[#2F5233]/15 relative">
                <iframe
                  title="AyurSankalpa Clinic Aundh Google Maps Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="mt-3 text-[11px] text-[#1F2E22]/60 text-center flex items-center justify-center gap-2 font-sans">
                <span>📍 Next to Takalkar Classes, Shambhu Vihar Society, Seasons Road, Aundh, Pune - 411007</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
