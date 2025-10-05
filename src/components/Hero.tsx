"use client";
import React, {useState, useEffect} from "react";
import {Dancing_Script} from "next/font/google";
import Confetti from "react-confetti";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import Image from "next/image";

const dancingScript = Dancing_Script({subsets: ["latin"], weight: "400"});

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const router = useRouter();

  useEffect(() => {
    // Set window dimensions
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Trigger confetti on page load
    setShowConfetti(true);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, []);

  // Secret method 2: Click on the letter "I" in KRITI 7 times
  const handleSecretLetterClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering parent events

    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 7) {
        setTimeout(() => {
          router.push("/letter");
        }, 500);
        return 0;
      }
      return newCount;
    });

    // Reset click count after 3 seconds of inactivity
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <div className="sticky top-0 min-h-screen w-full overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            numberOfPieces={500}
            recycle={false}
            gravity={0.2}
            initialVelocityX={5}
            initialVelocityY={10}
            wind={0.02}
            friction={0.99}
            confettiSource={{
              x: windowDimensions.width * 0.1,
              y: -10,
              w: windowDimensions.width * 0.8,
              h: 10,
            }}
            colors={[
              "#ff69b4", // Hot pink
              "#00bfff", // Deep sky blue
              "#ffd700", // Gold
              "#ff6347", // Tomato
              "#98fb98", // Pale green
              "#dda0dd", // Plum
              "#ff1493", // Deep pink
              "#00ff7f", // Spring green
              "#ff4500", // Orange red
              "#9370db", // Medium purple
              "#32cd32", // Lime green
              "#ff69b4", // Hot pink (duplicate for more frequency)
            ]}
          />
        </div>
      )}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg bg-gray-900"
        style={{
          backgroundImage: "url('/with_parents.webp')",
        }}
      ></div>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Secret click counter - only visible when clicking */}
      {clickCount > 0 && (
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.5}}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-30"
        >
          {/* <div className="bg-white/10 backdrop-blur-lg rounded-full px-3 py-1 border border-white/20">
            <span className="text-xs text-white font-medium">
              ✨ {clickCount}/7
            </span>
          </div> */}
        </motion.div>
      )}
      {/* Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Mobile Layout - Bottom positioned, full width */}
        <div className="md:hidden flex flex-col justify-end w-full px-4 pb-15">
          <div className="text-center w-full">
            <span
              className={`${dancingScript.className} block text-3xl font-normal tracking-wide text-white mb-2`}
            >
              Happy birthday
            </span>
            <h1 className="text-8xl font-black text-white leading-none tracking-tight select-none">
              <span>K</span>
              <span>R</span>
              <span>I</span>
              <span>T</span>
              <span
                className="cursor-pointer transition-colors duration-200 relative z-30"
                onClick={handleSecretLetterClick}
              >
                I
              </span>
            </h1>
          </div>
        </div>

        {/* Desktop Layout - Repositioned text */}
        <div className="hidden md:flex md:min-h-screen w-full relative">
          {/* Happy - Left side, middle */}
          <div className="absolute left-8 md:left-16 top-1/2 transform -translate-y-1/2">
            <span
              className={`${dancingScript.className} text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-normal tracking-wide leading-tight`}
            >
              Happy
            </span>
          </div>

          {/* Birthday - Right side, middle */}
          <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2">
            <span
              className={`${dancingScript.className} text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-normal tracking-wide leading-tight`}
            >
              Birthday
            </span>
          </div>

          {/* KRITI - Bottom center */}
          <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2">
            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-none tracking-tight select-none text-center">
              <span>K</span>
              <span>R</span>
              <span>I</span>
              <span>T</span>
              <span
                className="cursor-pointer transition-colors duration-200 relative z-30"
                onClick={handleSecretLetterClick}
              >
                I
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
