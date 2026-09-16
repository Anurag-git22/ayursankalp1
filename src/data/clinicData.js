export const CLINIC_INFO = {
  name: "AyurSankalpa Clinic",
  bannerTagline: "Holistic Ayurvedic Care for Modern Living",
  wordmarkTagline: "Healing with Clarity & Care",
  approachLine: "Evidence-Informed Care • Personalized Treatment • Lifestyle Medicine",
  doctor: {
    name: "Dr. Ruturaj Kadam",
    title: "Senior Ayurvedic Physician & Integrative Health Consultant",
    qualifications: "BAMS, MD (Ayurveda), Pune",
    additionalCredentials: [
      "PGDEMS (Emergency Medical Services)",
      "DDM (Diploma in Diabetes Management)",
      "DiH (Pune)",
      "Certified in Integrative Therapies & Healing Practices (USA)"
    ],
    summary: "Dr. Ruturaj Kadam blends the timeless diagnostic wisdom of classical Ayurveda with rigorous modern clinical insights. With advanced postgraduate training and international certifications in integrative therapies, Dr. Kadam focuses on deep root-cause resolution, metabolic restoration, and sustainable lifestyle medicine.",
    experienceYears: "12+ Years of Clinical Excellence",
    philosophy: "Ayurveda is not merely herbal remedies—it is the science of living in alignment with one's unique constitution (Prakriti). By understanding bio-energetic imbalances (Doshas), cellular metabolism (Agni), and accumulated toxins (Ama), we restore vital equilibrium without lifelong dependency."
  },
  address: {
    line1: "1st Floor, Saket Apartment, Seasons Rd",
    line2: "Next to Takalkar Classes, Shambhu Vihar Society",
    city: "Aundh, Pune",
    pin: "411007",
    state: "Maharashtra",
    landmark: "Next to Takalkar Classes, Seasons Road, Aundh"
  },
  mapCoordinates: {
    lat: 18.5602,
    lng: 73.8077
  },
  // Accessible Google Maps Embed URL for Saket Apartment, Seasons Road, Aundh, Pune
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.385368481358!2d73.80496157519253!3d18.556662782544284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf38ec4cf1a7%3A0xe54d6e902b9ffc68!2sSaket%20Apartment%2C%20Seasons%20Rd%2C%20Shambhu%20Vihar%20Society%2C%20Sanewadi%2C%20Aundh%2C%20Pune%2C%20Maharashtra%20411007!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin",
  phone: "9028536848",
  phoneFormatted: "+91 90285 36848",
  whatsappNumber: "8291537788",
  whatsappFormatted: "+91 82915 37788",
  whatsappUrl: "https://wa.me/918291537788",
  instagram: "@ayursankalpa",
  hours: [
    { days: "Monday - Saturday", morning: "09:30 AM – 01:30 PM", evening: "05:00 PM – 08:30 PM" },
    { days: "Sunday", morning: "By Prior Appointment Only", evening: "Closed" }
  ]
};

export const TRUST_BADGES = [
  {
    id: 1,
    title: "Personalized Treatment Plans",
    description: "Every protocol is custom-tailored to your unique Prakriti (body constitution), lifestyle, and metabolic profile."
  },
  {
    id: 2,
    title: "Authentic Classical Ayurveda",
    description: "Pure Samhita-backed formulations, standardized herbs, and classical Chikitsa without synthetic additives."
  },
  {
    id: 3,
    title: "Evidence-Informed Clinical Care",
    description: "Harmonizing ancient pulse/dosha diagnosis with contemporary laboratory markers and clinical monitoring."
  },
  {
    id: 4,
    title: "Holistic & Preventive Healthcare",
    description: "Proactive medicine that prevents recurrence, strengthens Ojas (immunity), and fosters long-term vitality."
  },
  {
    id: 5,
    title: "Premium Patient Care",
    description: "Unhurried consultations, continuous dietary guidance, compassionate listening, and dedicated follow-up."
  }
];

