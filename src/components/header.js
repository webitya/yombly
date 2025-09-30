"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@mui/icons-material";
import MobileDrawer from "./MobileDrawer";
import Logo from "./logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeout = useRef(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    // Services will be handled separately as 3rd item
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  const servicesLinks = [
    { href: "/sales-syllabus", label: "Sales Syllabus" },
    { href: "/marketcrew", label: "MarketCrew" },
    { href: "/exactiq", label: "ExactIQ" },
    { href: "/revenue-pilot", label: "Revenue Pilot" },
  ];

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      <div className="glass w-full px-2 md:px-4 py-2 bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 relative">
            {/* Home */}
            <Link
              href="/"
              className={`transition ${
                pathname === "/" ? "text-[var(--primary)] font-semibold" : "hover:text-[var(--primary)]"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`transition ${
                pathname === "/about" ? "text-[var(--primary)] font-semibold" : "hover:text-[var(--primary)]"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown (3rd) */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`transition ${
                  servicesLinks.some((s) => s.href === pathname)
                    ? "text-[var(--primary)] font-semibold"
                    : "hover:text-[var(--primary)]"
                }`}
              >
                Services ▾
              </button>

              <div
                className={`absolute left-0 top-full mt-1 w-48 bg-white border border-[var(--border)] shadow-lg rounded-md overflow-hidden transition-all duration-200
                  ${servicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
              >
                {servicesLinks.map((s) => {
                  const isActive = pathname === s.href;
                  return (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block px-4 py-2 text-sm transition ${
                        isActive
                          ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {s.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Remaining Nav Links */}
            {navLinks.slice(2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive ? "text-[var(--primary)] font-semibold" : "hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* CTA Buttons */}
            <Link
              href="/tickets/track"
              className={`px-3 py-1 rounded-md border border-[var(--border)] transition ${
                pathname === "/tickets/track"
                  ? "border-[var(--primary)] text-[var(--primary)] font-semibold"
                  : "hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              Track Ticket
            </Link>
            <Link
              href="/tickets/raise"
              className={`px-4 py-2 rounded-md transition ${
                pathname === "/tickets/raise"
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                  : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
              }`}
            >
              Raise Ticket
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu fontSize="large" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer
        open={open}
        setOpen={setOpen}
        navLinks={navLinks}
        servicesLinks={servicesLinks}
      />
    </header>
  );
}
