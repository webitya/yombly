export default function TicketThread({ ticket }) {
  return (
    <div className="rounded-xl border border-white/10 bg-background/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="font-semibold">Ticket {ticket.ticketId}</h4>
          <p className="text-sm opacity-70">{ticket.subject}</p>
        </div>
        <span className="rounded-full bg-emerald-600/15 px-3 py-1 text-sm font-medium text-emerald-600">
          {ticket.status}
        </span>
      </div>
      <ul className="mt-4 space-y-3">
        {ticket.replies?.map((r, idx) => (
          <li key={idx} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wide opacity-70">{r.by === "admin" ? "Admin" : "You"}</span>
              <time className="text-xs opacity-60">{new Date(r.createdAt).toLocaleString()}</time>
            </div>
            <p className="mt-1 text-sm leading-relaxed">{r.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
