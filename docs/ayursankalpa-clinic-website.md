# AyurSankalpa Clinic Website — Memory & Architecture

## 1. Project Summary
- **Clinic:** AyurSankalpa Clinic
- **Physician:** Dr. Ruturaj Kadam (BAMS, MD Ayurveda Pune, PGDEMS, DDM, DiH, Certified in Integrative Therapies USA)
- **Taglines:** *"Holistic Ayurvedic Care for Modern Living"* & *"Healing with Clarity & Care"*
- **Location:** 1st Floor, Saket Apartment, Seasons Rd, next to Takalkar Classes, Shambhu Vihar Society, Aundh, Pune-07
- **Contact:** 9028536848 | `@ayursankalpa`

---

## 2. Brand & Logo Specifications
- **Canonical Logo Mark:** Transparent background green gradient lotus/mandala (`src/assets/logo-mark.png` and `public/logo-mark.png`).
- **Favicon:** `/logo-mark.png`.
- **Placement Rules:**
  - Header / Navigation: Small icon next to serif wordmark `AYURSANKALPA CLINIC`.
  - Footer: Larger emblem version with full typography.
  - Background Watermark: Large, ~5% opacity, green gradient tones, non-interfering with text contrast behind Hero, About page doctor bio, and Appointment form.
  - Confirmation State: Small centered mark upon simulated form submission.

---

## 3. Multipage Route Architecture (`react-router-dom`)
- `/`: **Homepage (Trimmed)**
  - Hero with canonical lotus centerpiece & background watermark
  - Doctor Summary strip linking to `/about`
  - Brief Approach Pillars teaser
  - Curated subset of ~6 specialties linking to `/specialties`
  - 5 authentic Trust Badges strip
  - CTA Band linking to `/appointment`
- `/about`: **About Doctor & Clinical Approach**
  - Full doctor profile & credentials for Dr. Ruturaj Kadam
  - Expanded 3 pillars of healing
  - 4-phase clinical treatment journey
- `/specialties`: **All 13 Clinical Specialities**
  - Complete Samhita-based directory with category tabs and live condition search
  - "Book For This Condition" deep links into `/appointment?specialty=...`
- `/appointment`: **Consultation Booking & Clinic Location**
  - Full interactive form with mode toggle (In-Clinic Aundh vs. Video), specialty selector, slot picker, and confirmation reference (`ASK-XXXX`)
  - Aundh location map card, operating hours, and parking/transit guide
  - Clinical FAQs
