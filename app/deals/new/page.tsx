import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DealForm } from "@/components/deals/deal-form"

export default function NewDealPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Add New Deal</h1>
      </div>
      <DealForm />
    </DashboardShell>
  )
}
