"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Plus, Trash2, Copy, Download } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Job {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    description: string
}

export default function AdminJobsPage() {
    const [jobs, setJobs] = useState<Job[]>([])
    const [loading, setLoading] = useState(true)
    const { toast } = useToast()

    // Fetch initial jobs
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("/jobs.json")
                if (response.ok) {
                    const data = await response.json()
                    setJobs(data)
                }
            } catch (error) {
                console.error("Error fetching jobs:", error)
                toast({
                    title: "Error",
                    description: "Failed to load jobs.",
                    variant: "destructive",
                })
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [toast])

    const handleAddJob = () => {
        const newJob: Job = {
            id: Date.now().toString(),
            title: "",
            department: "",
            location: "",
            type: "Full-time",
            experience: "",
            description: "",
        }
        setJobs([...jobs, newJob])
    }

    const handleRemoveJob = (id: string) => {
        setJobs(jobs.filter((job) => job.id !== id))
    }

    const handleUpdateJob = (id: string, field: keyof Job, value: string) => {
        setJobs(
            jobs.map((job) => (job.id === id ? { ...job, [field]: value } : job))
        )
    }

    const getJsonOutput = () => {
        return JSON.stringify(jobs, null, 2)
    }

    const handleCopyJson = () => {
        navigator.clipboard.writeText(getJsonOutput())
        toast({
            title: "Copied!",
            description: "JSON copied to clipboard.",
        })
    }

    const handleDownloadJson = () => {
        const jsonString = getJsonOutput()
        const blob = new Blob([jsonString], { type: "application/json" })
        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "jobs.json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Manage Jobs</h1>
                <Button onClick={handleAddJob} variant="outline">
                    <Plus className="mr-2 h-4 w-4" /> Add Job
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Job List */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold mb-4">Current Jobs</h2>
                    {jobs.map((job) => (
                        <Card key={job.id}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl font-semibold">
                                    {job.title || "New Job"}
                                </CardTitle>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => handleRemoveJob(job.id)}
                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 gap-4 mb-4">
                                    <div className="space-y-2">
                                        <Label>Job Title</Label>
                                        <Input
                                            value={job.title}
                                            onChange={(e) => handleUpdateJob(job.id, "title", e.target.value)}
                                            placeholder="e.g. Senior Developer"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Department</Label>
                                        <Input
                                            value={job.department}
                                            onChange={(e) => handleUpdateJob(job.id, "department", e.target.value)}
                                            placeholder="e.g. Engineering"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Location</Label>
                                        <Input
                                            value={job.location}
                                            onChange={(e) => handleUpdateJob(job.id, "location", e.target.value)}
                                            placeholder="e.g. Remote"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Experience</Label>
                                        <Input
                                            value={job.experience}
                                            onChange={(e) => handleUpdateJob(job.id, "experience", e.target.value)}
                                            placeholder="e.g. 3+ years"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Type</Label>
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={job.type}
                                            onChange={(e) => handleUpdateJob(job.id, "type", e.target.value)}
                                        >
                                            <option value="Full-time">Full-time</option>
                                            <option value="Part-time">Part-time</option>
                                            <option value="Contract">Contract</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Description</Label>
                                        <Textarea
                                            value={job.description}
                                            onChange={(e) => handleUpdateJob(job.id, "description", e.target.value)}
                                            placeholder="Job description..."
                                            className="min-h-[100px]"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {jobs.length === 0 && (
                        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                            <p className="text-gray-500">No jobs listed. Click "Add Job" to get started.</p>
                        </div>
                    )}
                </div>

                {/* Right Column: JSON Output */}
                <div className="lg:sticky lg:top-8 h-fit">
                    <Card>
                        <CardHeader>
                            <CardTitle>Generate JSON</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-500 mb-4">
                                When you are done editing, copy the code below and update your <strong>jobs.json</strong> file manually on the server.
                            </p>
                            <Textarea
                                readOnly
                                value={getJsonOutput()}
                                className="font-mono text-xs h-[400px] mb-4"
                            />
                            <div className="flex gap-4">
                                <Button onClick={handleCopyJson} className="flex-1 bg-green-600 hover:bg-green-700">
                                    <Copy className="mr-2 h-4 w-4" /> Copy to Clipboard
                                </Button>
                                <Button onClick={handleDownloadJson} variant="outline" className="flex-1">
                                    <Download className="mr-2 h-4 w-4" /> Download JSON
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
