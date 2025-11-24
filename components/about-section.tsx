"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const stats = [
    { value: "75+", label: "Years Combined Experience" },
    { value: "100+", label: "Successful Projects" },
    { value: "50+", label: "Expert Consultants" },
    { value: "3", label: "Global Offices" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About skanda</h2>
            <p className="text-gray-600 mb-6">
              skanda is a leading IT consulting firm, providing innovative solutions to businesses worldwide. With our
              extensive experience and expertise, we help organizations navigate the complex landscape of digital
              transformation.
            </p>
            <ul className="space-y-4">
              {["ISO 9001:2015 Certified", "Global Presence", "Industry Expertise", "Cutting-edge Technologies"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>{item}</span>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-orange-500 mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
