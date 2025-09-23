import { NextResponse } from "next/server";
import { dbConnect } from "../../../lib/mongodb";
import Message from "../../../models/Message";
import nodemailer from "nodemailer";

async function getTransporter() {
  const host = process.env.EMAIL_HOST || "smtp.gmail.com";
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variables");
  }

  return nodemailer.createTransport({
    host,
    port: 465,
    secure: true,
    auth: { user, pass },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await dbConnect();
    const saved = await Message.create({ name, email, message });

    const transporter = await getTransporter();
    const brand = "Yombly";
    const adminTo = process.env.ADMIN_ALERT_TO || process.env.EMAIL_USER;

    // Email to user
    await transporter.sendMail({
      from: `"${brand}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `${brand} — Thanks for contacting us`,
      text: `Hi ${name},\n\nThank you for contacting us. We will reach you soon.\n\n— ${brand}`,
      html: `<p>Hi ${name},</p><p>Thank you for contacting us. We will reach you soon.</p><p>— ${brand}</p>`,
    });

    // Email to admin
    await transporter.sendMail({
      from: `"${brand} Alerts" <${process.env.EMAIL_USER}>`,
      to: adminTo,
      subject: `${brand} — New Contact Message`,
      text: `New message from ${name} <${email}>\n\n${message}\n\nMessage ID: ${saved._id}`,
      html: `<p>New message from <strong>${name}</strong> &lt;${email}&gt;</p><p>${message}</p><p>Message ID: ${saved._id}</p>`,
    });

    return NextResponse.json({ ok: true, messageId: saved._id });
  } catch (err) {
    console.error("[Contact POST] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
