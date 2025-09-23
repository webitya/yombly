import mongoose from "mongoose"

const ReplySchema = new mongoose.Schema(
  {
    by: { type: String, enum: ["user", "admin"], required: true },
    message: { type: String, required: true },
  },
  { _id: false, timestamps: { createdAt: true, updatedAt: false } },
)

const TicketSchema = new mongoose.Schema(
  {
    ticketId: { type: String, unique: true, index: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, enum: ["open", "pending", "closed"], default: "open" },
    replies: { type: [ReplySchema], default: [] },
  },
  { timestamps: true },
)

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema)
