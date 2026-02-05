"use client";

import { useState } from "react";
import { usePointerTracker } from "@/app/hooks/usePointerTracker";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const Faq = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  usePointerTracker();

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

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <style>{`
        @keyframes fadeInUp {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          0% { 
            opacity: 1; 
            transform: translateY(0);
          }
          100% { 
            opacity: 0; 
            transform: translateY(20px);
          }
        }

        @keyframes smoothScale {
          from {
            transform: scale(0.99);
          }
          to {
            transform: scale(1);
          }
        }

        .split-pane-answer {
          animation: fadeInUp 0.7s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .split-pane-answer-exit {
          animation: fadeOutDown 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .toggle-button {
          transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
          display: inline-block;
        }

        .faq-card {
          position: relative;
          border-radius: 0;
          transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .faq-card:hover {
          animation: smoothScale 0.3s ease-out forwards;
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

            return (
              <div
                key={item.id}
                className={`relative transition-all duration-500 ${
                  isOpen ? "min-h-64" : "min-h-auto"
                }`}
              >
                {/* Glow Border Card Container */}
                <div className="glow-border faq-card"
                  style={
                    {
                      '--bw': '2px',
                      '--spot-hsl': '39, 94%',
                      '--spot-alpha': '0.6',
                      '--spot-fade': '100px',
                    } as React.CSSProperties
                  }
                >
                  <div>
                    {!isOpen ? (
                      // Collapsed State
                      <div className="px-6 py-6 flex items-center justify-between gap-4 cursor-pointer group hover:bg-white/5 transition-all duration-300">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg md:text-xl font-semibold text-white">
                          {item.question}
                        </h3>
                      </div>
                      <button
                        onClick={() => toggle(item.id)}
                        className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 group-hover:text-orange-500 transition-colors duration-300 font-light text-2xl cursor-pointer toggle-button"
                      >
                        (+)
                      </button>
                    </div>
                  ) : (
                    // Expanded State - Split Pane
                    <div className="px-6 py-6">
                      <div className="flex gap-8 items-start">
                        {/* Left: Question (Anchored) */}
                        <div className="shrink-0 w-full md:w-2/5">
                          <p className="text-sm text-orange-500 font-semibold mb-2 uppercase tracking-wider">
                            {item.category}
                          </p>
                          <h3 className="text-lg md:text-xl font-semibold text-white">
                            {item.question}
                          </h3>
                        </div>

                        {/* Right: Answer (Fade In) */}
                        <div className="flex-1 hidden md:block">
                          <p className="split-pane-answer text-base text-gray-300 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>

                      {/* Mobile Answer */}
                      <div className="md:hidden mt-6">
                        <p className="split-pane-answer text-base text-gray-300 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>

                      {/* Close Button */}
                      <div className="flex justify-end mt-6">
                        <button
                          onClick={() => toggle(item.id)}
                          className="shrink-0 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-orange-500 transition-colors duration-300 font-light text-2xl cursor-pointer toggle-button"
                        >
                          (−)
                        </button>
                      </div>
                    </div>
                  )}
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
