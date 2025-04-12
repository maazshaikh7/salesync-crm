"use client"

import { useData } from "@/context/data-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

interface ContactDealsProps {
  contactId: string
}

export function ContactDeals({ contactId }: ContactDealsProps) {
  const { deals } = useData()
  const router = useRouter()

  const contactDeals = deals.filter((deal) => deal.contactId === contactId).sort((a, b) => b.value - a.value)

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
      case "Closed Won":
        return "bg-green-500"
      case "Closed Lost":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Deals</CardTitle>
      </CardHeader>
      <CardContent>
        {contactDeals.length > 0 ? (
          <div className="space-y-4">
            {contactDeals.map((deal) => (
              <div
                key={deal.id}
                className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-accent"
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
          <div className="text-center py-4 text-muted-foreground">No deals for this contact yet.</div>
        )}
      </CardContent>
    </Card>
  )
}
