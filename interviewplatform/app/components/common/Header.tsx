"use client";

import { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4">
      <nav
        className="max-w-4xl w-full flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500"
        style={{
          backgroundColor: "rgba(18, 18, 18, 0.85)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer flex-shrink-0">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <span className="text-lg font-semibold text-white">InterviewAI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-sm text-gray-400 hover:text-white rounded-full hover:bg-white/[0.06] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Auth / CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Auth Buttons */}
          <SignedOut>
            <SignInButton>
              <button className="px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:bg-white/[0.06]">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="px-4 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:bg-white/[0.06]">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>

          {/* User Menu */}
          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonBox: "bg-gray-800 text-white",
                },
              }}
            />
          </SignedIn>

          {/* Optional CTA */}
          <button
            className="px-5 py-2 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #f97316, #ea580c)",
              boxShadow: "0 2px 8px rgba(249,115,22,0.25)",
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden w-full max-w-4xl overflow-hidden transition-all duration-400 ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div
          className="rounded-2xl px-5 py-4 space-y-1"
          style={{
            backgroundColor: "rgba(18, 18, 18, 0.95)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            boxShadow:
              "inset 0 1px 1px rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
            >
              {item.name}
            </a>
          ))}

          <div className="pt-3 mt-2 border-t border-white/[0.08] flex flex-col gap-2">
            {/* Mobile Auth Buttons */}
            <SignedOut>
              <SignInButton>
                <button className="w-full py-2.5 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:bg-white/[0.06]">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full py-2.5 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90 hover:bg-white/[0.06]">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>

            {/* Mobile User Menu */}
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonBox: "bg-gray-800 text-white w-full",
                  },
                }}
              />
            </SignedIn>

            {/* Mobile CTA */}
            <button
              className="w-full py-2.5 text-sm font-medium text-white rounded-full transition-all duration-300 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f97316, #ea580c)",
                boxShadow: "0 2px 8px rgba(249,115,22,0.25)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
