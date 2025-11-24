import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { SimpleConsultingPage } from "@/components/simple-consulting-page"
import { OfferingsHero } from "@/components/offerings-hero"

export default function ManagementConsultingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <OfferingsHero
          title="Management and Business Consulting"
          subtitle="Strategic advisory services to help your organization navigate complex business challenges and drive sustainable growth."
        />
        <SimpleConsultingPage />
      </main>
      <Footer />
    </div>
  )
}
