import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutPageContent } from "@/components/about-page-content"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <AboutHero />
        <AboutPageContent />
      </main>
      <Footer />
    </div>
  )
}
