"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function BlogList() {
  const [query, setQuery] = useState({ q: "", tag: "", category: "" });
  const [url, setUrl] = useState("/api/blogs?limit=12");
  const { data, isLoading } = useSWR(url, fetcher);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.q) params.set("q", query.q);
    if (query.tag) params.set("tag", query.tag);
    if (query.category) params.set("category", query.category);
    params.set("limit", "12");
    setUrl(`/api/blogs?${params.toString()}`);
  }, [query]);

  return (
    <section className="w-full">
      {/* Filters */}
      {/* <div className="mb-6">
        <InlineFilters onChange={setQuery} />
      </div> */}

      {/* Blog Grid */}
      {isLoading ? (
        <p className="text-sm text-gray-500">Loading blogs...</p>
      ) : data?.items?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No blogs found.</p>
      )}
    </section>
  );
}

function InlineFilters({ onChange }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <input
          type="text"
          placeholder="Search blog..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={() => onChange({ q, tag, category })}
          className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
