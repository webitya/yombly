import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import AdminCaseStudiesClient from "../../../components/admin/AdminCaseStudiesClient"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"

export default function AdminCaseStudiesPage() {
  const c = cookies()
  const isAdmin = Boolean(c.get("yombly_admin") || c.get("admin_session"))
  if (!isAdmin) redirect("/admin")

  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Admin · Case Studies</h1>
      </header>
      <AdminCaseStudiesClient />
      <AdminShortcutDrawer />
    </main>
  )
}
