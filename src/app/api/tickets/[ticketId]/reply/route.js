import { NextResponse } from "next/server";
import { dbConnect } from "../../../../../lib/mongodb";
import Ticket from "../../../../../models/Ticket";
import { isAdminRequest } from "../../../../../lib/admin-auth";
import { sendAdminReplyEmail } from "../../../../../lib/mailer";

export async function POST(req, { params }) {
  try {
    if (!isAdminRequest()) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { ticketId } = params;
    if (!ticketId) {
      return NextResponse.json({ error: "Ticket ID required" }, { status: 400 });
    }

    const { message, status } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message required" }, { status: 400 });
    }

    const ticket = await Ticket.findOne({ ticketId });
    if (!ticket) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    // Append admin reply
    ticket.replies.push({ by: "admin", message });
    
    // Update status if valid
    if (status && ["open", "pending", "closed"].includes(status)) {
      ticket.status = status;
    }

    await ticket.save();

    // Send confirmation email to user, fail silently if email fails
    try {
      await sendAdminReplyEmail({ to: ticket.email, ticketId, message });
    } catch (e) {
      console.error("[Ticket Reply Email Error]:", e?.message);
    }

    return NextResponse.json({ ok: true, ticketId });
  } catch (err) {
    console.error("[Ticket Reply POST Error]:", err?.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
