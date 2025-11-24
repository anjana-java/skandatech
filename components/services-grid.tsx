import { BadgeDollarSign, Building2, HeartPulse, Network, Smartphone, TestTubes } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  
  {
  icon: Smartphone,
    title: "Management and Business Consulting",
    description: "Innovative solutions for the financial sector",
    href: "/offerings/management-and-business-consulting",
  },
  {
    icon: Network,
    title: "IT Consulting",
    description: "Comprehensive IT consulting and implementation",
    href: "/offerings/it-services",
  },
  {
    icon: Building2,
    title: "Bespoke Application Development",
    description: "Smart manufacturing and Industry 4.0 solutions",
    href: "/offerings/bespoke-application-development",
  },
  {
    icon: Network,
    title: "Training",
    description: "Training programs to upskill teams in emerging technologies",
    href: "/offerings/training",
  },
]
] as const

export function ServicesGrid() {
  return (
    <section className="container py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground">
          Comprehensive solutions across multiple industries
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="h-10 w-10 text-orange-500">
                <service.icon className="h-full w-full" />
              </div>
              <CardTitle className="mt-4">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0">
                Learn more →
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
