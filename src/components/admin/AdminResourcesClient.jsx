"use client"

import useSWR from "swr"
import AdminResourceForm from "./AdminResourceForm"

const fetcher = (u) => fetch(u).then((r) => r.json())

export default function AdminResourcesClient() {
  const { data, mutate } = useSWR("/api/resources", fetcher)
  const items = data?.items || []

  return (
    <div className="space-y-6">
      <AdminResourceForm onCreated={() => mutate()} />
      <section>
        <h2 className="text-xl font-semibold mb-3">Existing Resources</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((i) => (
            <article key={i._id} className="rounded-lg border border-white/20 bg-white/10 backdrop-blur p-4">
              <h3 className="font-semibold">{i.title}</h3>
              <p className="text-sm text-foreground/80 mt-1">{i.description}</p>
              <a
                href={i.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline mt-2 inline-block"
              >
                Open PDF
              </a>
            </article>
          ))}
          {!items.length && <p className="text-muted-foreground">No resources yet.</p>}
        </div>
      </section>
    </div>
  )
}
