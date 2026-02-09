"use client";
import Button from "../common/Button";
import LogoLoop from "../common/LogoLoop";
import { motion } from "framer-motion";


export default function Hero() {
  const companyLogos = [
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Google</span>, title: "Google" },
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Microsoft</span>, title: "Microsoft" },
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Amazon</span>, title: "Amazon" },
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Meta</span>, title: "Meta" },
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Apple</span>, title: "Apple" },
    { node: <span className="text-gray-400 font-semibold tracking-wider hover:text-white transition-colors">Netflix</span>, title: "Netflix" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        easing: "easeOut",
      },
    },
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        easing: "easeOut",
      },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        easing: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-[rgb(10,10,10)] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange smokey gradient - top right corner (reduced intensity) */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px]"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-bl from-orange-500/25 via-orange-600/8 to-transparent rounded-full blur-[150px]"></div>
          <div className="absolute top-20 right-20 w-[350px] h-[350px] bg-linear-to-bl from-red-500/15 via-orange-500/5 to-transparent rounded-full blur-[120px]"></div>
        </motion.div>
        
        {/* Orange smokey gradient - top left corner */}
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px]"
          animate={{
            y: [0, -20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-orange-600/15 via-red-600/5 to-transparent rounded-full blur-[150px]"></div>
          <div className="absolute top-10 left-10 w-[250px] h-[250px] bg-linear-to-br from-orange-500/10 to-transparent rounded-full blur-[100px]"></div>
        </motion.div>

        {/* Animated Stars Background */}
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        {/* Decorative Lines with Diamond on sides */}
        {/* Left Line */}
        <div className="absolute left-[8%] top-[17%] bottom-0 flex flex-col items-center">
          {/* Top line segment */}
          <div className="w-px h-[45%] bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
          {/* Diamond/Star shape */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <div className="absolute w-3 h-3 rotate-45 border border-white/30"></div>
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-white/40"></div>
          </div>
          {/* Bottom line segment */}
          <div className="w-px h-[45%] bg-gradient-to-b from-white/40 via-white/20 to-transparent"></div>
        </div>
        
        {/* Right Line */}
        <div className="absolute right-[8%] top-[17%] bottom-0 flex flex-col items-center">
          {/* Top line segment */}
          <div className="w-px h-[45%] bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
          {/* Diamond/Star shape */}
          <div className="relative w-4 h-4 flex items-center justify-center">
            <div className="absolute w-3 h-3 rotate-45 border border-white/30"></div>
            <div className="absolute w-1.5 h-1.5 rotate-45 bg-white/40"></div>
          </div>
          {/* Bottom line segment */}
          <div className="w-px h-[45%] bg-gradient-to-b from-white/40 via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 h-screen flex flex-col justify-between">
        {/* Top Spacer */}
        <div></div>

        {/* Center Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 leading-tight tracking-tight"
            variants={itemVariants}
          >
            <span className="text-white">Land Your Dream job</span>
            <br />
            <span className="bg-linear-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Interview
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Ace your interviews with AI-powered mock interviews, instant feedback, and personalized learning paths.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="flex justify-center gap-5">
                <div className="fx-border-trace">
                  <div className="fx-border-inner">
                    <Button label="Get Started" className="px-8 py-3.5 rounded-[10px]" />
                  </div>
                </div>

              </div>

              {/* Shadow/Glow Box Below Button */}
              
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Companies Section */}
        <motion.div
          className="relative max-w-4xl mx-auto w-full text-center pb-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-4">
            Trusted by <motion.span
              className="text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              1000+
            </motion.span> professionals
          </p>

          {/* Logo Carousel - Centered */}
          <LogoLoop
            logos={companyLogos}
            speed={80}
            direction="left"
            logoHeight={20}
            gap={48}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Trusted companies"
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#0a0a0a] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
    </section>
  );
}







