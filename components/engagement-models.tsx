"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, FileText, ArrowRight } from "lucide-react"

export function EngagementModels() {
  const [selectedModel, setSelectedModel] = useState<number | null>(null)
  const [hoveredContent, setHoveredContent] = useState(false)
  const [hoveredHeading, setHoveredHeading] = useState<number | null>(null)
  const [isSlideOpen, setIsSlideOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleHeadingHover = (idx: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    setHoveredHeading(idx)
    setIsSlideOpen(true)
  }

  const handleHeadingLeave = () => {
    // Set a delay before closing the slide
    timeoutRef.current = setTimeout(() => {
      setIsSlideOpen(false)
      setHoveredHeading(null)
    }, 300) // 300ms delay
  }

  const handleSlideHover = () => {
    // Clear the timeout if user hovers over the slide content
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleSlideLeave = () => {
    // Close the slide when leaving the slide area
    setIsSlideOpen(false)
    setHoveredHeading(null)
  }

  const serviceModels = [
    {
      id: 1,
      icon: Clock,
      title: "Why skanda",
      description:
        "At skanda, we believe a theory will remain theory until there is a specific actionable. Furthermore, the actionable is required to be converted into an outcome.",
      paragraphs: [
        "Extensive experience: Whichever part of the globe you are in, our experts in the banking and financial services domain and IT help deliver value to your businesses. We leverage over 1000 hours of collective experience in providing business and information technology experience to clients across geographies such as Asia Pacific, Middle East and the Americas.",
        "skanda is more than just an IT services provider. We engage with business and technology teams to provide right fit solutions for you. We offer a true transformation experience using our expertise, skill sets and tools which have been honed through years of experience in the banking, financial services and IT domain.",
        "Our engagement propositions offer businesses the flexibility to consider various options. Be it pure play staff augmentation or complex build operate and transfer models, skanda's commercial proposals will support your business requirements and offer you choice between capital and revenue spend with reduced cost structures.",
      ],
      sections: [
        {
          heading: "Information Technology and Enabled Services",
          points: [
            "Expertise across multiple domains and business verticals/horizons",
            "Operational process and transaction expertise",
            "Global perspectives and best-in-class learning",
            "Sales – Top line & bottom line focus",
            "Leadership skills",
          ],
        },
        {
          heading: "Information Technology",
          points: [
            "Sound knowledge of Software Development Life Cycle practices & processes",
            "Multi-product exposure across business domains",
            "Multi-geography development & implementation experience",
            "Consulting mindset (Product, Process, Domain)",
            "Stakeholder and Client management",
            "Staff augmentation – reduced time to engage",
            "Project and Quality Management",
            "Onshore-offshore methodology – reduced cost",
          ],
        },
        {
          heading: "Business Domain (BFSI, ERP, Mfg.)",
          points: [
            "Expertise across multiple domains and business verticals/horizons",
            "Operational process and transaction expertise",
            "Global perspectives and best-in-class learning",
            "Sales – Top line & bottom line focus",
            "Leadership skills",
          ],
        },
      ],
    },
    {
      id: 2,
      icon: FileText,
      title: "Engagement Models",
      description:
        "Engagement models offer tailored approaches to project execution and collaboration. The right model aligns expectations and drives project scope success.",
      headings: [
        {
          title: "Outsourcing Model",
          points: [
            "Onshore model – All work at client's site",
            "Offshore model – All work at skanda's India site",
            "skanda engages with client for scope definition and requirements at the client site and development work is carried out at skanda's India site",
            "Cost-effective delivery",
            "Competitive blended rates are applied on the onshore-offshore model",
          ],
        },
        {
          title: "Build-Operate-Transfer Model",
          points: [
            "skanda engages with client for need analysis",
            "skanda engages with client for need analysis, and strategy understanding",
            "skanda works with client for scope definition and requirements",
            "skanda carries out offshore product build at India site",
            "skanda implements product at client site and undertakes to operate the product for an agreed period",
            "On meeting SLA, product control transferred to client",
          ],
        },
        {
          title: "Collaborative Model",
          points: [
            "skanda also partners with companies with best in class products as resellers/distributors",
            "We work on product development, implementation and post implementation support models for our partner organizations",
          ],
        },
        {
          title: "Testing",
          points: [
            "Clients may have constraints in engaging full time employees",
            "skanda provides skilled resources for short term or long term engagements on contractual or permanent terms with product, technology , business or consulting expertise",
            "Pricing on time and material basis or fixed price basis could be considered",
          ],
        },
      ],
      paragraphs: [
        "Our experienced team will work with you to determine the most appropriate engagement model based on your specific business objectives, timeline, budget, and technical requirements.",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Engagement</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 text-justify">
            At skanda, we believe a theory will remain theory until there is a specific actionable. Furthermore, the
            actionable is required to be converted into an outcome. We do not stop at talking strategy; we
            conceptualize, test and execute the very strategies that we create.
          </p>

          <p className="text-gray-700 mb-6 text-justify">
            Be it consulting, technology solutions or training, our associates have honed their strategic, operational
            skills and knowledge around the banking and financial services industry in business and information
            technology. They are thus able to effectively address client requirements and deliver required outcomes.
          </p>

          <p className="text-gray-700 mb-6 text-justify">
            skanda has setup defined methodologies that seek to improve the business performance of financial
            organizations, information technology and business process service providers. We seek solutions for clients
            to help them in areas such as managing risk, improving efficiency and productivity, reducing cost,
            accelerating revenue growth, improving bottom line among others. Additionally, our delivery models help us
            to plan, estimate and execute our solutions within time, quality and cost parameters through a process of
            rigorous estimation methodologies and a robust project management strategy.
          </p>

          {/* Service Models Grid - Only 2 boxes */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-center mb-8 text-gray-900"
              >
                Our Engagement <span className="text-orange-500">Models</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {serviceModels.map((model) => (
                  <motion.div
                    key={model.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 flex flex-col h-full cursor-pointer ${
                      selectedModel === model.id ? "border-2 border-orange-500" : ""
                    }`}
                    onClick={() => setSelectedModel(selectedModel === model.id ? null : model.id)}
                  >
                    <model.icon className="h-16 w-16 text-orange-500 mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-gray-900">{model.title}</h3>
                    <p className="text-gray-600 text-justify text-lg">{model.description}</p>
                    <div className="mt-6 flex items-center text-orange-500 font-medium text-lg">
                      {selectedModel === model.id ? "Hide details" : "Expand"}
                      <ArrowRight
                        className={`ml-2 h-6 w-6 transition-transform duration-300 ${
                          selectedModel === model.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Expandable content below the grid with improved hover effect */}
              <AnimatePresence>
                {selectedModel !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-12 max-w-5xl mx-auto"
                  >
                    {/* Content for Model 1 */}
                    {selectedModel === 1 && (
                      <div
                        className="bg-orange-50 rounded-lg border-l-4 border-orange-500 overflow-hidden relative min-h-[500px]"
                        onMouseEnter={() => setHoveredContent(true)}
                        onMouseLeave={() => setHoveredContent(false)}
                      >
                        {/* First content - General description */}
                        <motion.div
                          className="p-10"
                          initial={{ x: 0, opacity: 1 }}
                          animate={{
                            x: hoveredContent ? "-100%" : 0,
                            opacity: hoveredContent ? 0 : 1,
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <h3 className="text-3xl font-semibold mb-8 text-gray-900">
                            {serviceModels[0].title} - Overview
                          </h3>
                          <div className="text-gray-700 text-xl leading-relaxed space-y-6">
                            {serviceModels[0].paragraphs.map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>
                        </motion.div>

                        {/* Second content - Detailed points with headings and subpoints */}
                        <motion.div
                          className="absolute inset-0 p-10 overflow-auto"
                          initial={{ x: "100%", opacity: 0 }}
                          animate={{
                            x: hoveredContent ? 0 : "100%",
                            opacity: hoveredContent ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <h3 className="text-3xl font-semibold mb-8 text-orange-600">
                            {serviceModels[0].title} - Key Areas
                          </h3>
                          <div className="space-y-8">
                            {serviceModels[0].sections.map((section, index) => (
                              <div key={index} className="space-y-3">
                                <h4 className="text-2xl font-medium text-gray-900">{section.heading}</h4>
                                <ul className="space-y-2 pl-6">
                                  {section.points.map((point, subIdx) => (
                                    <li key={subIdx} className="flex items-start">
                                      <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                                      <span className="text-gray-700 text-lg">{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {/* Content for Model 2 with improved hoverable headings */}
                    {selectedModel === 2 && (
                      <div className="bg-orange-50 rounded-lg border-l-4 border-orange-500 overflow-hidden relative min-h-[500px]">
                        <div className="p-10">
                          <h3 className="text-3xl font-semibold mb-8 text-gray-900">
                            {serviceModels[1].title} - Overview
                          </h3>

                          {/* General paragraphs */}
                          <div className="text-gray-700 text-xl leading-relaxed space-y-6 mb-10">
                            {serviceModels[1].paragraphs.map((paragraph, idx) => (
                              <p key={idx}>{paragraph}</p>
                            ))}
                          </div>

                          {/* Improved hoverable headings */}
                          <div className="space-y-6">
                            <h4 className="text-2xl font-medium text-gray-900 mb-6">Select a model to learn more:</h4>
                            <div className="flex flex-col space-y-4">
                              {serviceModels[1].headings.map((heading, idx) => (
                                <div
                                  key={idx}
                                  className="cursor-pointer transition-all duration-300 group p-3 rounded-lg hover:bg-orange-100"
                                  onMouseEnter={() => handleHeadingHover(idx)}
                                  onMouseLeave={handleHeadingLeave}
                                >
                                  <h5 className="text-xl font-bold text-orange-500 group-hover:text-orange-600 transition-all duration-300 group-hover:scale-105 transform origin-left flex items-center">
                                    {heading.title}
                                    <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  </h5>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Improved content that appears when a heading is hovered */}
                        <AnimatePresence>
                          {hoveredHeading !== null && isSlideOpen && (
                            <motion.div
                              initial={{ opacity: 0, x: "100%" }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: "100%" }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 p-10 overflow-auto"
                              onMouseEnter={handleSlideHover}
                              onMouseLeave={handleSlideLeave}
                            >
                              <div className="relative z-10">
                                <h3 className="text-3xl font-semibold text-orange-600 mb-6">
                                  {serviceModels[1].headings[hoveredHeading].title}
                                </h3>

                                <h4 className="text-2xl font-medium text-gray-900 mb-4">Key Benefits:</h4>
                                <ul className="space-y-3">
                                  {serviceModels[1].headings[hoveredHeading].points.map((point, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                                      className="flex items-start"
                                    >
                                      <span className="text-orange-500 mr-3 mt-1 text-xl">•</span>
                                      <span className="text-gray-700 text-lg">{point}</span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
