import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Blog from "../../../models/Blog"; // fix: import your Blog model
import { isAdminRequest } from "../../../lib/admin-auth";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim();
  const tag = (searchParams.get("tag") || "").trim();
  const category = (searchParams.get("category") || "").trim();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "12", 10);

  await dbConnect();

  const query = { status: "published" };

  if (q) {
    query.$or = [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } },
    ];
  }
  if (tag) query.tags = { $in: [tag] };
  if (category) query.category = category;

  const skip = (page - 1) * limit;
  const [items, total] = await Promise.all([
    Blog.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
    Blog.countDocuments(query),
  ]);

  return NextResponse.json({
    items,
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  });
}

export async function POST(req) {
  // Admin-only create
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await dbConnect();

  const payload = await req.json();
  const {
    title = "",
    slug = "",
    description = "",
    bodyMarkdown = "",
    imageUrl = "",
    tags = [],
    category = "",
    status = "draft",
    seoTitle = "",
    seoDescription = "",
  } = payload || {};

  if (!title || !description || !bodyMarkdown) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Ensure unique slug
  let finalSlug = (slug || title).toLowerCase().trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

  const exists = await Blog.findOne({ slug: finalSlug });
  if (exists) {
    return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
  }

  const doc = await Blog.create({
    title,
    slug: finalSlug,
    description,
    bodyMarkdown,
    imageUrl,
    tags,
    category,
    status,
    seoTitle,
    seoDescription,
  });

  return NextResponse.json({ ok: true, item: doc }, { status: 201 });
}
