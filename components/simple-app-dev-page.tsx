"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { getAssetPath } from "@/lib/utils"

export function SimpleAppDevPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Bespoke Application Development</h1>
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Rigorous application development standards and methodologies that help clients achieve their IT needs.
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            skanda's Application development and support services include software development, maintenance, conversion,
            and migration and application enhancements. We support multiple technologies and have skill sets across
            major banking application platforms such as T24, Flexcube and Finacle. Our consultants work on the entire
            chain of the software development life cycle with dedicated teams working in the business analysis,
            architecture, development, testing and implementation areas. Furthermore, we have tie-ups with partners to
            quickly ramp up on resource and bespoke application development requirements.
          </p>

          <div className="my-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-full max-w-xl mx-auto">
                <Image
                  src={getAssetPath("images/bespoke.png")}
                  alt="Bespoke Application Development Lifecycle"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 pointer-events-none"></div>
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold text-orange-500 text-center mt-4 mb-6">
            Our Application Development Lifecycle
          </h3>
        </div>
      </div>
    </div>
  )
}
