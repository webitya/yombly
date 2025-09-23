import { NextResponse } from "next/server"
import { dbConnect } from "../../../lib/mongodb"
import Subscriber from "../../../models/Subscriber"
import nodemailer from "nodemailer"

async function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com"
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  return nodemailer.createTransport({ host, port: 465, secure: true, auth: { user, pass } })
}

export async function POST(req) {
  try {
    const { email } = await req.json()
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 })
    await dbConnect()
    await Subscriber.updateOne({ email }, { $setOnInsert: { email } }, { upsert: true })
    const transporter = await getTransporter()
    const brand = "Yombly"
    await transporter.sendMail({
      from: `"${brand}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `${brand} — Newsletter Subscription`,
      text: `Thanks for subscribing to ${brand}!`,
    })
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.log("[v0] newsletter POST error:", e.message)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
