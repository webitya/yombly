"use client"

import { useState } from "react"
import { Send } from "@mui/icons-material"
import { MdEmail, MdCall, MdSubject } from "react-icons/md"

export default function RaiseTicketForm() {
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      email: form.get("email"),
      phone: form.get("phone"),
      subject: form.get("subject"),
      message: form.get("message"),
    }
    setLoading(true)
    try {
      const res = await fetch("/api/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed")
      setDone({ ticketId: data.ticketId })
      e.currentTarget.reset()
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-6 text-foreground">
        <h3 className="text-xl font-semibold">Ticket Created</h3>
        <p className="mt-2 text-sm opacity-80">
          Your ticket ID is <span className="font-mono font-semibold text-emerald-500">{done.ticketId}</span>. Keep it
          safe to track updates on the Track Ticket page.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-6 text-foreground"
    >
      <h3 className="text-xl font-semibold">Raise a Support Ticket</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-background/40 px-3 py-2">
          <MdEmail className="text-emerald-500" />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full bg-transparent outline-none placeholder:opacity-60"
          />
        </label>
        <label className="flex items-center gap-2 rounded-lg border border-white/10 bg-background/40 px-3 py-2">
          <MdCall className="text-emerald-500" />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            className="w-full bg-transparent outline-none placeholder:opacity-60"
          />
        </label>
        <label className="md:col-span-2 flex items-center gap-2 rounded-lg border border-white/10 bg-background/40 px-3 py-2">
          <MdSubject className="text-emerald-500" />
          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full bg-transparent outline-none placeholder:opacity-60"
          />
        </label>
        <textarea
          name="message"
          required
          placeholder="Describe your issue..."
          className="md:col-span-2 min-h-[120px] rounded-lg border border-white/10 bg-background/40 p-3 outline-none placeholder:opacity-60"
        />
      </div>
      <button
        disabled={loading}
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
      >
        <Send fontSize="small" /> {loading ? "Submitting..." : "Submit Ticket"}
      </button>
    </form>
  )
}
