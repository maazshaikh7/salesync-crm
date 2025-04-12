"use client"

import { useData } from "@/context/data-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Clock } from "lucide-react"
import { useRouter } from "next/navigation"

interface ContactActivityListProps {
  contactId: string
}

export function ContactActivityList({ contactId }: ContactActivityListProps) {
  const { tasks } = useData()
  const router = useRouter()

  const contactTasks = tasks
    .filter((task) => task.contactId === contactId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  function getStatusColor(status: string) {
    switch (status) {
      case "Not Started":
        return "bg-gray-500"
      case "In Progress":
        return "bg-blue-500"
      case "Completed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  function getStatusIcon(status: string) {
    switch (status) {
      case "Completed":
        return <CheckCircle2 className="h-4 w-4 mr-1" />
      default:
        return <Clock className="h-4 w-4 mr-1" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        {contactTasks.length > 0 ? (
          <div className="space-y-4">
            {contactTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 border rounded cursor-pointer hover:bg-accent"
                onClick={() => router.push(`/tasks/edit/${task.id}`)}
              >
                <div>
                  <div className="font-medium">{task.title}</div>
                  <div className="text-sm text-muted-foreground">
                    Due: {new Date(task.dueDate).toLocaleDateString()}
                  </div>
                </div>
                <Badge className={`flex items-center ${getStatusColor(task.status)}`}>
                  {getStatusIcon(task.status)}
                  {task.status}
                </Badge>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-4 text-muted-foreground">No activities for this contact yet.</div>
        )}
      </CardContent>
    </Card>
  )
}
