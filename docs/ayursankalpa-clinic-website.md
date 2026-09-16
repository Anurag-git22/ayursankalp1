# AyurSankalpa Clinic Website — Memory & Architecture

## 1. Project Summary
- **Clinic:** AyurSankalpa Clinic
- **Physician:** Dr. Ruturaj Kadam (BAMS, MD Ayurveda Pune, PGDEMS, DDM, DiH, Certified in Integrative Therapies USA)
- **Taglines:** *"Holistic Ayurvedic Care for Modern Living"* & *"Healing with Clarity & Care"*
- **Location:** 1st Floor, Saket Apartment, Seasons Rd, next to Takalkar Classes, Shambhu Vihar Society, Aundh, Pune-411007
- **Contact:** 9028536848 | `@ayursankalpa`
- **WhatsApp Testing & Direct Chat:** `8291537788` | `https://wa.me/918291537788`
- **Language:** English Only (clean, accessible UI)
- **Social Media:**
  - LinkedIn: https://www.linkedin.com/in/dr-ruturaj-kadam-7639a9137
  - Instagram: https://www.instagram.com/ayursankalpa

---

## 2. Brand & Logo Specifications
- **Canonical Logo Mark:** Transparent background green gradient lotus/mandala (`src/assets/logo-mark.png` and `public/logo-mark.png`).
- **Favicon & Touch Icon:** `/logo-mark.png` and `/favicon.svg`.
- **Placement Rules:**
  - Header / Navigation: Small icon next to serif wordmark `AYURSANKALPA CLINIC`.
  - Footer: Larger emblem version with full typography and embedded Google Maps iframe.
  - **Centered Background Watermark (Site-Wide):** Single `<LogoWatermark />` component placed in `App.jsx` appears consistently on all pages. Fixed to viewport center (`position: fixed`), stays in place as user scrolls. 700px max size, 6% opacity. Includes `pointer-events: none` and `aria-hidden="true"` for full accessibility. Static design (no animation), provides subtle visual texture without compromising text readability. Uses `mix-blend-mode: multiply` for elegant integration with page backgrounds.
  - Confirmation State: Small centered mark upon simulated form submission.

---

## 3. Multipage Route Architecture (`react-router-dom`)
- `/`: **Homepage (Trimmed & Trusted)**
  - Hero with canonical lotus centerpiece & background watermark
  - Doctor Summary strip linking to `/about`
  - Brief Approach Pillars teaser
  - Featured clinical specialties overview with link to `/specialties`
  - **Testimonials Section:** Warm patient quotes covering prediabetes recovery, posture/neck strain relief, and gut health
  - 5 authentic Trust Badges strip
  - CTA Band linking to `/appointment`
- `/about`: **About Doctor, Clinical Approach & Healing Journey**
  - Full doctor profile & credentials for Dr. Ruturaj Kadam
  - Expanded 3 pillars of healing
  - 4-phase clinical treatment journey
  - Full patient testimonials and clinical trust section
- `/specialties`: **All 13 Clinical Specialities**
  - Complete Samhita-based directory with category tabs and live condition search
  - **Interactive Consultation Details:** Every card expands with in-depth clinical explanation of what consultation involves (Nadi Pariksha, metabolic tests, Ahara meal chart, customized herbs)
  - "Book For This Condition" deep links into `/appointment?specialty=...`
- `/blog`: **Ayurveda Tips & Lifestyle Guide**
  - Lightweight route with 5 practical lifestyle articles by Dr. Ruturaj Kadam
  - Topics: Gut Health & Jatharagni, Dinacharya & Sleep for Tech Professionals, Prameha & Insulin Reversal, Ritucharya Seasonal Immunity, and PCOS & Hormonal Balance
  - Category filtering and inline "Read Full Article" expansion with key clinical takeaways
- `/appointment`: **Consultation Booking & Clinic Location**
  - Full interactive form with mode toggle (In-Clinic Aundh vs. Video), specialty selector, slot picker, and client-side validation
  - **Confirmation Screen:** "Thanks — we'll be in touch" screen with small centered logo mark, booking reference `#ASK-XXXX`, receipt summary, day-of-visit preparation guidelines, and WhatsApp confirmation
  - **Clinical FAQs (Directly below booking form):** Covers first consultation expectations (45 min), personalized diet chart, Panchakarma therapies, treatment timelines, allopathic compatibility, and parking
  - **Clinic Location & Google Maps Embed:** Interactive responsive Google Maps iframe for Saket Apartment, Seasons Road, Aundh alongside transit landmarks and parking guidance
- `*`: **Custom 404 Page**
  - Styled with site palette, logo watermark, helpful links back to Home, Specialties, and Appointment

---

## 4. Technical, SEO & Accessibility Polish Pass
- **WhatsApp Click-to-Chat:** Floating action button (`src/components/WhatsAppButton.jsx`), appointment confirmation, and footer links configured with testing number `8291537788` (`https://wa.me/918291537788`).
- **SEO & Schema.org:**
  - Complete `<meta>` tags, canonical link, and Open Graph tags for WhatsApp/Instagram sharing.
  - JSON-LD structured data in `index.html` for `LocalBusiness`, `Physician`, and `MedicalClinic` with geo coordinates (18.55666, 73.80496), operating hours, and doctor credentials.
  - Privacy-friendly analytics placeholder slot commented out in `index.html`.
- **Accessibility & Polish:**
  - `focus-visible` ring on all interactive elements (inputs, buttons, accordions, links).
  - High color contrast meeting WCAG AA/AAA standards for ivory (`#FAF6EC`), forest green (`#2F5233`), and gold tones.
  - `prefers-reduced-motion` media query implemented for all animations and page-fade transitions.
  - Route scroll-to-top with subtle page-transition fade.
