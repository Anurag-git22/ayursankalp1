import React, { useState, useEffect } from 'react';
import { SPECIALTIES, CLINIC_INFO } from '../data/clinicData';
import logoMark from '../assets/logo-mark.png';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Video, 
  User, 
  Phone, 
  Mail,
  FileText, 
  CheckCircle, 
  ShieldCheck,
  RefreshCw,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

export default function AppointmentForm({ preselectedSpecialty }) {
  const [formData, setFormData] = useState({
    consultationType: 'in-clinic', // 'in-clinic' | 'video'
    specialty: preselectedSpecialty || 'Diabetes & Prediabetes Care',
    fullName: '',
    phone: '',
    email: '',
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

  useEffect(() => {
    if (preselectedSpecialty) {
      setFormData(prev => ({ ...prev, specialty: preselectedSpecialty }));
    }
  }, [preselectedSpecialty]);

  useEffect(() => {
    // Default to tomorrow's date
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

    // Full name validation
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please provide patient full name';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name must be at least 2 characters';
    }

    // Phone validation (Indian 10-digit format or international)
    const cleanPhone = formData.phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+91|91)?[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a valid contact number';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Enter a valid 10-digit mobile number';
    }

    // Optional email validation
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Enter a valid email address';
      }
    }

    // Date validation
    if (!formData.date) {
      errs.date = 'Please pick a consultation date';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        errs.date = 'Consultation date cannot be in the past';
      }
    }

    // Time slot validation
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
    // Simulate server response delay with loading state
    setTimeout(() => {
      const generatedId = `ASK-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: document.getElementById('appointment')?.offsetTop - 50 || 200, behavior: 'smooth' });
    }, 700);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setErrors({});
    setFormData(prev => ({
      ...prev,
      fullName: '',
      phone: '',
      email: '',
      age: '',
      notes: ''
    }));
  };

  return (
    <section id="appointment" className="relative py-14 sm:py-20 bg-gradient-to-b from-[#FAF6EC] to-[#F4EEDF] border-b border-[#2F5233]/10 overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none opacity-[0.05] select-none">
        <img src={logoMark} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            /* Confirmation State: "Thanks — we'll be in touch" with small centered logo mark */
            <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              
              {/* Small Centered Logo Mark in Confirmation Screen */}
              <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center p-2 rounded-2xl bg-[#FAF6EC] border border-[#2F5233]/15 shadow-sm">
                <img 
                  src={logoMark} 
                  alt="AyurSankalpa Clinic Mark" 
                  className="w-full h-full object-contain" 
                />
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#2F5233] bg-[#EAF2E8] px-3 py-1 rounded-full border border-[#7FA173]/30">
                  <CheckCircle className="w-3.5 h-3.5 text-[#2F5233]" />
                  <span>Consultation Request Confirmed</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F2E22]">
                  Thanks — We'll Be In Touch
                </h3>
                <p className="text-xs sm:text-sm text-[#1F2E22]/70 max-w-lg mx-auto font-sans leading-relaxed">
                  Your consultation request with Dr. Ruturaj Kadam has been recorded. Our front desk will contact you shortly on your registered number to confirm the final slot.
                </p>
              </div>

              {/* Summary Receipt Box */}
              <div className="max-w-lg mx-auto bg-[#FAF6EC] p-6 rounded-2xl border border-[#2F5233]/15 text-left space-y-4 text-sm font-sans">
                <div className="flex justify-between items-center pb-3 border-b border-[#2F5233]/10">
                  <span className="text-xs text-[#1F2E22]/60">Booking Reference</span>
                  <span className="font-mono font-bold text-[#2F5233] bg-[#EAF2E8] px-3 py-0.5 rounded text-xs border border-[#7FA173]/30">
                    {bookingRef}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Patient Name</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.fullName}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Contact Number</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Consultation Mode</span>
                    <span className="font-semibold text-[#2F5233] capitalize">
                      {formData.consultationType === 'in-clinic' ? 'In-Clinic (Aundh, Pune)' : 'Online Video Consultation'}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-[#1F2E22]/60 block">Date & Slot</span>
                    <span className="font-semibold text-[#1F2E22]">{formData.date} at {formData.timeSlot}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#2F5233]/10">
                  <span className="text-xs text-[#1F2E22]/60 block">Primary Concern</span>
                  <span className="font-semibold text-[#1F2E22]">{formData.specialty}</span>
                </div>

                {/* Consultation Day Guidelines Box */}
                <div className="p-4 rounded-xl bg-white border border-[#2F5233]/10 text-xs text-[#1F2E22]/85 space-y-2">
                  <div className="font-semibold text-[#2F5233] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C08A28]" />
                    <span>Consultation Day Guidelines:</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-[#1F2E22]/75">
                    <li>• Please arrive 10 minutes prior to your scheduled time.</li>
                    <li>• Bring your recent blood tests, medical files, and current prescriptions.</li>
                    <li>• Avoid heavy meals for 2 hours before your pulse (Nadi Pariksha) assessment.</li>
                  </ul>
                </div>

                {/* Address reminder */}
                <div className="p-3 rounded-xl bg-[#2F5233]/5 border border-[#2F5233]/10 text-xs text-[#1F2E22]/80 space-y-1">
                  <div className="font-semibold text-[#2F5233] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C08A28]" />
                    <span>Clinic Address:</span>
                  </div>
                  <p>1st Floor, Saket Apt, Seasons Rd, next to Takalkar Classes, Aundh, Pune-411007</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-xs hover:bg-[#1E3721] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5233]"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Book Another Appointment</span>
                </button>

                {/* Direct WhatsApp Checking Button using 8291537788 */}
                <a
                  href={`https://wa.me/918291537788?text=${encodeURIComponent(`Hello, I have booked reference ${bookingRef} for ${formData.fullName} on ${formData.date}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs hover:bg-[#1EBE5D] transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Notify via WhatsApp</span>
                </a>
              </div>

            </div>
          ) : (
            /* Interactive Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Consultation Type Toggle */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                  1. Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: 'in-clinic' })}
                    className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5233] ${
                      formData.consultationType === 'in-clinic'
                        ? 'border-[#2F5233] bg-[#EAF2E8] shadow-xs'
                        : 'border-[#2F5233]/15 bg-white hover:bg-[#FAF6EC]'
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-white border border-[#2F5233]/15 text-[#2F5233] shrink-0">
                      <MapPin className="w-4 h-4 text-[#C08A28]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#1F2E22]">In-Clinic Consultation</div>
                      <div className="text-xs text-[#1F2E22]/65">Aundh, Pune</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: 'video' })}
                    className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#2F5233] ${
                      formData.consultationType === 'video'
                        ? 'border-[#2F5233] bg-[#EAF2E8] shadow-xs'
                        : 'border-[#2F5233]/15 bg-white hover:bg-[#FAF6EC]'
                    }`}
                  >
                    <div className="p-2 rounded-xl bg-white border border-[#2F5233]/15 text-[#2F5233] shrink-0">
                      <Video className="w-4 h-4 text-[#C08A28]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#1F2E22]">Online Video Session</div>
                      <div className="text-xs text-[#1F2E22]/65">Pan-India & Global</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Specialty Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                  2. Health Concern / Clinical Focus
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
                >
                  {SPECIALTIES.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title} ({item.category})
                    </option>
                  ))}
                  <option value="General Ayurvedic Health Assessment">General Health & Prakriti Evaluation</option>
                  <option value="Post-Illness Vitality & Immunity (Rasayana)">Post-Illness Vitality (Rasayana)</option>
                </select>
              </div>

              {/* Date and Time Slot Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                    3. Preferred Consultation Date *
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden ${
                      errors.date ? 'border-red-500 bg-red-50/30' : 'border-[#2F5233]/20'
                    }`}
                  />
                  {errors.date && (
                    <span className="text-xs text-red-600 mt-1 block font-medium">{errors.date}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70 mb-2">
                    4. Preferred Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
                  >
                    <optgroup label="Morning Consultation">
                      {timeSlots.morning.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Evening Consultation">
                      {timeSlots.evening.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </optgroup>
                  </select>
                  {errors.timeSlot && (
                    <span className="text-xs text-red-600 mt-1 block font-medium">{errors.timeSlot}</span>
                  )}
                </div>
              </div>

              {/* Patient Personal Details */}
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1F2E22]/70">
                  5. Patient Information
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Anuradha Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden ${
                        errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-600 mt-1 block font-medium">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number (e.g., 98220 12345)"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-600 mt-1 block font-medium">{errors.phone}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g., name@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-[#2F5233]/20'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-600 mt-1 block font-medium">{errors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                      Age (Optional)
                    </label>
                    <input
                      type="number"
                      placeholder="e.g., 38"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                    Currently Taking Allopathic Medications?
                  </label>
                  <select
                    value={formData.hasExistingMedications}
                    onChange={(e) => setFormData({ ...formData, hasExistingMedications: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
                  >
                    <option value="yes">Yes (Bring reports/prescriptions)</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#1F2E22]/70 mb-1 font-medium">
                    Brief Notes or Symptoms (Optional)
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Describe symptoms, duration, prior tests, or specific health goals..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#2F5233]/20 text-sm text-[#1F2E22] focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
                  />
                </div>
              </div>

              {/* Submit Button with Loading State */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#2F5233] text-[#FAF6EC] font-semibold text-base shadow-lg shadow-[#2F5233]/25 hover:bg-[#1E3721] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80 focus-visible:ring-2 focus-visible:ring-[#2F5233] focus-visible:outline-hidden"
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

                <p className="text-center text-xs text-[#1F2E22]/60 mt-3 flex items-center justify-center gap-1.5 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7FA173]" />
                  <span>Clinical consultation fee payable at clinic during visit. Form is for slot reservation.</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
