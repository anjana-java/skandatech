"use client"

import { motion } from "framer-motion"
import { Server, Shield, BarChart, Code, Database, Cloud } from "lucide-react"

const features = [
  {
    icon: Server,
    title: "Infrastructure Management",
    description: "Comprehensive management of your IT infrastructure including servers, networks, and storage systems.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Advanced security solutions to protect your business from evolving cyber threats and vulnerabilities.",
  },
  {
    icon: BarChart,
    title: "Business Intelligence",
    description: "Data analytics and reporting solutions to help you make informed business decisions.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to address your specific business challenges.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Expert management of your databases to ensure optimal performance, security, and availability.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Seamless migration and management of your applications and data in the cloud.",
  },
]

export function ITServicesFeatures() {
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
            Our IT Service <span className="text-orange-500">Offerings</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions to address all your technology needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
