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

  // Secret method 2: Click on the letter "A" in MEGHA 7 times
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
      {/* Confetti from top center */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={300}
          recycle={false}
          gravity={0.3}
          initialVelocityX={0}
          initialVelocityY={8}
          confettiSource={{
            x: 0,
            y: 0,
            w: windowDimensions.width,
            h: 50,
          }}
          colors={[
            "#ff69b4",
            "#00bfff",
            "#ffd700",
            "#ff6347",
            "#98fb98",
            "#dda0dd",
            "#ff1493",
            "#00ff7f",
          ]}
        />
      )}
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat hero-bg"
        style={{
          backgroundImage: "url('./megha.svg')",
          backgroundPosition: "15% center",
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
        {/* Character Image Overlay - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block absolute left-2 top-1/3 sm:left-4 sm:top-1/2 md:left-6 md:top-1/2 lg:left-0 lg:top-1/2 transform -translate-y-1/2 z-20">
          <Image
            src="/megha2.svg"
            alt="Character"
            width={200}
            height={200}
            className="w-32 h-auto sm:w-40 md:w-48 lg:w-auto lg:h-auto"
          />
        </div>

        {/* Mobile Layout - Bottom positioned, full width */}
        <div className="md:hidden flex flex-col justify-end w-full px-4 pb-15">
          <div className="text-center w-full">
            <span
              className={`${dancingScript.className} block text-3xl font-normal tracking-wide text-white mb-2`}
            >
              Happy birthday
            </span>
            <h1 className="text-8xl font-black text-white leading-none tracking-tight select-none">
              <span>M</span>
              <span>E</span>
              <span>G</span>
              <span>H</span>
              <span
                className="cursor-pointer transition-colors duration-200 relative z-30"
                onClick={handleSecretLetterClick}
              >
                A
              </span>
            </h1>
          </div>
        </div>

        {/* Desktop Layout - Original positioning */}
        <div className="hidden md:flex md:min-h-screen md:items-center w-full">
          <div className="w-full">
            <div className="flex justify-end">
              <h1 className="text-6xl md:text-[12rem] lg:text-[16rem] font-black text-white leading-none tracking-tight text-right mr-15">
                <span
                  className={`${dancingScript.className} block text-3xl md:text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center font-normal tracking-wide md:tracking-wider -mb-10 leading-tight py-1`}
                >
                  Happy birthday
                </span>
                <span className="select-none block">
                  <span>M</span>
                  <span>E</span>
                  <span>G</span>
                  <span>H</span>
                  <span
                    className="cursor-pointer transition-colors duration-200 relative z-30"
                    onClick={handleSecretLetterClick}
                  >
                    A
                  </span>
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
