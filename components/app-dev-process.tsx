"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function AppDevProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      description:
        "We work closely with you to understand your business objectives, user needs, and technical requirements to define the scope of your application.",
    },
    {
      number: "02",
      title: "Design & Architecture",
      description:
        "Our team creates detailed designs and technical architecture that serve as the blueprint for your application development.",
    },
    {
      number: "03",
      title: "Development & Testing",
      description:
        "We follow agile development practices with regular iterations, continuous integration, and comprehensive testing to ensure quality.",
    },
    {
      number: "04",
      title: "Deployment & Support",
      description:
        "After successful deployment, we provide ongoing maintenance, support, and enhancements to keep your application running optimally.",
    },
  ]

  const technologies = [
    "Modern frontend frameworks (React, Angular, Vue)",
    "Backend technologies (Node.js, .NET, Java)",
    "Mobile development (React Native, Flutter, Swift)",
    "Cloud platforms (AWS, Azure, Google Cloud)",
    "Database solutions (SQL, NoSQL, Graph)",
    "DevOps and CI/CD pipelines",
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
              Development <span className="text-orange-500">Process</span>
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
              Technology <span className="text-orange-500">Stack</span>
            </motion.h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="space-y-4">
                {technologies.map((tech, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tech}</span>
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
