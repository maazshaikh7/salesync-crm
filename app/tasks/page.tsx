import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { TasksHeader } from "@/components/tasks/tasks-header"
import { TasksList } from "@/components/tasks/tasks-list"

export default function TasksPage() {
  return (
    <DashboardShell>
      <TasksHeader />
      <TasksList />
    </DashboardShell>
  )
}
