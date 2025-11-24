import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ContactUs } from "@/components/contact-us"
import { CTASection } from "@/components/cta-section"

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <ContactUs />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
