"use client"

import useSWR from "swr"
import { useState } from "react"
import TicketThread from "./TicketThread"
import AdminReplyBox from "./AdminReplyBox"
import { MdRefresh } from "react-icons/md"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function AdminTicketList() {
  const { data, mutate, isLoading } = useSWR("/api/tickets", fetcher)
  const [active, setActive] = useState(null)

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Tickets</h3>
          <button
            onClick={() => mutate()}
            className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-white"
          >
            <MdRefresh /> Refresh
          </button>
        </div>
        {isLoading && <p className="mt-4 text-sm opacity-70">Loading...</p>}
        <ul className="mt-3 space-y-2">
          {data?.tickets?.map((t) => (
            <li
              key={t.ticketId}
              onClick={() => setActive(t.ticketId)}
              className={`cursor-pointer rounded-lg border border-white/10 p-3 ${active === t.ticketId ? "bg-emerald-600/20" : "bg-background/40"}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm">{t.ticketId}</span>
                <span className="rounded-full bg-emerald-600/15 px-2 py-0.5 text-xs font-medium text-emerald-600">
                  {t.status}
                </span>
              </div>
              <p className="mt-1 text-sm opacity-80">{t.subject}</p>
              <p className="text-xs opacity-60">
                {t.email} • {t.phone}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 space-y-4">
        {!active && (
          <p className="rounded-xl border border-dashed border-white/15 p-6 opacity-70">
            Select a ticket to view details and reply.
          </p>
        )}
        {active && <AdminTicketDetail ticketId={active} onReplied={() => mutate()} />}
      </div>
    </div>
  )
}

function AdminTicketDetail({ ticketId, onReplied }) {
  const { data, mutate, isLoading } = useSWR(`/api/tickets/${ticketId}`, fetcher)

  async function handleAfterReply() {
    await mutate()
    onReplied?.()
  }

  if (isLoading) return <p className="rounded-xl border border-white/15 p-6 opacity-70">Loading...</p>
  if (!data?.ticket) return <p className="rounded-xl border border-white/15 p-6 text-red-500">Ticket not found</p>

  return (
    <div className="space-y-4">
      <TicketThread ticket={data.ticket} />
      <AdminReplyBox ticketId={ticketId} onSuccess={handleAfterReply} />
    </div>
  )
}
