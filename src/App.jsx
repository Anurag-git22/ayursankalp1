import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LogoWatermark from './components/LogoWatermark';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import AppointmentPage from './pages/AppointmentPage';

export default function App() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF6EC] text-[#1F2E22] selection:bg-[#7FA173]/30 selection:text-[#1F2E22]">
        {/* Centered Logo Watermark - Appears on all pages */}
        <LogoWatermark />

        {/* Shared Navbar across all pages */}
        <Navbar />

        {/* Multipage Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/specialties"
              element={<SpecialtiesPage onSelectSpecialty={setSelectedSpecialty} />}
            />
            <Route path="/appointment" element={<AppointmentPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Shared Footer across all pages */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
