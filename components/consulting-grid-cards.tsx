"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

const gridItems = [
  {
    id: 1,
    title: "Management Consulting",
    description: "Management consulting delivers strategic clarity and execution support across people, processes.",
    image: getAssetPath("images/business-meeting.png"),
    link: "/offerings/management-and-business-consulting/strategic-transformation",
    color: "from-orange-400 to-orange-600",
    secondPage: {
      title: "Management Consulting",
      content: "Get reliable, scalable, and secure technology solutions built for growth:",
      bulletPoints: ["People", "Culture", "Vision", "Brand", "Organization Strategy, etc."],
    },
  },
  {
    id: 2,
    title: "Business Consulting",
    description:
      "Business consulting delivers tailored solutions to align your operations, marketing, and finance with long-term goals.",
    image: getAssetPath("images/business-consulting.png"),
    link: "/offerings/management-and-business-consulting/strategic-transformation",
    color: "from-orange-400 to-orange-600",
    secondPage: {
      title: "Business Consulting",
      content: "Our expertise accelerates innovation and sustainable growth:",
      bulletPoints: ["Business Strategy", "Revenue & Expense Management", "Process Optimization, etc."],
    },
  },
  {
    id: 3,
    title: "IT Consulting",
    description:
      "Expert IT consulting empowers your business with strategic insights and end-to-end technology planning.",
    image: getAssetPath("images/it-consulting.jpeg"),
    link: "/offerings/management-and-business-consulting/digital-banking",
    color: "from-orange-300 to-orange-100",
    secondPage: {
      title: "IT Consulting",
      content: "We help you leverage IT as a growth accelerator:",
      bulletPoints: ["IT Strategy", "Application Management", "Vendor Management, etc."],
    },
  },
]

export function ConsultingGridCards() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
          Our Consulting <span className="text-orange-500">Insights</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className="relative h-[400px] overflow-hidden rounded-lg shadow-md"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Front Card */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-white flex flex-col"
                initial={{ x: 0 }}
                animate={{
                  x: hoveredCard === item.id ? "-100%" : 0,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>

                <div className="mt-auto h-[150px] w-full overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="w-full h-full"
                    />
                    {item.id === 3 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-orange-600/40 mix-blend-overlay"></div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Back Card */}
              <motion.div
                className="absolute inset-0 w-full h-full flex flex-col"
                initial={{ x: "100%" }}
                animate={{
                  x: hoveredCard === item.id ? 0 : "100%",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  background: "linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)",
                }}
              >
                <div className="p-6 flex-grow relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-orange-200/30 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.secondPage.title}</h3>
                    <p className="text-gray-700 mb-4">{item.secondPage.content}</p>

                    <ul className="list-disc pl-6 space-y-2">
                      {item.secondPage.bulletPoints.map((point, index) => (
                        <li key={index} className="text-orange-500">
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
