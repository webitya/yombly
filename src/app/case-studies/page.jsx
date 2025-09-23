import CaseStudyList from "../../components/case-studies/CaseStudyList"

export const metadata = {
  title: "Case Studies | Yombly",
  description: "Explore results and stories from our clients.",
  openGraph: {
    title: "Case Studies | Yombly",
    description: "Explore results and stories from our clients.",
    url: "/case-studies",
    images: ["/open-graph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Yombly",
    description: "Explore results and stories from our clients.",
    images: ["/open-graph-image.jpg"],
  },
  alternates: { canonical: "/case-studies" },
  robots: { index: true, follow: true },
}

export const revalidate = 60

export default function CaseStudiesPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return (
    <main className="container mx-auto max-w-5xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground text-balance">Case Studies</h1>
        <p className="mt-2 text-foreground/80">Explore results and stories from our clients.</p>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Yombly Case Studies",
            description: "Explore results and stories from our clients.",
            url: `${site}/case-studies`,
          }),
        }}
      />
      <CaseStudyList />
    </main>
  )
}
