"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { TaskForm } from "@/components/tasks/task-form"
import { useData } from "@/context/data-context"
import type { Task } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EditTaskPage() {
  const params = useParams()
  const router = useRouter()
  const { getTaskById } = useData()
  const [task, setTask] = useState<Task | null>(null)

  useEffect(() => {
    if (params.id) {
      const foundTask = getTaskById(params.id as string)
      if (foundTask) {
        setTask(foundTask)
      } else {
        router.push("/tasks")
      }
    }
  }, [params.id, getTaskById, router])

  if (!task) {
    return null
  }

  return (
    <DashboardShell>
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Edit Task</h1>
      </div>
      <TaskForm task={task} />
    </DashboardShell>
  )
}
