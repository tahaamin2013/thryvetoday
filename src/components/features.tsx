"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, Layout, Heart } from "lucide-react"

const features = [
  {
    title: "Personalized Learning",
    description: "One-on-one training with love and compassion.",
    icon: GraduationCap,
    delay: 0.2,
  },
  {
    title: "Expert Educators",
    description: "Learn from experienced and respected medical professionals.",
    icon: Users,
    delay: 0.4,
  },
  {
    title: "Diverse Offerings",
    description: "Training tailored to various medical disciplines and skill levels.",
    icon: Layout,
    delay: 0.6,
  },
  {
    title: "Community Impact",
    description: "Founded by nurses who prioritize helping the community.",
    icon: Heart,
    delay: 0.8,
  },
]

export default function Features() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Heading */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Why Choose <span className="font-thryez text-[#2DB188]">Thryve</span>?
        </h2>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-[#2DB188]/40 via-[#2DB188] to-[#2DB188]/40 mx-auto rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: feature.delay, duration: 0.5 }}
            className="group relative"
          >
            <div className="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#2DB188]/0 to-[#2DB188]/0 group-hover:from-[#2DB188]/5 group-hover:to-transparent transition-all duration-300" />

              {/* Icon */}
              <motion.div
                className="mb-4 inline-block p-3 rounded-lg bg-[#2DB188]/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-6 h-6 text-[#2DB188]" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-[#2DB188]">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

