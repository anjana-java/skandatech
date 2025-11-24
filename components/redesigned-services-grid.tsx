"use client"

import { Server, Shield, BarChart, Code, Database, Cloud } from "lucide-react"

export function RedesignedServicesGrid() {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description:
        "Comprehensive management of your IT infrastructure including servers, networks, and storage systems to ensure optimal performance and reliability.",
    },
    

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our IT Service <span className="text-orange-500">Offerings</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-full mr-4">
                    <service.icon className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                <a href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
