"use client"

import { motion } from "framer-motion"
import { TrendingUp, Building2, Network, ArrowRight, Users } from "lucide-react"
import { LinkWrapper } from "./link-wrapper"

const services = [
  {
    icon: TrendingUp,
    title: "Management and Business Consulting",
    description:
      "We believe in maintaining strong and deep relationships with our customers. Our partnerships are not skin deep and goes..",
    href: "/offerings/management-and-business-consulting",
  },
  {
    icon: Network,
    title: "IT Consulting",
    description:
      "IT is playing an even increasing role in supporting business to maximize stakeholder value. This is causing IT setups within (in-grown) and outside (vendors) to contain..",
    href: "/offerings/it-services",
  },
  {
    icon: Building2,
    title: "Bespoke Application Development",
    description:
      "skanda's Application development and support services include software development, maintenance, conversion..",
    href: "/offerings/bespoke-application-development",
  },
  {
    icon: Users,
    title: "Training",
    description:
      "Globally, organizations have a challenge in spending resources – time, effort and money in training their employees. This is especially true in times of a slowdown..",
    href: "/offerings/training",
  },
]

export function ServicesSection() {
  return (
    <section id="core-services-section" className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 text-gray-900"
        >
          Our Core <span className="text-orange-500">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col"
            >
              <service.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="mt-auto">
                <LinkWrapper
                  href={service.href}
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </LinkWrapper>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
