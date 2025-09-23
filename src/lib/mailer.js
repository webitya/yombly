import nodemailer from "nodemailer"

function getTransporter() {
  const host = process.env.EMAIL_HOST
  const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS

  if (!user || !pass) {
    console.log("Yombly Missing EMAIL_USER or EMAIL_PASS")
  }

  // If a host is provided, use SMTP host; otherwise fallback to a common service-less config
  return nodemailer.createTransport({
    host: host || "smtp.gmail.com",
    port,
    secure: false,
    auth: { user, pass },
  })
}

export async function sendUserConfirmation({ to, ticketId, subject }) {
  const transporter = getTransporter()
  const text = `Thank you for contacting us.\n\nYour ticket has been created.\nTicket ID: ${ticketId}\nSubject: ${subject}\n\nWe will reach you soon.\n— Yombly Support`
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to,
    subject: `Yombly Support • Ticket ${ticketId}`,
    text,
  })
}

export async function sendAdminAlert({ ticketId, email, phone, subject, message }) {
  const transporter = getTransporter()
  const adminTo = process.env.ADMIN_ALERT_TO || process.env.EMAIL_USER
  const text = `New ticket received\n\nTicket ID: ${ticketId}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\n\nMessage:\n${message}`
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to: adminTo,
    subject: `New Ticket • ${ticketId}`,
    text,
  })
}

export async function sendAdminReplyEmail({ to, ticketId, message }) {
  const transporter = getTransporter()
  const text = `Update on your Yombly ticket ${ticketId}\n\n${message}\n\nYou can track your ticket using this ID at our website.\n— Yombly Support`
  await transporter.sendMail({
    from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
    to,
    subject: `Update • Ticket ${ticketId}`,
    text,
  })
}
