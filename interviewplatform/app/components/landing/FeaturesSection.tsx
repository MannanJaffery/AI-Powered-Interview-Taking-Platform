"use client";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "Advanced AI Technology",
      description: "Our cutting-edge AI interviewer adapts to your response style, providing real-world interview scenarios that match your target positions.",
      gradient: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Get comprehensive performance metrics including speaking pace, confidence level, technical accuracy, and communication effectiveness.",
      gradient: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: "📚",
      title: "Extensive Question Library",
      description: "Access 1000+ questions across 50+ industries and roles. Questions updated monthly based on actual hiring trends.",
      gradient: "from-pink-500/20 to-pink-600/20",
    },
    {
      icon: "🎯",
      title: "Personalized Learning Path",
      description: "AI-powered recommendations create a customized learning journey based on your strengths and weaknesses.",
      gradient: "from-cyan-500/20 to-cyan-600/20",
    },
    {
      icon: "🎬",
      title: "Video Recording & Playback",
      description: "Record your interviews, review your performance, and track improvements over time with side-by-side comparisons.",
      gradient: "from-orange-500/20 to-orange-600/20",
    },
    {
      icon: "🏆",
      title: "Achievement Badges",
      description: "Unlock badges and milestones as you progress. Share your achievements with your network.",
      gradient: "from-green-500/20 to-green-600/20",
    },
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-20 px-6">
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .feature-item-left {
          animation: slideInLeft 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          opacity: 0;
        }

        .feature-item-right {
          animation: slideInRight 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          opacity: 0;
        }

        .feature-item-left:nth-child(1) { animation-delay: 0.1s; }
        .feature-item-left:nth-child(3) { animation-delay: 0.3s; }
        .feature-item-left:nth-child(5) { animation-delay: 0.5s; }

        .feature-item-right:nth-child(2) { animation-delay: 0.2s; }
        .feature-item-right:nth-child(4) { animation-delay: 0.4s; }
        .feature-item-right:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Powerful</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Features Built for You
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to master your interview skills with advanced AI technology and comprehensive analytics
          </p>
        </div>

        {/* Two Column Layout with Alternating Cards */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {features
              .filter((_, i) => i % 2 === 0)
              .map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-item-left group relative"
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex gap-6 items-start">
                      <div className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {features
              .filter((_, i) => i % 2 === 1)
              .map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-item-right group relative"
                  style={{ animationDelay: `${idx * 0.2 + 0.1}s` }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300">
                    <div className="flex gap-6 items-start">
                      <div className="text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>


      </div>
    </section>
  );
}
