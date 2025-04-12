"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useData } from "@/context/data-context"
import { useRouter } from "next/navigation"

interface DeleteTaskDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  taskId: string
}

export function DeleteTaskDialog({ open, onOpenChange, taskId }: DeleteTaskDialogProps) {
  const { deleteTask } = useData()
  const router = useRouter()

  const handleDelete = () => {
    deleteTask(taskId)
    onOpenChange(false)
    router.push("/tasks")
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the task and all associated data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
