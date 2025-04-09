"use client"

import { useState } from "react"
import { BarChart3, FileText, Home, Mic, Phone, Settings, User } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-muted/40 transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-14 items-center border-b px-3 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Phone className="h-6 w-6" />
          {!collapsed && <span>Call Dashboard</span>}
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setCollapsed(!collapsed)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("transition-transform", collapsed ? "rotate-180" : "")}
          >
            <path d="m15 6-6 6 6 6" />
          </svg>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          <Link
            href="/"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <Home className="h-4 w-4" />
            {!collapsed && <span>Home</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary transition-all",
              collapsed ? "justify-center" : "",
            )}
          >
            <Phone className="h-4 w-4" />
            {!collapsed && <span>Calls</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <FileText className="h-4 w-4" />
            {!collapsed && <span>Transcriptions</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <Mic className="h-4 w-4" />
            {!collapsed && <span>Recordings</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <BarChart3 className="h-4 w-4" />
            {!collapsed && <span>Analytics</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <User className="h-4 w-4" />
            {!collapsed && <span>Contacts</span>}
          </Link>
          <Link
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              collapsed ? "justify-center" : "",
            )}
          >
            <Settings className="h-4 w-4" />
            {!collapsed && <span>Settings</span>}
          </Link>
        </nav>
      </div>
      <div className="mt-auto p-4">
        <div className={cn("flex items-center gap-3 rounded-lg", collapsed ? "justify-center" : "")}>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
            <User className="h-4 w-4 text-primary" />
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
