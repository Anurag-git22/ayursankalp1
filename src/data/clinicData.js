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
  phone: "9028536848",
  phoneFormatted: "+91 90285 36848",
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
    keyProtocols: ["Agni Deepana (Metabolic Fire Correction)", "Meda-Dhatu Shodhana", "Tailored Low-Glycemic Dinacharya"]
  },
  {
    id: "gi-disorders",
    category: "Gut & Digestion",
    title: "Gastrointestinal Disorders",
    subtitle: "IBS, Acidity, Constipation",
    badge: "Core Ayurvedic Chikitsa",
    description: "Re-establishing healthy Gut-Brain Axis and digestive fire (Jatharagni). Effective protocols for GERD, chronic hyperacidity (Amlapitta), irritable bowel syndrome (Grahani), and sluggish bowel transit.",
    symptoms: ["Acid Reflux & Heartburn", "Bloating & Gas", "Alternating Bowel Habits", "Indigestion", "Cramping"],
    keyProtocols: ["Pitta Shamana Therapy", "Takra Kalpana (Probiotic Formulations)", "Microbiome Restoration"]
  },
  {
    id: "thyroid-metabolic",
    category: "Metabolic & Endocrine",
    title: "Thyroid & Metabolic Disorders",
    badge: "Hormonal Regulation",
    description: "Targeted Ayurvedic protocols for Hypothyroidism, Hashimoto's, and slow metabolism. We focus on Kantha-gata Dhatu metabolism and clearing Medo-dhatvagni blocks to restore natural hormone synthesis.",
    symptoms: ["Sluggish Metabolism", "Puffy Face & Water Retention", "Dry Skin & Hair Loss", "Cold Intolerance", "Mood Swings"],
    keyProtocols: ["Thyroid Gland Rasayana", "Lymphatic & Medas Clearance", "Herbal Bio-Enhancers"]
  },
  {
    id: "joints-arthritis",
    category: "Musculoskeletal & Pain",
    title: "Joint, Bone & Arthritis Care",
    badge: "Pain & Mobility Rehabilitation",
    description: "Holistic relief and cartilage nourishment for Osteoarthritis (Sandhivata), Rheumatoid Arthritis (Amavata), Cervical/Lumbar Spondylosis, and Uric Acid gout without reliance on long-term NSAIDs.",
    symptoms: ["Morning Stiffness", "Swollen & Tender Joints", "Crackling Sensations (Crepitus)", "Reduced Range of Motion"],
    keyProtocols: ["Amavata Shodhana", "Targeted Janu Basti & Lepa", "Herbal Anti-Inflammatory Rasayanas"]
  },
  {
    id: "weight-management",
    category: "Metabolic & Endocrine",
    title: "Weight Loss & Obesity Management",
    badge: "Sustainable Sthoulya Chikitsa",
    description: "Evidence-grounded Ayurvedic fat metabolism protocol. We address underlying leptin/insulin resistance, sluggish liver metabolism, and emotional eating rather than crash starvation diets.",
    symptoms: ["Stubborn Visceral Fat", "Sluggish Digestion", "Breathlessness on Exertion", "Water Retention"],
    keyProtocols: ["Udwarthanam Herbal Exfoliation Advice", "Lekhaniya Dravyas", "Metabolic Reset Diet"]
  },
  {
    id: "spine-back-pain",
    category: "Musculoskeletal & Pain",
    title: "Spine, Neck & Back Pain",
    badge: "Non-Surgical Spine Care",
    description: "Focused regenerative protocols for Sciatica (Gridhrasi), disc bulges, tech-neck syndrome, and chronic postural strain. Strengthening paravertebral musculature and restoring nerve conduction.",
    symptoms: ["Radiating Leg Pain", "Numbness & Tingling", "Upper Back & Shoulder Spasms", "Stiff Lumbar Spine"],
    keyProtocols: ["Kati Basti Guidance", "Vata Shamana Oils", "Postural Ergonometrics & Yoga Nidra"]
  },
  {
    id: "hormonal-imbalances",
    category: "Hormonal & Vitality",
    title: "Hormonal Imbalances",
    badge: "Endocrine Harmony",
    description: "Balancing the delicate endocrine network naturally. We treat adrenal fatigue, cortisol dysregulation, and cycle irregularities by revitalizing the hypothalamic-pituitary-ovarian/adrenal axis.",
    symptoms: ["Unexplained Anxiety", "Energy Fluctuations", "Acne Outbreaks", "Sleep Disturbances"],
    keyProtocols: ["Adaptogenic Rasayana Therapy", "Shirodhara Guidance", "Ojas Nourishment"]
  },
  {
    id: "skin-hair-scalp",
    category: "Dermatology & Trichology",
    title: "Skin, Hair & Scalp Disorders",
    badge: "Internal Blood Purification",
    description: "Treating skin and scalp disorders from within through Rakta Shodhana (blood purification) and Pitta-Kapha balance. Effective for Psoriasis, Eczema, Alopecia, stubborn Dandruff, and adult Acne.",
    symptoms: ["Scalp Thinning & Hair Fall", "Persistent Flaking", "Eczematous Patches", "Cystic Facial Acne"],
    keyProtocols: ["Raktamokshana Principles", "Micro-Purifying Herbal Kwathas", "Topical Medicated Oils"]
  },
  {
    id: "womens-health",
    category: "Hormonal & Vitality",
    title: "Women's Health",
    subtitle: "PCOS, Menstrual Disorders, Fertility & Menopause",
    badge: "Stri Roga & Prasuti Tantra",
    description: "Dedicated compassionate care through every phase of womanhood. Special focus on reversing PCOS/PCOD cystic ovaries, restoring ovulatory cycles, pre-conception purification (Garbhadhana), and smooth menopause.",
    symptoms: ["Irregular Cycles", "Hirsutism & Facial Hair", "Fertility Obstacles", "Hot Flashes & Night Sweats"],
    keyProtocols: ["Artava Janana Therapy", "Uterine Tonics (Shatavari & Ashoka)", "Cycle Phase Synchronized Diet"]
  },
  {
    id: "stress-sleep-lifestyle",
    category: "Mind & Lifestyle",
    title: "Stress, Sleep & Lifestyle Disorders",
    badge: "Manasa Chikitsa",
    description: "Calming the hyperactive autonomic nervous system (Prana Vata & Sadhaka Pitta). Resolving insomnia, burnout, cognitive fatigue, and chronic anxiety common in high-stress work environments.",
    symptoms: ["Unrefreshing Sleep", "Racing Thoughts at Night", "Brain Fog", "Irritability & Tension"],
    keyProtocols: ["Brahmi & Shankhpushpi Formulations", "Dinacharya Clock Alignment", "Pranayama & Sadvritta"]
  },
  {
    id: "mens-health",
    category: "Hormonal & Vitality",
    title: "Men's Health & Wellness",
    badge: "Vajikarana & Vitality",
    description: "Discreet and scientifically guided Ayurvedic solutions for low stamina, stress-induced erectile difficulty, vitality restoration, and age-related prostate health (Mootrakrichra).",
    symptoms: ["Chronic Low Stamina", "Stress-Induced Fatigue", "Urinary Hesitancy", "Decreased Vitality"],
    keyProtocols: ["Classical Vajikarana Formulations", "Nerve Tonics", "Endurance & Agni Amplifiers"]
  },
  {
    id: "chronic-disease",
    category: "Internal Medicine",
    title: "Chronic Disease Management",
    badge: "Integrative Long-Term Care",
    description: "Integrative supportive care for multi-system autoimmune conditions, chronic inflammation, allergic rhinitis, and long-standing disorders requiring multi-factorial rejuvenation.",
    symptoms: ["Systemic Inflammation", "Recurrent Infections", "Poor Healing Capacity", "Low Vital Energy"],
    keyProtocols: ["Rasayana Rejuvenation Therapy", "Toxin (Ama) Digestion", "Immunomodulation"]
  },
  {
    id: "heart-health",
    category: "Internal Medicine",
    title: "Heart Health & Prevention",
    badge: "Hridaya Chikitsa",
    description: "Cardioprotective Ayurvedic regimen supporting endothelial health, lipid balance (Cholesterol & Triglycerides), stress-induced hypertension, and microvascular circulation.",
    symptoms: ["Borderline Hypertension", "High LDL/Triglycerides", "Chest Tightness from Stress", "Palpitations"],
    keyProtocols: ["Arjuna Bark Decotions", "Lipid Metabolizing Herbs", "Vascular Elasticity Protocols"]
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
    question: "Do I need to stop my ongoing allopathic medications?",
    answer: "No. Dr. Ruturaj Kadam practices evidence-informed, integrative Ayurveda. He reviews your current medications and works safely alongside them. As your body heals and biomarkers improve, any medicine adjustments are done systematically in consultation with your prescribing physician."
  },
  {
    question: "How soon can I expect results from Ayurvedic treatment?",
    answer: "Acute conditions like acidity or mild pain often show relief within days. Chronic metabolic or hormonal conditions (such as diabetes, thyroid, arthritis, or PCOS) typically demonstrate noticeable clinical and laboratory improvements within 4 to 8 weeks as root-cause imbalances are corrected."
  },
  {
    question: "Are in-clinic consultations available at Aundh, Pune?",
    answer: "Yes, AyurSankalpa Clinic is conveniently located at Saket Apartment on Seasons Road in Aundh, Pune (next to Takalkar Classes). We also provide video consultations for outstation patients."
  },
  {
    question: "What should I bring to my first appointment?",
    answer: "Please bring your previous medical records, blood reports, prescription history, and any recent investigation scans. Being prepared allows Dr. Kadam to assess your health holistically."
  }
];
