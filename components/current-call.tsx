"use client"

import { useState } from "react"
import { Mic, MicOff, PhoneOff, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function CurrentCall() {
  const [isMuted, setIsMuted] = useState(false)
  const [callTime, setCallTime] = useState(125) // seconds

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <User className="h-12 w-12 text-primary" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">+1 (555) 123-4567</h3>
        <p className="text-sm text-muted-foreground">John Smith</p>
      </div>
      <div className="w-full">
        <div className="flex justify-between text-sm">
          <span>00:00</span>
          <span>{formatTime(callTime)}</span>
        </div>
        <Progress value={(callTime / 300) * 100} className="h-2 w-full" />
      </div>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="icon"
          className={isMuted ? "bg-destructive text-destructive-foreground" : ""}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
        <Button variant="destructive" size="icon">
          <PhoneOff className="h-4 w-4" />
        </Button>
      </div>
      <div className="text-sm text-muted-foreground">Call started at 10:45 AM</div>
    </div>
  )
}
