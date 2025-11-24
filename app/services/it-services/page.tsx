import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ITServicesHero } from "@/components/it-services-hero"
import { RedesignedServicesGrid } from "@/components/redesigned-services-grid"

export default function ITServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <ITServicesHero />
        <RedesignedServicesGrid />
      </main>
      <Footer />
    </div>
  )
}
