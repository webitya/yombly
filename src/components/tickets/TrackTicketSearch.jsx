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
      mutate()
      alert("Your reply has been sent to admin.")
    } catch (err) {
      alert(err.message)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Track Ticket</h3>

      {/* Ticket ID Input */}
      <div className="mt-4 flex gap-2">
        <input
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value.trim())}
          placeholder="Enter your Ticket ID, e.g., YOMBLY-ABC12345"
          className="flex-1 rounded-md border border-gray-200 bg-gray-50 px-3 py-2 outline-none placeholder-gray-400 text-gray-800 hover:bg-gray-100 transition-colors"
        />
        <button
          onClick={() => mutate()}
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 transition-all"
        >
          <MdSearch /> Search
        </button>
      </div>

      {/* Status Messages */}
      {isLoading && <p className="mt-4 text-sm text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-sm text-red-500">Not found</p>}

      {/* Ticket Thread */}
      {data?.ticket && (
        <div className="mt-6 space-y-4">
          <TicketThread ticket={data.ticket} />

          {/* Reply form if ticket is open */}
          {data.ticket.status !== "closed" && (
            <div className="rounded-md border border-gray-200 bg-gray-50 p-4 shadow-sm">
              <h4 className="font-semibold text-gray-800">Reply to Ticket</h4>
              <textarea
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
                placeholder="Write your reply..."
                className="mt-2 min-h-[100px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 outline-none placeholder-gray-400 text-gray-800 hover:bg-gray-100 transition-colors resize-none"
              />
              <button
                onClick={sendReply}
                disabled={sending}
                className="mt-2 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50 transition-all"
              >
                <MdSend /> {sending ? "Sending..." : "Send Reply"}
              </button>
            </div>
          )}

          {/* Closed Ticket Message */}
          {data.ticket.status === "closed" && (
            <p className="text-sm text-red-500">This ticket is closed. You cannot reply anymore.</p>
          )}
        </div>
      )}
    </div>
  )
}
