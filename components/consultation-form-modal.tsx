"use client"

import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ConsultationFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ConsultationFormModal({ isOpen, onClose }: ConsultationFormModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.includes("@")) newErrors.email = "Valid email is required"
    if (!/^\+?[0-9\s\-()]{7,15}$/.test(form.phone)) newErrors.phone = "Enter a valid phone number"
    if (!form.message.trim()) newErrors.message = "Message is required"
    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      // In a real application, you would send this data to your backend
      // This is a simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Send email notification (in a real app, this would be handled by the server)
      console.log("Sending email notification to info@skandatech.com with form data:", form)

      setIsSubmitted(true)
      // Reset form after successful submission
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Schedule a Consultation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2 text-gray-900">Thank you!</h3>
            <p className="text-gray-600 mb-6">
              Your consultation request has been submitted. We'll contact you shortly.
            </p>
            <p className="text-gray-600 mb-6">A confirmation email has been sent to your email address.</p>
            <p className="text-gray-600 mb-6">Your request has been forwarded to info@skandatech.com.</p>
            <Button onClick={onClose} className="bg-orange-500 hover:bg-orange-600 text-white">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="modal-name" className="text-gray-700 font-medium block">
                Full Name
              </Label>
              <Input
                id="modal-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className={`text-gray-900 ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-email" className="text-gray-700 font-medium block">
                Email Address
              </Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`text-gray-900 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-phone" className="text-gray-700 font-medium block">
                Phone Number
              </Label>
              <Input
                id="modal-phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className={`text-gray-900 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-company" className="text-gray-700 font-medium block">
                Company (Optional)
              </Label>
              <Input
                id="modal-company"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your Company Ltd."
                className="text-gray-900 border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message" className="text-gray-700 font-medium block">
                Message
              </Label>
              <Textarea
                id="modal-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className={`text-gray-900 ${errors.message ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
