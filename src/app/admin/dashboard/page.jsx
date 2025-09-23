/* Admin dashboard: list messages and subscribers, protected server component */
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function getJSON(path) {
  try {
    const res = await fetch(path, { cache: "no-store" })
    if (!res.ok) return { items: [] }
    return res.json()
  } catch {
    return { items: [] }
  }
}

export default async function AdminDashboardPage() {
  const c = cookies()
  const isAdmin = Boolean(c.get("yombly_admin") || c.get("admin_session"))
  if (!isAdmin) redirect("/admin")

  const base = process.env.NEXT_PUBLIC_BASE_URL || ""
  const [blogs, resources, tickets, messages, newsletter, caseStudies] = await Promise.all([
    getJSON(`${base}/api/blogs`),
    getJSON(`${base}/api/resources`),
    getJSON(`${base}/api/tickets`),
    getJSON(`${base}/api/admin/messages`),
    getJSON(`${base}/api/admin/newsletter`),
    getJSON(`${base}/api/case-studies`),
  ])

  const counts = {
    blogs: blogs?.items?.length || 0,
    resources: resources?.items?.length || 0,
    tickets: tickets?.items?.length || 0,
    messages: messages?.items?.length || 0,
    subscribers: newsletter?.items?.length || 0,
    caseStudies: caseStudies?.items?.length || 0,
  }

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold">Admin Dashboard</h1>
          <form action="/api/admin/logout" method="post">
            <button className="px-4 py-2 rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50">
              Logout
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Blogs</div>
            <div className="mt-1 text-2xl font-bold">{counts.blogs}</div>
            <a href="/admin/blogs" className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline">
              Manage Blogs
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Resources</div>
            <div className="mt-1 text-2xl font-bold">{counts.resources}</div>
            <a href="/admin/resources" className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline">
              Manage Resources
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Tickets</div>
            <div className="mt-1 text-2xl font-bold">{counts.tickets}</div>
            <a href="/admin/tickets" className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline">
              View Tickets
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Messages</div>
            <div className="mt-1 text-2xl font-bold">{counts.messages}</div>
            <a
              href="/admin/dashboard#messages"
              className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline"
            >
              See Latest
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Subscribers</div>
            <div className="mt-1 text-2xl font-bold">{counts.subscribers}</div>
            <a
              href="/admin/dashboard#newsletter"
              className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline"
            >
              See Latest
            </a>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5">
            <div className="text-sm text-gray-500">Case Studies</div>
            <div className="mt-1 text-2xl font-bold">{counts.caseStudies}</div>
            <a href="/admin/case-studies" className="mt-3 inline-block text-blue-600 hover:text-blue-700 underline">
              Manage Case Studies
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="/admin/blogs" className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            New Blog
          </a>
          <a href="/admin/resources" className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            New Resource
          </a>
          <a href="/admin/tickets" className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            View Tickets
          </a>
          <a href="/admin/case-studies" className="rounded-md bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
            New Case Study
          </a>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div id="messages" className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold">Recent Messages ({counts.messages})</h2>
            <div className="mt-4 space-y-4 max-h-[420px] overflow-auto pr-2">
              {(messages?.items || []).slice(0, 8).map((m) => (
                <div key={m._id} className="rounded-md border border-gray-200 p-3 bg-gray-50">
                  <div className="text-sm font-medium">
                    {m.name} — <span className="text-gray-500">{m.email}</span>
                  </div>
                  <p className="text-sm mt-2 text-gray-800">{m.message}</p>
                  <div className="text-xs text-gray-500 mt-1">{new Date(m.createdAt).toLocaleString()}</div>
                </div>
              ))}
              {!counts.messages && <p className="text-sm text-gray-500">No messages yet.</p>}
            </div>
          </div>

          <div id="newsletter" className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="font-semibold">Recent Subscribers ({counts.subscribers})</h2>
            <div className="mt-4 space-y-3 max-h-[420px] overflow-auto pr-2">
              {(newsletter?.items || []).slice(0, 10).map((s) => (
                <div
                  key={s._id}
                  className="flex items-center justify-between rounded-md border border-gray-200 p-3 bg-gray-50"
                >
                  <div className="text-sm text-gray-800">{s.email}</div>
                  <div className="text-xs text-gray-500">{new Date(s.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
              {!counts.subscribers && <p className="text-sm text-gray-500">No subscribers yet.</p>}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <AdminShortcutDrawer />
    </main>
  )
}
