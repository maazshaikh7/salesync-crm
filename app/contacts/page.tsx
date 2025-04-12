import { ContactsHeader } from "@/components/contacts/contacts-header"
import { ContactsList } from "@/components/contacts/contacts-list"
import { DashboardShell } from "@/components/dashboard/dashboard-shell"

export default function ContactsPage() {
  return (
    <DashboardShell>
      <ContactsHeader />
      <ContactsList />
    </DashboardShell>
  )
}
