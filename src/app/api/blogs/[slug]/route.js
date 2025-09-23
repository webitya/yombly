import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Blog from "../../../../models/Blog";
import { isAdminRequest } from "../../../../lib/admin-auth";

export async function GET(_req, { params }) {
  const { slug } = params;
  await dbConnect();

  const isAdmin = await isAdminRequest(_req); // ensure async check
  const query = { slug };
  if (!isAdmin) query.status = "published"; // public sees only published

  const item = await Blog.findOne(query).lean();
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PATCH(req, { params }) {
  const isAdmin = await isAdminRequest(req);
  if (!isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = params;
  await dbConnect();
  const updates = await req.json();

  // Prevent slug collisions when updating slug/title
  if (updates.slug) {
    const exists = await Blog.findOne({ slug: updates.slug, _id: { $ne: (await Blog.findOne({ slug }))._id } });
    if (exists) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 409 });
    }
  }

  const item = await Blog.findOneAndUpdate({ slug }, updates, { new: true });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ ok: true, item });
}
