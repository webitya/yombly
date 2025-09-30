"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

export default function AdminShortcutDrawer({ enableShortcut = false }) {
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  // Only mount once
  useEffect(() => {
    if (typeof window !== "undefined" && window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__) {
      setMounted(false)
      return
    }
    if (typeof window !== "undefined") window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__ = true
    setMounted(true)
    return () => {
      if (typeof window !== "undefined") window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__ = false
    }
  }, [])

  const close = useCallback(() => setOpen(false), [])
  const onKeyDown = useCallback(
    (e) => {
      if (!enableShortcut) return
      if (e.key === "Escape") close()
      if (e.ctrlKey && e.key.toLowerCase() === "k") setOpen(true) // Optional shortcut: Ctrl+K
    },
    [close, enableShortcut]
  )

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [onKeyDown])

  if (!mounted) return null

  const links = [
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Blogs", href: "/admin/blogs" },
    { label: "Resources", href: "/admin/resources" },
    { label: "Tickets", href: "/admin/tickets" },
    { label: "Messages", href: "/admin/messages" },
    { label: "Subscribers", href: "/admin/newsletter" },
    { label: "Case Studies", href: "/admin/case-studies" },
  ]

  return (
    <>
      {/* Floating Button */}
      <button
        type="button"
        aria-label="Open admin shortcuts"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-[9999] h-12 w-12 flex items-center justify-center rounded-full bg-green-600 text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z" />
        </svg>
      </button>

      {/* Overlay */}
      {open && <div onClick={close} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-full w-72 max-w-[90vw] bg-white text-gray-800 shadow-xl z-[10000] border-l border-gray-200 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">Shortcuts</h2>
          <button
            onClick={close}
            className="rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
            aria-label="Close shortcuts"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.225 4.811A1 1 0 0 1 7.64 3.396L12 7.757l4.36-4.36a1 1 0 0 1 1.415 1.414L13.414 9.17l4.36 4.36a1 1 0 1 1-1.415 1.415L12 10.586l-4.36 4.36a1 1 0 1 1-1.415-1.415l4.36-4.36-4.36-4.36z" />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block rounded-md px-3 py-2 hover:bg-green-50 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-200 pt-4 space-y-2">
            <Link href="/" className="block rounded-md px-3 py-2 hover:bg-green-50 transition">
              View Site
            </Link>
            <Link href="/admin/login" className="block rounded-md px-3 py-2 hover:bg-green-50 transition">
              Sign Out
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}
