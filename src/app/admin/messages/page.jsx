"use client"

import { useEffect, useState } from "react"
import useSWR from "swr"
import Footer from "../../../components/footer"
import AdminShortcutDrawer from "../../../components/admin/AdminShortcutDrawer"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function AdminMessagesPage() {
  const { data, mutate, isLoading } = useSWR("/api/admin/messages", fetcher)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (data?.items) setMessages(data.items)
  }, [data])

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Messages</h1>

        <div className="space-y-4">
          {messages.length ? messages.map((m) => (
            <div key={m._id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">{new Date(m.createdAt).toLocaleString()}</div>
                <span className="text-xs font-medium text-gray-600">{m.email}</span>
              </div>
              <h2 className="mt-1 text-lg font-medium text-gray-800">{m.name}</h2>
              <p className="mt-2 text-gray-700">{m.message}</p>
            </div>
          )) : (
            <p className="text-gray-500">No messages yet.</p>
          )}
        </div>
      </section>

      <Footer />
      <AdminShortcutDrawer />
    </main>
  )
}
