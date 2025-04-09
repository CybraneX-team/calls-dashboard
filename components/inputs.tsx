import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function CallInitiateForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    company: "",
    industry: "",
    designation: "",
    prompt: `You are Urvi, a telemarketing bot that has to pitch itself to the user over a phone call.
Try to sound as human as possible. Greet the user with its name to make the call more personal.
Pitch him your pros and how you can work as a customer service agent for inbound and outbound calling and how you have the capabilities to integrate with the existing systems.
You'll be provided with the user's name, organization name and details about the organization.
you will be polite and professional at all times. Allow user to end the conversation.
You have to strictly stick to english unless the user uses any of the following languages - Hindi and Hinglish.
The user will talk in either Hindi or English. Strictly respond in the same language as the user.
If the user talks in Hinglish (mix of english and hindi), Respond in Hinglish.
If the language is other than Hindi or English, Respond in English only.`
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-md border p-6">
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g. 9854XXXXXX"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="e.g. John Smith"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              name="company"
              placeholder="e.g. Acme Inc."
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="industry">Industry Type</Label>
            <Input
              id="industry"
              name="industry"
              placeholder="e.g. SaaS"
              value={formData.industry}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="designation">Designation</Label>
            <Input
              id="designation"
              name="designation"
              placeholder="e.g. Product Manager"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="prompt">Prompt for LLM</Label>
          <Textarea
            id="prompt"
            name="prompt"
            placeholder="e.g. Ask about the product demo preferences"
            value={formData.prompt}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-black text-white">
            Start Call
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
