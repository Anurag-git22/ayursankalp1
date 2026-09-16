# AyurSankalpa Clinic Website — Memory & Architecture

## 1. Project Summary
- **Clinic:** AyurSankalpa Clinic
- **Physician:** Dr. Ruturaj Kadam (BAMS, MD Ayurveda Pune, PGDEMS, DDM, DiH, Certified in Integrative Therapies USA)
- **Taglines:** *"Holistic Ayurvedic Care for Modern Living"* & *"Healing with Clarity & Care"*
- **Location:** 1st Floor, Saket Apartment, Seasons Rd, next to Takalkar Classes, Shambhu Vihar Society, Aundh, Pune-07
- **Contact:** 9028536848 | `@ayursankalpa`
- **Social Media:**
  - LinkedIn: https://www.linkedin.com/in/dr-ruturaj-kadam-7639a9137
  - Instagram: https://www.instagram.com/ayursankalpa

---

## 2. Brand & Logo Specifications
- **Canonical Logo Mark:** Transparent background green gradient lotus/mandala (`src/assets/logo-mark.png` and `public/logo-mark.png`).
- **Favicon:** `/logo-mark.png`.
- **Placement Rules:**
  - Header / Navigation: Small icon next to serif wordmark `AYURSANKALPA CLINIC`.
  - Footer: Larger emblem version with full typography.
  - **Centered Background Watermark (Site-Wide):** Single `<LogoWatermark />` component placed in `App.jsx` appears consistently on all pages. Fixed to viewport center (`position: fixed`), stays in place as user scrolls. 700px max size, 6% opacity. Includes `pointer-events: none` and `aria-hidden="true"` for full accessibility. Static design (no animation), provides subtle visual texture without compromising text readability. Uses `mix-blend-mode: multiply` for elegant integration with page backgrounds.
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
