"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-semibold text-white">
            InterviewAI
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "#" },
            { name: "About Us", href: "#about" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing", hasDropdown: true },
            { name: "Contact Us", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item.name}
              {item.hasDropdown && (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-5 py-2.5 text-sm font-medium text-white border border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full transition-all duration-300">
            Contact Sales
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 space-y-4">
          {[
            { name: "Home", href: "#" },
            { name: "About Us", href: "#about" },
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Contact Us", href: "#contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button className="w-full py-2.5 text-white border border-white/20 rounded-full">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
