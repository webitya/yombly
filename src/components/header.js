"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "@mui/icons-material"
import MobileDrawer from "./MobileDrawer"
import Logo from "./logo"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const closeTimeout = useRef(null)
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { type: "dropdown", label: "Services" },
    { type: "dropdown", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ]

  const servicesLinks = [
    { href: "/leadership", label: "Leadership" },
    { href: "/mentoring", label: "Mentoring" },
    { href: "/team-building", label: "Team Building" },
     { href: "/revenue-performance-enablement", label: "Revenue performance enablement" },
  ]

  const resourcesLinks = [
    { href: "/blogs", label: "Blogs" },
    { href: "/resources", label: "Free Resources" },
    { href: "/case-studies", label: "Case Studies" },
  ]

  const handleEnter = (setter) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setter(true)
  }

  const handleLeave = (setter) => {
    closeTimeout.current = setTimeout(() => setter(false), 150)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="relative bg-gradient-to-r from-[#f8fbff] via-[#e9f3ff] to-[#f8fbff] backdrop-blur-xl border-b border-gray-200/70 shadow-sm">
        {/* Soft Highlight Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 via-teal-400 to-blue-400 opacity-60 blur-[1px]" />

        <div className="flex items-center justify-between max-w-[1350px] mx-auto px-4 md:px-8 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700 font-medium">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                const isServices = link.label === "Services"
                const dropdownOpen = isServices ? servicesOpen : resourcesOpen
                const setDropdownOpen = isServices ? setServicesOpen : setResourcesOpen
                const dropdownLinks = isServices ? servicesLinks : resourcesLinks

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleEnter(setDropdownOpen)}
                    onMouseLeave={() => handleLeave(setDropdownOpen)}
                  >
                    <button
                      className={`transition-all font-medium ${
                        dropdownLinks.some((d) => d.href === pathname)
                          ? "text-sky-600"
                          : "hover:text-sky-500"
                      }`}
                    >
                      {link.label} ▾
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-200 ease-out
                        ${
                          dropdownOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                    >
                      {dropdownLinks.map((d) => {
                        const isActive = pathname === d.href
                        return (
                          <Link
                            key={d.href}
                            href={d.href}
                            className={`block px-4 py-2 text-gray-700 text-sm transition-all ${
                              isActive
                                ? "bg-sky-50 text-sky-600 font-semibold"
                                : "hover:bg-sky-50 hover:text-sky-600"
                            }`}
                          >
                            {d.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all ${
                    isActive
                      ? "text-sky-600"
                      : "text-gray-700 hover:text-sky-500"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* CTA Buttons */}
            <Link
              href="/tickets/track"
              className="px-3 py-1.5 rounded-md border border-sky-300 text-sky-600 hover:bg-sky-50 transition"
            >
              Track Ticket
            </Link>
            <Link
              href="/free-question"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-teal-400 text-white hover:shadow-md hover:shadow-sky-200/70 transition-all font-semibold"
            >
              Ask 1 Free Question
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden text-gray-700 hover:text-sky-500 transition"
            onClick={() => setOpen(true)}
          >
            <Menu fontSize="large" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} setOpen={setOpen} navLinks={navLinks} servicesLinks={servicesLinks} />
    </header>
  )
}
