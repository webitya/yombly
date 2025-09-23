import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, required: true, trim: true },
    bodyMarkdown: { type: String, required: true },
    imageUrl: { type: String, default: "" },
    tags: { type: [String], default: [] },
    category: { type: String, default: "" },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    seoTitle: { type: String, default: "" },
    seoDescription: { type: String, default: "" },
  },
  { timestamps: true }
)

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)
