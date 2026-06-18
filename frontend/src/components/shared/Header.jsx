"use client"

import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Service', href: '/service' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Help', href: '/help' },
  { label: 'Blogs', href: '/blogs' },
]

const Header = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white xl:bg-transparent">
      <div className="page-container flex items-center justify-between h-20 relative">

        {/* Logo */}
        <Link href="/" className="z-50">
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={45}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-10 nav-text">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`relative pb-1 transition-all duration-200 text-sm lg:text-base ${
                    pathname === link.href
                      ? 'text-brand-teal font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal'
                      : 'text-[#171717] hover:text-brand-teal font-medium'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Auth */}
        <div className="hidden xl:flex items-center gap-6 nav-text">
          <Link href="#" className="text-brand-teal font-semibold">
            Sign Up
          </Link>
          <Link
            href="#"
            className="btn-primary px-6 py-2.5 rounded-lg bg-brand-teal text-white hover:bg-brand-teal/90"
          >
            Log In
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Dropdown (FIXED STYLE - NOT DRAWER) */}
        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md xl:hidden z-40">
            <ul className="flex flex-col py-3">

              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium transition ${
                      pathname === link.href
                        ? 'text-brand-teal bg-teal-50'
                        : 'text-[#171717] hover:bg-gray-50 hover:text-brand-teal'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

<div className="relative py-6">
  <div className="h-px bg-linear-to-r from-transparent via-brand-teal to-transparent"></div>
</div>
              {/* Auth */}
              <div className=" pt-2 px-6 pb-3 flex flex-col gap-3">
                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="text-brand-teal font-semibold"
                >
                  Sign Up
                </Link>

                <Link
                  href="#"
                  onClick={() => setOpen(false)}
                  className="bg-brand-teal text-white text-center py-2 rounded-md"
                >
                  Log In
                </Link>
              </div>

            </ul>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header