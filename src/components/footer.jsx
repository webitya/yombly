"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  async function handleSubscribe(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus(null), 4000); // Reset button text after 4s
    } catch (err) {
      setStatus("error");
      console.log("Yombly newsletter error:", err.message);
    }
  }

  // Button text based on status
  const getButtonText = () => {
    if (status === "loading") return "Subscribing...";
    if (status === "success") return "Subscribed!";
    return "Subscribe";
  };

  return (
    <footer className="bg-white shadow-t-md">
      <div className="mx-auto max-w-7xl px-6 py-12 border-t border-gray-200">
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* First Column: Logo & About */}
          <div className="col-span-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-sm text-gray-700">
              Unifying hiring, training, and market intelligence for revenue productivity.
            </p>
          </div>

          {/* Second Column: Services */}
          <div className="text-sm">
            <div className="font-semibold mb-3 text-gray-900">Services</div>
            <ul className="space-y-2">
              <li>
                <Link href="/sales-syllabus" className="text-gray-700 hover:text-green-600 transition">
                  Sales Syllabus
                </Link>
              </li>
              <li>
                <Link href="/marketcrew" className="text-gray-700 hover:text-green-600 transition">
                  MarketCrew
                </Link>
              </li>
              <li>
                <Link href="/exactiq" className="text-gray-700 hover:text-green-600 transition">
                  ExactIQ
                </Link>
              </li>
              <li>
                <Link href="/revenue-pilot" className="text-gray-700 hover:text-green-600 transition">
                  Revenue Pilot
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column: Company */}
          <div className="text-sm">
            <div className="font-semibold mb-3 text-gray-900">Company</div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-green-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-green-600 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-700 hover:text-green-600 transition">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column: Learn & Support */}
          <div className="text-sm">
            <div className="font-semibold mb-3 text-gray-900">Learn & Support</div>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="text-gray-700 hover:text-green-600 transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-700 hover:text-green-600 transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-700 hover:text-green-600 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/tickets/track" className="text-gray-700 hover:text-green-600 transition">
                  Track Ticket
                </Link>
              </li>
              <li>
                <Link href="/tickets/raise" className="text-gray-700 hover:text-green-600 transition">
                  Raise Ticket
                </Link>
              </li>
            </ul>
          </div>

          {/* Fifth Column: Newsletter */}
          <div className="text-sm">
            <div className="font-semibold mb-3 text-gray-900">Newsletter</div>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-sm text-gray-900"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`px-3 py-2 rounded-md bg-green-600 text-white transition shadow
                  ${status === "loading" || status === "success" ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"}`}
              >
                {getButtonText()}
              </button>
            </form>
            {status === "error" && <p className="text-xs text-red-600 mt-2">Try again.</p>}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-900 mt-8 text-center md:text-left">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
