// data/courses.ts
import { Course } from "../../course";

export const courses: Course[] = [
  {
    title: "NURSE AIDE TRAINING PROGRAM",
    price: 2500,
    duration: "3.5 weeks",
    classroomHours: 90,
    labHours: 24,
    clinicalHours: 'Clinical Rotation: 24 Hours',
    description: "Our state-approved Nurse Aide Training Program stands out with its unique focus on equipping students with the essential skills and knowledge necessary to provide quality care in long-term care facilities, hospitals, and home healthcare settings. This comprehensive course not only prepares students for the state competency exam but also opens doors to a rewarding career as a Certified Nursing Assistant (CNA), with opportunities for personal and professional growth.",
    highlights: [
      "Comprehensive Curriculum – Covers essential nursing skills, infection control, resident rights, communication, safety, and hands-on clinical training",
      "Expert Instructors – Learn from expert Healthcare Professionals committed to your success throughout the program",
      "Hands-On Training – Gain real-world experience through lab practice and clinical rotations",
      "Flexible Scheduling – Convenient class times to accommodate your busy lifestyle",
      "Exam Preparation – Thorough preparation for the State CNA Certification Exam"
    ],
    targetAudience: [
      "Individuals seeking a rewarding career in healthcare",
      "Those looking to enter nursing or other medical fields",
      "Caregivers wanting to enhance their skills"
    ]
  },
  {
    title: "PHLEBOTOMY CLASS",
    price: 1300,
    duration: "3.5 weeks",
    classroomHours: 50,
    labHours: 30,
    clinicalHours: "In-person clinical: 30 hours",
    description: "Our Phlebotomy Training Program is designed to provide students with a hands-on learning experience, focusing on the skills and knowledge required to excel in the healthcare field. This course prepares you for national certification and employment in hospitals, labs, blood donation centers, and outpatient facilities.",
    highlights: [
      "Comprehensive Hands-On Training – Learn venipuncture techniques, proper specimen collection, safety protocols, and specific lab procedures",
      "Flexible Scheduling – Day and night classes are available to fit your schedule",
      "Expert Instructors – Learn from experienced healthcare professionals",
      "Certification Preparation – Get fully prepared for national certification exams",
      "Affordable Tuition"
    ],
    targetAudience: [
      "Individual seeking a career in healthcare",
      "Medical professional looking to expand your skills"
    ]
  },
  {
    title: "ACLS ADVANCE LIFE SUPPORT",
    price: 150,
    duration: "4 hrs",
    description: "Our ACLS Certification Course is not just a theoretical study but a practical application of advanced resuscitation skills for healthcare professionals who manage cardiovascular emergencies. This American Heart Association (AHA) compliant course covers essential lifesaving techniques, including advanced airway management, pharmacology, and team dynamics in emergency scenarios.",
    highlights: [
      "Hands-On Training – Learn high-quality CPR, airway management, ECG interpretation, and emergency medication administration",
      "Experienced Instructors – Taught by certified professionals with real-world clinical experience",
      "Interactive Simulations – Practice life-saving skills in a hands-on, scenario-based setting",
      "AHA-Compliant Certification – Receive your official ACLS Provider Card upon successful completion",
      "Convenient Scheduling – Flexible class times"
    ],
    targetAudience: [
      "Nurses",
      "Paramedics",
      "Physicians",
      "Other healthcare providers",
      "Medical Professionals who respond to cardiovascular emergencies"
    ]
  },
  {
    title: "BASIC LIFE SUPPORT (BLS)",
    price: 65,
    duration: "4 hrs",
    description: "Our American Heart Association (AHA) BLS Certification Class is designed for healthcare professionals and individuals who need to learn critical life-saving techniques. This course provides hands-on training in CPR, AED use, and emergency response for adults, children, and infants.",
    highlights: [
      "CPR & AED Training – Learn to perform high-quality CPR and adequately use an Automated External Defibrillator (AED)",
      "Hands-On Instruction – Practice life-saving techniques with real-world scenarios",
      "Expert Instructors – Taught by certified professionals with real-life emergency experience",
      "AHA Certification Card – Receive your 2ACLS certification card, valid for 2 years upon completion"
    ],
    targetAudience: [
      "Nurses",
      "Physicians",
      "Medical Students",
      "EMTs",
      "Teachers",
      "Fitness Instructors",
      "Caregivers",
      "Coaches",
      "Childcare Providers",
      "Workplace Safety Personnel"
    ]
  },
  {
    title: "PEDIATRIC LIFE SUPPORT (PALS)",
    price: 165,
    duration: "4 hrs",
    description: "Our Pediatric Advanced Life Support (PALS) Course is designed for healthcare professionals who respond to Pediatric Emergencies, including Nurses, Paramedics, Physicians, and other Medical Personnel. This course follows American Heart Association (AHA) guidelines and provides the skills to recognize and manage pediatric respiratory and cardiovascular emergencies, including effective resuscitation techniques.",
    highlights: [
      "AHA-Certified Instructors – Learn from experienced professionals",
      "Comprehensive Training – Covers pediatric assessment, BLS, respiratory emergencies, shock, arrhythmias, and post-resuscitation care",
      "Hands-On Practice – Gain experience in simulated emergency scenarios",
      "Certification Upon Completion – Receive your PALS Provider Card, valid for two years",
      "Flexible Class Options – Day and evening schedules available"
    ],
    targetAudience: [
      "Nurses",
      "Physicians",
      "Medical Students",
      "Paramedics",
      "Respiratory Therapists"
    ]
  }
];