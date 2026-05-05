"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Tests", href: "/test" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Location */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="6" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M10 6v4l2.5 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 3.5l1.5 1.5M14 3.5L12.5 5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                </svg>
              </div>
              <span className="text-blue-600 font-semibold text-lg tracking-tight">TestWise</span>
            </Link>

            {/* Location Pill */}
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-sm text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors">
              <MapPin size={13} className="text-red-500" />
              <span>New Delhi, India</span>
              
              <ChevronDown size={12} className="text-gray-400" />
            </button>
          </div>

          {/* Center: Nav Links (desktop) */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-4 py-2 text-sm rounded-md transition-colors ${
                  activeLink === link.label
                    ? "text-blue-600 font-medium"
                    : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Auth Buttons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button className="hidden sm:inline-flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {/* Mobile Location */}
          <button className="flex items-center gap-1.5 mt-3 mb-2 text-sm text-gray-500">
            <MapPin size={13} className="text-red-500" />
            <span>New Delhi, India</span>
            <ChevronDown size={12} className="text-gray-400" />
          </button>

          {/* Mobile Nav Links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => { setActiveLink(link.label); setMobileOpen(false); }}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeLink === link.label
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Auth Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="flex-1 py-2.5 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Login
            </button>
            <button className="flex-1 py-2.5 text-sm bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}