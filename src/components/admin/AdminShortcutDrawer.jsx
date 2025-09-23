"use client"

import Link from "next/link"
import { useCallback, useEffect, useState } from "react"

export default function AdminShortcutDrawer() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__) {
      setMounted(false)
      return
    }
    // @ts-ignore
    if (typeof window !== "undefined") window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__ = true
    setMounted(true)
    return () => {
      // @ts-ignore
      if (typeof window !== "undefined") window.__ADMIN_SHORTCUT_DRAWER_MOUNTED__ = false
    }
  }, [])

  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") close()
    },
    [close],
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onKeyDown])

  if (!mounted) return null

  return (
    <>
      {/* Floating action button */}
      <button
        type="button"
        aria-label="Open admin shortcuts"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-[9999] rounded-full bg-primary text-primary-foreground shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring h-12 w-12 flex items-center justify-center"
      >
        <span className="sr-only">Open admin shortcuts</span>
        {/* simple plus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11 5a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5z" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div onClick={close} aria-hidden="true" className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[9998]" />
      )}

      {/* Drawer panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Admin shortcuts"
        className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-background text-foreground shadow-xl z-[10000] border-l border-border transition-transform duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <h2 className="text-base font-semibold">Shortcuts</h2>
          <button
            onClick={close}
            className="rounded-md p-2 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Close shortcuts"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M6.225 4.811A1 1 0 0 1 7.64 3.396L12 7.757l4.36-4.36a1 1 0 0 1 1.415 1.414L13.414 9.17l4.36 4.36a1 1 0 1 1-1.415 1.415L12 10.586l-4.36 4.36a1 1 0 1 1-1.415-1.415l4.36-4.36-4.36-4.36z" />
            </svg>
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/admin/dashboard" className="block rounded-md px-3 py-2 hover:bg-muted">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/blogs" className="block rounded-md px-3 py-2 hover:bg-muted">
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/admin/resources" className="block rounded-md px-3 py-2 hover:bg-muted">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/admin/tickets" className="block rounded-md px-3 py-2 hover:bg-muted">
                Tickets
              </Link>
            </li>
            <li>
              <Link href="/admin/case-studies" className="block rounded-md px-3 py-2 hover:bg-muted">
                Case Studies
              </Link>
            </li>
          </ul>

          <div className="mt-6 border-t border-border pt-4 space-y-2">
            <Link href="/" className="block rounded-md px-3 py-2 hover:bg-muted">
              View Site
            </Link>
            <Link href="/admin/login" className="block rounded-md px-3 py-2 hover:bg-muted">
              Sign Out
            </Link>
          </div>
        </nav>
      </aside>
    </>
  )
}
