import React, { useState, useEffect } from 'react';
import { SPECIALTIES, CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  User, 
  Phone, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

export default function AppointmentForm({ preselectedSpecialty }) {
  const [formData, setFormData] = useState({
    consultationType: 'in-clinic', // 'in-clinic' | 'video'
    specialty: preselectedSpecialty || 'Diabetes & Prediabetes Care',
    fullName: '',
    phone: '',
    age: '',
    gender: 'Prefer not to say',
    date: '',
    timeSlot: '10:30 AM',
    notes: '',
    hasExistingMedications: 'yes'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update specialty if preselectedSpecialty prop changes
  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData(prev => ({ ...prev, specialty: preselectedSpecialty }));
    }
  }, [preselectedSpecialty]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setFormData(prev => ({ ...prev, date: `${yyyy}-${mm}-${dd}` }));
  }, []);

  const timeSlots = {
    morning: ['09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM'],
    evening: ['05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM']
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide patient full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number';
    } else if (!/^[0-9+ ]{10,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.date) {
      errs.date = 'Please pick a consultation date';
    }
    if (!formData.timeSlot) {
      errs.timeSlot = 'Please select a preferred slot';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief medical confirmation processing
    setTimeout(() => {
      const generatedId = `ASK-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setErrors({});
    setFormData(prev => ({
      ...prev,
      fullName: '',
      phone: '',
      age: '',
      notes: ''
    }));
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF6EC] to-[#F4EEDF] border-b border-[#2F5233]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#2F5233] bg-[#EAF2E8] px-3.5 py-1 rounded-full border border-[#7FA173]/30">
            Consultation Booking
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F2E22] mt-3">
            Schedule Your Appointment
          </h2>
          <p className="text-sm sm:text-base text-[#1F2E22]/75 font-sans mt-2">
            Direct clinical consultation with Dr. Ruturaj Kadam at Aundh, Pune or via Secure Video.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white/95 rounded-3xl p-6 sm:p-10 border border-[#2F5233]/15 shadow-xl relative overflow-hidden backdrop-blur-xs">
          
          {/* Top Decorative Border */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2F5233] via-[#C08A28] to-[#2F5233]" />

          {isSuccess ? (
            /* Success Confirmation State */
            <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EAF2E8] text-[#2F5233] flex items-center justify-center mx-auto border border-[#7FA173]/30">
                <CheckCircle className="w-8 h-8 text-[#2F5233]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C08A28]">
                  Demo Appointment Confirmed
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2E22]">
                  Consultation Request Registered
                </h3>
                <p className="text-sm text-[#1F2E22]/70 max-w-lg mx-auto font-sans">
                  Your simulated appointment with Dr. Ruturaj Kadam has been recorded. Below is the confirmation summary.
                </p>
              </div>

              {/* Summary Receipt Box */}
              <div className="max-w-lg mx-auto bg-[#FAF6EC] p-6 rounded-2xl border border-[#2F5233]/15 text-left space-y-3.5 text-sm font-sans">
                <div className="flex justify-between items-center pb-3 border-b border-[#2F5233]/10">
                  <span className="text-xs text-[#1F2E22]/60">Booking Reference</span>
                  <span className="font-mono font-bold text-[#2F5233] bg-[#EAF2E8] px-2.5 py-0.5 rounded text-xs">
                    {bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Patient Name</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Contact</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Consultation Mode</span>
                    <span className="font-semibold text-[#2F5233] capitalize">
                      {formData.consultationType === 'in-clinic' ? 'In-Clinic (Aundh, Pune)' : 'Online Video Consultation'}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Date & Time</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.date} at {formData.timeSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#2F5233]/10">
                  <span className="text-xs text-[#1F2E22]/60 block">Clinical Specialty</span>
                  <span className="font-semibold text-[#1F2E22]">{formData.specialty}</span>
                </div>

                <div className="p-3 rounded-xl bg-[#2F5233]/5 border border-[#2F5233]/10 text-xs text-[#1F2E22]/80 space-y-1">
                  <div className="font-semibold text-[#2F5233] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C08A28]" />
                    <span>Clinic Location:</span>
                  </div>
                  <p>1st Floor, Saket Apt, Seasons Rd, next to Takalkar Classes, Aundh, Pune-07</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-sm hover:bg-[#1E3721] transition-all"
                >
                  <RefreshCw className="w-4 h-4 text-[#C08A28]" />
                  <span>Book Another Appointment</span>
                </button>
                <a
                  href="#specialties"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#2F5233]/20 text-[#1F2E22] font-medium text-sm hover:bg-[#EAF2E8] transition-all"
                >
                  Back to Specialities
                </a>
              </div>
            </div>
          ) : (
            /* Active Form State */
            <form onSubmit={handleSubmit} className="space-y-7 font-sans">
              
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2.5">
                  1. Choose Consultation Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: 'in-clinic' })}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      formData.consultationType === 'in-clinic'
                        ? 'bg-[#EAF2E8] border-[#2F5233] ring-1 ring-[#2F5233]'
                        : 'bg-white border-[#2F5233]/15 hover:bg-[#FAF6EC]'
                    }`}
                  >
                    <MapPin className={`w-5 h-5 shrink-0 mt-0.5 ${formData.consultationType === 'in-clinic' ? 'text-[#2F5233]' : 'text-[#1F2E22]/50'}`} />
                    <div>
                      <div className="font-semibold text-sm text-[#1F2E22]">In-Clinic Consultation</div>
                      <div className="text-xs text-[#1F2E22]/70">Saket Apartment, Seasons Rd, Aundh, Pune</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: 'video' })}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all ${
                      formData.consultationType === 'video'
                        ? 'bg-[#EAF2E8] border-[#2F5233] ring-1 ring-[#2F5233]'
                        : 'bg-white border-[#2F5233]/15 hover:bg-[#FAF6EC]'
                    }`}
                  >
                    <Video className={`w-5 h-5 shrink-0 mt-0.5 ${formData.consultationType === 'video' ? 'text-[#2F5233]' : 'text-[#1F2E22]/50'}`} />
                    <div>
                      <div className="font-semibold text-sm text-[#1F2E22]">Video Consultation</div>
                      <div className="text-xs text-[#1F2E22]/70">For outstation patients & follow-up reviews</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Primary Condition Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                  2. Select Health Concern / Specialty
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233]"
                >
                  {SPECIALTIES.map((spec) => (
                    <option key={spec.id} value={spec.title}>
                      {spec.title} {spec.subtitle ? `(${spec.subtitle})` : ''}
                    </option>
                  ))}
                  <option value="General Health / Prakriti Assessment">
                    General Health / Prakriti Assessment & Preventive Care
                  </option>
                  <option value="Other Chronic Health Concern">
                    Other Chronic Health Concern
                  </option>
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                    3. Preferred Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233] ${
                        errors.date ? 'border-red-500' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.date && (
                      <span className="text-xs text-red-600 mt-1 block">{errors.date}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233]"
                  >
                    <optgroup label="Morning Session (09:30 AM - 01:30 PM)">
                      {timeSlots.morning.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Evening Session (05:00 PM - 08:30 PM)">
                      {timeSlots.evening.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Patient Personal Details */}
              <div className="border-t border-[#2F5233]/10 pt-5 space-y-4">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70">
                  4. Patient Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g., Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233] ${
                        errors.fullName ? 'border-red-500' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-600 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="e.g., 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233] ${
                        errors.phone ? 'border-red-500' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">Age</label>
                    <input
                      type="number"
                      placeholder="e.g., 38"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                      Currently Taking Allopathic / Other Medications?
                    </label>
                    <select
                      value={formData.hasExistingMedications}
                      onChange={(e) => setFormData({ ...formData, hasExistingMedications: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233]"
                    >
                      <option value="yes">Yes (Bring prescriptions/reports)</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                    Brief Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe main symptoms, duration, or previous diagnosis..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus:outline-none focus:ring-2 focus:ring-[#2F5233]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-base shadow-lg shadow-[#2F5233]/25 hover:bg-[#1E3721] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#FAF6EC] border-t-transparent rounded-full animate-spin" />
                      <span>Confirming Appointment Slot...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C08A28]" />
                      <span>Confirm Appointment Request</span>
                      <ArrowRight className="w-4 h-4 text-[#FAF6EC]/80" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#1F2E22]/60 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7FA173]" />
                  <span>Clinical consultation fee payable at clinic during visit. Form is for demo slot reservation.</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
