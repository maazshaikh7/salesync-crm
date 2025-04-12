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

interface DeleteDealDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  dealId: string
}

export function DeleteDealDialog({ open, onOpenChange, dealId }: DeleteDealDialogProps) {
  const { deleteDeal } = useData()
  const router = useRouter()

  const handleDelete = () => {
    deleteDeal(dealId)
    onOpenChange(false)
    router.push("/deals")
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the deal and all associated data.
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
