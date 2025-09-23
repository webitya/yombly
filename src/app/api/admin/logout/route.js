/* clear admin cookie */
import { NextResponse } from "next/server"
export async function POST() {
  const res = NextResponse.json({ ok: true })
  const base = { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" }
  res.cookies.set("yombly_admin", "", { ...base, maxAge: 0 })
  res.cookies.set("admin_session", "", { ...base, maxAge: 0 })
  return res
}
