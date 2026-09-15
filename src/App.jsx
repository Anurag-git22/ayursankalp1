import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import ApproachPillars from './components/ApproachPillars';
import Specialties from './components/Specialties';
import TrustBadges from './components/TrustBadges';
import TreatmentFlow from './components/TreatmentFlow';
import AppointmentForm from './components/AppointmentForm';
import ClinicLocation from './components/ClinicLocation';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [selectedSpecialtyForBooking, setSelectedSpecialtyForBooking] = useState('');

  const handleSelectSpecialty = (specialtyTitle) => {
    setSelectedSpecialtyForBooking(specialtyTitle);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EC] text-[#1F2E22] selection:bg-[#7FA173]/30 selection:text-[#1F2E22]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust Badges Strip (5 authentic badges from banner) */}
        <TrustBadges />

        {/* 3. Doctor Credentials & Profile */}
        <DoctorProfile />

        {/* 4. Approach Pillars (Evidence-Informed, Personalized, Lifestyle Medicine) */}
        <ApproachPillars />

        {/* 5. 13 Clinical Specialities (Interactive Filter & Condition Selection) */}
        <Specialties onSelectSpecialty={handleSelectSpecialty} />

        {/* 6. Patient Consultation & Treatment Journey */}
        <TreatmentFlow />

        {/* 7. Appointment Booking Form */}
        <AppointmentForm preselectedSpecialty={selectedSpecialtyForBooking} />

        {/* 8. Clinic Location, Map & Timings */}
        <ClinicLocation />

        {/* 9. Frequently Answered Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
