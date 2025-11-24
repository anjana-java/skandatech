"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers-hero"
import { JobCard } from "@/components/job-card"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/utils"
import { LinkWrapper } from "@/components/link-wrapper"

interface Job {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    description: string
}

export default function CareersPage() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch(getAssetPath("jobs.json"))
                if (response.ok) {
                    const data = await response.json()
                    setJobs(data)
                } else {
                    console.error("Failed to fetch jobs")
                }
            } catch (error) {
                console.error("Error fetching jobs:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [])

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-20">
                <CareersHero />
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Openings</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Join our team of experts and help us build the future of technology.
                                Check out our open positions below.
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-12">
                                <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
                            </div>
                        ) : jobs.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {jobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-gray-50 rounded-lg">
                                <p className="text-lg text-gray-600 mb-4">
                                    We don't have any specific openings listed right now,
                                    but we'd love to hear from you!
                                </p>
                                <p className="text-lg text-gray-600">
                                    Please send your resume to <a href="mailto:careers@skandatech.com" className="text-orange-500 hover:underline">careers@skandatech.com</a>
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 text-center">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
                            <LinkWrapper href="/contactus">
                                Contact Us
                            </LinkWrapper>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
