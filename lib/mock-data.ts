import { v4 as uuidv4 } from "uuid"
import type { Contact, Deal, Task } from "@/types"

export function generateMockData() {
  const now = new Date().toISOString()

  // Generate mock contacts
  const contacts: Contact[] = [
    {
      id: uuidv4(),
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "(555) 123-4567",
      company: "Acme Inc",
      jobTitle: "Marketing Director",
      address: "123 Main St, New York, NY",
      notes: "Met at the tech conference last month.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
      phone: "(555) 987-6543",
      company: "TechCorp",
      jobTitle: "CTO",
      address: "456 Tech Ave, San Francisco, CA",
      notes: "Interested in our enterprise solution.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      name: "Michael Chen",
      email: "mchen@innovate.io",
      phone: "(555) 456-7890",
      company: "Innovate.io",
      jobTitle: "CEO",
      address: "789 Innovation Blvd, Austin, TX",
      notes: "Startup founder looking for growth solutions.",
      createdAt: now,
    },
  ]

  // Generate mock deals
  const deals: Deal[] = [
    {
      id: uuidv4(),
      name: "Enterprise Software Package",
      value: 75000,
      stage: "Proposal",
      contactId: contacts[0].id,
      expectedCloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      notes: "Needs custom integration with their existing systems.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      name: "Cloud Migration Project",
      value: 120000,
      stage: "Negotiation",
      contactId: contacts[1].id,
      expectedCloseDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString(),
      notes: "Competing with two other vendors.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      name: "Marketing Automation Tool",
      value: 45000,
      stage: "Qualified",
      contactId: contacts[2].id,
      expectedCloseDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000).toISOString(),
      notes: "Looking for a solution to scale their marketing efforts.",
      createdAt: now,
    },
  ]

  // Generate mock tasks
  const tasks: Task[] = [
    {
      id: uuidv4(),
      title: "Follow up with John about proposal",
      status: "Not Started",
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
      contactId: contacts[0].id,
      dealId: deals[0].id,
      description: "Send updated pricing and timeline.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      title: "Schedule demo with TechCorp team",
      status: "In Progress",
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      contactId: contacts[1].id,
      dealId: deals[1].id,
      description: "Prepare custom demo focusing on migration features.",
      createdAt: now,
    },
    {
      id: uuidv4(),
      title: "Send case studies to Michael",
      status: "Completed",
      dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      contactId: contacts[2].id,
      dealId: deals[2].id,
      description: "Share success stories from similar startups.",
      createdAt: now,
    },
  ]

  return { contacts, deals, tasks }
}
