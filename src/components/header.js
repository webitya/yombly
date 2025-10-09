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
      <div className="relative bg-gradient-to-r from-[#0a0f1f] via-[#10182e] to-[#0a0f1f] backdrop-blur-xl">
        {/* Glowing Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-400 blur-[1px] opacity-80" />

        <div className="flex items-center justify-between max-w-[1400px] mx-auto px-3 md:px-6 py-3 border-b border-white/10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-200 relative">
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
                      className={`transition duration-200 font-medium ${
                        dropdownLinks.some((d) => d.href === pathname) ? "text-cyan-400" : "hover:text-cyan-400"
                      }`}
                    >
                      {link.label} ▾
                    </button>

                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full mt-2 w-52 bg-[#10182e] border border-[#1f2937]/60 rounded-lg shadow-xl overflow-hidden transition-all duration-200
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
                            className={`block px-4 py-2 text-gray-300 text-sm transition ${
                              isActive
                                ? "bg-cyan-600/20 text-cyan-400 font-semibold"
                                : "hover:bg-[#0d1324] hover:text-cyan-300"
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
                  className={`transition font-medium ${
                    isActive ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* CTA Buttons */}
            <Link
              href="/tickets/track"
              className={`px-3 py-1 rounded-md border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 transition font-medium`}
            >
              Track Ticket
            </Link>
            <Link
              href="/free-question"
              className={`px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-400 transition font-semibold shadow-lg shadow-cyan-500/30`}
            >
              Ask 1 Free Question
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button aria-label="Open Menu" className="md:hidden text-gray-200" onClick={() => setOpen(true)}>
            <Menu fontSize="large" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={open} setOpen={setOpen} navLinks={navLinks} servicesLinks={servicesLinks} />
    </header>
  )
}
