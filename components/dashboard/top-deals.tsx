"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useData } from "@/context/data-context"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

export function TopDeals() {
  const { deals } = useData()
  const router = useRouter()

  // Get top 5 deals by value that are not closed
  const topDeals = [...deals]
    .filter((deal) => deal.stage !== "Closed Lost" && deal.stage !== "Closed Won")
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  function getStageColor(stage: string) {
    switch (stage) {
      case "Lead":
        return "bg-blue-500"
      case "Qualified":
        return "bg-indigo-500"
      case "Proposal":
        return "bg-purple-500"
      case "Negotiation":
        return "bg-amber-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Deals</CardTitle>
        <CardDescription>Your highest value active opportunities</CardDescription>
      </CardHeader>
      <CardContent>
        {topDeals.length > 0 ? (
          <div className="space-y-4">
            {topDeals.map((deal) => (
              <div
                key={deal.id}
                className="flex items-center justify-between p-2 border rounded cursor-pointer hover:bg-accent"
                onClick={() => router.push(`/deals/${deal.id}`)}
              >
                <div>
                  <div className="font-medium">{deal.name}</div>
                  <div className="text-sm text-muted-foreground">${deal.value.toLocaleString()}</div>
                </div>
                <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-muted-foreground">
            No active deals yet. Create your first deal to see it here.
          </div>
        )}
      </CardContent>
    </Card>
  )
}
