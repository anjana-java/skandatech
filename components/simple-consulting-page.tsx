import { ConsultingGridCards } from "@/components/consulting-grid-cards"
import { ConsultingGrid } from "@/components/consulting-grid"

export function SimpleConsultingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Management and Business Consulting</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 text-justify">
            Businesses and their requirements are becoming more complex. This is coupled with an increasing uncertain
            period globally where organizations are required to tackle unexpected challenges. Although we now have a
            smaller world, thanks to rapid strides made by information technology and information management, economic
            shifts across geographies have given rise to increasing volatility and have affected relationships with both
            internal and external stakeholders. This requires a rethink on how the enterprise can deliver value.
          </p>
          <p className="text-gray-700 mb-6 text-justify">
            Some steps that organizations have taken revolve around building customer centric business model rather than
            models that focussing on their existing solution propositions. We at skanda are focussed in helping build
            solutions that focus on the needs of customers and which envision innovation, growth and profitability.
          </p>
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
            Our Banking Consultants help build efficient financial institutions
          </h2>
          <p className="text-gray-700 mb-6 text-justify">
            We believe in maintaining strong and deep relationships with our customers. Our partnerships are not skin
            deep and goes beyond providing tactical solutions. We are interested in providing solutions to our clients
            that are strategic and sustainable – creating top line and bottom line impact, building efficiency in
            processes and operations. To this effect, skanda offers its clients with a range of consulting offerings
            that cover management, business and IT consulting.
          </p>
        </div>
      </div>

      {/* Consulting Grid Cards Component (replacing Interactive Pyramid) */}
      <ConsultingGridCards />

      <div className="max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 text-justify">
            We offer the following solutions for Management and Business Consulting –
          </p>
        </div>
      </div>

      {/* Consulting Grid Component */}
      <ConsultingGrid />

      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Improving organization performance</h2>
          <p className="text-gray-700 mb-6 text-justify">
            skanda helps to measure, design and implement change that is significant and sustainable. We help financial
            institutions assess their current state and then define and transition to an optimal future state
            enterprise. This process provides a combination of improved cost structures, improved revenue opportunities
            and improved customer experiences.
          </p>
        </div>
      </div>
    </div>
  )
}
