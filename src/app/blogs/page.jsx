import BlogList from "../../components/blogs/BlogList"

export const metadata = {
  title: "Blog | Yombly",
  description: "Insights, case notes, and news from Yombly.",
  openGraph: {
    title: "Blog | Yombly",
    description: "Insights, case notes, and news from Yombly.",
    url: "/blogs",
    images: ["/images/yombly-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Yombly",
    description: "Insights, case notes, and news from Yombly.",
    images: ["/images/yombly-logo.png"],
  },
  alternates: { canonical: "/blogs" },
  robots: { index: true, follow: true },
}

export const revalidate = 60

export default function BlogsPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-balance">Our Blog</h1>
        <p className="text-foreground/70 mt-2">Explore our latest articles, insights, and updates.</p>
      </header>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Yombly Blog",
            description: "Insights, case notes, and news from Yombly.",
            url: `${site}/blogs`,
          }),
        }}
      />
      <BlogList />
    </main>
  )
}
