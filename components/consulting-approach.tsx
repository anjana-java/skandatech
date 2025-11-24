"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function ConsultingApproach() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description:
        "We begin with a thorough analysis of your organization's current state, challenges, and opportunities through stakeholder interviews, data analysis, and market research.",
    },
    {
      number: "02",
      title: "Strategy Development",
      description:
        "Based on our findings, we develop tailored strategies and recommendations aligned with your business objectives and industry best practices.",
    },
    {
      number: "03",
      title: "Implementation Planning",
      description:
        "We create detailed implementation roadmaps with clear timelines, resource requirements, and key performance indicators.",
    },
    {
      number: "04",
      title: "Execution Support",
      description:
        "Our consultants provide hands-on support during implementation, ensuring successful execution and addressing challenges as they arise.",
    },
  ]

  const outcomes = [
    "Improved operational efficiency",
    "Enhanced strategic decision-making",
    "Increased profitability and growth",
    "Stronger organizational capabilities",
    "Better alignment across departments",
    "Sustainable competitive advantage",
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Our <span className="text-orange-500">Approach</span>
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Expected <span className="text-orange-500">Outcomes</span>
            </motion.h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
