"use client"

import { motion } from "framer-motion"

export function AppDevHero() {
  return (
    <section className="relative h-[250px] flex items-center bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900"
          >
            Bespoke Application <span className="text-orange-500">Development</span>
          </motion.h1>
        </div>
      </div>
    </section>
  )
}
