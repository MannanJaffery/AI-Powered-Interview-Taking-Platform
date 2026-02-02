"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;

    // Clone logos for infinite scroll effect
    const scrollContent = container.querySelector(".logo-scroll");
    if (scrollContent) {
      const clone = scrollContent.cloneNode(true);
      container.appendChild(clone);
    }
  }, []);

  const companyLogos = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange smokey gradient - top right corner (reduced intensity) */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/25 via-orange-600/8 to-transparent rounded-full blur-[150px]"></div>
          <div className="absolute top-20 right-20 w-[350px] h-[350px] bg-gradient-to-bl from-red-500/15 via-orange-500/5 to-transparent rounded-full blur-[120px]"></div>
        </div>
        
        {/* Orange smokey gradient - top left corner */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/15 via-red-600/5 to-transparent rounded-full blur-[150px]"></div>
          <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-[100px]"></div>
        </div>

        {/* White dots pattern across the background (reduced) */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/40 rounded-full"
              style={{
                left: `${10 + (i * 3.5) % 80}%`,
                top: `${15 + (i * 7) % 70}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Vertical lines on sides */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="absolute right-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
          <span className="text-sm text-gray-300 tracking-wide">
            InterviewAI Fuels Success
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
          <span className="text-white">Pioneering Cutting</span>
          <br />
          <span className="text-white">Edge Interview </span>
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-normal">
            Preparation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          We develop innovative AI software that harnesses advanced technology to transform your interview skills,{" "}
          <span className="text-white">streamline preparation</span>, and drive career growth.
        </p>

        {/* CTA Button with orange smokey hover effect */}
        <div className="mb-24">
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 rounded-full transition-all duration-500 overflow-hidden">
            {/* Orange glow effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-orange-500/30 to-orange-600/20 blur-xl"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 blur-2xl"></div>
            </div>
            {/* Button border glow on hover */}
            <div className="absolute inset-0 rounded-full border border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500"></div>
            <span className="relative text-white font-medium">Get Started</span>
            <span className="relative text-gray-500 text-sm group-hover:text-gray-400 transition-colors">it&apos;s free</span>
          </button>
        </div>

        {/* 3D Glowing Platform */}
        <div className="relative h-32 mb-20">
          {/* Main platform glow */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[500px] h-2 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full blur-sm"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[400px] h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
          
          {/* Platform reflection/surface */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-24"
            style={{
              background: `
                radial-gradient(ellipse 100% 100% at 50% 0%, 
                  rgba(249, 115, 22, 0.15) 0%, 
                  rgba(249, 115, 22, 0.05) 40%, 
                  transparent 70%
                )
              `,
            }}
          ></div>
          
          {/* Perspective lines */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-[450px] h-20 overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(249, 115, 22, 0.1) 20%,
                    rgba(249, 115, 22, 0.2) 50%,
                    rgba(249, 115, 22, 0.1) 80%,
                    transparent 100%
                  )
                `,
                clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
            {/* Grid lines on platform */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(transparent 0%, transparent 49%, rgba(249, 115, 22, 0.3) 50%, transparent 51%, transparent 100%)
                `,
                backgroundSize: "100% 8px",
                clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
              }}
            ></div>
          </div>

          {/* Center glow point */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-4 h-4 bg-orange-500 rounded-full blur-md"></div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-2 h-2 bg-white rounded-full"></div>
        </div>

        {/* Companies Section */}
        <div className="relative max-w-4xl mx-auto">
          <p className="text-sm text-gray-500 mb-8 text-center">
            Making interviews effortless for{" "}
            <span className="text-white">50,000+</span> job seekers
          </p>

          {/* Logo Carousel - Centered */}
          <div 
            ref={logoContainerRef}
            className="flex justify-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="logo-scroll flex items-center justify-center gap-12 md:gap-16 animate-scroll">
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-lg md:text-xl font-semibold text-gray-600 hover:text-gray-400 transition-colors cursor-pointer tracking-wider"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  );
}
