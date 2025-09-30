"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "@mui/icons-material";
import MobileDrawer from "./MobileDrawer";
import Logo from "./logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Resources" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  const servicesLinks = [
    { href: "/sales-syllabus", label: "Sales Syllabus" },
    { href: "/marketcrew", label: "MarketCrew" },
    { href: "/exactiq", label: "ExactIQ" },
    { href: "/revenue-pilot", label: "Revenue Pilot" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      <div className="glass w-full px-6 md:px-12 py-3  bg-white/70 backdrop-blur-sm shadow-lg">
        <div className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm relative">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? "text-[var(--primary)] font-semibold"
                      : "hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
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

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-[var(--border)] shadow-lg rounded-md overflow-hidden transition-all duration-200">
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
              )}
            </div>

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
