"use client"
import { useState } from "react"

export default function AdminCaseStudyForm({ onCreated }) {
  const [form, setForm] = useState({ title: "", description: "", pdfUrl: "" })
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMsg("")
    try {
      const res = await fetch("/api/case-studies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Failed to create case study")
      setForm({ title: "", description: "", pdfUrl: "" })
      setMsg("Case study added.")
      onCreated?.()
    } catch (err) {
      setMsg("Error: " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-4">
      <div className="grid gap-3">
        <input
          required
          placeholder="Title"
          className="rounded-md bg-background/60 px-3 py-2 outline-none border border-white/10"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          required
          placeholder="Description"
          className="rounded-md bg-background/60 px-3 py-2 outline-none border border-white/10"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          required
          placeholder="PDF URL (https://...)"
          className="rounded-md bg-background/60 px-3 py-2 outline-none border border-white/10"
          value={form.pdfUrl}
          onChange={(e) => setForm({ ...form, pdfUrl: e.target.value })}
        />
      </div>
      <div className="mt-3 flex items-center gap-3">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex rounded-md bg-primary px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Saving..." : "Add Case Study"}
        </button>
        {msg && <span className="text-sm text-foreground/80">{msg}</span>}
      </div>
    </form>
  )
}
