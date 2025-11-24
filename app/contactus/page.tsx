import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ContactOffices } from "@/components/contact-offices"

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <ContactOffices />
      </main>
      <Footer />
    </div>
  )
}
