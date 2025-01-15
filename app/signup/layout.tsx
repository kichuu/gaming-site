import "@/styles/globals.css"

import React from "react"
import { Metadata } from "next"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Signup - Your Site Name",
  description: "Log in to access your account on Your Site Name.",
  keywords: ["Signup", "authentication", "Next.js"],
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-[#121212] text-secondary-foreground">
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
