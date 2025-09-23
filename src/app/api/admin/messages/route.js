/* list messages for admin */
import { NextResponse } from "next/server"
import { dbConnect } from "../../../../lib/mongodb"
import Message from "../../../../models/Message"
import { requireAdmin } from "../_guard"

export async function GET() {
  try {
    requireAdmin()
    await dbConnect()
    const items = await Message.find().sort({ createdAt: -1 }).limit(200).lean()
    return NextResponse.json({ items })
  } catch (e) {
    const status = e.message === "Unauthorized" ? 401 : 500
    return NextResponse.json({ error: e.message }, { status })
  }
}
