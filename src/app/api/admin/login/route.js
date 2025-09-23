/* Admin login: check env credentials, set signed cookie */
import { NextResponse } from "next/server"
import crypto from "crypto"

function tokenFromEnv() {
  const user = process.env.ADMIN_USER || "admin"
  const pass = process.env.ADMIN_PASS || "admin"
  return crypto.createHash("sha256").update(`${user}:${pass}`).digest("hex")
}

export async function POST(req) {
  const { username, password } = await req.json()
  const user = process.env.ADMIN_USER || "admin"
  const pass = process.env.ADMIN_PASS || "admin"
  if (username !== user || password !== pass) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  const token = tokenFromEnv()
  const base = {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8, // 8h
  }
  res.cookies.set("yombly_admin", "1", base)
  res.cookies.set("admin_session", token, base)
  return res
}
