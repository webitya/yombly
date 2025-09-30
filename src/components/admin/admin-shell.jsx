"use client"

import Link from "next/link"
import AdminShortcutDrawer from "./AdminShortcutDrawer"

export default function AdminShell({ children }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur px-6">
        <div className="mx-auto max-w-6xl h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="font-semibold">
              Admin
            </Link>
            <nav className="hidden md:flex items-center gap-3 text-sm">
              <Link href="/admin/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/admin/blogs" className="hover:underline">
                Blogs
              </Link>
              <Link href="/admin/resources" className="hover:underline">
                Resources
              </Link>
              <Link href="/admin/tickets" className="hover:underline">
                Tickets
              </Link>
              <Link href="/admin/messages" className="hover:underline">
                Messages
              </Link>
              <Link href="/admin/newsletter" className="hover:underline">
                Subscribers
              </Link>
              <Link href="/admin/case-studies" className="hover:underline">
                Case Studies
              </Link>
            </nav>
          </div>
          <div className="text-sm">
            <Link href="/" className="hover:underline">
              View site
            </Link>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>

    

      {/* Shortcut Drawer mounted globally */}
      <AdminShortcutDrawer />
    </div>
  )
}
