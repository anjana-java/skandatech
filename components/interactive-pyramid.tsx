"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function InteractivePyramid() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null)

  const pyramidLevels = [
    {
      level: 1,
      title: "IT Consulting",
      description: "IT Strategy, Application Management, Vendor Management etc..",
    },
    {
      level: 2,
      title: "Business Consulting",
      description: "Business Strategy, Revenue & Expense Management, Process Optimization etc..",
    },
    {
      level: 3,
      title: "Management Consulting",
      description: "People, Culture, Vision, Brand, Organization Strategy etc..",
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
          Our Consulting <span className="text-orange-500">Framework</span>
        </h2>

        <div className="relative max-w-3xl mx-auto h-[400px] flex flex-col items-center justify-center">
          {/* Pyramid Levels */}
          {pyramidLevels.map((item, index) => {
            const width = 100 - index * 15 // Decreasing width for each level
            const isActive = activeLevel === item.level

            return (
              <motion.div
                key={item.level}
                className={`absolute cursor-pointer transition-all duration-300 flex items-center justify-center ${
                  isActive ? "z-20 scale-105" : "z-10"
                }`}
                style={{
                  width: `${width}%`,
                  height: "60px",
                  bottom: `${index * 70}px`,
                  backgroundColor: isActive ? "#f97316" : "#fdba74",
                }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setActiveLevel(item.level)}
                onMouseLeave={() => setActiveLevel(null)}
              >
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
              </motion.div>
            )
          })}

          {/* Hover Details */}
          {activeLevel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-[420px] left-0 right-0 bg-white p-6 rounded-lg shadow-lg border border-orange-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {pyramidLevels.find((item) => item.level === activeLevel)?.title}
              </h3>
              <p className="text-gray-600">{pyramidLevels.find((item) => item.level === activeLevel)?.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
