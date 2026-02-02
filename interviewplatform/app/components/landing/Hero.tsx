export default function Hero() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
          Master Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Interviews</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          AI-powered interview preparation platform that helps you practice, receive real-time feedback, and land your dream job.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
            Start Free Trial
          </button>
          <button className="px-8 py-3 border border-gray-700 hover:border-gray-500 text-foreground font-semibold rounded-lg transition">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
