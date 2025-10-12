"use client";

import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <Link href={`/blogs/${post.slug}`} className="block group">
        {/* Blog Image */}
        {post.imageUrl ? (
          <img
            src={post.imageUrl || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-40 object-cover rounded-lg mb-3 transition-transform duration-300 group-hover:scale-105"
          />
        ) : null}

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900/90 group-hover:text-blue-600 transition-colors duration-300">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600/80 mt-1 line-clamp-2">
          {post.description}
        </p>

        {/* Tags */}
        {Array.isArray(post.tags) && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
