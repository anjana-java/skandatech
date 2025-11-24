"use client"

import { motion } from "framer-motion"
import { BookOpen, Code, Users, LineChart, Shield, Briefcase } from "lucide-react"

const programs = [
  {
    icon: BookOpen,
    title: "Technical Training",
    description: "Hands-on training in programming languages, frameworks, and technical tools for IT professionals.",
  },
  
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Methodologies, tools, and techniques for effective project planning and execution.",
  },
]

export function TrainingPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Our Training <span className="text-orange-500">Programs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Specialized training solutions to enhance your team's capabilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <program.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
