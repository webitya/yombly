import { NextResponse } from "next/server"
import dbConnect from "../../../lib/mongodb"
import Message from "../../../models/Message"
import nodemailer from "nodemailer"

async function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com"
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!user || !pass) throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables")

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
    const { name, email, message, service } = await req.json()
    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    await dbConnect()
    const saved = await Message.create({ name, email, service, message })

    const transporter = await getTransporter()
    const brand = "Yombly"
    const adminTo = process.env.ADMIN_ALERT_TO || process.env.EMAIL_USER

    await transporter.sendMail({
      from: `"${brand}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `${brand} — Thanks for contacting us`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out regarding <strong>${service}</strong>.</p>
        <p>Our team will connect with you shortly.</p>
        <p>— ${brand} Team</p>
      `,
    })

    await transporter.sendMail({
      from: `"${brand} Alerts" <${process.env.EMAIL_USER}>`,
      to: adminTo,
      subject: `${brand} — New Contact Message`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><em>Message ID: ${saved._id}</em></p>
      `,
    })

    return NextResponse.json({ ok: true, messageId: saved._id })
  } catch (err) {
    console.error("[Contact POST] error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    await dbConnect()
    const items = await Message.find().sort({ createdAt: -1 }).lean()
    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [] }, { status: 500 })
  }
}
