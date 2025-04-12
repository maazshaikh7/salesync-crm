import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { SettingsForm } from "@/components/settings/settings-form"

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <SettingsForm />
    </DashboardShell>
  )
}
