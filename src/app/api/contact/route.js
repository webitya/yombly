/* Collect contact, send thank-you to user and alert to admin via Nodemailer */
import { NextResponse } from "next/server"
import { dbConnect } from "../../../lib/mongodb"
import Message from "../../../models/Message"
import nodemailer from "nodemailer"

async function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com"
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  if (!user || !pass) {
    console.log("[v0] Missing EMAIL_USER/EMAIL_PASS")
  }
  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: { user, pass },
  })
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, email, message } = body || {}
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await dbConnect()
    const saved = await Message.create({ name, email, message })

    // Send emails
    const transporter = await getTransporter()
    const brand = "Yombly"
    const userMsg = `Hi ${name},\n\nThank you for contacting us. We will reach you soon.\n\n— ${brand}`
    const adminTo = process.env.ADMIN_ALERT_TO || process.env.EMAIL_USER

    await transporter.sendMail({
      from: `"${brand}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `${brand} — Thanks for contacting us`,
      text: userMsg,
    })

    await transporter.sendMail({
      from: `"${brand} Alerts" <${process.env.EMAIL_USER}>`,
      to: adminTo,
      subject: `${brand} — New Contact Message`,
      text: `New message from ${name} <${email}>\n\n${message}\n\nMessage ID: ${saved._id}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log("[v0] contact POST error:", err.message)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
