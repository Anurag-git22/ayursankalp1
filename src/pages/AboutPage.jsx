import React from 'react';
import { Link } from 'react-router-dom';
import DoctorProfile from '../components/DoctorProfile';
import ApproachPillars from '../components/ApproachPillars';
import TreatmentFlow from '../components/TreatmentFlow';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="relative">

      <div className="relative z-10">
        {/* Page Header */}
        <div className="bg-[#F5EFE0]/60 border-b border-[#2F5233]/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22]">
              About Dr. Ruturaj Kadam
            </h1>
            <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2 max-w-2xl">
              Discover the clinical foundation, international training, and integrative Ayurvedic philosophy guiding AyurSankalpa Clinic in Aundh, Pune.
            </p>
          </div>
        </div>

        {/* 1. Full Doctor Bio & Credentials */}
        <DoctorProfile />

        {/* 2. Expanded 3 Pillars of Healing */}
        <ApproachPillars />

        {/* 3. The 4-Phase Treatment Journey */}
        <TreatmentFlow />

        {/* 4. Bottom Booking Prompt */}
        <section className="py-12 bg-[#FAF6EC] border-t border-[#2F5233]/10">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#1F2E22]">
              Consult with Dr. Ruturaj Kadam
            </h3>
            <p className="text-xs sm:text-sm text-[#1F2E22]/70 max-w-md mx-auto">
              Ready for a personalized Prakriti and Nadi Pariksha assessment? Schedule your slot at our Aundh clinic.
            </p>
            <div className="pt-2">
              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-sm hover:bg-[#1E3721] transition-all shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#C08A28]" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
