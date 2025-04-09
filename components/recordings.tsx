"use client"

import { useState } from "react"
import { Download, MoreHorizontal, Pause, Play } from "lucide-react"

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
import { Slider } from "@/components/ui/slider"

// Dummy data for recordings
const recordingsData = [
  {
    id: "1",
    callId: "1",
    phoneNumber: "+1 (555) 123-4567",
    date: "2023-04-08 10:30 AM",
    duration: "4m 23s",
    fileSize: "2.4 MB",
  },
  {
    id: "2",
    callId: "2",
    phoneNumber: "+1 (555) 987-6543",
    date: "2023-04-07 2:15 PM",
    duration: "1m 45s",
    fileSize: "1.1 MB",
  },
  {
    id: "4",
    callId: "4",
    phoneNumber: "+1 (555) 234-5678",
    date: "2023-04-06 4:45 PM",
    duration: "2m 12s",
    fileSize: "1.3 MB",
  },
  {
    id: "5",
    callId: "5",
    phoneNumber: "+1 (555) 876-5432",
    date: "2023-04-06 9:30 AM",
    duration: "5m 37s",
    fileSize: "3.2 MB",
  },
  {
    id: "7",
    callId: "7",
    phoneNumber: "+1 (555) 654-3210",
    date: "2023-04-05 10:15 AM",
    duration: "3m 42s",
    fileSize: "2.1 MB",
  },
]

export function Recordings() {
  const [playing, setPlaying] = useState<string | null>(null)
  const [progress, setProgress] = useState<number>(0)

  const togglePlay = (id: string) => {
    if (playing === id) {
      setPlaying(null)
    } else {
      setPlaying(id)
      setProgress(0)
    }
  }

  return (
    <div className="space-y-4">
      {recordingsData.map((recording) => (
        <Card key={recording.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{recording.phoneNumber}</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  Download recording
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View call details</DropdownMenuItem>
                <DropdownMenuItem>View transcript</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground mb-2">
              {recording.date} • {recording.duration} • {recording.fileSize}
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => togglePlay(recording.id)}>
                {playing === recording.id ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Slider
                value={[playing === recording.id ? progress : 0]}
                max={100}
                step={1}
                className="flex-1"
                onValueChange={(value) => {
                  if (playing === recording.id) {
                    setProgress(value[0])
                  }
                }}
              />
              <span className="text-xs w-12 text-right">
                {playing === recording.id
                  ? `${Math.floor((progress / 100) * Number.parseInt(recording.duration))}s`
                  : recording.duration}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
