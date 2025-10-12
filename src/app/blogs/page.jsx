"use client";

import Header from "../../components/header";
import BlogList from "../../components/blogs/BlogList";
import Footer from "../../components/footer";

export default function BlogsPage() {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      <Header />

      <main className="mx-auto max-w-6xl px-4 py-12">
        {/* Page Header */}
        <header className="mb-8 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Blog
          </h1>
          <p className="mt-2 text-gray-600 text-base md:text-lg">
            Explore our latest articles, insights, and updates.
          </p>
        </header>

        {/* Structured Data for SEO */}
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

        {/* Blog List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BlogList />
        </div>
      </main>

      <Footer />
    </>
  );
}
