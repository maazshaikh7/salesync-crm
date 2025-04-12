"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BarChart3, Users, DollarSign, CheckSquare, Settings } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setOpen(false)}>
            <BarChart3 className="h-6 w-6" />
            <span className="font-bold">SaleSync</span>
          </Link>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/dashboard"
              className={cn(
                "flex items-center gap-x-2 text-lg font-medium transition-colors hover:text-foreground/80",
                pathname === "/dashboard" ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/contacts"
              className={cn(
                "flex items-center gap-x-2 text-lg font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/contacts") ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              <Users className="h-5 w-5" />
              <span>Contacts</span>
            </Link>
            <Link
              href="/deals"
              className={cn(
                "flex items-center gap-x-2 text-lg font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/deals") ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              <DollarSign className="h-5 w-5" />
              <span>Deals</span>
            </Link>
            <Link
              href="/tasks"
              className={cn(
                "flex items-center gap-x-2 text-lg font-medium transition-colors hover:text-foreground/80",
                pathname?.startsWith("/tasks") ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              <CheckSquare className="h-5 w-5" />
              <span>Tasks</span>
            </Link>
            <Link
              href="/settings"
              className={cn(
                "flex items-center gap-x-2 text-lg font-medium transition-colors hover:text-foreground/80",
                pathname === "/settings" ? "text-foreground" : "text-foreground/60",
              )}
              onClick={() => setOpen(false)}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
