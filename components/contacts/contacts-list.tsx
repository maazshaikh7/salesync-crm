"use client"

import { useData } from "@/context/data-context"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PenSquare, Trash } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { DeleteContactDialog } from "./delete-contact-dialog"

export function ContactsList() {
  const { contacts, filterText } = useData()
  const router = useRouter()
  const [contactToDelete, setContactToDelete] = useState<string | null>(null)

  const filteredContacts = contacts.filter((contact) => {
    if (!filterText) return true
    const searchText = filterText.toLowerCase()
    return (
      contact.name.toLowerCase().includes(searchText) ||
      contact.email.toLowerCase().includes(searchText) ||
      contact.company.toLowerCase().includes(searchText) ||
      contact.phone.toLowerCase().includes(searchText)
    )
  })

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden md:table-cell">Phone</TableHead>
              <TableHead className="hidden md:table-cell">Company</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell
                    className="font-medium cursor-pointer hover:underline"
                    onClick={() => router.push(`/contacts/${contact.id}`)}
                  >
                    {contact.name}
                  </TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{contact.phone}</TableCell>
                  <TableCell className="hidden md:table-cell">{contact.company}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => router.push(`/contacts/edit/${contact.id}`)}>
                        <PenSquare className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => setContactToDelete(contact.id)}>
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DeleteContactDialog
        open={!!contactToDelete}
        onOpenChange={(open) => {
          if (!open) setContactToDelete(null)
        }}
        contactId={contactToDelete || ""}
      />
    </>
  )
}
