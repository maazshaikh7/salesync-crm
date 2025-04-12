import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { DataProvider } from "@/context/data-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SaleSync CRM",
  description: "Streamline your sales process with SaleSync CRM",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DataProvider>{children}</DataProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'