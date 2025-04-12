import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { RecentActivities } from "@/components/dashboard/recent-activities"
import { SalesFunnel } from "@/components/dashboard/sales-funnel"
import { TopDeals } from "@/components/dashboard/top-deals"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Dashboard" text="Overview of your sales performance and activities." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-4">
        <div className="col-span-4">
          <SalesFunnel />
        </div>
        <div className="col-span-3">
          <TopDeals />
        </div>
      </div>
      <div className="mt-4">
        <RecentActivities />
      </div>
    </DashboardShell>
  )
}
