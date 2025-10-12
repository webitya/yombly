"use client";

import useSWR from "swr";
import { useState, useMemo } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function BlogFilters({ onChange }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");

  // Fetch data to suggest tags/categories
  const { data } = useSWR("/api/blogs?limit=100", fetcher);
  const suggestions = useMemo(() => {
    const tags = new Set();
    const cats = new Set();
    if (data?.items) {
      for (const item of data.items) {
        if (Array.isArray(item.tags)) item.tags.forEach((t) => tags.add(t));
        if (item.category) cats.add(item.category);
      }
    }
    return { tags: Array.from(tags), categories: Array.from(cats) };
  }, [data]);

  return (
    <div className="w-full rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {/* Search */}
        <input
          type="text"
          placeholder="Search blog..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-full rounded-md bg-gray-100 border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Tag */}
        <input
          type="text"
          list="blog-tags"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="w-full rounded-md bg-gray-100 border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <datalist id="blog-tags">
          {suggestions.tags.map((t) => (
            <option value={t} key={t} />
          ))}
        </datalist>

        {/* Category */}
        <input
          type="text"
          list="blog-categories"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-md bg-gray-100 border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <datalist id="blog-categories">
          {suggestions.categories.map((c) => (
            <option value={c} key={c} />
          ))}
        </datalist>

        {/* Apply Button */}
        <button
          onClick={() => onChange({ q, tag, category })}
          className="rounded-md bg-blue-600 text-white px-4 py-2 text-sm hover:bg-blue-700 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
