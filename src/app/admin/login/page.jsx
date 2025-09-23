"use client"

import { useState } from "react"

export default function Page() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = { username: form.get("username"), password: form.get("password") }
    setLoading(true)
    try {
      const r = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await r.json()
      if (!r.ok) throw new Error(data?.error || "Login failed")
      window.location.href = "/admin/dashboard"
    } catch (e) {
      alert(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-sm px-4 py-16">
      <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="mb-4 text-2xl font-bold text-gray-900">Admin Login</h1>
        <input
          name="username"
          placeholder="Admin username"
          className="mb-3 w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none placeholder:text-gray-400 focus:border-blue-500"
        />
        <input
          name="password"
          type="password"
          placeholder="Admin password"
          className="mb-4 w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none placeholder:text-gray-400 focus:border-blue-500"
        />
        <button
          disabled={loading}
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </main>
  )
}
