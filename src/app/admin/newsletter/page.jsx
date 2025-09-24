"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
import Footer from "../../../components/footer"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AdminNewsletterPage() {
  const { data, mutate, isLoading } = useSWR("/api/admin/newsletter", fetcher)
  const [subscribers, setSubscribers] = useState([])

  useEffect(() => {
    if (data?.items) setSubscribers(data.items)
  }, [data])

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Subscribers</h1>

        <div className="space-y-4">
          {subscribers.length ? subscribers.map((s) => (
            <div key={s._id} className="flex justify-between items-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="text-gray-800">{s.email}</div>
              <div className="text-gray-500 text-sm">{new Date(s.createdAt).toLocaleDateString()}</div>
            </div>
          )) : (
            <p className="text-gray-500">No subscribers yet.</p>
          )}
        </div>
      </section>

      <Footer />
      <AdminShortcutDrawer />
    </main>
  )
}
