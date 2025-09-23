"use client"
import { useState } from "react"
import useSWR from "swr"
import { slugify } from "../../lib/slugify"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function AdminBlogForm() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    bodyMarkdown: "",
    imageUrl: "",
    tags: "",
    category: "",
    status: "draft",
    seoTitle: "",
    seoDescription: "",
  })
  const { mutate } = useSWR("/api/blogs?limit=20", fetcher)

  function setField(k, v) {
    setForm((s) => ({ ...s, [k]: v }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    const payload = {
      ...form,
      slug: form.slug || slugify(form.title),
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    }
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (!res.ok) {
      alert(data.error || "Failed to create blog")
      return
    }
    mutate()
    setForm({
      title: "",
      slug: "",
      description: "",
      bodyMarkdown: "",
      imageUrl: "",
      tags: "",
      category: "",
      status: "draft",
      seoTitle: "",
      seoDescription: "",
    })
    alert("Blog created")
  }

  // Simple toolbar to insert Markdown tokens
  function insert(tokenLeft, tokenRight = "") {
    const textarea = document.getElementById("body-md")
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const before = form.bodyMarkdown.slice(0, start)
    const selected = form.bodyMarkdown.slice(start, end)
    const after = form.bodyMarkdown.slice(end)
    const newText = `${before}${tokenLeft}${selected}${tokenRight}${after}`
    setForm((s) => ({ ...s, bodyMarkdown: newText }))
    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = textarea.selectionEnd = start + tokenLeft.length + selected.length + tokenRight.length
    }, 0)
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 space-y-3">
      <h3 className="text-lg font-semibold">Create Blog</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          required
          placeholder="Title"
          value={form.title}
          onChange={(e) => setField("title", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none"
        />
        <input
          placeholder="Slug (optional)"
          value={form.slug}
          onChange={(e) => setField("slug", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none"
        />
        <input
          required
          placeholder="Short Description"
          value={form.description}
          onChange={(e) => setField("description", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none md:col-span-2"
        />
        <input
          placeholder="Image URL"
          value={form.imageUrl}
          onChange={(e) => setField("imageUrl", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none md:col-span-2"
        />
        <input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setField("tags", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none"
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setField("category", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none"
        />
        <select
          value={form.status}
          onChange={(e) => setField("status", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
        <input
          placeholder="SEO Title (optional)"
          value={form.seoTitle}
          onChange={(e) => setField("seoTitle", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none md:col-span-2"
        />
        <input
          placeholder="SEO Description (optional)"
          value={form.seoDescription}
          onChange={(e) => setField("seoDescription", e.target.value)}
          className="rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none md:col-span-2"
        />
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => insert("**", "**")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Bold
          </button>
          <button
            type="button"
            onClick={() => insert("_", "_")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Italic
          </button>
          <button
            type="button"
            onClick={() => insert("- ")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            List
          </button>
          <button
            type="button"
            onClick={() => insert("1. ")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Numbered
          </button>
          <button
            type="button"
            onClick={() => insert("> ")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Quote
          </button>
          <button
            type="button"
            onClick={() => insert("![alt](", ")")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Image
          </button>
          <button
            type="button"
            onClick={() => insert("[text](", ")")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Link
          </button>
          <button
            type="button"
            onClick={() => insert("### ")}
            className="text-xs px-2 py-1 rounded bg-primary/10 border border-primary/20"
          >
            Heading
          </button>
        </div>
        <textarea
          id="body-md"
          required
          rows={10}
          value={form.bodyMarkdown}
          onChange={(e) => setField("bodyMarkdown", e.target.value)}
          placeholder="Write your blog in Markdown (supports bold, italic, lists, links, images, tables via GFM)..."
          className="w-full rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none font-mono"
        />
      </div>

      <div className="flex items-center justify-end gap-2">
        <button type="submit" className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm">
          Save Blog
        </button>
      </div>
    </form>
  )
}
