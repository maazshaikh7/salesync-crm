"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import type { Contact, Deal, Task, Settings } from "@/types"
import { generateMockData } from "@/lib/mock-data"

interface DataContextType {
  contacts: Contact[]
  deals: Deal[]
  tasks: Task[]
  settings: Settings
  filterText: string
  addContact: (contact: Omit<Contact, "id" | "createdAt">) => void
  updateContact: (contact: Contact) => void
  deleteContact: (id: string) => void
  getContactById: (id: string) => Contact | undefined
  addDeal: (deal: Omit<Deal, "id" | "createdAt">) => void
  updateDeal: (deal: Deal) => void
  deleteDeal: (id: string) => void
  getDealById: (id: string) => Deal | undefined
  addTask: (task: Omit<Task, "id" | "createdAt">) => void
  updateTask: (task: Task) => void
  deleteTask: (id: string) => void
  getTaskById: (id: string) => Task | undefined
  updateSettings: (settings: Settings) => void
  setFilterText: (text: string) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [deals, setDeals] = useState<Deal[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [settings, setSettings] = useState<Settings>({
    companyName: "SaleSync",
    email: "admin@salesync.com",
    darkMode: false,
    emailNotifications: true,
  })
  const [filterText, setFilterText] = useState("")
  const [initialized, setInitialized] = useState(false)

  // Initialize with mock data or load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined" && !initialized) {
      const storedContacts = localStorage.getItem("salesync_contacts")
      const storedDeals = localStorage.getItem("salesync_deals")
      const storedTasks = localStorage.getItem("salesync_tasks")
      const storedSettings = localStorage.getItem("salesync_settings")

      if (storedContacts && storedDeals && storedTasks) {
        setContacts(JSON.parse(storedContacts))
        setDeals(JSON.parse(storedDeals))
        setTasks(JSON.parse(storedTasks))
      } else {
        // Generate mock data if no data exists
        const mockData = generateMockData()
        setContacts(mockData.contacts)
        setDeals(mockData.deals)
        setTasks(mockData.tasks)
      }

      if (storedSettings) {
        setSettings(JSON.parse(storedSettings))
      }

      setInitialized(true)
    }
  }, [initialized])

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (initialized && typeof window !== "undefined") {
      localStorage.setItem("salesync_contacts", JSON.stringify(contacts))
      localStorage.setItem("salesync_deals", JSON.stringify(deals))
      localStorage.setItem("salesync_tasks", JSON.stringify(tasks))
      localStorage.setItem("salesync_settings", JSON.stringify(settings))
    }
  }, [contacts, deals, tasks, settings, initialized])

  // Contact functions
  const addContact = (contact: Omit<Contact, "id" | "createdAt">) => {
    const newContact: Contact = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...contact,
    }
    setContacts((prev) => [...prev, newContact])
  }

  const updateContact = (contact: Contact) => {
    setContacts((prev) => prev.map((c) => (c.id === contact.id ? contact : c)))
  }

  const deleteContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id))
    // Also delete related deals and tasks
    setDeals((prev) => prev.filter((d) => d.contactId !== id))
    setTasks((prev) => prev.filter((t) => t.contactId !== id))
  }

  const getContactById = (id: string) => {
    return contacts.find((c) => c.id === id)
  }

  // Deal functions
  const addDeal = (deal: Omit<Deal, "id" | "createdAt">) => {
    const newDeal: Deal = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...deal,
    }
    setDeals((prev) => [...prev, newDeal])
  }

  const updateDeal = (deal: Deal) => {
    setDeals((prev) => prev.map((d) => (d.id === deal.id ? deal : d)))
  }

  const deleteDeal = (id: string) => {
    setDeals((prev) => prev.filter((d) => d.id !== id))
    // Also delete related tasks
    setTasks((prev) => prev.filter((t) => t.dealId !== id))
  }

  const getDealById = (id: string) => {
    return deals.find((d) => d.id === id)
  }

  // Task functions
  const addTask = (task: Omit<Task, "id" | "createdAt">) => {
    const newTask: Task = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...task,
    }
    setTasks((prev) => [...prev, newTask])
  }

  const updateTask = (task: Task) => {
    setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)))
  }

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const getTaskById = (id: string) => {
    return tasks.find((t) => t.id === id)
  }

  // Settings functions
  const updateSettings = (newSettings: Settings) => {
    setSettings(newSettings)
  }

  return (
    <DataContext.Provider
      value={{
        contacts,
        deals,
        tasks,
        settings,
        filterText,
        addContact,
        updateContact,
        deleteContact,
        getContactById,
        addDeal,
        updateDeal,
        deleteDeal,
        getDealById,
        addTask,
        updateTask,
        deleteTask,
        getTaskById,
        updateSettings,
        setFilterText,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}
