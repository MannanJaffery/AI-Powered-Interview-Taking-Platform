"use client";

import { useState, useRef, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Angela Moss",
      username: "@an4gel",
      role: "Developer",
      company: "upgrade",
      date: "Dec 12, 2030",
      text: "Before Mooni, managing our operations felt like juggling too many balls at once. Now, everything is consolidated into one simple yet powerful platform.",
    },
    {
      name: "John Smith",
      username: "@john_sm9",
      role: "Developer",
      company: "checkr",
      date: "Nov 6, 2028",
      text: "Mooni has completely revolutionized how our team works. The intuitive design and robust features allowed us to streamline complex workflows that used to take hours. We were able to onboard new team members in record time.",
    },
    {
      name: "Sarah Chen",
      username: "@sarahc",
      role: "Engineer",
      company: "Google",
      date: "Jan 21, 2026",
      text: "InterviewAI helped me secure my dream role at Google. The AI feedback was incredibly specific and helped me refine my communication skills dramatically.",
    },
    {
      name: "Marcus Johnson",
      username: "@marcusj",
      role: "PM",
      company: "Meta",
      date: "Mar 15, 2027",
      text: "The mock interviews felt incredibly realistic. I practiced 40+ interviews before my final round at Meta. The analytics showed exactly where I needed to improve.",
    },
    {
      name: "Emily Rodriguez",
      username: "@emilyr",
      role: "Data Scientist",
      company: "Amazon",
      date: "Aug 9, 2027",
      text: "I was transitioning careers and felt completely unprepared. The adaptive questions prepared me for every angle. I landed my role within 2 months of starting.",
    },
    {
      name: "David Thompson",
      username: "@davidt",
      role: "Senior Engineer",
      company: "Microsoft",
      date: "Oct 3, 2028",
      text: "The real-time feedback on my interview performance was game-changing. I could see my confidence improving week over week. Microsoft noticed the difference.",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(".testimonial-card")?.offsetWidth ?? 400;
    const gap = 32;
    el.scrollBy({ left: dir === "left" ? -(cardWidth + gap) : cardWidth + gap, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm tracking-widest uppercase text-orange-400 mb-4">Real Feedback</span>
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Our </span>
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real stories from professionals transforming their interview preparation with our platform.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 px-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="testimonial-card flex-shrink-0 w-[480px] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-6 backdrop-blur-[12px] transition-colors duration-300"
                style={{
                  backgroundColor: "rgba(24, 24, 24, 0.85)",
                  boxShadow:
                    "inset 0 1px 2px rgba(255,255,255,0.08), inset 0 0.5px 0.5px rgba(255,255,255,0.12), 0 1px 2px -1px rgba(26,25,37,0.04), 0 1px 1px rgba(26,25,37,0.04), 0 0.5px 0.5px rgba(26,25,37,0.04)",
                }}
              >
                {/* Top: Name + Role Badge */}
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-white text-xl font-bold tracking-tight">{t.name}</h4>
                    <p className="text-gray-500 text-sm mt-0.5">{t.username}</p>
                  </div>
                  <span
                    className="text-xs text-white/90 rounded-full px-3 py-1 mt-1 font-medium"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      boxShadow:
                        "inset 0 1px 2px rgba(255,255,255,0.08), inset 0 0.5px 0.5px rgba(255,255,255,0.12), 0 1px 2px -1px rgba(26,25,37,0.04), 0 1px 1px rgba(26,25,37,0.04), 0 0.5px 0.5px rgba(26,25,37,0.04)",
                    }}
                  >
                    {t.role}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-[#a0a0a0] text-[15px] leading-[1.8] flex-grow">{t.text}</p>

                {/* Bottom: Company + Date */}
                <div className="flex items-end justify-between mt-auto pt-2">
                  <span className="text-white font-bold text-lg tracking-wide">{t.company}</span>
                  <span className="text-gray-500 text-sm">{t.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "border-white/20 text-white hover:bg-white/10 hover:border-orange-500/40 cursor-pointer"
                  : "border-white/10 text-gray-600 cursor-not-allowed"
              }`}
              aria-label="Previous review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "border-white/20 text-white hover:bg-white/10 hover:border-orange-500/40 cursor-pointer"
                  : "border-white/10 text-gray-600 cursor-not-allowed"
              }`}
              aria-label="Next review"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              10,000+
            </h3>
            <p className="text-gray-400 mt-2">Users Trained</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              95%
            </h3>
            <p className="text-gray-400 mt-2">Success Rate</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold bg-linear-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              FAANG+
            </h3>
            <p className="text-gray-400 mt-2">Top Companies</p>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
