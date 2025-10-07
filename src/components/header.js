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
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const closeTimeout = useRef(null);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { type: "dropdown", label: "Services" },
    { type: "dropdown", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ];

  const servicesLinks = [
    { href: "/sales-syllabus", label: "Sales Syllabus" },
    { href: "/marketcrew", label: "MarketCrew" },
    { href: "/exactiq", label: "ExactIQ" },
    { href: "/revenue-pilot", label: "Revenue Pilot" },
  ];

  const resourcesLinks = [
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Free Resources" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  const handleEnter = (setter) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setter(true);
  };

  const handleLeave = (setter) => {
    closeTimeout.current = setTimeout(() => setter(false), 150);
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
            {/* Static Nav Links */}
            {navLinks.map((link) => {
              // Handle dropdowns separately
              if (link.type === "dropdown") {
                const isServices = link.label === "Services";
                const dropdownOpen = isServices ? servicesOpen : resourcesOpen;
                const setDropdownOpen = isServices
                  ? setServicesOpen
                  : setResourcesOpen;
                const dropdownLinks = isServices
                  ? servicesLinks
                  : resourcesLinks;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter(setDropdownOpen)}
                    onMouseLeave={() => handleLeave(setDropdownOpen)}
                  >
                    <button
                      className={`transition ${
                        dropdownLinks.some((d) => d.href === pathname)
                          ? "text-[var(--primary)] font-semibold"
                          : "hover:text-[var(--primary)]"
                      }`}
                    >
                      {link.label} ▾
                    </button>

                    <div
                      className={`absolute left-0 top-full mt-1 w-48 bg-white border border-[var(--border)] shadow-lg rounded-md overflow-hidden transition-all duration-200
                        ${
                          dropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {dropdownLinks.map((d) => {
                        const isActive = pathname === d.href;
                        return (
                          <Link
                            key={d.href}
                            href={d.href}
                            className={`block px-4 py-2 text-sm transition ${
                              isActive
                                ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {d.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Normal link
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
