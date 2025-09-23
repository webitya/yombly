import { cookies } from "next/headers"
import crypto from "crypto"

export const ADMIN_COOKIE = "yombly_admin"

export function isAdminRequest() {
  const c = cookies()
  const flag = c.get(ADMIN_COOKIE)?.value === "1"
  const session = c.get("admin_session")?.value
  const token = tokenFromEnv()
  return flag || (session && session === token)
}

function tokenFromEnv() {
  const user = process.env.ADMIN_USER || "admin"
  const pass = process.env.ADMIN_PASS || "admin"
  return crypto.createHash("sha256").update(`${user}:${pass}`).digest("hex")
}

export function adminCookieOptions() {
  const secure = process.env.NODE_ENV === "production"
  return {
    name: ADMIN_COOKIE,
    value: "1",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure,
    maxAge: 60 * 60 * 24, // 1 day
  }
}
