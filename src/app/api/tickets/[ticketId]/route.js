import { NextResponse } from "next/server";
import  dbConnect  from "../../../../lib/mongodb";
import Ticket from "../../../../models/Ticket";

export async function GET(_req, { params }) {
  try {
    await dbConnect();
    const { ticketId } = params;

    if (!ticketId) {
      return NextResponse.json({ error: "Ticket ID required" }, { status: 400 });
    }

    const ticket = await Ticket.findOne({ ticketId }).lean();
    if (!ticket) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Only send essential fields
    const { email, phone, subject, status, replies, createdAt, updatedAt } = ticket;
    return NextResponse.json({
      ticket: { ticketId, email, phone, subject, status, replies, createdAt, updatedAt },
    });
  } catch (err) {
    console.error("[Ticket GET Detail] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
