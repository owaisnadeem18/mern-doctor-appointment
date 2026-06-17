import { footerlogo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

/* =========================
   DATA
========================= */

const footerSections = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
  },
  {
    title: "Company",
    links: ["About", "Contact us", "Careers", "Culture", "Blog"],
  },
  {
    title: "Support",
    links: [
      "Getting started",
      "Help center",
      "Server status",
      "Report a bug",
      "Chat support",
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: <FaFacebookF />,
  },
  {
    label: "Twitter",
    href: "#",
    icon: <FaTwitter />,
  },
  {
    label: "Instagram",
    href: "#",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: <FaLinkedinIn />,
  },
  {
    label: "YouTube",
    href: "#",
    icon: <FaYoutube />,
  },
];

/* =========================
   REUSABLE COMPONENTS
========================= */

const FooterColumn = ({ title, links }) => {
  return (
    <nav aria-label={title}>
      <h3 className="footer-heading mb-8">{title}</h3>

      <ul className="space-y-5 footer-text">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="opacity-90 transition-opacity duration-200 hover:opacity-100"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <h3 className="footer-heading mb-8">Follow us</h3>

      <ul className="space-y-5 footer-text">
        {socialLinks.map((social) => (
          
          <li className="flex items-center gap-3">
  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
    {social.icon}
  </div>

  <Link
    href={social.href}
    aria-label={social.label}
    className="opacity-90 transition-opacity duration-200 hover:opacity-100"
  >
    {social.label}
  </Link>
</li>

        ))}
      </ul>
    </div>
  );
};

/* =========================
   FOOTER
========================= */

const Footer = () => {
  return (
    <footer className="bg-brand-teal text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 lg:px-20 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr]">
          
          {/* Logo + Copyright */}
          <div>
            <div className="mb-8">
              <Image
                src={footerlogo}
                alt="Healthcare Logo"
                width={180}
                height={40}
                priority
              />
            </div>

            <p className="footer-copyright ">
              Copyright © {new Date().getFullYear()} BRIX Templates
              <br />
              All Rights Reserved
            </p>
          </div>

          {/* Dynamic Sections */}
          {footerSections.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Social Links */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;