"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function AppDevAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const accordionItems = [
    {
      title: "Business Analysis",
      content: `Business Analysts at skanda help have experience in the banking and financial services industry and have a proven track record within the information technology industry. Our experts understand business problems and bring along a problem solving mind set in the context of the business requirements. They act as user representatives and are in position to conduct/facilitate joint application development (JAD) sessions, organize, document and communicate the business requirements.`,
    },
    {
      title: "Application Architecture",
      content: (
        <>
          <p className="text-justify">
            Often organizations have the right ideas and business requirements but are unable to think as to how they
            will convert the requirements into a working application. Architects at skanda can help organizations bring
            to reality their concepts by helping figure out best architecture for their applications. We can help
            customers choose the most appropriate data model and design patterns for enhanced flexibility, compatibility
            and extensibility.
          </p>
          <p className="mt-4 text-justify">
            With a proven track record of designing and developing solutions our architects can help put together an
            application architecture for your internal teams to implement the final solution. We are available for
            architecture guidance and support through the Software Development Lifecycle.
          </p>
        </>
      ),
    },
    {
      title: "Development",
      content: (
        <>
          <p className="mb-4 text-justify">
            The business analysis and architecture teams work with the development teams to build the proposed
            application on the agreed architecture. We support build on all best of breed development tools and
            methodologies. To cut product development cycles and minimize errors, skanda follows a three pronged
            strategy utilizing business analysis, architecture and testing teams to support the development methodology.
          </p>

          <h4 className="font-semibold text-lg mb-3 text-orange-500">Our Development Approach</h4>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-orange-500">
              <span className="text-gray-700">
                Frameworks to simplify product architecture components to reduce development and sustenance cost
              </span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">
                Create easy to understand use case scenarios that leads to fewer changes to the build code
              </span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">
                Test automation tools to accelerate cycle time and reduce engineering efforts
              </span>
            </li>
          </ul>

          <p className="mb-4 text-justify">
            Our confidence in delivering high quality, low cost development solutions is backed by a strong development
            community at our India office. The offices are equipped with relevant infrastructure to meet customer
            requirements. Furthermore, we support a range of technologies as indicated below:
          </p>

          <h4 className="font-semibold text-lg mb-3 text-orange-500">Technology Stack Expertise</h4>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-orange-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Technology / Areas</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Specialization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Core Banking Solutions</td>
                  <td className="border border-gray-300 px-4 py-2">Functional / Technical</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Oracle</td>
                  <td className="border border-gray-300 px-4 py-2">
                    EBS – Financials / EBS - HRMS / EBS - SCM / EBS - Utilities / EBS - Technical / OBIEE / OBIA / Core
                    DBA / Apps DBA
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">SIEBEL</td>
                  <td className="border border-gray-300 px-4 py-2">Functional / Technical</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">SAP</td>
                  <td className="border border-gray-300 px-4 py-2">
                    CRM / Warehouse / FICO / MM / SD / Mobility / SUP / EPM / Netweaver / MDM / Basis / ABAP
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Infrastructure</td>
                  <td className="border border-gray-300 px-4 py-2">UNIX / AIX Admin / Data Guard / Firewall</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Application Development</td>
                  <td className="border border-gray-300 px-4 py-2">.NET / JAVA / J2EE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      title: "Testing",
      content: (
        <>
          <p className="text-justify">
            skanda leverages its vast experience in domain focused testing to help build bug free mission critical
            applications for our clients. Our testing teams work hand in glove with the business analysis and
            development teams to develop robust systems ensuring adherence to time, quality and cost parameters.
          </p>
          <p className="mt-4 text-justify">
            skanda can also support an organizations needs to build application development strategy by undertaking
            system evaluations. Our consultants can help formulate appropriate evaluation criteria leading to
            application assessment and finally on to recommending the best solution that meets business needs within
            time and cost parameters. As an added service, skanda can front face discussions with vendors for
            negotiations. Our goal is to partner with clients at every stage of product lifecycle to help them
            efficiently achieve quick Time-to-Market, improve the quality of their products, reduce risk of failure,
            improve predictability and reliability.
          </p>
        </>
      ),
    },
    {
      title: "Project Management",
      content: (
        <>
          <p className="mb-4 text-justify">
            skanda delivers expertise that can benefit organizations at every stage of the solution lifecycle from
            initial assessments, planning and implementation, upgrades, optimization and solution extension. Your
            solution may be deployed and adopted more quickly, may more precisely meet business and IT requirements and
            may provide greater value for all stakeholders.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-orange-500">
              <span className="text-gray-700">
                Challenge – Organizations need to deliver on investment, project and the portfolio of services. This
                requires a unique blend of business and technical expertise, calculated judgment and reusable best
                practices.
              </span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">
                Opportunity – skanda can help provide assessments, efficient implementation, deployment and managed
                services and, well-prioritized optimization work that may help organizations achieve a clearer, longer
                term vision.
              </span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">
                Benefits – Our expertise in the Project and Programme Management space will help your organization save
                time, reduce risk and help deliver the solution within cost parameters.
              </span>
            </li>
          </ul>

          <h4 className="font-semibold text-lg mb-3 text-orange-500">PROJECT AND PROGRAMME MANAGEMENT SERVICES</h4>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li className="text-orange-500">
              <span className="text-gray-700">Application and Services Portfolio Management</span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">Project & Programme Management</span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">Resource and Demand Management</span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">Stakeholder Relationship Management</span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">Financial Parameter Management</span>
            </li>
            <li className="text-orange-500">
              <span className="text-gray-700">Requirement Planning</span>
            </li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
          Our Application Development <span className="text-orange-500">Services</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {accordionItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className={`w-full p-4 flex items-center justify-between text-left ${
                  activeIndex === index ? "bg-orange-50" : "bg-white"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border-t border-gray-200">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
