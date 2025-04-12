"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useData } from "@/context/data-context"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function SalesFunnel() {
  const { deals } = useData()

  const stageData = [
    { name: "Lead", value: 0 },
    { name: "Qualified", value: 0 },
    { name: "Proposal", value: 0 },
    { name: "Negotiation", value: 0 },
    { name: "Closed Won", value: 0 },
    { name: "Closed Lost", value: 0 },
  ]

  deals.forEach((deal) => {
    const stageIndex = stageData.findIndex((s) => s.name === deal.stage)
    if (stageIndex !== -1) {
      stageData[stageIndex].value += 1
    }
  })

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Sales Funnel</CardTitle>
        <CardDescription>Distribution of deals across sales stages</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={stageData}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip />
            <Bar dataKey="value" fill="#adfa1d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
