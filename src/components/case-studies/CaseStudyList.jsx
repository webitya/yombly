"use client"
import useSWR from "swr"
import { FiFileText } from "react-icons/fi"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function CaseStudyList() {
  const { data, error, isLoading } = useSWR("/api/case-studies", fetcher)

  if (isLoading) return <p className="text-muted-foreground">Loading case studies...</p>
  if (error) return <p className="text-destructive">Failed to load case studies.</p>

  const items = data?.items || []
  if (!items.length) return <p className="text-muted-foreground">No case studies yet.</p>

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((c) => (
        <article key={c._id} className="rounded-xl border border-white/20 bg-white/10 backdrop-blur p-4 shadow-lg">
          <h3 className="text-lg font-semibold text-foreground text-pretty">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">{c.description}</p>
          <a
            href={c.pdfUrl}
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