export const APPROACH_PILLARS = [
  {
    number: "01",
    title: "Evidence-Informed Care",
    tagline: "Ancient Science Validated by Clinical Rigor",
    description: "We correlate classical Ayurvedic diagnostic metrics (Nadi Pariksha, Agni evaluation, Dhatu assessment) with modern pathology reports, glucose monitoring, and thyroid panels for transparent, measurable progress."
  },
  {
    number: "02",
    title: "Personalized Treatment",
    tagline: "No Generic Prescriptions, Ever",
    description: "Because no two individuals share the same cellular constitution or root triggers, your formulation, dietary chart (Ahara), and therapeutic regimen are uniquely compounded for your specific stage of life."
  },
  {
    number: "03",
    title: "Lifestyle Medicine",
    tagline: "Sustainable Healing Beyond the Prescription",
    description: "True cure requires resetting circadian rhythms (Dinacharya), stress response systems (Manasa Chikitsa), and digestive fire (Agni). We provide clear, practical daily routines adapted for busy urban professionals."
  }
];

export const SPECIALTIES = [
  {
    id: "diabetes",
    category: "Metabolic & Endocrine",
    title: "Diabetes & Prediabetes Care",
    badge: "Specialized Diploma in Diabetes (DDM)",
    description: "Comprehensive management of Prameha (Type 2 Diabetes & Insulin Resistance) through herbal insulin-sensitizers, pancreatic rejuvenation herbs, and low-glycemic Ayurvedic meal architecture.",
    symptoms: ["Elevated HbA1c", "Chronic Fatigue", "Frequent Urination", "Sudden Weight Shifts", "Post-Meal Slump"],
    keyProtocols: ["Agni Deepana (Metabolic Fire Correction)", "Meda-Dhatu Shodhana", "Tailored Low-Glycemic Dinacharya"],
    consultationDetail: "During a diabetes consultation, Dr. Ruturaj Kadam begins with a detailed review of your HbA1c trends, fasting insulin levels, and family metabolic history alongside classical Nadi Pariksha. He assesses your Meda (fat tissue) and Kleda (metabolic fluid accumulation) state to identify pancreatic stress. You receive a personalized formulation using standardized bio-active botanicals (such as Vijaysar, Gudmar, and Jambu), paired with an easy-to-follow glycemic food blueprint designed to reverse cellular insulin resistance without unmanageable dietary deprivations."
  },
  {
    id: "gi-disorders",
    category: "Gut & Digestion",
    title: "Gastrointestinal Disorders",
    subtitle: "IBS, Acidity, Constipation",
    badge: "Core Ayurvedic Chikitsa",
    description: "Re-establishing healthy Gut-Brain Axis and digestive fire (Jatharagni). Effective protocols for GERD, chronic hyperacidity (Amlapitta), irritable bowel syndrome (Grahani), and sluggish bowel transit.",
    symptoms: ["Acid Reflux & Heartburn", "Bloating & Gas", "Alternating Bowel Habits", "Indigestion", "Cramping"],
    keyProtocols: ["Pitta Shamana Therapy", "Takra Kalpana (Probiotic Formulations)", "Microbiome Restoration"],
    consultationDetail: "A GI consultation focuses on evaluating the state of your digestive fire (Jatharagni) and intestinal lining (Koshtha assessment). Dr. Kadam analyzes meal timing triggers, stress factors influencing bowel motility, and signs of accumulated endotoxins (Ama). The consultation yields targeted Pitta-pacifying remedies, tailored probiotic medicated buttermilk regimens (Takra Kalpana), and circadian food-combining guidelines that heal acid erosion and re-educate the gut microbiome naturally."
  },
  {
    id: "thyroid-metabolic",
    category: "Metabolic & Endocrine",
    title: "Thyroid & Metabolic Disorders",
    badge: "Hormonal Regulation",
    description: "Targeted Ayurvedic protocols for Hypothyroidism, Hashimoto's, and slow metabolism. We focus on Kantha-gata Dhatu metabolism and clearing Medo-dhatvagni blocks to restore natural hormone synthesis.",
    symptoms: ["Sluggish Metabolism", "Puffy Face & Water Retention", "Dry Skin & Hair Loss", "Cold Intolerance", "Mood Swings"],
    keyProtocols: ["Thyroid Gland Rasayana", "Lymphatic & Medas Clearance", "Herbal Bio-Enhancers"],
    consultationDetail: "For thyroid concerns, Dr. Kadam investigates beyond standard TSH numbers to understand sluggish tissue conversion (Dhatvagni Mandya) and lymphatic congestion. The consultation includes physical neck and pulse evaluation, thermal tolerance analysis, and a structured protocol using classical Kanchanar and Guggulu compounds that unblock micro-channels (Srotas), improve cellular responsiveness, and restore daily metabolic drive."
  },
  {
    id: "joints-arthritis",
    category: "Musculoskeletal & Pain",
    title: "Joint, Bone & Arthritis Care",
    badge: "Pain & Mobility Rehabilitation",
    description: "Holistic relief and cartilage nourishment for Osteoarthritis (Sandhivata), Rheumatoid Arthritis (Amavata), Cervical/Lumbar Spondylosis, and Uric Acid gout without reliance on long-term NSAIDs.",
    symptoms: ["Morning Stiffness", "Swollen & Tender Joints", "Crackling Sensations (Crepitus)", "Reduced Range of Motion"],
    keyProtocols: ["Amavata Shodhana", "Targeted Janu Basti & Lepa", "Herbal Anti-Inflammatory Rasayanas"],
    consultationDetail: "Your joint consultation involves palpation of affected articulations, range-of-motion assessments, and differentiating between inflammatory Ama accumulation and degenerative Vata depletion. Dr. Kadam prescribes targeted anti-inflammatory herbal decoctions (Kwathas), custom external medicated oils, and recommends localized joint-nourishing therapies (such as Janu Basti or Patra Pinda Sweda) to arrest cartilage degradation and preserve pain-free movement."
  },
  {
    id: "weight-management",
    category: "Metabolic & Endocrine",
    title: "Weight Loss & Obesity Management",
    badge: "Sustainable Sthoulya Chikitsa",
    description: "Evidence-grounded Ayurvedic fat metabolism protocol. We address underlying leptin/insulin resistance, sluggish liver metabolism, and emotional eating rather than crash starvation diets.",
    symptoms: ["Stubborn Visceral Fat", "Sluggish Digestion", "Breathlessness on Exertion", "Water Retention"],
    keyProtocols: ["Udwarthanam Herbal Exfoliation Advice", "Lekhaniya Dravyas", "Metabolic Reset Diet"],
    consultationDetail: "Rather than prescribing unsustainable caloric starvation, weight consultations analyze hepatic metabolism (Yakrit Agni), water retention tendencies, and hunger hormones. Dr. Kadam formulates a gentle cellular scraping (Lekhana) herbal protocol, gives guidelines on herbal scrub therapies (Udwarthanam), and devises a wholesome seasonal meal rhythm that reactivates baseline metabolic rate permanently."
  },
  {
    id: "spine-back-pain",
    category: "Musculoskeletal & Pain",
    title: "Spine, Neck & Back Pain",
    badge: "Non-Surgical Spine Care",
    description: "Focused regenerative protocols for Sciatica (Gridhrasi), disc bulges, tech-neck syndrome, and chronic postural strain. Strengthening paravertebral musculature and restoring nerve conduction.",
    symptoms: ["Radiating Leg Pain", "Numbness & Tingling", "Upper Back & Shoulder Spasms", "Stiff Lumbar Spine"],
    keyProtocols: ["Kati Basti Guidance", "Vata Shamana Oils", "Postural Ergonometrics & Yoga Nidra"],
    consultationDetail: "Spine consultations feature detailed vertebral alignment checks, nerve pathway testing (Gridhrasi assessment for sciatica), and workstation ergonomics evaluation. Dr. Kadam outlines localized warm medicated oil pooling protocols (Kati/Greeva Basti), nerve-regenerating herbal rasayanas, and restorative micro-stretches that decompress nerve roots without invasive procedures."
  },
  {
    id: "hormonal-imbalances",
    category: "Hormonal & Vitality",
    title: "Hormonal Imbalances",
    badge: "Endocrine Harmony",
    description: "Balancing the delicate endocrine network naturally. We treat adrenal fatigue, cortisol dysregulation, and cycle irregularities by revitalizing the hypothalamic-pituitary-ovarian/adrenal axis.",
    symptoms: ["Unexplained Anxiety", "Energy Fluctuations", "Acne Outbreaks", "Sleep Disturbances"],
    keyProtocols: ["Adaptogenic Rasayana Therapy", "Shirodhara Guidance", "Ojas Nourishment"],
    consultationDetail: "This consultation untangles the complex web of chronic stress, adrenal burnout, and endocrine signaling. Dr. Kadam tracks your daily circadian energy dips, sleep-wake cycles, and emotional triggers. You receive an adaptogenic herbal regimen (incorporating Ashwagandha, Brahmi, and Shatavari), restorative evening routines, and specific guidance on stabilizing the neuro-endocrine axis."
  },
  {
    id: "skin-hair-scalp",
    category: "Dermatology & Trichology",
    title: "Skin, Hair & Scalp Disorders",
    badge: "Internal Blood Purification",
    description: "Treating skin and scalp disorders from within through Rakta Shodhana (blood purification) and Pitta-Kapha balance. Effective for Psoriasis, Eczema, Alopecia, stubborn Dandruff, and adult Acne.",
    symptoms: ["Scalp Thinning & Hair Fall", "Persistent Flaking", "Eczematous Patches", "Cystic Facial Acne"],
    keyProtocols: ["Raktamokshana Principles", "Micro-Purifying Herbal Kwathas", "Topical Medicated Oils"],
    consultationDetail: "Because skin and scalp reflect blood purity (Rakta Dhatu) and liver clearance, consultations evaluate dermal barrier integrity, dietary triggers (such as fermented or incompatible foods), and gut-skin balance. Dr. Kadam designs internal blood-cleansing infusions, customized external herbal pastes (Lepas), and individualized hair oils that nourish follicles and quiet autoimmune skin reactivity."
  },
  {
    id: "womens-health",
    category: "Hormonal & Vitality",
    title: "Women's Health",
    subtitle: "PCOS, Menstrual Disorders, Fertility & Menopause",
    badge: "Stri Roga & Prasuti Tantra",
    description: "Dedicated compassionate care through every phase of womanhood. Special focus on reversing PCOS/PCOD cystic ovaries, restoring ovulatory cycles, pre-conception purification (Garbhadhana), and smooth menopause.",
    symptoms: ["Irregular Cycles", "Hirsutism & Facial Hair", "Fertility Obstacles", "Hot Flashes & Night Sweats"],
    keyProtocols: ["Artava Janana Therapy", "Uterine Tonics (Shatavari & Ashoka)", "Cycle Phase Synchronized Diet"],
    consultationDetail: "In a dedicated, confidential setting, Dr. Kadam reviews menstrual history, pelvic ultrasound reports, and metabolic signs of insulin resistance associated with PCOS. The consultation provides a cycle-phase synchronized nutritional regimen, ovulatory-supportive herbs (Artava Janana), and restorative botanicals that normalize hormone rhythms and foster reproductive vitality."
  },
  {
    id: "stress-sleep-lifestyle",
    category: "Mind & Lifestyle",
    title: "Stress, Sleep & Lifestyle Disorders",
    badge: "Manasa Chikitsa",
    description: "Calming the hyperactive autonomic nervous system (Prana Vata & Sadhaka Pitta). Resolving insomnia, burnout, cognitive fatigue, and chronic anxiety common in high-stress work environments.",
    symptoms: ["Unrefreshing Sleep", "Racing Thoughts at Night", "Brain Fog", "Irritability & Tension"],
    keyProtocols: ["Brahmi & Shankhpushpi Formulations", "Dinacharya Clock Alignment", "Pranayama & Sadvritta"],
    consultationDetail: "For stress and insomnia, Dr. Kadam explores your nervous system state (Manovaha Srotas), night-time mental hyperarousal, and digital fatigue. The consultation delivers natural neuro-calming botanicals, specific evening herbal drinks, guided breath regulation techniques (Pranayama), and recommendations for therapeutic head treatments (Shirodhara/Nasya) that quiet racing thoughts."
  },
  {
    id: "mens-health",
    category: "Hormonal & Vitality",
    title: "Men's Health & Wellness",
    badge: "Vajikarana & Vitality",
    description: "Discreet and scientifically guided Ayurvedic solutions for low stamina, stress-induced erectile difficulty, vitality restoration, and age-related prostate health (Mootrakrichra).",
    symptoms: ["Chronic Low Stamina", "Stress-Induced Fatigue", "Urinary Hesitancy", "Decreased Vitality"],
    keyProtocols: ["Classical Vajikarana Formulations", "Nerve Tonics", "Endurance & Agni Amplifiers"],
    consultationDetail: "Consultations for men's wellness are handled with utmost discretion and clinical depth. Dr. Kadam assesses hormonal vigor, stress hormones, pelvic circulation, and prostate health markers. Patients receive classical vitality rasayanas (Shilajit, Gokshura, Safed Musli), cardiovascular circulation boosters, and lifestyle modifications designed to rebuild stamina and long-term resilience."
  },
  {
    id: "chronic-disease",
    category: "Internal Medicine",
    title: "Chronic Disease Management",
    badge: "Integrative Long-Term Care",
    description: "Integrative supportive care for multi-system autoimmune conditions, chronic inflammation, allergic rhinitis, and long-standing disorders requiring multi-factorial rejuvenation.",
    symptoms: ["Systemic Inflammation", "Recurrent Infections", "Poor Healing Capacity", "Low Vital Energy"],
    keyProtocols: ["Rasayana Rejuvenation Therapy", "Toxin (Ama) Digestion", "Immunomodulation"],
    consultationDetail: "For multi-system chronic concerns, Dr. Kadam conducts a comprehensive review of your entire medical chronology, previous hospitalizations, and cumulative medication side effects. He formulates a phased recovery roadmap—beginning with cellular toxin cleansing (Ama Pachana), transitioning into deep tissue rebuilding (Dhatu Poshana), and culminating in long-term immune modulation (Ojas Rasayana)."
  },
  {
    id: "heart-health",
    category: "Internal Medicine",
    title: "Heart Health & Prevention",
    badge: "Hridaya Chikitsa",
    description: "Cardioprotective Ayurvedic regimen supporting endothelial health, lipid balance (Cholesterol & Triglycerides), stress-induced hypertension, and microvascular circulation.",
    symptoms: ["Borderline Hypertension", "High LDL/Triglycerides", "Chest Tightness from Stress", "Palpitations"],
    keyProtocols: ["Arjuna Bark Decotions", "Lipid Metabolizing Herbs", "Vascular Elasticity Protocols"],
    consultationDetail: "Heart wellness consultations evaluate lipid profiles, resting arterial tone, and mental stress correlations. Dr. Kadam prescribes standardized cardioprotective botanicals (notably Terminalia Arjuna and Pushkarmool), tailored low-sodium mineral-rich dietary guidelines, and vascular relaxation techniques that support arterial elasticity alongside conventional medical management."
  }
];

