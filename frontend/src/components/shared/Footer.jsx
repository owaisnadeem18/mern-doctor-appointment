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
  { label: "Facebook", href: "#", icon: <FaFacebookF /> },
  { label: "Twitter", href: "#", icon: <FaTwitter /> },
  { label: "Instagram", href: "#", icon: <FaInstagram /> },
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn /> },
  { label: "YouTube", href: "#", icon: <FaYoutube /> },
];

/* =========================
   COMPONENTS
========================= */

const FooterColumn = ({ title, links }) => {
  return (
    <nav aria-label={title} className="flex flex-col gap-6 sm:gap-12">
      <h3 className="footer-heading">{title}</h3>

      <ul className="flex flex-col gap-4 sm:gap-6 footer-text">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="opacity-90 hover:opacity-100 transition-opacity duration-200"
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
    <div className="flex flex-col gap-6 sm:gap-12">
      <h3 className="footer-heading">Follow us</h3>

      <ul className="flex flex-col gap-4 sm:gap-6 footer-text">
        {socialLinks.map((social) => (
          <li key={social.label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-footer">
              {social.icon}
            </div>

            <Link
              href={social.href}
              aria-label={social.label}
              className="opacity-90 hover:opacity-100 transition-opacity duration-200"
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

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1fr] gap-10">

          {/* Logo + Copyright */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1 items-center text-center md:items-start md:text-left">
            <Image
              src={footerlogo}
              alt="Healthcare Logo"
              width={200}
              height={50}
              priority
            />

            <p className="footer-copyright">
              Copyright © {new Date().getFullYear()} BRIX Templates
              <br />
              All Rights Reserved
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

          {/* Social */}
          <SocialLinks />

        </div>
      </div>
    </footer>
  );
};

export default Footer;