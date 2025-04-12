import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DealsHeader } from "@/components/deals/deals-header"
import { DealsList } from "@/components/deals/deals-list"

export default function DealsPage() {
  return (
    <DashboardShell>
      <DealsHeader />
      <DealsList />
    </DashboardShell>
  )
}
