"use client"

import { motion } from "framer-motion"

export function WelcomeContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-8 text-gray-900"
          >
            Our <span className="text-orange-500">Story</span>
          </motion.h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6 text-justify">
              skanda is a one-stop Banking, Financial Services, Insurance, Health Care, Manufacturing, Pharmaceuticals,
              Telecommunications, Information Technology Enabled Services (ITES) and Information technology (IT)
              consulting firm.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Started in 2014, skanda has been set-up by experienced banking, finance and IT professionals who have over
              75 years of combined work experience. We have offices in India, and partnered in Singapore, United Arab
              Emirates (UAE), and Kingdom of Saudi Arabia (KSA), with banks, financial institutions, IT and ITES
              organizations to support their target business offerings in the BFSI, Health Care, Manufacturing,
              Pharmaceuticals, Telecommunications, ITES and IT space.
            </p>

            <p className="text-gray-700 mb-6 text-justify">
              Our consultants have worked with banks, financial institutions, Health Care, Manufacturing,
              Pharmaceuticals and Telecommunications industries, across the globe with business and IT skills that cover
              all lines of business such as Retail, Consumer, Private, Commercial, Corporate, Investment Banking,
              Capital Markets, Oracle Aps, SAP, Java, .net and J2EE. We have supplemented our offerings to cover
              business horizontals such as Risk, Transaction banking (Payments, Cash Management and Trade Finance),
              Insurance and Channels.
            </p>
            <p className="text-gray-700 mb-6 text-justify">
              Furthermore, we have built expertise across business and IT consulting, process re-engineering, business
              analysis, functional and technical architecture, testing, solution implementations, training and business
              process outsourcing. Our team has substantial experience across software development lifecycles (SDLC),
              project management and can support your requirements in pre-SDLC stages such as responding to RFPs and
              issuing RFIs, gathering initial requirements and supporting pre-sale initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
