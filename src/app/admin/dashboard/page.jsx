/* Admin Dashboard - Glassmorphic Light Business Look */
import Footer from "../../../components/footer"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function getJSON(path, type = "default", cookieHeader = "") {
  try {
    const res = await fetch(path, {
      cache: "no-store",
      headers: cookieHeader ? { cookie: cookieHeader } : undefined,
    })
    if (!res.ok) return { items: [], total: 0 }

    const data = await res.json()
    switch (type) {
      case "tickets":
        return { items: data.tickets ?? [], total: (data.tickets ?? []).length }
      case "messages":
      case "newsletter":
        return { items: data.items ?? [], total: (data.items ?? []).length }
      default:
        if (Array.isArray(data)) return { items: data, total: data.length }
        if (data?.items && Array.isArray(data.items)) return { items: data.items, total: data.total ?? data.items.length }
        return { items: [], total: 0 }
    }
  } catch (err) {
    console.error("getJSON error:", err)
    return { items: [], total: 0 }
  }
}

export default async function AdminDashboardPage() {
  const c = cookies()
  const isAdmin = Boolean(c.get("yombly_admin") || c.get("admin_session"))
  if (!isAdmin) redirect("/admin")

  const base = process.env.NEXT_PUBLIC_BASE_URL || ""
  const cookieHeader = Object.fromEntries(c.getAll().map((c) => [c.name, c.value]))
  const cookieString = Object.entries(cookieHeader).map(([k, v]) => `${k}=${v}`).join("; ")

  const [blogs, resources, tickets, messages, newsletter, caseStudies] =
    await Promise.all([
      getJSON(`${base}/api/blogs`),
      getJSON(`${base}/api/resources`),
      getJSON(`${base}/api/tickets`, "tickets", cookieString),
      getJSON(`${base}/api/admin/messages`, "messages", cookieString),
      getJSON(`${base}/api/admin/newsletter`, "newsletter", cookieString),
      getJSON(`${base}/api/case-studies`),
    ])

  const counts = {
    blogs: blogs.total,
    resources: resources.total,
    tickets: tickets.total,
    messages: messages.total,
    subscribers: newsletter.total,
    caseStudies: caseStudies.total,
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
          <form action="/api/admin/logout" method="post">
            <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition">
              Logout
            </button>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Blogs", value: counts.blogs, href: "/admin/blogs" },
            { label: "Resources", value: counts.resources, href: "/admin/resources" },
            { label: "Tickets", value: counts.tickets, href: "/admin/tickets" },
            { label: "Messages", value: counts.messages, href: "/admin/messages" },
            { label: "Subscribers", value: counts.subscribers, href: "/admin/newsletter" },
            { label: "Case Studies", value: counts.caseStudies, href: "/admin/case-studies" },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              className="block rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-sm text-gray-500">{label}</div>
              <div className="mt-2 text-2xl font-bold text-gray-800">{value ?? 0}</div>
              <div className="mt-2 text-sm text-blue-600 underline">
                {["Tickets", "Messages", "Subscribers"].includes(label) ? "See Latest" : `Manage ${label}`}
              </div>
            </a>
          ))}
        </div>

        {/* Recent Messages & Subscribers */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          {/* Messages */}
          <div id="messages" className="rounded-xl bg-white/50 backdrop-blur-md shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
              Recent Messages
              <span className="text-gray-500 text-sm">{counts.messages}</span>
            </h2>
            <div className="space-y-4">
              {messages.items.length ? messages.items.slice(0, 2).map((m) => (
                <div key={m._id} className="rounded-lg border border-gray-200 bg-white/70 p-4 shadow-sm">
                  <div className="text-sm font-medium text-gray-800">{m.name} — <span className="text-gray-500">{m.email}</span></div>
                  <p className="text-sm mt-1 text-gray-700">{m.message}</p>
                  <div className="text-xs text-gray-400 mt-1">{new Date(m.createdAt).toLocaleString()}</div>
                </div>
              )) : <p className="text-gray-500 text-sm">No messages yet.</p>}
            </div>
          </div>

          {/* Subscribers */}
          <div id="newsletter" className="rounded-xl bg-white/50 backdrop-blur-md shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
              Recent Subscribers
              <span className="text-gray-500 text-sm">{counts.subscribers}</span>
            </h2>
            <div className="space-y-3">
              {newsletter.items.length ? newsletter.items.slice(0, 2).map((s) => (
                <div key={s._id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white/70 p-3 shadow-sm">
                  <div className="text-sm text-gray-800">{s.email}</div>
                  <div className="text-xs text-gray-400">{new Date(s.createdAt).toLocaleDateString()}</div>
                </div>
              )) : <p className="text-gray-500 text-sm">No subscribers yet.</p>}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AdminShortcutDrawer />
    </main>
  )
}