export const CONSULTATION_STEPS = [
  {
    step: "01",
    title: "In-Depth Consultation & Nadi Assessment",
    time: "45 Minutes",
    description: "Dr. Ruturaj Kadam conducts an unhurried clinical history review, pulse assessment (Nadi Pariksha), tongue & eye observation, and analysis of current laboratory reports."
  },
  {
    step: "02",
    title: "Dosha & Metabolic Profiling",
    time: "Comprehensive",
    description: "Determining your baseline constitution (Prakriti), current imbalance state (Vikriti), digestive metabolic fire strength (Agni), and accumulated cellular toxins (Ama)."
  },
  {
    step: "03",
    title: "Tailored Chikitsa & Medicine Dispensing",
    time: "Personalized",
    description: "Prescription of standardized, pure herbal formulations, classical churnas, gut-healing infusions, or external therapy recommendations specifically balanced for you."
  },
  {
    step: "04",
    title: "Ahara-Vihara (Diet & Lifestyle Blueprint)",
    time: "Ongoing",
    description: "A practical food chart aligned with your work schedule, circadian rhythms, circadian sleep timing, and scheduled follow-up milestones to track measurable healing."
  }
];

export const FAQ_LIST = [
  {
    question: "What should I expect during my first 45-minute consultation?",
    answer: "Your initial appointment with Dr. Ruturaj Kadam is an unhurried, comprehensive clinical session. It begins with traditional Nadi Pariksha (eight-fold pulse assessment), tongue and physical observation, and an in-depth review of your medical records and laboratory tests. Dr. Kadam explains your bio-energetic constitution (Prakriti), current doshic imbalances (Vikriti), and crafts a personalized recovery blueprint encompassing botanical remedies, dietary adjustments, and lifestyle modifications."
  },
  {
    question: "Is a personalized diet chart (Ahara-Vihara) provided?",
    answer: "Yes, absolutely. In authentic Ayurveda, food is medicine. Rather than giving you an impractical, generic calorie diet, Dr. Kadam provides a customized Ahara (nutrition) blueprint aligned with your digestive strength (Agni), your work schedule, and Pune's seasonal weather. The plan specifies healing spices, optimal meal hours, foods to favor, and specific food combinations to avoid."
  },
  {
    question: "Are Panchakarma and external therapies available at the clinic?",
    answer: "Yes. AyurSankalpa Clinic offers specialized external therapies and classical preparatory treatments tailored to your condition. These include Janu Basti (for knee pain & osteoarthritis), Kati Basti (for lumbar and sciatica relief), Greeva Basti (cervical spine care), Shirodhara (for insomnia, anxiety & neurological calm), Nasya, and medicated herbal steam. Full systemic Panchakarma detox cycles are scheduled after assessing patient suitability."
  },
  {
    question: "How long do Ayurvedic treatment plans typically run?",
    answer: "The duration depends on whether the condition is acute or deeply rooted. Acute digestive disturbances or minor pains often show noticeable relief within 7 to 14 days. Chronic metabolic or hormonal conditions—such as Type 2 diabetes, Hashimoto's thyroiditis, PCOS, or long-standing joint arthritis—typically involve a phased 8 to 12-week protocol to address root causes, followed by gentle maintenance tapering."
  },
  {
    question: "Do I need to stop my ongoing allopathic medications?",
    answer: "No. Dr. Ruturaj Kadam practices evidence-informed, integrative Ayurveda. He reviews your current medications and works safely alongside them. As your body heals and biomarkers improve, any medicine adjustments are done systematically in consultation with your prescribing physician."
  },
  {
    question: "Where is the clinic located, and is parking accessible?",
    answer: "AyurSankalpa Clinic is conveniently situated on the 1st Floor of Saket Apartment, Seasons Road, in Shambhu Vihar Society, Aundh, Pune (landmark: next to Takalkar Classes). The building features full elevator access for elderly and mobility-impaired patients, with designated two-wheeler parking and street parking available along Seasons Road."
  }
];
