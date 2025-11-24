"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Code } from "lucide-react"

export function TrainingGrid() {
  const trainingPrograms = [
    {
      icon: BookOpen,
      title: "Banking & Financial Services",

      features: [
        "Retail Banking",
        "Consumer Banking",
        "Private Banking",
        "Commercial Banking",
        "Corporate Banking",
        "Securities & Investments",
        "Risk Management",
        "Transaction Banking",
        "Insurance",
      ],
    },
    {
      icon: Code,
      title: "Information Technology",

      features: [
        "Presales and RFP",
        "Business Analysis",
        "Software Development Life Cycle",
        "Project and Programme Management",
        "Testing Concepts",
        "Quality Management",
        "UML Modeling",
      ],
    },
    {
      icon: Users,
      title: "ITES",

      features: [
        "Process Training",
        "Accounts",
        "Payments",
        "Cash Management",
        "6 Sigma",
        "Cards Processing",
        "Reconciliations",
        "Accounting",
        "6 Sigma",
        "Lean",
        "ITIL",
      ],
    },
  ]

  return (
    <section className="py-12 bg-gray-50 my-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Our Training <span className="text-orange-500">Programs</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trainingPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col h-full"
            >
              <div className="p-6 bg-gray-50 flex items-center">
                <div className="p-3 bg-orange-100 rounded-full mr-4">
                  <program.icon className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              </div>

              <div className="p-6 flex-grow">
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Key Topics:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, i) => (
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
