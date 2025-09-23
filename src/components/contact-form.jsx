"use client"
import { useState } from "react"
import { FiMail } from "react-icons/fi"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed")
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus("error")
      console.log("[] contact error:", err.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="px-4 py-3 rounded-md bg-white/60 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          required
          placeholder="Your email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="px-4 py-3 rounded-md bg-white/60 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <textarea
        required
        placeholder="How can we help?"
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 rounded-md bg-white/60 text-slate-700 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <FiMail size={16} />
        <span>Send Message</span>
      </button>
      {status === "success" && <div className="text-sm text-green-700">Thanks! We’ll reach you soon.</div>}
      {status === "error" && <div className="text-sm text-red-600">Something went wrong. Try again.</div>}
    </form>
  )
}
