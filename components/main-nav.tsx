"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart3, Users, DollarSign, CheckSquare, Settings } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <BarChart3 className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">SaleSync</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/dashboard"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/dashboard" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <BarChart3 className="h-4 w-4" />
            <span>Dashboard</span>
          </div>
        </Link>
        <Link
          href="/contacts"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/contacts") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <Users className="h-4 w-4" />
            <span>Contacts</span>
          </div>
        </Link>
        <Link
          href="/deals"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/deals") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <DollarSign className="h-4 w-4" />
            <span>Deals</span>
          </div>
        </Link>
        <Link
          href="/tasks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/tasks") ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <CheckSquare className="h-4 w-4" />
            <span>Tasks</span>
          </div>
        </Link>
        <Link
          href="/settings"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/settings" ? "text-foreground" : "text-foreground/60",
          )}
        >
          <div className="flex items-center gap-x-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </div>
        </Link>
      </nav>
    </div>
  )
}
