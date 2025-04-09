"use client"

import { useState } from "react"
import { MoreHorizontal, Phone, PhoneOff } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Dummy data for call history
const callHistoryData = [
  {
    id: "1",
    phoneNumber: "+1 (555) 123-4567",
    date: "2023-04-08 10:30 AM",
    duration: "4m 23s",
    status: "completed",
    direction: "outgoing",
  },
  {
    id: "2",
    phoneNumber: "+1 (555) 987-6543",
    date: "2023-04-07 2:15 PM",
    duration: "1m 45s",
    status: "completed",
    direction: "incoming",
  },
  {
    id: "3",
    phoneNumber: "+1 (555) 456-7890",
    date: "2023-04-07 11:05 AM",
    duration: "0m 0s",
    status: "missed",
    direction: "incoming",
  },
  {
    id: "4",
    phoneNumber: "+1 (555) 234-5678",
    date: "2023-04-06 4:45 PM",
    duration: "2m 12s",
    status: "completed",
    direction: "outgoing",
  },
  {
    id: "5",
    phoneNumber: "+1 (555) 876-5432",
    date: "2023-04-06 9:30 AM",
    duration: "5m 37s",
    status: "completed",
    direction: "outgoing",
  },
  {
    id: "6",
    phoneNumber: "+1 (555) 345-6789",
    date: "2023-04-05 3:20 PM",
    duration: "0m 0s",
    status: "failed",
    direction: "outgoing",
  },
  {
    id: "7",
    phoneNumber: "+1 (555) 654-3210",
    date: "2023-04-05 10:15 AM",
    duration: "3m 42s",
    status: "completed",
    direction: "incoming",
  },
  {
    id: "8",
    phoneNumber: "+1 (555) 765-4321",
    date: "2023-04-04 5:50 PM",
    duration: "1m 15s",
    status: "completed",
    direction: "outgoing",
  },
  {
    id: "9",
    phoneNumber: "+1 (555) 321-0987",
    date: "2023-04-04 1:10 PM",
    duration: "0m 0s",
    status: "missed",
    direction: "incoming",
  },
  {
    id: "10",
    phoneNumber: "+1 (555) 890-1234",
    date: "2023-04-03 11:25 AM",
    duration: "6m 18s",
    status: "completed",
    direction: "outgoing",
  },
]

interface CallHistoryProps {
  limit?: number
}

export function CallHistory({ limit }: CallHistoryProps) {
  const [calls] = useState(limit ? callHistoryData.slice(0, limit) : callHistoryData)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Phone Number</TableHead>
          <TableHead>Date & Time</TableHead>
          <TableHead>Duration</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Direction</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {calls.map((call) => (
          <TableRow key={call.id}>
            <TableCell className="font-medium">{call.phoneNumber}</TableCell>
            <TableCell>{call.date}</TableCell>
            <TableCell>{call.duration}</TableCell>
            <TableCell>
              <Badge
                variant={call.status === "completed" ? "default" : call.status === "missed" ? "destructive" : "outline"}
              >
                {call.status}
              </Badge>
            </TableCell>
            <TableCell>
              {call.direction === "outgoing" ? (
                <div className="flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-green-500" />
                  <span>Outgoing</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <PhoneOff className="mr-2 h-4 w-4 text-blue-500" />
                  <span>Incoming</span>
                </div>
              )}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>View details</DropdownMenuItem>
                  <DropdownMenuItem>View transcription</DropdownMenuItem>
                  <DropdownMenuItem>Play recording</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Call back</DropdownMenuItem>
                  <DropdownMenuItem>Add to contacts</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
