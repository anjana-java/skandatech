"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, BarChart3 } from "lucide-react"

export function ConsultingGrid() {
  const consultingServices = [
    {
      icon: TrendingUp,
      title: "Business Consulting",
      
      features: [
        "Customer focused strategy",
        "Integrated enterprise management",
        "Growth strategy",
        "Pricing Strategies",
        "Cost and quality strategy",
        "Securities & Investments",
        "Sales and marketing strategy",
        "Communication strategy",
      ],
    },
    {
      icon: Users,
      title: "Management Consulting",
    
      features: [
        "Leadership for the enterprise",
        "Management and culture",
        "Gender diversity",
        "Responsibility, accountability & reward",
        "Change management",
        "Talent management",
        "Training and content management",
      ],
    },
    {
      icon: BarChart3,
      title: "Operations",
    
      features: [
        "Back office process optimization",
        "Process re-engineering",
        "Efficiency Management",
        "Regulatory compliance",
        "Management Information systems",
        "Governance and control set-up",
        "Risk Management",
      ],
    },
  ]

  return (
    <section className="py-12 bg-gray-50 my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Our Consulting <span className="text-orange-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultingServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
            >
              <div className="p-6 bg-gray-50 flex items-center">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <service.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Areas:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-orange-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
