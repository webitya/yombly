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
      <div className="rounded-xl border border-gray-300 bg-white p-6 text-gray-800 shadow-md">
        <h3 className="text-xl font-semibold">Ticket Created</h3>
        <p className="mt-2 text-sm text-gray-600">
          Your ticket ID is{" "}
          <span className="font-mono font-semibold text-green-600">{done.ticketId}</span>. Keep it
          safe to track updates on the Track Ticket page.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-gray-300 bg-white p-6 text-gray-800 shadow-md"
    >
      <h3 className="text-xl font-semibold">Raise a Support Ticket</h3>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {/* Email */}
        <label className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 hover:bg-gray-100 transition-colors">
          <MdEmail className="text-blue-600 text-lg" />
          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800"
          />
        </label>

        {/* Phone */}
        <label className="flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 hover:bg-gray-100 transition-colors">
          <MdCall className="text-blue-600 text-lg" />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800"
          />
        </label>

        {/* Subject */}
        <label className="md:col-span-2 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 hover:bg-gray-100 transition-colors">
          <MdSubject className="text-blue-600 text-lg" />
          <input
            name="subject"
            required
            placeholder="Subject"
            className="w-full bg-transparent outline-none placeholder-gray-400 text-gray-800"
          />
        </label>

        {/* Message */}
        <textarea
          name="message"
          required
          placeholder="Describe your issue..."
          className="md:col-span-2 min-h-[120px] rounded-md border border-gray-200 bg-gray-50 px-3 py-2 outline-none placeholder-gray-400 text-gray-800 resize-none hover:bg-gray-100 transition-colors"
        />
      </div>

      <button
        disabled={loading}
        className="mt-4 w-full md:w-auto flex items-center gap-2 justify-center rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-all"
      >
        <Send fontSize="small" /> {loading ? "Submitting..." : "Submit Ticket"}
      </button>
    </form>
  )
}
