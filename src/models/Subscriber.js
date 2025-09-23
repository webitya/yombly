/* Subscriber model */
import mongoose from "mongoose"
const SubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true },
  },
  { timestamps: true },
)
export default mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema)
