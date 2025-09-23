"use client"
import useSWR from "swr"
import { useState, useEffect } from "react"
import BlogCard from "./BlogCard"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function BlogList() {
  const [query, setQuery] = useState({ q: "", tag: "", category: "" })
  const [url, setUrl] = useState("/api/blogs?limit=12")
  const { data, isLoading } = useSWR(url, fetcher)

  useEffect(() => {
    const params = new URLSearchParams()
    if (query.q) params.set("q", query.q)
    if (query.tag) params.set("tag", query.tag)
    if (query.category) params.set("category", query.category)
    params.set("limit", "12")
    setUrl(`/api/blogs?${params.toString()}`)
  }, [query])

  return (
    <section className="w-full">
      <div className="mb-4">
        {/* Inline filter component to avoid circular deps */}
        <InlineFilters onChange={setQuery} />
      </div>
      {isLoading ? (
        <p className="text-sm text-foreground/70">Loading blogs...</p>
      ) : data?.items?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.items.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-foreground/70">No blogs found.</p>
      )}
    </section>
  )
}

function InlineFilters({ onChange }) {
  const [q, setQ] = useState("")
  const [tag, setTag] = useState("")
  const [category, setCategory] = useState("")
  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          type="text"
          placeholder="Search blog..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md bg-background/60 border border-white/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          onClick={() => onChange({ q, tag, category })}
          className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm"
        >
          Apply
        </button>
      </div>
    </div>
  )
}
