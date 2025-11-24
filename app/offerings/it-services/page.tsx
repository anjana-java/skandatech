import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { SimpleITServicesPage } from "@/components/simple-it-services-page"
import { OfferingsHero } from "@/components/offerings-hero"

export default function ITServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <OfferingsHero
          title="IT Consulting"
          subtitle="Comprehensive IT consulting services designed to optimize your technology infrastructure, enhance security, and drive business growth."
        />
        <SimpleITServicesPage />
      </main>
      <Footer />
    </div>
  )
}
