import { NextResponse } from "next/server"
import dbConnect from "../../../lib/mongodb"
import Subscriber from "../../../models/Subscriber"
import nodemailer from "nodemailer"

async function getTransporter() {
  const host = process.env.EMAIL_HOST
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!host || !user || !pass) {
    throw new Error("Missing email environment variables")
  }

  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: { user, pass },
  })
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    await dbConnect()

    // Upsert subscriber (no duplicates)
    await Subscriber.updateOne({ email }, { $setOnInsert: { email } }, { upsert: true })

    const transporter = await getTransporter()
    const brand = "Yombly"

    try {
      await transporter.sendMail({
        from: `"${brand}" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `${brand} — Newsletter Subscription`,
        text: `Thanks for subscribing to ${brand}!`,
        html: `<p>Thanks for subscribing to <strong>${brand}</strong>!</p>`,
      })
    } catch (mailErr) {
      console.warn("[Newsletter] Email send failed:", mailErr.message)
    }

    return NextResponse.json({ ok: true, message: "Subscribed successfully!" })
  } catch (err) {
    console.error("[Newsletter POST] error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
