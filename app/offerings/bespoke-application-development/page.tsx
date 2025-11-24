import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { SimpleAppDevPage } from "@/components/simple-app-dev-page"
import { OfferingsHero } from "@/components/offerings-hero"
import { AppDevAccordion } from "@/components/app-dev-accordion"

export default function BespokeApplicationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <OfferingsHero
          title="Bespoke Application Development"
          subtitle="Custom software solutions designed and built specifically for your unique business requirements and challenges."
        />
        <SimpleAppDevPage />
        <AppDevAccordion />
      </main>
      <Footer />
    </div>
  )
}
