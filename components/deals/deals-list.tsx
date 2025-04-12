"use client"

import { useData } from "@/context/data-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PenSquare, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteDealDialog } from "./delete-deal-dialog"
import { Badge } from "@/components/ui/badge"

export function DealsList() {
  const { deals, contacts, filterText } = useData()
  const router = useRouter()
  const [dealToDelete, setDealToDelete] = useState<string | null>(null)

  const filteredDeals = deals.filter((deal) => {
    if (!filterText) return true
    const searchText = filterText.toLowerCase()
    return (
      deal.name.toLowerCase().includes(searchText) ||
      deal.stage.toLowerCase().includes(searchText) ||
      deal.value.toString().includes(searchText) ||
      (contacts.find((c) => c.id === deal.contactId)?.name || "").toLowerCase().includes(searchText)
    )
  })

  function getStageColor(stage: string) {
    switch (stage) {
      case "Lead":
        return "bg-blue-500"
      case "Qualified":
        return "bg-indigo-500"
      case "Proposal":
        return "bg-purple-500"
      case "Negotiation":
        return "bg-amber-500"
      case "Closed Won":
        return "bg-green-500"
      case "Closed Lost":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Stage</TableHead>
              <TableHead>Value</TableHead>
              <TableHead className="hidden md:table-cell">Contact</TableHead>
              <TableHead className="hidden md:table-cell">Expected Close</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredDeals.length > 0 ? (
              filteredDeals.map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell
                    className="font-medium cursor-pointer hover:underline"
                    onClick={() => router.push(`/deals/${deal.id}`)}
                  >
                    {deal.name}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStageColor(deal.stage)}>{deal.stage}</Badge>
                  </TableCell>
                  <TableCell>${deal.value.toLocaleString()}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {contacts.find((c) => c.id === deal.contactId)?.name || "Unknown"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(deal.expectedCloseDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => router.push(`/deals/edit/${deal.id}`)}>
                        <PenSquare className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => setDealToDelete(deal.id)}>
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No deals found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteDealDialog
        open={!!dealToDelete}
        onOpenChange={(open) => {
          if (!open) setDealToDelete(null)
        }}
        dealId={dealToDelete || ""}
      />
    </>
  )
}
