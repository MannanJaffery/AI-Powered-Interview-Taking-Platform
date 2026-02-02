export default function Features() {
  const features = [
    {
      title: "AI Mock Interviews",
      description: "Practice with AI-powered interviewers that adapt to your responses in real-time.",
      icon: "🤖",
    },
    {
      title: "Real-time Feedback",
      description: "Get instant analysis on your answers, communication skills, and confidence level.",
      icon: "📊",
    },
    {
      title: "Question Bank",
      description: "Access thousands of interview questions across different industries and roles.",
      icon: "📚",
    },
    {
      title: "Performance Tracking",
      description: "Monitor your progress with detailed analytics and improvement suggestions.",
      icon: "📈",
    },
  ];

  return (
    <section id="features" className="bg-background py-20 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">
          Powerful Features for Success
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900 border border-gray-800 rounded-lg hover:border-gray-700 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
