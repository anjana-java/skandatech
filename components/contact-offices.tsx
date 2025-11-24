"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"

export function ContactOffices() {
  const offices = [
    {
      name: "Head Office",
      address: "Old # 17, New # 2, III Cross Street, Ormes Road, Kilpauk,",
      city: "Chennai, Tamil Nadu 600 010, India",
      phone: "+91.44.7963.1562 / +91.44.2955.0750",
      whatsapp: "+91.82487.31010",
      email: "info@skandatech.com",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
    },
    {
      name: "Anna Nagar Branch",
      address: "3362H, AE Block, 8th Street, 11th Main Rd, Anna Nagar,",
      city: "Chennai, Tamil Nadu 600 040, India",
      phone: "+91.44.3576.8486",
    },
    {
      name: "Bangalore Branch",
      address: "3rd Floor, SP's Hebballi Enclave, Mahishi Rd, Nagarkar Colony, Malmaddi, Dharwad,",
      city: "Karnataka 580001, India",
      phone: "+91.44.2955.0750 / +91.44.7963.1562 / +91.44.3576.8486",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[250px] flex items-center bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900"
          >
            Contact <span className="text-orange-500">Us</span>
          </motion.h1>
        </div>
      </section>

      {/* Office Locations Section - Head Office left, Branches right */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Head Office - Left Side */}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2 text-center">Head Office</h2>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white rounded-lg shadow-lg p-6 flex-grow"
                >
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
                        <MapPin className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Address</h3>
                        <p className="text-base text-gray-600">{offices[0].address}</p>
                        <p className="text-base text-gray-600">{offices[0].city}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
                        <Phone className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Phone</h3>
                        <p className="text-base text-gray-600">{offices[0].phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">WhatsApp</h3>
                        <p className="text-base text-gray-600">{offices[0].whatsapp}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
                        <Mail className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Email</h3>
                        <p className="text-base text-gray-600">{offices[0].email}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-3 bg-orange-100 rounded-full mr-4 flex-shrink-0">
                        <Clock className="h-6 w-6 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">Business Hours</h3>
                        <p className="text-base text-gray-600">{offices[0].hours}</p>
                        <p className="text-base text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Branch Offices - Right Side, Vertical Stack */}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b pb-2 text-center">Branch Offices</h2>
                <div className="space-y-6 flex-grow">
                  {offices.slice(1).map((office, index) => (
                    <motion.div
                      key={office.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
                      className="bg-white rounded-lg shadow-lg p-5"
                    >
                      <h3 className="text-lg font-bold mb-4 text-gray-900 text-center">{office.name}</h3>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="p-2 bg-orange-100 rounded-full mr-3 flex-shrink-0">
                            <MapPin className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">Address</h4>
                            <p className="text-sm text-gray-600">{office.address}</p>
                            <p className="text-sm text-gray-600">{office.city}</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="p-2 bg-orange-100 rounded-full mr-3 flex-shrink-0">
                            <Phone className="h-5 w-5 text-orange-500" />
                          </div>
                          <div>
                            <h4 className="text-base font-semibold mb-1 text-gray-900">Phone</h4>
                            <p className="text-sm text-gray-600">{office.phone}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
