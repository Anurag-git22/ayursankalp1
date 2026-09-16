import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import ClinicLocation from '../components/ClinicLocation';
import FAQ from '../components/FAQ';

export default function AppointmentPage() {
  const [searchParams] = useSearchParams();
  const specialtyFromUrl = searchParams.get('specialty');

  return (
    <div className="relative">

      <div className="relative z-10">
      {/* Page Header */}
      <div className="bg-[#F5EFE0]/60 border-b border-[#2F5233]/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22]">
            Schedule a Consultation
          </h1>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2 max-w-2xl">
            Book an in-clinic consultation with Dr. Ruturaj Kadam at our Aundh, Pune clinic or reserve an online video session.
          </p>
        </div>
      </div>

      {/* 1. Full Interactive Appointment Booking Form (with watermark and confirmation) */}
      <AppointmentForm preselectedSpecialty={specialtyFromUrl || ''} />

      {/* 2. Clinic Address, Operating Hours & Directions */}
      <ClinicLocation />

      {/* 3. Clinical FAQs */}
      <FAQ />
      </div>
    </div>
  );
}
