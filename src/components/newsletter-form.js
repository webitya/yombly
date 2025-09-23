"use client"

import { useState } from "react"
import { FiSend } from "react-icons/fi"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")

      setStatus("success")
      setEmail("")
    } catch (err) {
      setStatus("error")
      console.log("Yombly newsletter error:", err.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={function (e) {
          setEmail(e.target.value)
        }}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-md bg-white/60 text-slate-700 placeholder:text-slate-400 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        aria-label="Subscribe"
      >
        <FiSend size={16} />
      </button>

      {status === "success" && (
        <span className="text-xs text-green-700 ml-2">Subscribed!</span>
      )}
      {status === "error" && (
        <span className="text-xs text-red-600 ml-2">Try again</span>
      )}
    </form>
  )
}
