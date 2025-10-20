"use client"
import { useState } from "react"
import { FiMail, FiLoader } from "react-icons/fi"

const services = [
  "Talent Intelligence Report — a pre-hiring test that predicts on-the-job performance before you hire.",
  "Pre-Screened & Intent-Verified Candidates",
  "Onboarding Program to make new hire ready",
  "Mentoring Solution for your revenue Team",
  "Leadership Development Solution",
  "Sales Performance Enablement",
]


export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" })
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
      setForm({ name: "", email: "", service: "", message: "" })
    } catch {
      setStatus("error")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 text-gray-100"
    >
      <div className="grid md:grid-cols-2 gap-3">
        <input
          type="text"
          required
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input
          type="email"
          required
          placeholder="Work Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <select
        required
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className={`w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
          !form.service ? "text-gray-400" : ""
        }`}
      >
        <option value="">Select a Service</option>
        {services.map((s, i) => (
          <option key={i} value={s} className="text-gray-900">
            {s}
          </option>
        ))}
      </select>

      <textarea
        required
        placeholder="Tell us briefly about your requirement..."
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <FiLoader className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <FiMail />
            Send Message
          </>
        )}
      </button>

      {status === "success" && (
        <div className="text-sm text-green-400 bg-green-900/20 border border-green-700 rounded-lg px-3 py-2">
          ✅ Message sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="text-sm text-red-400 bg-red-900/20 border border-red-700 rounded-lg px-3 py-2">
          ⚠️ Something went wrong. Please try again.
        </div>
      )}
    </form>
  )
}
