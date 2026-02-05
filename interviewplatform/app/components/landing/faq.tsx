"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const Faq = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [heights, setHeights] = useState<{ [key: string]: number }>({});
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Track mouse position relative to each card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const card = cardRefs.current[id];
    if (card) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mx', `${x}`);
      card.style.setProperty('--my', `${y}`);
    }
  }, []);

  const faqData: FAQItem[] = [
    {
      id: "1",
      category: "Getting Started",
      question: "How does InterviewAI work?",
      answer: "InterviewAI uses advanced AI technology to conduct realistic mock interviews based on your target role. Our AI evaluates your responses in real-time, assessing communication skills, technical knowledge, and problem-solving ability. You receive instant feedback with actionable insights to improve your interview performance."
    },
    {
      id: "2",
      category: "Getting Started",
      question: "Do I need any special equipment to use the platform?",
      answer: "All you need is a computer or laptop with a webcam, microphone, and stable internet connection. Our platform works on any modern web browser (Chrome, Safari, Firefox, Edge). We recommend a quiet environment for optimal performance and accurate audio/video processing."
    },
    {
      id: "3",
      category: "Features",
      question: "What types of interview questions does InterviewAI cover?",
      answer: "We cover behavioral questions, technical questions, case studies, and industry-specific scenarios across 100+ job roles. Our question database includes actual questions from FAANG companies, startups, and major corporations. Questions are regularly updated based on current market trends and hiring patterns."
    },
    {
      id: "4",
      category: "Features",
      question: "Can I choose the interview difficulty level?",
      answer: "Yes, you can select from three difficulty levels: Beginner, Intermediate, and Expert. You can also customize interviews by role, company, or specific skill areas. Our adaptive AI adjusts question complexity based on your responses to ensure optimal learning."
    },
    {
      id: "5",
      category: "Feedback",
      question: "What kind of feedback do I receive after each interview?",
      answer: "You receive detailed feedback on: speaking pace and clarity, body language and eye contact, content quality and relevance, technical accuracy, confidence level, and areas for improvement. We also provide a score breakdown and personalized recommendations for your next practice session."
    },

  ];

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Measure content heights for smooth animation
  useEffect(() => {
    const newHeights: { [key: string]: number } = {};
    Object.keys(contentRefs.current).forEach((id) => {
      const el = contentRefs.current[id];
      if (el) {
        newHeights[id] = el.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [openId]);

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <style>{`
        @keyframes slideUpSmooth {
          0% { 
            opacity: 0; 
            transform: translateY(30px);
          }
          60% {
            opacity: 0.8;
            transform: translateY(5px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes categorySlide {
          0% { 
            opacity: 0; 
            transform: translateY(15px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        .split-pane-answer {
          animation: slideUpSmooth 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .category-animate {
          animation: categorySlide 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .faq-card {
          position: relative;
          border-radius: 0;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Bracket Animation Styles - Whole button rotates with symbol change */
        .bracket-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          font-family: inherit;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      color 0.3s ease;
          transform-origin: center;
        }

        .bracket-left,
        .bracket-right {
          display: inline-block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bracket-symbol {
          display: inline-block;
          position: relative;
        }

        /* Plus and minus symbols with crossfade during rotation */
        .bracket-symbol .plus-icon,
        .bracket-symbol .minus-icon {
          transition: opacity 0.4s ease;
        }

        .bracket-symbol .plus-icon {
          opacity: 1;
        }

        .bracket-symbol .minus-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
        }

        /* When open - rotate whole button and swap symbols */
        .bracket-btn.is-open {
          transform: rotate(180deg);
          color: #f97316;
        }

        .bracket-btn.is-open .bracket-symbol .plus-icon {
          opacity: 0;
        }

        .bracket-btn.is-open .bracket-symbol .minus-icon {
          opacity: 1;
        }

        /* Hover effect - brackets spread apart smoothly */
        .bracket-btn:hover .bracket-left {
          transform: translateX(-4px);
        }

        .bracket-btn:hover .bracket-right {
          transform: translateX(4px);
        }

        .bracket-btn:hover {
          color: #f97316;
        }

        .bracket-btn.is-open .bracket-left {
          transform: translateX(-5px);
        }

        .bracket-btn.is-open .bracket-right {
          transform: translateX(5px);
        }

        /* Hover when already open */
        .bracket-btn.is-open:hover .bracket-left {
          transform: translateX(-7px);
        }

        .bracket-btn.is-open:hover .bracket-right {
          transform: translateX(7px);
        }

        /* FAQ Content Transition - Smooth bottom to top */
        .faq-content-wrapper {
          overflow: hidden;
          transition: height 0.6s cubic-bezier(0.22, 1, 0.36, 1), 
                      opacity 0.5s ease;
        }

        .faq-content-inner {
          transform: translateY(0);
          transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      opacity 0.5s ease;
        }

        .faq-content-wrapper[data-open="false"] .faq-content-inner {
          transform: translateY(40px);
          opacity: 0;
        }

        .faq-content-wrapper[data-open="true"] .faq-content-inner {
          transform: translateY(0);
          opacity: 1;
        }

        .faq-header {
          transition: all 0.3s ease;
        }

        /* Question text slide animation when opening */
        .question-text {
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .question-text.is-open {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore answers to help you get the most out of InterviewAI
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            const isNextOpen = faqData[index + 1] && openId === faqData[index + 1].id;

            return (
              <div
                key={item.id}
                className="relative"
              >
                {/* Glow Border Card Container */}
                <div 
                  ref={(el) => { cardRefs.current[item.id] = el; }}
                  onMouseMove={(e) => handleMouseMove(e, item.id)}
                  className={`glow-border faq-card ${isOpen ? 'is-open' : ''} ${isNextOpen ? 'next-is-open' : ''}`}
                  style={
                    {
                      '--bw': '2px',
                      '--spot-hsl': '30, 100%',
                      '--spot-alpha': '0.7',
                      '--spot-fade': '120px',
                      '--mx': '0',
                      '--my': '0',
                    } as React.CSSProperties
                  }
                >
                  {/* Smokey glow elements */}
                  <div className="glow-smoke"></div>
                  <div className="glow-smoke glow-smoke-bottom"></div>
                  
                  <div>
                    {/* Header - Always visible */}
                    <div 
                      className="faq-header px-6 py-6 flex items-center justify-between gap-4 cursor-pointer"
                      onClick={() => toggle(item.id)}
                    >
                      <div className="flex-1 min-w-0">
                        {isOpen && (
                          <p className="category-animate text-sm text-orange-500 font-semibold mb-2 uppercase tracking-wider">
                            {item.category}
                          </p>
                        )}
                        <h3 className={`question-text text-lg md:text-xl font-semibold text-white ${isOpen ? 'is-open' : ''}`}>
                          {item.question}
                        </h3>
                      </div>
                      <button
                        className={`bracket-btn shrink-0 w-12 h-10 flex items-center justify-center text-gray-400 font-light text-2xl cursor-pointer ${isOpen ? 'is-open' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggle(item.id);
                        }}
                      >
                        <span className="bracket-left">(</span>
                        <span className="bracket-symbol">
                          <span className="plus-icon">+</span>
                          <span className="minus-icon">−</span>
                        </span>
                        <span className="bracket-right">)</span>
                      </button>
                    </div>

                    {/* Expandable Content */}
                    <div 
                      ref={(el) => { contentRefs.current[item.id] = el; }}
                      className="faq-content-wrapper"
                      data-open={isOpen ? "true" : "false"}
                      style={{
                        height: isOpen ? `${heights[item.id] || 'auto'}px` : '0px',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="faq-content-inner px-6 pb-6">
                        <div className="flex gap-8 items-start">
                          {/* Desktop: Answer on the right */}
                          <div className="hidden md:block md:w-2/5"></div>
                          <div className="flex-1">
                            <p className="split-pane-answer text-base text-gray-300 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
