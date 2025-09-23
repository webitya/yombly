import { NextResponse } from "next/server"
import { dbConnect } from "../../../../../lib/mongodb"
import Ticket from "../../../../../models/Ticket"
import { isAdminRequest } from "../../../../../lib/admin-auth"
import { sendAdminReplyEmail } from "../../../../../lib/mailer"

export async function POST(req, { params }) {
  if (!isAdminRequest()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  await dbConnect()
  const { ticketId } = params
  const { message, status } = await req.json()
  if (!message) return NextResponse.json({ error: "Message required" }, { status: 400 })

  const ticket = await Ticket.findOne({ ticketId })
  if (!ticket) return NextResponse.json({ error: "Not found" }, { status: 404 })

  ticket.replies.push({ by: "admin", message })
  if (status && ["open", "pending", "closed"].includes(status)) {
    ticket.status = status
  }
  await ticket.save()

  try {
    await sendAdminReplyEmail({ to: ticket.email, ticketId, message })
  } catch (e) {
    console.log("[v0] reply email error:", e?.message)
  }

  return NextResponse.json({ ok: true })
}
