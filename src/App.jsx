import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LogoWatermark from './components/LogoWatermark';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './context/LanguageContext';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SpecialtiesPage from './pages/SpecialtiesPage';
import AppointmentPage from './pages/AppointmentPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';

function PageContent() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EC] text-[#1F2E22] selection:bg-[#7FA173]/30 selection:text-[#1F2E22]">
      {/* Centered Logo Watermark - Appears on all pages with 6% opacity */}
      <LogoWatermark />

      {/* Shared Navbar across all pages with English/Marathi switch */}
      <Navbar />

      {/* Multipage Routes with subtle page-transition fade */}
      <main key={location.pathname} className="flex-grow animate-page-fade">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/specialties"
            element={<SpecialtiesPage onSelectSpecialty={setSelectedSpecialty} />}
          />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/blog" element={<BlogPage />} />
          {/* Custom 404 Page matching site design */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Click-to-Chat Button */}
      <WhatsAppButton />

      {/* Shared Footer across all pages */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <PageContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}
