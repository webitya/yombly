/* list subscribers for admin */
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import Subscriber from "../../../../models/Subscriber";
import { requireAdmin } from "../_guard";

export async function GET(request) {
  try {
    // Ensure admin access
    await requireAdmin();

    // Connect to DB
    await dbConnect();

    // Pagination support
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get("page"), 10) || 1;
    const limit = parseInt(url.searchParams.get("limit"), 10) || 500;
    const skip = (page - 1) * limit;

    // Fetch subscribers (lightweight fields only)
    const items = await Subscriber.find({}, "email createdAt")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Subscriber.countDocuments();

    return NextResponse.json({ items, total, page, limit });
  } catch (e) {
    console.error("[Subscribers GET] error:", e);
    const status = e.message === "Unauthorized" ? 401 : 500;
    return NextResponse.json({ error: e.message }, { status });
  }
}
