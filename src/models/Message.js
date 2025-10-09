/* Message model */
import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    service: String,
    message: String,
  },
  { timestamps: true }
)

export default mongoose.models.Message || mongoose.model("Message", MessageSchema)
