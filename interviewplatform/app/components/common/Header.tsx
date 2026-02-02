export default function Header() {
  return (
    <header className="bg-background border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">InterviewAI</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-foreground transition">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-foreground transition">
            How It Works
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-foreground transition">
            Pricing
          </a>
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
