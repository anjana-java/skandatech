"use client"

import { motion } from "framer-motion"
import { Smartphone, Globe, Database, Code, Layers, Cpu } from "lucide-react"

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications for iOS and Android with intuitive user experiences.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Responsive, scalable web applications with modern frameworks and progressive enhancement.",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description: "Robust enterprise applications that streamline operations and integrate with existing systems.",
  },
  {
    icon: Code,
    title: "API Development",
    description: "Secure, well-documented APIs that enable seamless integration between systems and services.",
  },
  {
    icon: Layers,
    title: "Legacy System Modernization",
    description: "Transform outdated systems into modern, maintainable, and scalable applications.",
  },
  {
    icon: Cpu,
    title: "IoT Solutions",
    description: "Connected device applications that leverage IoT technologies for data collection and automation.",
  },
]

export function AppDevServices() {
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
            Our Development <span className="text-orange-500">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored software solutions to address your specific business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
