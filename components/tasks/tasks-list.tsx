"use client"

import { useData } from "@/context/data-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PenSquare, Trash, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteTaskDialog } from "./delete-task-dialog"
import { Badge } from "@/components/ui/badge"

export function TasksList() {
  const { tasks, contacts, deals, filterText, updateTask } = useData()
  const router = useRouter()
  const [taskToDelete, setTaskToDelete] = useState<string | null>(null)

  const filteredTasks = tasks.filter((task) => {
    if (!filterText) return true
    const searchText = filterText.toLowerCase()
    return (
      task.title.toLowerCase().includes(searchText) ||
      task.status.toLowerCase().includes(searchText) ||
      (contacts.find((c) => c.id === task.contactId)?.name || "").toLowerCase().includes(searchText) ||
      (deals.find((d) => d.id === task.dealId)?.name || "").toLowerCase().includes(searchText)
    )
  })

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

  const handleCompleteTask = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId)
    if (task) {
      updateTask({
        ...task,
        status: "Completed",
      })
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead className="hidden md:table-cell">Related To</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => {
                const contact = contacts.find((c) => c.id === task.contactId)
                const deal = deals.find((d) => d.id === task.dealId)
                const relatedTo = deal ? deal.name : contact ? contact.name : "None"

                return (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.title}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
                    </TableCell>
                    <TableCell>{new Date(task.dueDate).toLocaleDateString()}</TableCell>
                    <TableCell className="hidden md:table-cell">{relatedTo}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {task.status !== "Completed" && (
                          <Button variant="ghost" size="icon" onClick={() => handleCompleteTask(task.id)}>
                            <CheckCircle className="h-4 w-4" />
                            <span className="sr-only">Complete</span>
                          </Button>
                        )}
                        <Button variant="ghost" size="icon" onClick={() => router.push(`/tasks/edit/${task.id}`)}>
                          <PenSquare className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setTaskToDelete(task.id)}>
                          <Trash className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No tasks found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteTaskDialog
        open={!!taskToDelete}
        onOpenChange={(open) => {
          if (!open) setTaskToDelete(null)
        }}
        taskId={taskToDelete || ""}
      />
    </>
  )
}
