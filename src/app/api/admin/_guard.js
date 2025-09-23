/* helper to verify admin cookie token */
import { cookies } from "next/headers"
import crypto from "crypto"

function tokenFromEnv() {
  const user = process.env.ADMIN_USER || "admin"
  const pass = process.env.ADMIN_PASS || "admin"
  return crypto.createHash("sha256").update(`${user}:${pass}`).digest("hex")
}

export function requireAdmin() {
  const c = cookies()
  const t = c.get("admin_session")?.value
  if (!t || t !== tokenFromEnv()) {
    throw new Error("Unauthorized")
  }
}
