import { DashboardShell } from "@/components/dashboard/dashboard-shell"
import { ContactForm } from "@/components/contacts/contact-form"

export default function NewContactPage() {
  return (
    <DashboardShell>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Add New Contact</h1>
      </div>
      <ContactForm />
    </DashboardShell>
  )
}
