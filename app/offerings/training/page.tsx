import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { SimpleTrainingPage } from "@/components/simple-training-page"
import { OfferingsHero } from "@/components/offerings-hero"

export default function TrainingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <OfferingsHero
          title="Professional Training"
          subtitle="Comprehensive training programs designed to enhance your team's skills, knowledge, and capabilities in various domains."
        />
        <SimpleTrainingPage />
      </main>
      <Footer />
    </div>
  )
}
