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
 <>
 
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 tracking-tight">
          Inbox Messages
        </h1>

        {isLoading ? (
          <p className="text-gray-500 text-sm">Loading messages...</p>
        ) : messages.length ? (
          <div className="space-y-4">
            {messages.map((m) => (
              <div
                key={m._id}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{new Date(m.createdAt).toLocaleString()}</span>
                  <span className="text-gray-600 font-medium">{m.email}</span>
                </div>

                <div className="mt-2 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {m.name}
                  </h2>
                  {m.service && (
                    <span className="text-xs bg-blue-50 text-blue-700 font-medium px-3 py-1 rounded-full border border-blue-100">
                      {m.service}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-gray-700 leading-relaxed">{m.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No messages yet.</p>
        )}
      </section>

   
      <AdminShortcutDrawer />
    </main>
    <Footer/>
 </>
  )
}
