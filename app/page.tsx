"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CallHistory } from "@/components/call-history"
import { CallStats } from "@/components/call-stats"
import { CurrentCall } from "@/components/current-call"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Recordings } from "@/components/recordings"
import { Sidebar } from "@/components/sidebar"
import { Transcriptions } from "@/components/transcriptions"
import {Axios} from "axios";
import CallInitiateForm from "@/components/inputs"

export default function DashboardPage() {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleCall = async (form: any) => {
    const res = await fetch(`https://urmi.ai/outbound`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: form.phoneNumber,
        name: form.name,
        company: form.company,
        industry: form.industry,
        designation: form.designation,
        prompt: form.prompt,
      })
    });
    console.log(res);
    // Reset the form
    setPhoneNumber("")
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <DashboardShell>
          <DashboardHeader heading="Call Dashboard" text="Make calls and view call history">
            {/* <form onSubmit={handleCall} className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="sm">
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Button>
            </form> */}
          </DashboardHeader>
          <CallInitiateForm onSubmit={handleCall}/>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">Call History</TabsTrigger>
              <TabsTrigger value="transcriptions">Transcriptions</TabsTrigger>
              <TabsTrigger value="recordings">Recordings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
                    <Phone className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">142</div>
                    <p className="text-xs text-muted-foreground">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Duration</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4m 23s</div>
                    <p className="text-xs text-muted-foreground">+7% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">87%</div>
                    <p className="text-xs text-muted-foreground">+2% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-muted-foreground">+4 from last month</p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Call Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <CallStats />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Current Call</CardTitle>
                    <CardDescription>Details of the ongoing call</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CurrentCall />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Calls</CardTitle>
                    <CardDescription>You made 12 calls this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CallHistory limit={5} />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Transcriptions</CardTitle>
                    <CardDescription>Latest call transcriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Transcriptions limit={3} />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Call History</CardTitle>
                  <CardDescription>A list of all your calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Input placeholder="Search calls..." className="max-w-sm" />
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                  <CallHistory />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transcriptions" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Transcriptions</CardTitle>
                  <CardDescription>Transcriptions of your calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Input placeholder="Search transcriptions..." className="max-w-sm" />
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                  <Transcriptions />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recordings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recordings</CardTitle>
                  <CardDescription>Recordings of your calls</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Input placeholder="Search recordings..." className="max-w-sm" />
                    <Button variant="outline" size="sm">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                  <Recordings />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </DashboardShell>
      </div>
    </div>
  )
}
