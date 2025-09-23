"use client"

import { useState } from "react"
import useSWR from "swr"
import TicketThread from "./TicketThread"
import { MdSearch } from "react-icons/md"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function TrackTicketSearch() {
  const [ticketId, setTicketId] = useState("")
  const { data, error, isLoading, mutate } = useSWR(ticketId ? `/api/tickets/${ticketId}` : null, fetcher)

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
        <div className="mt-6">
          <TicketThread ticket={data.ticket} />
        </div>
      )}
    </div>
  )
}
