/* Mongoose singleton connection */
import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.log("[v0] Missing MONGODB_URI env var")
}

let cached = global.mongoose
if (!cached) cached = global.mongoose = { conn: null, promise: null }

export async function dbConnect() {
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((m) => m)
  }
  cached.conn = await cached.promise
  return cached.conn
}

export { dbConnect as connectDB }
export default dbConnect
