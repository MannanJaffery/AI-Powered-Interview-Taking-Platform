"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = logoContainerRef.current;
    if (!container) return;

    // Clone logos multiple times for seamless infinite scroll
    const scrollContent = container.querySelector(".logo-scroll");
    if (scrollContent) {
      // Clone the content 3 times to ensure seamless looping
      for (let i = 0; i < 3; i++) {
        const clone = scrollContent.cloneNode(true);
        container.appendChild(clone);
      }
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
    <section className="relative min-h-screen bg-[rgb(10,10,10)] overflow-hidden">
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 h-screen flex flex-col justify-between">
        {/* Top Spacer */}
        <div></div>

        {/* Center Section */}
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-5 leading-tight tracking-tight">
            <span className="text-white">Land Your Dream job  </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Interview
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ace your interviews with AI-powered mock interviews, instant feedback, and personalized learning paths.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/25">
            <span>Get Started Free</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>


        {/* Bottom Companies Section */}
        <div className="relative max-w-4xl mx-auto w-full text-center pb-4">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by <span className="text-white font-semibold">50,000+</span> professionals
          </p>

          {/* Logo Carousel - Centered */}
          <div 
            ref={logoContainerRef}
            className="flex justify-start overflow-hidden w-full"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div 
              className="logo-scroll flex items-center gap-8 whitespace-nowrap"
              style={{
                animation: "scroll 30s linear infinite",
                width: "fit-content",
              }}
            >
              {companyLogos.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-sm md:text-base font-semibold text-gray-600 tracking-wider"
                >
                  {company}
                </div>
              ))}
            </div>
            <style>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-33.333%);
                }
              }
            `}</style>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  );
}
