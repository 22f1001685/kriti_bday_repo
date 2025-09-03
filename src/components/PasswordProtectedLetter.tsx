"use client";
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";
import {useRouter} from "next/navigation";

interface PasswordProtectedLetterProps {
  password?: string;
  letterContent?: string;
  letterTitle?: string;
}

const PasswordProtectedLetter = ({
  password = "megha123",
  letterContent = "Your special letter content goes here...",
  letterTitle = "A Special Letter",
}: PasswordProtectedLetterProps) => {
  const [inputPassword, setInputPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showError, setShowError] = useState(false);
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg md:text-xl leading-relaxed text-gray-100 whitespace-pre-line">
                  {letterContent}
                </p>
              </div>
            </div>
          </motion.div>
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
