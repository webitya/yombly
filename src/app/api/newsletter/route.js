import { NextResponse } from "next/server";
import  dbConnect  from "../../../lib/mongodb";
import Subscriber from "../../../models/Subscriber";
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
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    await dbConnect();

    // Upsert subscriber: avoids duplicates
    await Subscriber.updateOne(
      { email },
      { $setOnInsert: { email, createdAt: new Date() } },
      { upsert: true }
    );

    const transporter = await getTransporter();
    const brand = "Yombly";

    await transporter.sendMail({
      from: `"${brand}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `${brand} — Newsletter Subscription`,
      text: `Thanks for subscribing to ${brand}!`,
      html: `<p>Thanks for subscribing to <strong>${brand}</strong>!</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Newsletter POST] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
