"use client"

import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Dummy data for transcriptions
const transcriptionsData = [
  {
    id: "1",
    callId: "1",
    phoneNumber: "+1 (555) 123-4567",
    date: "2023-04-08 10:30 AM",
    transcript:
      "Hello, this is John from Acme Corp. I'm calling about your recent order #12345. We wanted to confirm the shipping address before we send it out.",
  },
  {
    id: "2",
    callId: "2",
    phoneNumber: "+1 (555) 987-6543",
    date: "2023-04-07 2:15 PM",
    transcript:
      "Hi, I'm calling to inquire about your premium subscription service. Can you tell me more about the features included?",
  },
  {
    id: "4",
    callId: "4",
    phoneNumber: "+1 (555) 234-5678",
    date: "2023-04-06 4:45 PM",
    transcript:
      "Good afternoon, I'm reaching out regarding the technical support ticket you submitted yesterday. I have some updates for you on the issue.",
  },
  {
    id: "5",
    callId: "5",
    phoneNumber: "+1 (555) 876-5432",
    date: "2023-04-06 9:30 AM",
    transcript:
      "Hello, I'm calling from the marketing department. We're planning our quarterly campaign and would like to schedule a meeting to discuss potential collaborations.",
  },
  {
    id: "7",
    callId: "7",
    phoneNumber: "+1 (555) 654-3210",
    date: "2023-04-05 10:15 AM",
    transcript:
      "Hi there, this is Sarah from customer support. I'm following up on the feedback you provided last week. We've made some changes based on your suggestions.",
  },
]

interface TranscriptionsProps {
  limit?: number
}

export function Transcriptions({ limit }: TranscriptionsProps) {
  const transcriptions = limit ? transcriptionsData.slice(0, limit) : transcriptionsData

  return (
    <div className="space-y-4">
      {transcriptions.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.phoneNumber}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>View full transcript</DropdownMenuItem>
                <DropdownMenuItem>Download transcript</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View call details</DropdownMenuItem>
                <DropdownMenuItem>Play recording</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground mb-2">{item.date}</div>
            <p className="text-sm line-clamp-3">{item.transcript}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
