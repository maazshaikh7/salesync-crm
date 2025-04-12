"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DealForm } from "@/components/deals/deal-form"
import { useData } from "@/context/data-context"
import type { Deal } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EditDealPage() {
  const params = useParams()
  const router = useRouter()
  const { getDealById } = useData()
  const [deal, setDeal] = useState<Deal | null>(null)

  useEffect(() => {
    if (params.id) {
      const foundDeal = getDealById(params.id as string)
      if (foundDeal) {
        setDeal(foundDeal)
      } else {
        router.push("/deals")
      }
    }
  }, [params.id, getDealById, router])

  if (!deal) {
    return null
  }

  return (
    <DashboardShell>
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Edit Deal</h1>
      </div>
      <DealForm deal={deal} />
    </DashboardShell>
  )
}
