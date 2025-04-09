"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

// Dummy data for call stats
const data = [
  {
    name: "Jan",
    calls: 12,
    duration: 45,
  },
  {
    name: "Feb",
    calls: 18,
    duration: 52,
  },
  {
    name: "Mar",
    calls: 15,
    duration: 38,
  },
  {
    name: "Apr",
    calls: 22,
    duration: 65,
  },
  {
    name: "May",
    calls: 28,
    duration: 72,
  },
  {
    name: "Jun",
    calls: 24,
    duration: 58,
  },
  {
    name: "Jul",
    calls: 30,
    duration: 80,
  },
  {
    name: "Aug",
    calls: 32,
    duration: 85,
  },
  {
    name: "Sep",
    calls: 28,
    duration: 70,
  },
  {
    name: "Oct",
    calls: 25,
    duration: 63,
  },
  {
    name: "Nov",
    calls: 35,
    duration: 90,
  },
  {
    name: "Dec",
    calls: 42,
    duration: 105,
  },
]

export function CallStats() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Line type="monotone" dataKey="calls" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="duration" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
