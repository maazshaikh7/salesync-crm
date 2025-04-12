export interface Contact {
  id: string
  name: string
  email: string
  phone: string
  company: string
  jobTitle?: string
  address?: string
  notes?: string
  createdAt: string
}

export interface Deal {
  id: string
  name: string
  value: number
  stage: string
  contactId: string
  expectedCloseDate: string
  notes?: string
  createdAt: string
}

export interface Task {
  id: string
  title: string
  status: string
  dueDate: string
  contactId?: string
  dealId?: string
  description?: string
  createdAt: string
}

export interface Settings {
  companyName: string
  email: string
  darkMode: boolean
  emailNotifications: boolean
}
