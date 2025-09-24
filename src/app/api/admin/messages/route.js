/* list messages for admin */
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Message from "../../../../models/Message";
import { requireAdmin } from "../_guard";

export async function GET(request) {
  try {
    // Ensure admin access
    await requireAdmin();

    // Connect to DB
    await dbConnect();

    // Pagination
    const url = new URL(request.url);
    const page = Math.max(1, parseInt(url.searchParams.get("page")) || 1);
    const limit = Math.min(200, parseInt(url.searchParams.get("limit")) || 50);
    const skip = (page - 1) * limit;

    // Fetch messages
    const items = await Message.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    // Count
    const total = await Message.countDocuments();

    return NextResponse.json({ items, total, page, limit });
  } catch (e) {
    console.error("[Admin Messages GET] error:", e);
    const status = e.message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: e.message }, { status });
  }
}
