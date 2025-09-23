import mongoose from "mongoose"

const CaseStudySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    pdfUrl: { type: String, required: true, trim: true },
  },
  { timestamps: true },
)

export default mongoose.models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema)
