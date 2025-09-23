"use client"

import { useState } from "react"
import Link from "next/link"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null)

  async function handleSubscribe(e) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      console.log("[v0] newsletter error:", err.message)
    }
  }

  return (
    <footer className="mt-20 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h3 className="font-semibold text-lg">Yombly</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              Unifying hiring, training, and market intelligence for revenue productivity.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="text-sm">
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2">
              <li><Link href="/marketcrew" className="hover:text-[var(--primary)]">MarketCrew</Link></li>
              <li><Link href="/sales-syllabus" className="hover:text-[var(--primary)]">Sales Syllabus</Link></li>
              <li><Link href="/exactiq" className="hover:text-[var(--primary)]">ExactIQ</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-[var(--primary)]">About</Link></li>
              <li><a href="#contact" className="hover:text-[var(--primary)]">Contact</a></li>
              <li><Link href="/admin" className="hover:text-[var(--primary)]">Admin</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium mb-3">Learn</div>
            <ul className="space-y-2">
              <li><Link href="/blogs" className="hover:text-[var(--primary)]">Blogs</Link></li>
              <li><Link href="/resources" className="hover:text-[var(--primary)]">Resources</Link></li>
              <li><Link href="/case-studies" className="hover:text-[var(--primary)]">Case Studies</Link></li>
            </ul>
          </div>

          <div className="text-sm">
            <div className="font-medium mb-3">Support</div>
            <ul className="space-y-2">
              <li><Link href="/tickets/track" className="hover:text-[var(--primary)]">Track Ticket</Link></li>
              <li><Link href="/tickets/raise" className="hover:text-[var(--primary)]">Raise Ticket</Link></li>
              <li><a href="#contact" className="hover:text-[var(--primary)]">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="mt-8 max-w-md">
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
          {status === "success" && <p className="text-xs text-green-700 mt-2">Subscribed!</p>}
          {status === "error" && <p className="text-xs text-red-600 mt-2">Try again.</p>}
        </div>

        <p className="text-xs text-[var(--muted-foreground)] mt-8">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
