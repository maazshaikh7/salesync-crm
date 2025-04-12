"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { useData } from "@/context/data-context"
import type { Contact } from "@/types"
import { ArrowLeft, Mail, Phone, MapPin, Building, Trash, PenSquare } from "lucide-react"
import { ContactActivityList } from "@/components/contacts/contact-activity-list"
import { ContactDeals } from "@/components/contacts/contact-deals"
import { DeleteContactDialog } from "@/components/contacts/delete-contact-dialog"

export default function ContactDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { contacts, getContactById } = useData()
  const [contact, setContact] = useState<Contact | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  useEffect(() => {
    if (params.id) {
      const foundContact = getContactById(params.id as string)
      if (foundContact) {
        setContact(foundContact)
      } else {
        router.push("/contacts")
      }
    }
  }, [params.id, contacts, getContactById, router])

  if (!contact) {
    return null
  }

  return (
    <DashboardShell>
      <div className="flex items-center mb-4">
        <Button variant="ghost" onClick={() => router.back()} className="mr-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-2xl font-bold">Contact Details</h1>
        <div className="ml-auto flex space-x-2">
          <Button variant="outline" onClick={() => router.push(`/contacts/edit/${contact.id}`)}>
            <PenSquare className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="destructive" onClick={() => setShowDeleteDialog(true)}>
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>{contact.name}</CardTitle>
            <CardDescription>
              {contact.jobTitle} at {contact.company}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center">
              <Building className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{contact.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
              <span>{contact.address}</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              Added on {new Date(contact.createdAt).toLocaleDateString()}
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <ContactDeals contactId={contact.id} />
          <ContactActivityList contactId={contact.id} />
        </div>
      </div>

      <DeleteContactDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog} contactId={contact.id} />
    </DashboardShell>
  )
}
