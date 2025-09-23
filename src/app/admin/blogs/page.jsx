"use client"
import useSWR from "swr"
import AdminBlogForm from "../../../components/admin/AdminBlogForm"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function AdminBlogsPage() {
  const { data, isLoading } = useSWR("/api/blogs?limit=20", fetcher)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <header>
        <h1 className="text-2xl font-bold">Admin • Blogs</h1>
        <p className="text-foreground/70">Create and manage blog posts.</p>
      </header>
      <AdminBlogForm />
      <AdminShortcutDrawer /> {/* mount the drawer */}
      <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
        <h3 className="text-lg font-semibold mb-3">Recent Posts</h3>
        {isLoading ? (
          <p className="text-sm text-foreground/70">Loading...</p>
        ) : data?.items?.length ? (
          <ul className="space-y-2">
            {data.items.map((p) => (
              <li key={p._id} className="flex items-center justify-between text-sm">
                <div className="flex-1">
                  <span className="font-medium">{p.title}</span>
                  <span className="ml-2 text-foreground/60">({p.status})</span>
                </div>
                <code className="px-2 py-1 rounded bg-black/30 border border-white/10">{p.slug}</code>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-foreground/70">No posts yet.</p>
        )}
      </section>
    </main>
  )
}
