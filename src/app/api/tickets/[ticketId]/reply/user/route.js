import { NextResponse } from "next/server"
import dbConnect from "../../../../../../lib/mongodb"
import Ticket from "../../../../.././../models/Ticket"

export async function POST(req, { params }) {
  try {
    await dbConnect()
    const { ticketId } = params
    const { message } = await req.json()

    if (!ticketId || !message) {
      return NextResponse.json({ error: "Ticket ID and message required" }, { status: 400 })
    }

    const ticket = await Ticket.findOne({ ticketId })
    if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 })
    if (ticket.status === "closed") return NextResponse.json({ error: "Ticket is closed" }, { status: 400 })

    ticket.replies.push({ by: "user", message })
    await ticket.save()

    return NextResponse.json({ ok: true, ticketId })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
