import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { WelcomeHero } from "@/components/welcome-hero"
import { WelcomeContent } from "@/components/welcome-content"

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <WelcomeHero />
        <WelcomeContent />
      </main>
      <Footer />
    </div>
  )
}
