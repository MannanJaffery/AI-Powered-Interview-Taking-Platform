"use client";

export default function WhyUseInterviewAI() {
  const reasons = [
    {
      icon: "🎯",
      title: "Practice Anytime, Anywhere",
      description: "Access mock interviews 24/7 on any device. No scheduling conflicts with real interviewers.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Intelligence",
      description: "Our advanced AI learns from your patterns and adapts questions to challenge you progressively.",
    },
    {
      icon: "⚡",
      title: "Instant Feedback",
      description: "Get real-time analysis on your answers, tone, pace, and confidence levels immediately after each question.",
    },
    {
      icon: "📊",
      title: "Detailed Analytics",
      description: "Track your performance metrics and identify improvement areas with comprehensive data visualization.",
    },
    {
      icon: "🎓",
      title: "Industry-Specific Questions",
      description: "Practice with questions tailored to your target role, company, and industry vertical.",
    },
    {
      icon: "🚀",
      title: "Accelerated Learning",
      description: "Improve 3x faster compared to traditional practice methods with focused, data-driven feedback.",
    },
  ];

  return (
    <section id="why-use" className="relative w-full bg-[#0a0a0a] py-20 px-6">
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

        .benefit-card {
          animation: fadeInUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          opacity: 0;
        }

        .benefit-card:nth-child(1) { animation-delay: 0.1s; }
        .benefit-card:nth-child(2) { animation-delay: 0.2s; }
        .benefit-card:nth-child(3) { animation-delay: 0.3s; }
        .benefit-card:nth-child(4) { animation-delay: 0.4s; }
        .benefit-card:nth-child(5) { animation-delay: 0.5s; }
        .benefit-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Why Use</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              InterviewAI?
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of professionals who've improved their interview skills with our AI-powered platform
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="benefit-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
