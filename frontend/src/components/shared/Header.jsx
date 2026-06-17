"use client"

import { logo } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'



const navLinks = [
    { label: 'Home', href: '/', isActive: true }, // Home active hai design mein
  { label: 'Service', href: '/service', isActive: false },
  { label: 'Contact Us', href: '/contact-us', isActive: false },
  { label: 'Help', href: '/help', isActive: false },
  { label: 'Blogs', href: '/blogs', isActive: false },
];

const pathName = usePathname()



const Header = () => {
    return (
    <header className="w-full  py-4"> 
      <div className="page-container flex items-center justify-between">
        
        {/* 1. Left: Logo Section */}
        <div className="shrink-0">
          <Image src={logo} alt="logo" width={180} height={45} priority />
        </div>

        {/* 2. Center: Navigation Links */}
        <nav>
          <ul className="flex items-center gap-8 nav-text">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link 
                  href={link.href} 
                  className={`relative pb-1 transition-colors ${
                    pathName === link.href
                      ? 'text-brand-teal font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.75 after:bg-brand-teal' 
                      : 'text-[#171717] hover:text-brand-teal'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Right: Authentication Buttons */}
        <div className="flex items-center gap-6 nav-text">
          <Link href="#" className="text-brand-teal font-semibold hover:opacity-80 transition-opacity">
            Sign Up
          </Link>
          <Link href="#" className="btn-primary">
            Log In
          </Link>
        </div>

      </div>
    </header>
  )
}

export default Header