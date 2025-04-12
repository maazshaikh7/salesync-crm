"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { useData } from "@/context/data-context"
import type { Deal } from "@/types"
import { ArrowLeft, DollarSign, Calendar, User, Briefcase, Trash, PenSquare } from "lucide-react"
import { DealActivities } from "@/components/deals/deal-activities"
import { DeleteDealDialog } from "@/components/deals/delete-deal-dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DealDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { deals, getDealById, getContactById } = useData()
  const [deal, setDeal] = useState<Deal | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    if (params.id) {
      const foundDeal = getDealById(params.id as string)
      if (foundDeal) {
        setDeal(foundDeal)
      } else {
        router.push("/deals")
      }
    }
  }, [params.id, deals, getDealById, router])

  if (!deal) {
    return null
  }

  const contact = getContactById(deal.contactId)
  const stagePercentage = getStagePercentage(deal.stage)

  function getStagePercentage(stage: string) {
    const stages = ["Lead", "Qualified", "Proposal", "Negotiation", "Closed Won", "Closed Lost"]
    const index = stages.indexOf(stage)
    if (index === -1) return 0
    return (index / (stages.length - 2)) * 100
  }

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
    <DashboardShell>
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Deal Details</h1>
        <div className="ml-auto flex space-x-2">
          <Button variant="outline" onClick={() => router.push(`/deals/edit/${deal.id}`)}>
            <PenSquare className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>{deal.name}</CardTitle>
              <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
            </div>
            <CardDescription>Deal value: ${deal.value.toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Progress</div>
              <Progress value={stagePercentage} className="h-2" />
            </div>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>${deal.value.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Expected close: {new Date(deal.expectedCloseDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Contact: {contact ? contact.name : "Unknown"}</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>Company: {contact ? contact.company : "Unknown"}</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Created on {new Date(deal.createdAt).toLocaleDateString()}
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{deal.notes || "No notes available."}</p>
            </CardContent>
          </Card>
          <DealActivities dealId={deal.id} />
        </div>
      </div>

      <DeleteDealDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog} dealId={deal.id} />
    </DashboardShell>
  )
}
