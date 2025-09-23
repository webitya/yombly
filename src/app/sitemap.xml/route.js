import dbConnect from "../../lib/mongodb";

// Optional: import models if they exist
let Blog, Resource, CaseStudy;
try { Blog = (await import("../../models/Blog")).default } catch {}
try { Resource = (await import("../../models/Resource")).default } catch {}
try { CaseStudy = (await import("../../models/CaseStudy")).default } catch {}

// Helper to generate a single <url> tag
function urlTag(loc, lastmod) {
  return `<url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;
}

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const now = new Date().toISOString();

  // Static routes
  const staticPaths = [
    "/", "/about", "/exactiq", "/marketcrew", "/sales-syllabus",
    "/resources", "/case-studies", "/blogs", "/contact",
  ];

  const dynamic = [];

  try {
    await dbConnect();

    if (Blog) {
      const blogs = await Blog.find({ status: "published" }).select("slug updatedAt").lean();
      blogs.forEach(b => dynamic.push({
        loc: `${base}/blogs/${b.slug}`,
        lastmod: (b.updatedAt || new Date()).toISOString(),
      }));
    }

    if (Resource) {
      const resources = await Resource.find({}).select("_id updatedAt").lean();
      resources.forEach(r => dynamic.push({
        loc: `${base}/resources`,
        lastmod: (r.updatedAt || new Date()).toISOString(),
      }));
    }

    if (CaseStudy) {
      const cases = await CaseStudy.find({}).select("slug updatedAt").lean();
      cases.forEach(c => dynamic.push({
        loc: c.slug ? `${base}/case-studies/${c.slug}` : `${base}/case-studies`,
        lastmod: (c.updatedAt || new Date()).toISOString(),
      }));
    }

  } catch (e) {
    console.log("[] sitemap generation error:", e?.message);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths.map(p => urlTag(`${base}${p}`, now)).join("\n")}
${dynamic.map(d => urlTag(d.loc, d.lastmod)).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
