"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkWrapper } from "./link-wrapper"

export function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-gray-900"
        >
          Evaluate Innovate <span className="text-orange-500">Transform</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <LinkWrapper href="/welcome">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
             Welcome
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </LinkWrapper>
        </motion.div>
      </div>
    </section>
  )
}
