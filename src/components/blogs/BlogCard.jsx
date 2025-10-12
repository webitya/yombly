"use client"
import Link from "next/link"

export default function BlogCard({ post }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/blogs/${post.slug}`} className="block">
        {post.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-40 object-cover rounded-lg mb-3"
          />
        ) : null}
        <h3 className="text-lg font-semibold text-foreground/90">{post.title}</h3>
        <p className="text-sm text-foreground/70 mt-1 line-clamp-2">{post.description}</p>
        {Array.isArray(post.tags) && post.tags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </Link>
    </article>
  )
}
