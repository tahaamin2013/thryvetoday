"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Users, BookOpen, Lightbulb, Heart } from "lucide-react"

const FeatureCard = ({ title, description, icon: Icon, stat, statDescription }:any) => (
  <motion.div
    className="p-6 rounded-xl bg-white dark:bg-[#09090B] shadow-lg transition-all hover:shadow-xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center justify-between mb-4">
      <Icon className="text-[#2DB188] w-8 h-8" />
      <ArrowUpRight className="text-gray-400 w-5 h-5" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="border-t pt-4">
      <span className="text-3xl font-bold text-[#2DB188]">{stat}</span>
      <p className="text-sm text-gray-500 dark:text-gray-400">{statDescription}</p>
    </div>
  </motion.div>
)

export default function FeaturesSection() {
  const features = [
    {
      title: "Personalized Learning",
      description: "One-on-one training with love and compassion.",
      icon: Users,
      stat: "100%",
      statDescription: "of tenured faculty hold highest degrees",
    },
    {
      title: "Expert Educators",
      description: "Learn from experienced and respected medical professionals.",
      icon: BookOpen,
      stat: "95%",
      statDescription: "of faculty with highest field degrees",
    },
    {
      title: "Diverse Offerings",
      description: "Training tailored to various medical disciplines and skill levels.",
      icon: Lightbulb,
      stat: "80,000+",
      statDescription: "alumni in our connected network",
    },
    {
      title: "Community Impact",
      description: "Founded by nurses who prioritize helping the community.",
      icon: Heart,
      stat: "1000+",
      statDescription: "community programs supported",
    },
  ]

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose <span className="font-thryez text-[#2DB188]">Thryve</span>?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Experience the difference with our innovative approach to medical education.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

