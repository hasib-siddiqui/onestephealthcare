import {
  CalendarDaysIcon,
  ClockIcon,
  HomeIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import { BsWhatsapp } from "react-icons/bs";

export const bloodTestsList = [
  {
    value: " ",
    text: "Select Blood Test",
  },
  { value: "cbc", text: "Complete Blood Count (CBC)" },
  { value: "lipid", text: "Lipid Profile" },
  { value: "liver", text: "Liver Function Test (LFT)" },
  { value: "renal", text: "Renal Function Test (RFT)" },
  { value: "thyroid", text: "Thyroid Function Test (TFT)" },
  { value: "blood-sugar", text: "Blood Sugar" },
  { value: "electrolytes", text: "Electrolytes" },
  { value: "hemoglobin", text: "Hemoglobin A1c" },
  { value: "vitamin-d", text: "Vitamin D" },
  { value: "iron", text: "Iron Studies" },
  { value: "esr", text: "Erythrocyte Sedimentation Rate (ESR)" },
  { value: "crp", text: "C-Reactive Protein (CRP)" },
  { value: "b12", text: "Vitamin B12" },
  { value: "folate", text: "Folate" },
  { value: "u&es", text: "Urea & Electrolytes" },
  { value: "abg", text: "Arterial Blood Gas (ABG)" },
  { value: "blood-culture", text: "Blood Culture" },
  { value: "coagulation", text: "Coagulation Profile (PT/INR)" },
  { value: "blood-group", text: "Blood Grouping" },
  { value: "hiv", text: "HIV Test" },
  { value: "hbsag", text: "Hepatitis B Surface Antigen (HBsAg)" },
  { value: "hcv", text: "Hepatitis C Virus (HCV) Test" },
  { value: "troponin", text: "Troponin" },
  { value: "d-dimer", text: "D-Dimer" },
  { value: "ferritin", text: "Ferritin" },
  { value: "psa", text: "Prostate-Specific Antigen (PSA)" },
  { value: "rheumatoid", text: "Rheumatoid Factor (RF)" },
  { value: "ana", text: "Antinuclear Antibody (ANA)" },
  { value: "hba1c", text: "HbA1c (Glycated Hemoglobin)" },
  { value: "creatinine", text: "Creatinine" },
  { value: "bun", text: "Blood Urea Nitrogen (BUN)" },
  { value: "alt", text: "Alanine Aminotransferase (ALT)" },
  { value: "ast", text: "Aspartate Aminotransferase (AST)" },
  { value: "alkaline-phosphatase", text: "Alkaline Phosphatase (ALP)" },
  { value: "bilirubin", text: "Bilirubin" },
  { value: "ldh", text: "Lactate Dehydrogenase (LDH)" },
  { value: "albumin", text: "Albumin" },
  { value: "g6pd", text: "Glucose-6-Phosphate Dehydrogenase (G6PD)" },
  { value: "tsh", text: "Thyroid-Stimulating Hormone (TSH)" },
  { value: "ft4", text: "Free T4" },
  { value: "ft3", text: "Free T3" },
  { value: "insulin", text: "Insulin" },
  { value: "c-peptide", text: "C-Peptide" },
  { value: "calcium", text: "Calcium" },
  { value: "phosphate", text: "Phosphate" },
  { value: "mg", text: "Magnesium" },
  { value: "serum-protein", text: "Serum Protein Electrophoresis" },
  { value: "hba2", text: "HbA2 (Hemoglobin A2)" },
  { value: "hpf", text: "High Power Field (HPF)" },
  { value: "serum-amyloid", text: "Serum Amyloid A (SAA)" },
  { value: "fibrinogen", text: "Fibrinogen" },
  { value: "myoglobin", text: "Myoglobin" },
];

export const testData = [
  {
    img: "https://www.metropolisindia.com/newdata/images/04_07_2022_04_00_48_18.png",
    testName: "Heart Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/04_07_2022_03_58_51_65.png",
    testName: "Liver Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/04_07_2022_03_57_57_34.png",
    testName: "Kidney Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/04_07_2022_04_03_12_76.png",
    testName: "Thyroid Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_04_21_40_83.png",
    testName: "Bone Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_04_55_11_21.png",
    testName: "Fever Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_04_56_54_28.png",
    testName: "Hepatitis Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_04_58_21_48.png",
    testName: "Hormonal Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_04_59_46_98.png",
    testName: "HyperTension Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_05_01_09_46.png",
    testName: "Obesity Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_05_05_17_45.png",
    testName: "Pregnancy Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_05_06_45_37.png",
    testName: "STD Tests",
  },
  {
    img: "https://www.metropolisindia.com/newdata/images/14_04_2023_05_08_13_78.png",
    testName: "Vitamins Tests",
  },
];
export const popularTestData = [
  {
    id: "test1",
    name: "CBC (Complete Blood Count) Test",
    description:
      "This helps diagnose and monitor diseases or conditions such as anemia, infection, inflammation, or bleeding disorders affecting your blood cells.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-CBC_test.jpg",
  },
  {
    id: "test2",
    name: "Diabetes HbA1c Test",
    description:
      "HbA1c or Glycated Haemoglobin Test is a 3-month snapshot of your average blood sugar levels and is used to diagnose or monitor diabetes.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-Diabetes_HbA1c.jpg",
  },
  {
    id: "test3",
    name: "Thyroid Panel (Total T3, T4, TSH Serum)",
    description:
      "These tests help diagnose conditions such as hypothyroidism or hyperthyroidism.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-thyroid.jpg",
  },
  {
    id: "test4",
    name: "Vitamin D Test (Vitamin D 25 Hydroxy OH)",
    description:
      "The Vitamin D 25 Hydroxy test can tell you are more likely to develop osteoporosis, rickets (soft bones), and various bone disorders.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-vitamind.jpg",
  },
  {
    id: "test5",
    name: "Vitamin B12 Test",
    description:
      "This test helps understand if you are suffering from a Vitamin D deficiency.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-vitaminb12.jpg",
  },
  {
    id: "test6",
    name: "AMH (Anti Mullerian Hormone) Test",
    description:
      "This test assesses a woman's ability to produce eggs that can be fertilized for pregnancy. It also helps measure the success of IVF treatment and diagnosis of PCOS.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-amh-test.jpg",
  },
  {
    id: "test7",
    name: "Hepatitis B Test",
    description:
      "This test helps screen for or diagnose a hepatitis B virus (HBV) infection.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-hepatitis-b-test.jpg",
  },
  {
    id: "test8",
    name: "Liver Function Test",
    description:
      "This test is used to identify liver infections like hepatitis and monitor the progression of other liver-related conditions.",
    img: "https://www.metropolisindia.com/newdata/images/bloodtest-accordion-Liver_Functio_Test.jpg",
  },
  {
    id: "test9",
    name: "Urine Test",
    description:
      "A routine urine examination can provide information about several conditions, such as Hematuria (blood in the urine) or Pyuria (presence of pus cells).",
    img: "https://img.freepik.com/free-photo/lab-doctor-performing-medical-exam-urine_23-2149371988.jpg?w=740&t=st=1724943036~exp=1724943636~hmac=262adb2d8109a889154adae435d7191957415d2a62d91fd790c890f237f35b5a",
  },
  {
    id: "test10",
    name: "Many More Blood Tests",
    description:
      "We offer 4000+ tests and profiles covering bone health, blood pressure, cholesterol, triglycerides, glucose, food intolerance, and much more.",
  },
];
export const heroData = {
  title: {
    main: "Convenience of testing.",
    sub: "Assurance of accuracy.",
  },
  pricing: {
    text: "Blood tests starting at",
    price: "₹ 200",
    subtext: "* only/-",
  },
  features: [
    { icon: "check", text: "Expert Home Sample Collection*" },
    { icon: "whatsapp", text: "Reports on WhatsApp in 24 Hours*" },
  ],

  checkboxes: [
    "I agree to Metropolis T&C and Privacy Policy",
    "Enable WhatsApp communication",
  ],
  serviceHighlights: [
    { icon: HomeIcon, text: "Expert home sample collection*" },
    { icon: ClockIcon, text: "Bookings slots from as early as 6:30 AM" },
    {
      icon: BsWhatsapp,
      text: "Accurate Reports on WhatsApp and Email in 24 hours*",
    },
    {
      icon: CalendarDaysIcon,
      text: "Service available even on Sundays",
    },
    {
      icon: ShieldCheckIcon,
      text: "Trusted choice of leading Doctors & Hospitals",
    },
  ],
};
