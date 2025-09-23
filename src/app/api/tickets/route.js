import { NextResponse } from "next/server"
import { dbConnect } from "../../../lib/mongodb"
import Ticket from "../../../models/Ticket"
import { isAdminRequest } from "../../../lib/admin-auth"
import { sendAdminAlert, sendUserConfirmation } from "../../../lib/mailer"

function genTicketId() {
  // YOMBLY-XXXXXXXX (base36 timestamp + random)
  const ts = Date.now().toString(36).toUpperCase()
  const rand = Math.random().toString(36).slice(2, 10).toUpperCase()
  return `YOMBLY-${ts}${rand}`
}

export async function POST(req) {
  await dbConnect()
  const { email, phone, subject, message } = await req.json()

  if (!email || !phone || !subject || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const ticketId = genTicketId()
  const doc = await Ticket.create({
    ticketId,
    email,
    phone,
    subject,
    message,
    status: "open",
    replies: [{ by: "user", message }],
  })

  try {
    await Promise.all([
      sendUserConfirmation({ to: email, ticketId, subject }),
      sendAdminAlert({ ticketId, email, phone, subject, message }),
    ])
  } catch (e) {
    console.log("[v0] mailer error:", e?.message)
    // continue anyway
  }

  return NextResponse.json({ ok: true, ticketId, id: doc._id })
}

export async function GET() {
  if (!isAdminRequest()) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  await dbConnect()
  const list = await Ticket.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ tickets: list })
}
