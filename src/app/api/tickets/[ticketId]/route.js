import { NextResponse } from "next/server"
import { dbConnect } from "../../../../lib/mongodb"
import Ticket from "../../../../models/Ticket"

export async function GET(_req, { params }) {
  await dbConnect()
  const { ticketId } = params
  const ticket = await Ticket.findOne({ ticketId }).lean()
  if (!ticket) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json({
    ticket: {
      ticketId: ticket.ticketId,
      email: ticket.email,
      phone: ticket.phone,
      subject: ticket.subject,
      status: ticket.status,
      replies: ticket.replies,
      createdAt: ticket.createdAt,
      updatedAt: ticket.updatedAt,
    },
  })
}
