"use client"

import Link from "next/link"
import { MdClose } from "react-icons/md"

export default function MobileDrawer({ open, setOpen, navLinks }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      } z-50`}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 text-2xl"
        onClick={() => setOpen(false)}
      >
        <MdClose />
      </button>

      {/* Navigation Links */}
      <nav className="mt-16 flex flex-col gap-4 px-6 text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="hover:text-[var(--primary)]"
          >
            {link.label}
          </Link>
        ))}

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
      </nav>
    </div>
  )
}
