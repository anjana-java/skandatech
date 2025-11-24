import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="container py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold tracking-tighter text-orange-500">75+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Years Combined Experience</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold tracking-tighter text-yellow-500">3</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Global Offices</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold tracking-tighter text-green-500">100+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Successful Projects</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-5xl font-bold tracking-tighter text-orange-500">50+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-medium">Expert Consultants</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
