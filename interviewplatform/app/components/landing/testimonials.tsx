"use client";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      company: "Google",
      rating: 5,
      text: "InterviewAI helped me secure my dream role at Google. The AI feedback was incredibly specific and helped me refine my communication. I went from struggling with technical explanations to confidently discussing complex systems.",
      avatar: "👩‍💼",
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager at Meta",
      company: "Meta",
      rating: 5,
      text: "The mock interviews felt incredibly realistic. I practiced 40+ interviews before my final interview at Meta. The analytics dashboard showed exactly where I needed to improve. This platform is worth every penny.",
      avatar: "👨‍💼",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Amazon",
      company: "Amazon",
      rating: 5,
      text: "I was transitioning careers and felt completely unprepared. InterviewAI's adaptive questions prepared me for every angle. I landed my role at Amazon within 2 months of starting. Highly recommend!",
      avatar: "👩‍🔬",
    },
    {
      name: "David Thompson",
      role: "Senior Engineer at Microsoft",
      company: "Microsoft",
      rating: 5,
      text: "The real-time feedback on my interview performance was game-changing. I could see my confidence improving week over week. Microsoft noticed the difference during my interviews.",
      avatar: "👨‍💻",
    },
    {
      name: "Jessica Lee",
      role: "Manager at Apple",
      company: "Apple",
      rating: 5,
      text: "As someone transitioning to management, I needed to work on leadership communication. InterviewAI provided targeted practice that made all the difference in my Apple interviews.",
      avatar: "👩‍💼",
    },
    {
      name: "Ahmed Patel",
      role: "Solutions Architect at AWS",
      company: "AWS",
      rating: 5,
      text: "Outstanding platform. The AI interviewer asks follow-up questions just like real interviews. I felt prepared for anything. Passed my AWS interview rounds with confidence.",
      avatar: "👨‍💼",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-600"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="relative w-full bg-[#0a0a0a] py-20 px-6">
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

        .testimonial-card {
          animation: fadeInUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) forwards;
          opacity: 0;
        }

        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
        .testimonial-card:nth-child(4) { animation-delay: 0.4s; }
        .testimonial-card:nth-child(5) { animation-delay: 0.5s; }
        .testimonial-card:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 leading-tight">
            <span className="text-white">Trusted by</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Top Professionals
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of engineers, managers, and professionals who've successfully landed roles at leading companies
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Quote */}
              <p className="text-gray-200 leading-relaxed mb-6 grow italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-xs text-orange-400 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
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
    </section>
  );
}
