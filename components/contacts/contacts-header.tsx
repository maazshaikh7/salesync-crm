"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useData } from "@/context/data-context"

export function ContactsHeader() {
  const router = useRouter()
  const { setFilterText } = useData()
  const [searchText, setSearchText] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchText(value)
    setFilterText(value)
  }

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
        <p className="text-muted-foreground">Manage your contacts and customer relationships</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            className="pl-8 w-full sm:w-[250px] md:w-[300px]"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <Button onClick={() => router.push("/contacts/new")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>
    </div>
  )
}
