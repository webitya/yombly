import dbConnect from "../../../lib/mongodb"
import Blog from "../../../models/Blog"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function generateMetadata({ params }) {
  await dbConnect()
  const item = await Blog.findOne({ slug: params.slug }).lean()

  if (!item) {
    return { title: "Blog | Yombly", alternates: { canonical: `/blogs/${params.slug}` } }
  }

  const title = item.seoTitle || item.title
  const description = item.seoDescription || item.description
  const image = item.imageUrl || "/open-graph-image.jpg"
  const url = `/blogs/${params.slug}`

  return {
    title,
    description,
    openGraph: { title, description, images: [image], type: "article", url },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    alternates: { canonical: url },
  }
}

export const revalidate = 60

export default async function BlogDetailPage({ params }) {
  await dbConnect()
  const post = await Blog.findOne({ slug: params.slug, status: "published" }).lean()

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Not found</h1>
      </main>
    )
  }

  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const pageUrl = `${site}/blogs/${params.slug}`
  const image = post.imageUrl || "/images/yombly-logo.png"

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image,
            mainEntityOfPage: pageUrl,
            author: { "@type": "Organization", name: "Yombly" },
            publisher: {
              "@type": "Organization",
              name: "Yombly",
              logo: { "@type": "ImageObject", url: `${site}/images/yombly-logo.png` },
            },
          }),
        }}
      />
      <article className="prose prose-invert max-w-none">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-foreground/70 mt-2">{post.description}</p>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-64 object-cover rounded-xl mt-4"
            />
          )}
        </header>
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.bodyMarkdown}</ReactMarkdown>
        </div>
        {post.tags?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </article>
    </main>
  )
}
