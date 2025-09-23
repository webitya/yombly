import { isAdminRequest } from "../../lib/admin-auth"
import AdminTicketList from "../../components/tickets/AdminTicketList"
import AdminShortcutDrawer from "../../components/admin/AdminShortcutDrawer"
import { redirect } from "next/navigation"

export const metadata = { title: "Admin • Tickets" }

export default async function Page() {
  // Server guard: redirect to login if not admin
  if (!isAdminRequest()) redirect("/admin/login")

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tickets</h1>
          <p className="opacity-80">Manage conversations and reply to users.</p>
        </div>
        <form action="/api/admin/logout" method="POST">
          <button className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur hover:bg-white/20">
            Logout
          </button>
        </form>
      </header>
      <AdminShortcutDrawer /> {/* mount the drawer */}
      <AdminTicketList />
    </main>
  )
}
