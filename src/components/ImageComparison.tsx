"use client";
import React, {useState, useEffect} from "react";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";

const ImageComparison = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const images = [
    {
      src: "/baby_megha.webp",
      title: "Your Beautiful Past",
      subtitle: "Every moment was precious",
      period: "Then",
    },
    {
      src: "/now.webp",
      title: "Your Radiant Present",
      subtitle: "Glowing more than ever",
      period: "Now",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoSliding, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 backdrop py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold md:text-6xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2 leading-tight py-1">
            A beautiful journey through time
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A beautiful journey through time - comparing your amazing
            transformation
          </p>
        </div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Slider */}
          <div className="relative">
            {/* Main Image Display */}
            <div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              onMouseEnter={() => setIsAutoSliding(false)}
              onMouseLeave={() => setIsAutoSliding(true)}
            >
              <div className="aspect-[1/1] bg-gray-200 relative">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Period Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      currentImageIndex === 0
                        ? "bg-white/90 backdrop-blur-sm text-gray-800"
                        : "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                    }`}
                  >
                    {images[currentImageIndex].period}
                  </span>
                </div>

                {/* Image Label */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {images[currentImageIndex].title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {images[currentImageIndex].subtitle}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Image Dots Indicator */}
            <div className="flex justify-center gap-3 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex
                      ? "bg-gradient-to-r from-pink-500 to-purple-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Message Content */}
          <div className="bg-white/10 aspect-[1/1] backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <div className="text-justify">
              <h3 className="text-3xl md:text-4xl text-white mb-6">
                Your Beautiful Journey
              </h3>
              <div className="space-y-6">
                <p className="text-lg md:text-lg text-gray-200 leading-relaxed">
                  Just look at yourself, yesterday you used to be a little
                  crawling baby who now has grown up to be a beautiful and the
                  strongest girl. Your eyes, your smile, your nature and most
                  importantly YOUR HEART, everything is just perfect and
                  beautiful.
                </p>
                <p className="text-lg md:text-lg text-gray-200 leading-relaxed">
                  To be with you is the most happiest moments of my life.. I
                  neither get worries nor overthink whenever you are around...
                  That's how pure and happy soul you are. To me, you’re exactly
                  what a perfect woman should look like—and so much more.
                </p>
                <p className="text-lg md:text-lg text-gray-200 leading-relaxed">
                  As Zakir Khan once said: "Tum husn pari, tum jaane-jahaan, tum
                  sabse haseen, tum sabse jawaan... saundarya, saabon Megha...
                  not Nirma. And honestly, even that doesn’t do justice to how
                  amazing you truly are
                </p>
              </div>
              {/* Decorative Elements */}
              <div className="flex gap-4 mt-8">
                <span className="text-3xl animate-pulse">💕</span>
                <span
                  className="text-3xl animate-bounce"
                  style={{animationDelay: "0.5s"}}
                >
                  ✨
                </span>
                <span
                  className="text-3xl animate-pulse"
                  style={{animationDelay: "1s"}}
                >
                  💕
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile VS Divider */}
        <div className="flex justify-center my-8 lg:hidden">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-3 rounded-full shadow-2xl border-4 border-white/20">
            <span className="text-white text-xl font-bold">VS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageComparison;
