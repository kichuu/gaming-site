import "@/styles/globals.css"

import React from "react"
import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Login - Your Site Name",
  description: "Log in to access your account on Your Site Name.",
  keywords: ["login", "authentication", "Next.js"],
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Navbar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
