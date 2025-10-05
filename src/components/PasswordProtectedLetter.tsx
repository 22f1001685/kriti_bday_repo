"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
  caption: string;
}

interface PasswordProtectedLetterProps {
  password?: string;
  letterContent?: string;
  letterTitle?: string;
  images?: ImageItem[];
}

const PasswordProtectedLetter = ({
  password = "rishav",
  letterContent = "Your special letter content goes here...",
  letterTitle = "A Special Letter",
  images = [],
}: PasswordProtectedLetterProps) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
  const [modalImage, setModalImage] = useState<ImageItem | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      setShowError(false);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setInputPassword("");
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  if (isAuthenticated) {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8}}
        className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
        />

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 z-5 bg-black/40" />

        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <motion.h1
              initial={{y: -20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.2}}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight py-2"
            >
              {letterTitle}
            </motion.h1>

            <motion.button
              initial={{y: -20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.3}}
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Logout
            </motion.button>
          </div>

          <motion.div
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.4, duration: 0.8}}
            className="max-w-7xl mx-auto"
          >
            {/* Main Layout with Images on Sides */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side Images */}
              {images.length > 0 && (
                <motion.div
                  initial={{x: -50, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{delay: 0.6, duration: 0.8}}
                  className="lg:col-span-3 space-y-6"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center mb-4 leading-tight py-1">
                    Beautiful Memories 💕
                  </h3>
                  
                  {images.slice(0, 4).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{scale: 0.8, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      transition={{delay: 0.8 + index * 0.2}}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105"
                      onClick={() => setModalImage(image)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/30 backdrop-blur-sm rounded-full p-2">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-200 text-center leading-relaxed px-1">
                        {image.caption}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Center Letter Content */}
              <motion.div
                initial={{y: 30, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.5, duration: 0.8}}
                className="lg:col-span-6"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
                  <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-base md:text-lg leading-relaxed text-gray-100 whitespace-pre-line">
                      {letterContent}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Side Images */}
              {images.length > 4 && (
                <motion.div
                  initial={{x: 50, opacity: 0}}
                  animate={{x: 0, opacity: 1}}
                  transition={{delay: 0.6, duration: 0.8}}
                  className="lg:col-span-3 space-y-6"
                >
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-4 leading-tight py-1">
                    Sweet Moments ✨
                  </h3>
                  
                  {images.slice(4, 8).map((image, index) => (
                    <motion.div
                      key={index + 4}
                      initial={{scale: 0.8, opacity: 0}}
                      animate={{scale: 1, opacity: 1}}
                      transition={{delay: 1.0 + index * 0.2}}
                      className="bg-white/10 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105"
                      onClick={() => setModalImage(image)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-2">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/30 backdrop-blur-sm rounded-full p-2">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-200 text-center leading-relaxed px-1">
                        {image.caption}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Fullscreen Image Modal */}
          <AnimatePresence>
            {modalImage && (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                onClick={() => setModalImage(null)}
              >
                <motion.div
                  initial={{scale: 0.8, opacity: 0}}
                  animate={{scale: 1, opacity: 1}}
                  exit={{scale: 0.8, opacity: 0}}
                  transition={{type: "spring", damping: 25, stiffness: 300}}
                  className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close button */}
                  <button
                    onClick={() => setModalImage(null)}
                    className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={modalImage.src}
                      alt={modalImage.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="p-6 bg-gradient-to-t from-gray-100 to-white">
                    <p className="text-gray-800 text-center text-lg font-medium">
                      {modalImage.caption}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 z-5 bg-black/40" />

      {/* Back button */}
      <motion.button
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.3, duration: 0.5}}
        onClick={handleBackToHome}
        className="absolute top-4 left-4 md:top-6 md:left-6 z-20 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200 text-white hover:text-purple-400"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        <span className="text-sm font-medium">Back to Home</span>
      </motion.button>

      <motion.div
        initial={{scale: 0.9, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.5}}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <motion.h2
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.2}}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-center mb-6 leading-tight py-2"
          >
            Protected Content
          </motion.h2>

          <motion.p
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.3}}
            className="text-gray-300 text-center mb-8"
          >
            Enter the password to access the special letter
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.4}}
            >
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/50 transition-all duration-200"
                autoFocus
              />
            </motion.div>

            <AnimatePresence>
              {showError && (
                <motion.p
                  initial={{opacity: 0, y: -10}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -10}}
                  className="text-pink-400 text-sm text-center"
                >
                  Incorrect password. Please try again.
                </motion.p>
              )}
            </AnimatePresence>

            <motion.button
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 0.5}}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            >
              Access Letter
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordProtectedLetter;
