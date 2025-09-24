"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "@mui/icons-material"
import MobileDrawer from "./MobileDrawer"

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: "/sales-syllabus", label: "Sales Syllabus" },
    { href: "/marketcrew", label: "MarketCrew" },
    { href: "/exactiq", label: "ExactIQ" },
     { href: "/revenue-pilot", label: "Revenue Pilot" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
    { href: "/case-studies", label: "Case Studies" },
  ]

  return (
    <header className="sticky top-0 z-50">
      <div className="glass mx-auto max-w-7xl px-4 py-3 rounded-b-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/yombly-logo.png"
              alt="Yombly logo"
              width={28}
              height={28}
              className="rounded-sm"
            />
            <span className="font-semibold tracking-tight">Yombly</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--primary)]">
                {link.label}
              </Link>
            ))}

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

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} setOpen={setOpen} navLinks={navLinks} />
    </header>
  )
}
