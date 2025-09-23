import { NextResponse } from "next/server"
import CaseStudy from "../../../models/CaseStudy"
import connectDB from "../../../lib/mongodb"

function isAdminFromCookies(req) {
  const cookie = req.headers.get("cookie") || ""
  return cookie.includes("yombly_admin=") || cookie.includes("admin_session=")
}

export async function GET() {
  await connectDB()
  const items = await CaseStudy.find({}).sort({ createdAt: -1 }).lean()
  return NextResponse.json({ items })
}

export async function POST(req) {
  if (!isAdminFromCookies(req)) {
    return new NextResponse("Unauthorized", { status: 401 })
  }
  await connectDB()
  const { title, description, pdfUrl } = await req.json()
  if (!title || !description || !pdfUrl) {
    return new NextResponse("Missing fields", { status: 400 })
  }
  const created = await CaseStudy.create({ title, description, pdfUrl })
  return NextResponse.json({ item: created }, { status: 201 })
}
