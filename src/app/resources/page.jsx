import ResourceList from "@/components/resources/ResourceList"

export const metadata = {
  title: "Resources | Yombly",
  description: "Download helpful PDFs and materials from Yombly.",
  openGraph: {
    title: "Resources | Yombly",
    description: "Download helpful PDFs and materials from Yombly.",
    url: "/resources",
    images: ["/open-graph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources | Yombly",
    description: "Download helpful PDFs and materials from Yombly.",
    images: ["/open-graph-image.jpg"],
  },
  alternates: { canonical: "/resources" },
  robots: { index: true, follow: true },
}

export const revalidate = 60

export default function ResourcesPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground text-balance">Resources</h1>
        <p className="mt-2 text-foreground/80">Download helpful PDFs and materials.</p>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Yombly Resources",
            description: "Download helpful PDFs and materials from Yombly.",
            url: `${site}/resources`,
          }),
        }}
      />
      <ResourceList />
    </main>
  )
}
