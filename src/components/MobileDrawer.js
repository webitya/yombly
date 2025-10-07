"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { useState } from "react";

export default function MobileDrawer({ open, setOpen, navLinks, servicesLinks }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(null);

  // Dropdown links for "Resources"
  const resourcesLinks = [
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Free Resources" },
    { href: "/case-studies", label: "Case Studies" },
  ];

  // Reorder to place dropdowns properly
  const reorderedNavLinks = [
    navLinks[0], // Home
    navLinks[1], // About
    { type: "dropdown", label: "Services" },
    { type: "dropdown", label: "Resources" },
    ...navLinks.slice(5), // Contact and others if any
  ];

  const toggleExpand = (label) => {
    setExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } z-40`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 sm:w-72 bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } z-50 flex flex-col`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500 transition"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>

        {/* Navigation */}
        <nav className="mt-16 flex flex-col gap-5 px-6 text-base font-medium">
          {reorderedNavLinks.map((link, index) => {
            if (link.type === "dropdown") {
              const dropdownLinks =
                link.label === "Services" ? servicesLinks : resourcesLinks;

              const isExpanded = expanded === link.label;

              return (
                <div key={`${link.label}-${index}`} className="flex flex-col gap-2">
                  <button
                    onClick={() => toggleExpand(link.label)}
                    className={`flex justify-between items-center transition-colors ${
                      dropdownLinks.some((d) => d.href === pathname)
                        ? "text-[var(--primary)] font-semibold"
                        : "hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.label}
                    <span className="text-gray-500 text-sm">
                      {isExpanded ? "▴" : "▾"}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="pl-3 border-l border-gray-100">
                      {dropdownLinks.map((s, i) => {
                        const isActive = pathname === s.href;
                        return (
                          <Link
                            key={s.href || `${s.label}-${i}`}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className={`block py-1 transition-colors ${
                              isActive
                                ? "text-[var(--primary)] font-semibold"
                                : "text-gray-600 hover:text-[var(--primary)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            } else {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href || `${link.label}-${index}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`transition-colors ${
                    isActive
                      ? "text-[var(--primary)] font-semibold"
                      : "hover:text-[var(--primary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            }
          })}

          {/* CTA Buttons */}
          <Link
            href="/tickets/track"
            onClick={() => setOpen(false)}
            className={`px-4 py-2 rounded-md border border-[var(--border)] text-center transition ${
              pathname === "/tickets/track"
                ? "bg-gray-100 font-semibold"
                : "hover:bg-gray-50"
            }`}
          >
            Track Ticket
          </Link>

          <Link
            href="/tickets/raise"
            onClick={() => setOpen(false)}
            className={`px-4 py-2 rounded-md text-center transition ${
              pathname === "/tickets/raise"
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] font-semibold"
                : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
            }`}
          >
            Raise Ticket
          </Link>
        </nav>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 text-xs text-gray-500 border-t">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </div>
      </div>
    </>
  );
}
