"use client"
import { motion } from "framer-motion"
import { Clock, DollarSign, Award, CheckCheck } from "lucide-react"

type CourseCard = {
  title: string
  price: string
  duration: string
  description: string
  highlights: string[]
}

const CourseCard = ({ title, price, duration, description, highlights }: CourseCard) => (
  <motion.div
    className="bg-white dark:bg-black h-full border rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
    whileHover={{ y: -5 }}
  >
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
        <DollarSign className="w-5 h-5 mr-2 text-[#2DB188]" />
        <span className="font-semibold">{price}</span>
        <Clock className="w-5 h-5 ml-4 mr-2 text-[#2DB188]" />
        <span>{duration}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    </div>
    <div className="bg-transparent border-t p-6">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
        <Award className="w-5 h-5 mr-2 text-[#2DB188]" />
        Course Highlights
      </h4>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#2DB188] mr-2">•</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
)

export default function Courses() {
  const courses = [
    {
      title: "Nurse Aide Training Program",
      price: "$2,500",
      duration: "3.5 weeks",
      description: "Comprehensive training for quality care in various healthcare settings.",
      highlights: [
        "90 Classroom Hours",
        "24 Lab Hours",
        "24 Hours Clinical Rotation",
        "State Exam Preparation",
        "Hands-On Training",
      ],
    },
    {
      title: "Phlebotomy Class",
      price: "$1,300",
      duration: "3.5 weeks",
      description: "Hands-on learning for essential healthcare skills in phlebotomy.",
      highlights: [
        "50 Classroom Hours",
        "30 Lab Hours",
        "30 Hours In-Person Clinical",
        "National Certification Prep",
        "Flexible Scheduling",
      ],
    },
    {
      title: "ACLS Advanced Life Support",
      price: "$150",
      duration: "4 hours",
      description: "AHA-compliant course for managing cardiovascular emergencies.",
      highlights: [
        "Hands-On Training",
        "Interactive Simulations",
        "AHA Certification",
        "Expert Instructors",
        "Convenient Scheduling",
      ],
    },
    {
      title: "Basic Life Support (BLS)",
      price: "$65",
      duration: "4 hours",
      description: "Essential life-saving techniques for healthcare professionals.",
      highlights: [
        "CPR & AED Training",
        "Hands-On Instruction",
        "AHA Certification Card",
        "Expert Instructors",
        "Suitable for Various Professionals",
      ],
    },
    {
      title: "Pediatric Life Support (PALS)",
      price: "$165",
      duration: "4 hours",
      description: "AHA-guided course for pediatric emergency management.",
      highlights: [
        "Comprehensive Pediatric Training",
        "Hands-On Practice",
        "AHA Certification",
        "Flexible Class Options",
        "Experienced Instructors",
      ],
    },
  ]

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50 dark:bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="text-[#2DB188]">Thryve</span> Courses
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Elevate your healthcare career with our innovative and comprehensive medical education programs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CourseCard {...course} />
            
          </motion.div>
        ))}
        <div>
                <p className="text-2xl font-bold  text-black dark:text-white">
                Who Should Enroll?
                </p>
                <p className="text-sm  border-b-2 border-black pb-6 dark:border-white space-y-1items-center"><p className="flex flex-row gap-2"><CheckCheck size={20} /> Individuals seeking a rewarding career in healthcare</p>
<p className="flex flex-row gap-2"><CheckCheck size={20} /> Those looking to enter nursing or other medical fields</p>
<p className="flex flex-row gap-2"><CheckCheck size={20} /> Caregivers wanting to enhance their skills. 
</p>
</p>
            </div>
      </div>
    </section>
  )
}

