"use client"

import { motion } from "framer-motion"

interface OfferingsHeroProps {
  title: string
  subtitle?: string
}

export function OfferingsHero({ title, subtitle }: OfferingsHeroProps) {
  // Replace "IT Services" with "IT Consulting" if that's the title
  const displayTitle = title === "IT Services" ? "IT Consulting" : title

  return (
    <section className="relative h-[250px] flex items-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900"
        >
          {displayTitle.split(" ").map((word, i, arr) =>
            i === arr.length - 1 ? (
              <span key={i} className="text-orange-500">
                {word}
              </span>
            ) : (
              <span key={i}>{word} </span>
            ),
          )}
        </motion.h1>
      </div>
    </section>
  )
}
