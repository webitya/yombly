/* list subscribers for admin */
import { NextResponse } from "next/server"
import { dbConnect } from "../../../../lib/mongodb"
import Subscriber from "../../../../models/Subscriber"
import { requireAdmin } from "../_guard"

export async function GET() {
  try {
    requireAdmin()
    await dbConnect()
    const items = await Subscriber.find().sort({ createdAt: -1 }).limit(500).lean()
    return NextResponse.json({ items })
  } catch (e) {
    const status = e.message === "Unauthorized" ? 401 : 500
    return NextResponse.json({ error: e.message }, { status })
  }
}
