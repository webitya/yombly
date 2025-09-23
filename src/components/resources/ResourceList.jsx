"use client"
import useSWR from "swr"
import { FiFileText } from "react-icons/fi"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function ResourceList() {
  const { data, error, isLoading } = useSWR("/api/resources", fetcher)

  if (isLoading) return <p className="text-muted-foreground">Loading resources...</p>
  if (error) return <p className="text-destructive">Failed to load resources.</p>

  const items = data?.items || []
  if (!items.length) return <p className="text-muted-foreground">No resources yet.</p>

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((r) => (
        <article key={r._id} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-4 shadow-lg">
          <h3 className="text-lg font-semibold text-foreground text-pretty">{r.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">{r.description}</p>
          <a
            href={r.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-primary underline underline-offset-4"
          >
            <FiFileText className="text-primary" />
            <span>View PDF</span>
          </a>
        </article>
      ))}
    </div>
  )
}
