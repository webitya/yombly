/* Mongoose singleton connection */
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("[v0] Missing MONGODB_URI environment variable");
}

// Global cache for hot-reload in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Create a new Mongoose connection promise
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // Recommended for serverless
      // useNewUrlParser and useUnifiedTopology are default in latest Mongoose
    }).then((mongooseInstance) => mongooseInstance);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
export { dbConnect as connectDB };
