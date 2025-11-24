"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function TrainingApproach() {
  const methods = [
    {
      number: "01",
      title: "Needs Assessment",
      description:
        "We begin by understanding your organization's specific training needs, skill gaps, and learning objectives.",
    },
    {
      number: "02",
      title: "Customized Curriculum",
      description:
        "Our experts develop tailored training programs that address your unique requirements and organizational context.",
    },
    {
      number: "03",
      title: "Interactive Delivery",
      description:
        "Training is delivered through a blend of instructor-led sessions, hands-on workshops, and practical exercises.",
    },
    {
      number: "04",
      title: "Evaluation & Follow-up",
      description:
        "We measure training effectiveness and provide ongoing support to ensure knowledge retention and application.",
    },
  ]

  const benefits = [
    "Enhanced employee skills and productivity",
    "Improved team performance and collaboration",
    "Reduced skill gaps and knowledge deficits",
    "Increased employee engagement and retention",
    "Better adaptation to technological changes",
    "Stronger competitive advantage",
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
              Training <span className="text-orange-500">Methodology</span>
            </motion.h2>

            <div className="space-y-8">
              {methods.map((method, index) => (
                <motion.div
                  key={method.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white font-bold">
                      {method.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                    <p className="text-gray-600">{method.description}</p>
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
              Training <span className="text-orange-500">Benefits</span>
            </motion.h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
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
