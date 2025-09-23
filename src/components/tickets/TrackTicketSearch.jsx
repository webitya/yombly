"use client"

import { useState } from "react"
import useSWR from "swr"
import TicketThread from "./TicketThread"
import { MdSearch, MdSend } from "react-icons/md"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function TrackTicketSearch() {
  const [ticketId, setTicketId] = useState("")
  const [replyMessage, setReplyMessage] = useState("")
  const { data, error, isLoading, mutate } = useSWR(ticketId ? `/api/tickets/${ticketId}` : null, fetcher)
  const [sending, setSending] = useState(false)

  async function sendReply() {
    if (!replyMessage.trim()) return
    setSending(true)
    try {
      const res = await fetch(`/api/tickets/${ticketId}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: replyMessage }),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result?.error || "Failed to send reply")
      setReplyMessage("")
      mutate() // refresh ticket thread
      alert("Your reply has been sent to admin.")
    } catch (err) {
      alert(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-6">
      <h3 className="text-xl font-semibold">Track Ticket</h3>
      <div className="mt-4 flex gap-2">
        <input
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value.trim())}
          placeholder="Enter your Ticket ID, e.g., YOMBLY-ABC12345"
          className="flex-1 rounded-lg border border-white/10 bg-background/40 px-3 py-2 outline-none placeholder:opacity-60"
        />
        <button
          onClick={() => mutate()}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
        >
          <MdSearch /> Search
        </button>
      </div>

      {isLoading && <p className="mt-4 text-sm opacity-80">Loading...</p>}
      {error && <p className="mt-4 text-sm text-red-500">Not found</p>}

      {data?.ticket && (
        <div className="mt-6 space-y-4">
          <TicketThread ticket={data.ticket} />

          {/* Reply form only if ticket is not closed */}
          {data.ticket.status !== "closed" && (
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold">Reply to Ticket</h4>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Write your reply..."
                className="mt-2 min-h-[100px] w-full rounded-lg border border-white/10 bg-background/40 p-3 outline-none placeholder:opacity-60"
              />
              <button
                onClick={sendReply}
                disabled={sending}
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
              >
                <MdSend /> {sending ? "Sending..." : "Send Reply"}
              </button>
            </div>
          )}

          {data.ticket.status === "closed" && (
            <p className="text-sm text-red-500">This ticket is closed. You cannot reply anymore.</p>
          )}
        </div>
      )}
    </div>
  )
}
