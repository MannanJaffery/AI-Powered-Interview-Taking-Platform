"use client";
import Button from "../common/Button";
import { motion } from "framer-motion";


export default function Hero() {
  const companyLogos = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Apple",
    "Netflix",
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

        {/* White dots pattern across the background (reduced) */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/40 rounded-full"
              style={{
                left: `${10 + (i * 3.5) % 80}%`,
                top: `${15 + (i * 7) % 70}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            ></motion.div>
          ))}
        </div>

        {/* Vertical lines on sides */}
        <motion.div
          className="absolute left-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute right-[15%] top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
             <div className="fx-border-trace relative">
  <div className="fx-border-inner relative z-10">
    <Button label="Get Started" className="px-8 py-6 rounded-[12px]" />
  </div>
</div>


              {/* Shadow/Glow Box Below Button */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-12 rounded-full blur-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 100%)",
                  opacity: 1,
                  transform: "translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Companies Section */}
        <motion.div
          className="relative max-w-4xl mx-auto w-full text-center pb-4"
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
              50,000+
            </motion.span> professionals
          </p>

          {/* Logo Carousel - Centered */}
          <div
            className="flex justify-center overflow-hidden w-full"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
            }}
          >
            <motion.div
              className="logo-scroll flex items-center gap-12"
              animate={{ x: [0, -2880] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
              style={{
                display: "flex",
                gap: ".8rem",
              }}
            >
              {/* Render logos 3 times for seamless infinite loop */}
              {[...companyLogos, ...companyLogos, ...companyLogos].map((company, index) => (
                <motion.div
                  key={index}
                  className="shrink-0 text-sm md:text-base font-semibold text-gray-500 tracking-wider px-4"
                  whileHover={{
                    color: "#ffffff",
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  style={{
                    minWidth: "fit-content",
                  }}
                >
                  {company}
                </motion.div>
              ))}
            </motion.div>
          </div>
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







