import mongoose from "mongoose"

const ResourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    pdfUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

export default mongoose.models.Resource || mongoose.model("Resource", ResourceSchema)
