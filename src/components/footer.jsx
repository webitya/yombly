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
      setTimeout(() => setStatus(null), 4000);
    } catch (err) {
      setStatus("error");
      console.log("Newsletter error:", err.message);
    }
  }

  const getButtonText = () => {
    if (status === "loading") return "Subscribing...";
    if (status === "success") return "Subscribed!";
    return "Subscribe";
  };

  const servicesLinks = [
    { href: "/leadership", label: "Leadership" },
    { href: "/mentoring", label: "Mentoring" },
    { href: "/team-building", label: "Team Building" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Column 1: Logo & About */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-gray-400">
              Unifying hiring, training, and market intelligence for revenue productivity.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Company</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/admin", label: "Admin" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Learn & Support */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Learn & Support</h4>
            <ul className="space-y-2">
              {[
                { href: "/blogs", label: "Blogs" },
                { href: "/resources", label: "Resources" },
                { href: "/case-studies", label: "Case Studies" },
                { href: "/tickets/track", label: "Track Ticket" },
                { href: "/tickets/raise", label: "Raise Ticket" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-100">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400 shadow-sm transition"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300
                  ${status === "loading" || status === "success"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-2xl hover:from-purple-600 hover:via-pink-600 hover:to-red-600"}`}
              >
                {getButtonText()}
              </button>
            </form>
            {status === "error" && (
              <p className="text-xs text-red-500 mt-2">Subscription failed. Try again.</p>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 mt-10 text-center md:text-left">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
