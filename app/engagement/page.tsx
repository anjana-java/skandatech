import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { EngagementHero } from "@/components/engagement-hero"
import { EngagementModels } from "@/components/engagement-models"

export default function EngagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <EngagementHero />
        <EngagementModels />
      </main>
      <Footer />
    </div>
  )
}
