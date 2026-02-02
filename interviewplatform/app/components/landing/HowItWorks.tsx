export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose Your Role",
      description: "Select the job position or industry you want to practice for.",
    },
    {
      number: "2",
      title: "Start Interview",
      description: "Begin your AI-powered mock interview session.",
    },
    {
      number: "3",
      title: "Get Feedback",
      description: "Receive instant analysis on your performance and answers.",
    },
    {
      number: "4",
      title: "Improve & Repeat",
      description: "Track progress and refine your interview skills over time.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-center text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-700"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
