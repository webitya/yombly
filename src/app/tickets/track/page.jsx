import TrackTicketSearch from "../../../components/tickets/TrackTicketSearch"

export const metadata = { title: "Track Ticket • Yombly" }

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Track Your Ticket</h1>
        <p className="mt-2 opacity-80">Enter your ticket ID (e.g., YOMBLY-XXXX...) to view updates and conversation.</p>
      </header>
      <TrackTicketSearch />
    </main>
  )
}
