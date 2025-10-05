"use client";
import {motion, useTransform, useScroll, AnimatePresence} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";
import Image from "next/image";

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [modalImage, setModalImage] = useState<CardType | null>(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
  });
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  // Responsive transform values - more movement on mobile to show all tiles
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["1%", "-95%"] : ["1%", "-68%"]
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
          )}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 z-5 bg-black/40" />
        <div className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-10 z-20">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text drop-shadow-lg">
            Even though you look Pretty in evey picture but these are some
            pictures that are just beyond this world..
          </p>
        </div>
        <motion.div
          style={{x}}
          className="flex gap-2 sm:gap-3 md:gap-3 lg:gap-4 mt-12 sm:mt-14 md:mt-15 lg:mt-16 relative z-10"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} onClick={() => setModalImage(card)} />;
          })}
        </motion.div>

        {/* Full-screen Image Modal */}
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
                className="relative w-[95vw] h-[95vh] max-w-[1200px] max-h-[800px] bg-black rounded-lg overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setModalImage(null)}
                  className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-200 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Main image container */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={modalImage.url}
                      alt={modalImage.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw, 1200px"
                      priority
                    />
                  </div>
                </div>
                
                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-center text-2xl md:text-3xl font-bold mb-2">
                    {modalImage.title}
                  </h3>
                  <p className="text-gray-200 text-center text-sm md:text-base">
                    Click outside to close
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Card = ({card, onClick}: {card: CardType, onClick: () => void}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[600px] w-[600px] overflow-hidden bg-neutral-200 cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
      {/* Hover overlay with zoom icon */}
      <div className="absolute inset-0 z-5 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="bg-white/30 backdrop-blur-sm rounded-full p-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute mt-100 inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "/best.webp",
    title: "Best",
    id: 1,
  },
  {
    url: "/aesthetic.webp",
    title: "Aesthetic",
    id: 2,
  },
  {
    url: "/model.webp",
    title: "Model",
    id: 3,
  },
  {
    url: "/preety.webp",
    title: "Pretty",
    id: 4,
  },
  {
    url: "/smile.webp",
    title: "Best Smile",
    id: 5,
  },
  {
    url: "/selfie_queen.webp",
    title: "Selfie Queen",
    id: 6,
  },
  {
    url: "/playing_dandiya.webp",
    title: "Playing Dandiya",
    id: 7,
  },
  {
    url: "/ai.webp",
    title: "AI Edit",
    id: 8,
  }
];
