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

interface DeleteContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  contactId: string
}

export function DeleteContactDialog({ open, onOpenChange, contactId }: DeleteContactDialogProps) {
  const { deleteContact } = useData()
  const router = useRouter()

  const handleDelete = () => {
    deleteContact(contactId)
    onOpenChange(false)
    router.push("/contacts")
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the contact and all associated data.
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
