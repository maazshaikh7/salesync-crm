import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { TaskForm } from "@/components/tasks/task-form"

export default function NewTaskPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Add New Task</h1>
      </div>
      <TaskForm />
    </DashboardShell>
  )
}
