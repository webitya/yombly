"use client"

import { useState } from "react"

export default function AdminReplyBox({ ticketId, onSuccess }) {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("open")
  const [loading, setLoading] = useState(false)

  async function sendReply() {
    if (!message.trim()) return
    setLoading(true)
    try {
      const res = await fetch(`/api/tickets/${ticketId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, status }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed to reply")
      setMessage("")
      onSuccess?.()
      alert("Reply sent and email delivered to user")
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-4">
      <h4 className="font-semibold">Reply to Ticket</h4>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your reply..."
        className="mt-2 min-h-[100px] w-full rounded-lg border border-white/10 bg-background/40 p-3 outline-none placeholder:opacity-60"
      />
      <div className="mt-2 flex items-center gap-3">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-white/10 bg-background/40 px-3 py-2"
        >
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="closed">Closed</option>
        </select>
        <button
          onClick={sendReply}
          disabled={loading}
          className="rounded-md bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reply"}
        </button>
      </div>
      <p className="mt-2 text-xs opacity-70">Users will receive this reply via email automatically.</p>
    </div>
  )
}
