"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useData } from "@/context/data-context"
import { Users, DollarSign, BarChart3, CheckCircle } from "lucide-react"

export function DashboardStats() {
  const { contacts, deals, tasks } = useData()

  const totalContacts = contacts.length
  const totalDeals = deals.length
  const totalRevenue = deals.reduce((sum, deal) => {
    if (deal.stage === "Closed Won") {
      return sum + deal.value
    }
    return sum
  }, 0)
  const completedTasks = tasks.filter((task) => task.status === "Completed").length

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalContacts}</div>
          <p className="text-xs text-muted-foreground">
            {totalContacts > 0 ? "+1 since last month" : "No contacts yet"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {totalRevenue > 0 ? "+20% from last month" : "No revenue yet"}
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDeals}</div>
          <p className="text-xs text-muted-foreground">{totalDeals > 0 ? "+2 since last week" : "No deals yet"}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedTasks}</div>
          <p className="text-xs text-muted-foreground">
            {completedTasks > 0 ? "+5 since yesterday" : "No completed tasks"}
          </p>
        </CardContent>
      </Card>
    </>
  )
}
