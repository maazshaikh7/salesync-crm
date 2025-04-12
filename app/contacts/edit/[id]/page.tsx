"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ContactForm } from "@/components/contacts/contact-form"
import { useData } from "@/context/data-context"
import type { Contact } from "@/types"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function EditContactPage() {
  const params = useParams()
  const router = useRouter()
  const { getContactById } = useData()
  const [contact, setContact] = useState<Contact | null>(null)

  useEffect(() => {
    if (params.id) {
      const foundContact = getContactById(params.id as string)
      if (foundContact) {
        setContact(foundContact)
      } else {
        router.push("/contacts")
      }
    }
  }, [params.id, getContactById, router])

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
        <h1 className="text-2xl font-bold">Edit Contact</h1>
      </div>
      <ContactForm contact={contact} />
    </DashboardShell>
  )
}
