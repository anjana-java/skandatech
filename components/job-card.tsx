import { MapPin, Clock, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Job {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    description: string
}

interface JobCardProps {
    job: Job
}

export function JobCard({ job }: JobCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
                <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900">{job.title}</CardTitle>
                        <CardDescription className="mt-2 text-orange-500 font-medium break-words">
                            {job.department}
                        </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200 shrink-0">
                        {job.type}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-col gap-2 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.experience}</span>
                    </div>
                </div>
                <p className="text-gray-600 line-clamp-3 mb-4">{job.description}</p>
            </CardContent>
        </Card>
    )
}
