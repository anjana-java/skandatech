"use client"

import { motion } from "framer-motion"
import { Server, Shield } from "lucide-react"

export function SimpleITServicesPage() {
  const itVisionServices = [
    {
      icon: Server,
      title: "IT Infrastructure",
      features: [
        "Operating Model",
        "Internal Business Environment",
        "People, Process & Governance Standards",
        "Industry Best Practices",
        "Programme and Portfolio Management",
        "External Competitive Forces",
        "External Stakeholder Interaction",
        "Trends in Technology",
      ],
    },
  ]

  const itConsultingServices = [
    {
      icon: Shield,
      title: "IT Strategy",
      features: [
        "Assessment of Business and IT organizations",
        "Application stack evaluation",
        "Portfolio of programmes and projects",
        "Resource optimization",
        "Operating models framework",
        "Digital transformation roadmap",
        "Technology adoption strategy",
        "IT governance structure",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">IT Consulting</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 text-justify">
            IT is playing an even increasing role in supporting business to maximize stakeholder value. This is causing
            IT setups within (in-grown) and outside (vendors) to contain costs whilst bringing out new solutions that
            disrupt the way business is done today.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">The 'cost' factor</h2>
          <p className="text-gray-700 mb-6 text-justify">
            IT organizations within and outside are undertaking various initiatives to help businesses improve
            bottom-line. Consolidation of services under optimized no. of vendors, bundled solutions, automation of in
            house and outside part 'interactions' are a few ways in which IT organizations are addressing the issue of
            cost reduction.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Innovation</h2>
          <p className="text-gray-700 mb-6 text-justify">
            Both IT and businesses are looking at newer ways to do business and disrupt the status quo. Businesses are
            looking at realignment of their existing processes while IT is leveraging emerging technologies to find
            newer alternatives of running 'business as usual' activities whilst engaging with business to find
            disruptive ways of delivering a solution.
          </p>

          <p className="text-gray-700 mb-6 text-justify">
            skanda can help in conceptualizing, blueprinting and executing your IT propositions. We help you execute
            your vision while ensuring that you make the most of your current assets, investments and technology
            landscape. We will work with leaders in your organization to build a transformation plan for your IT
            landscape to meet new trends while managing costs and skills required in delivering a high performance
            technology business.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">skanda's IT Consulting Framework</h2>
          <p className="text-gray-700 mb-6 text-justify">
            skanda's IT consulting services focuses on delivering value to business and IT alike. We undertake this by
            defining a target operating model in line with the firm's business and IT vision and seek to arrive at
            improved performance with clearly defined financial benefits. We accomplish this through:
          </p>
        </div>
      </div>

      {/* First IT Vision Grid - Centered */}
      <section className="py-12 bg-gray-50 my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            IT <span className="text-orange-500">Vision</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {itVisionServices.map((service, index) => (
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
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-3">Key Components:</h4>
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

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            We offer the following solutions for IT Consulting
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-gray-700">
                Assessment of Business and IT organizations and their underlying strategies, application stack,
                portfolio of programmes and projects, resources and operating models that govern the framework
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-gray-700">
                Designing target solutions that incorporate industry best practices and our expertise with a view to
                reduce costs and risk whilst improving quality and delivery
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span className="text-gray-700">
                Developing an execution methodology with superior project management culminating in realization of
                agreed benefits
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Second IT Consulting Grid - Centered */}
      <section className="py-12 bg-gray-50 my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            IT Consulting <span className="text-orange-500">Services</span>
          </h2>

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {itConsultingServices.map((service, index) => (
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
    </div>
  )
}
