import { TrainingGrid } from "@/components/training-grid"

export function SimpleTrainingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Professional Training</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Globally, organizations have a challenge in spending resources – time, effort and money in training their
            employees. This is especially true in times of a slowdown in the market place. Often, organizations have
            tough decisions to make in regards to whether efforts are required to be channelized towards their core
            competencies or have a focus to develop associates through a structured training and development programme.
          </p>

          <p className="text-gray-700 mb-6">
            Enter skanda. We firmly believe that 'an organization is only good as its weakest link'. At the same time we
            understand business priorities of clients during challenging times such as a downturn in the markets or in
            organization or industry specific situations. We 'take off the burden' that clients may have towards
            building an effective and knowledgeable workforce to support business priorities. Our structured, instructor
            led training programmes cover banking business, information technology, IT enabled services, soft skills
            training and coaching and mentoring services. We have ensured that our training solutions are flexible,
            applicable, relevant and engaging.
          </p>
        </div>
      </div>

      {/* Training Grid Component */}
      <TrainingGrid />

      <div className="max-w-4xl mx-auto mt-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Our Training Methodology</h2>
          <p className="text-gray-700 mb-6">
            skanda's offerings in Banking and Financial services business, Information technology (IT) and IT enabled
            business supplemented by soft skills training and executive coaching offerings cover a well-rounded Training
            solutions package for clients
          </p>

          <p className="text-gray-700 mb-6">
            Our approach to training includes the integrating of theory with practice and creating an unforgettable and
            comprehensive learning experience. This effort allows for program participants to apply new knowledge
            immediately at their workplace. Our training courses can be customized for participants at all levels and we
            can focus in depth on products, processes or methodologies. Your mainstream banking, investment banking and
            front-office staff can really benefit from our blended learning approach, as well as your back office
            operations, IT, and compliance personnel.
          </p>
        </div>
      </div>
    </div>
  )
}
