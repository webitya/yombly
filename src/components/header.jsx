/* new header with logo, nav, and glassmorphism */
"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "@mui/icons-material"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto max-w-7xl px-4 py-3 rounded-b-xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/yombly-logo.png" alt="Yombly logo" width={28} height={28} className="rounded-sm" />
            <span className="font-semibold tracking-tight">Yombly</span>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/sales-syllabus" className="hover:text-[var(--primary)]">
              Sales Syllabus
            </Link>
            <Link href="/marketcrew" className="hover:text-[var(--primary)]">
              MarketCrew
            </Link>
            <Link href="/exactiq" className="hover:text-[var(--primary)]">
              ExactIQ
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)]">
              About
            </Link>
            <Link href="/blogs" className="hover:text-[var(--primary)]">
              Blogs
            </Link>
            <Link href="/resources" className="hover:text-[var(--primary)]">
              Resources
            </Link>
            <Link href="/case-studies" className="hover:text-[var(--primary)]">
              Case Studies
            </Link>
            <Link
              href="/tickets/track"
              className="px-3 py-1 rounded-md border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Track Ticket
            </Link>
            <Link
              href="/tickets/raise"
              className="px-4 py-2 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)]"
            >
              Raise Ticket
            </Link>
          </nav>
          <button aria-label="Open Menu" className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mt-3 md:hidden flex flex-col gap-3 text-sm" aria-label="Mobile Primary Navigation">
            <Link href="/sales-syllabus" onClick={() => setOpen(false)}>
              Sales Syllabus
            </Link>
            <Link href="/marketcrew" onClick={() => setOpen(false)}>
              MarketCrew
            </Link>
            <Link href="/exactiq" onClick={() => setOpen(false)}>
              ExactIQ
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/blogs" onClick={() => setOpen(false)}>
              Blogs
            </Link>
            <Link href="/resources" onClick={() => setOpen(false)}>
              Resources
            </Link>
            <Link href="/case-studies" onClick={() => setOpen(false)}>
              Case Studies
            </Link>
            <Link
              href="/tickets/track"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md border border-[var(--border)] text-center"
            >
              Track Ticket
            </Link>
            <Link
              href="/tickets/raise"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] text-center"
            >
              Raise Ticket
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
