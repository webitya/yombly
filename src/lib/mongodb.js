/* Mongoose singleton connection */
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("[v0] Missing MONGODB_URI environment variable");
}

// Use global object to cache the connection across hot reloads in development
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn; // Return existing connection if available
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false, // Disable Mongoose buffering for faster startup
      // Optional recommended options (latest Mongoose handles these by default)
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    }).then((mongooseInstance) => mongooseInstance);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

// Default export for easy import
export default dbConnect;

// Named export for flexibility
export { dbConnect as connectDB };
