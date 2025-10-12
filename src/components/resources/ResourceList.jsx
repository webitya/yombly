"use client";

import useSWR from "swr";
import { FiFileText } from "react-icons/fi";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function ResourceList() {
  const { data, error, isLoading } = useSWR("/api/resources", fetcher);

  if (isLoading)
    return <p className="text-sm text-gray-500">Loading resources...</p>;
  if (error)
    return <p className="text-sm text-red-500">Failed to load resources.</p>;

  const items = data?.items || [];
  if (!items.length)
    return <p className="text-sm text-gray-500">No resources available.</p>;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((r) => (
        <article
          key={r._id}
          className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white/50 backdrop-blur-md p-4 shadow hover:shadow-lg transition-shadow"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{r.title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
              {r.description}
            </p>
          </div>
          <a
            href={r.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            <FiFileText className="text-blue-600" />
            <span>View PDF</span>
          </a>
        </article>
      ))}
    </div>
  );
}
