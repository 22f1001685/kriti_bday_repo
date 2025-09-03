"use client";
import {motion, useTransform, useScroll} from "framer-motion";
import {useRef, useEffect, useState} from "react";
import {DotPattern} from "@/components/ui/dot-pattern";
import {cn} from "@/components/libs/utils";

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
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({card}: {card: CardType}) => {
  return (
    <div
      key={card.id}
      className="group relative h-[600px] w-[600px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
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
    url: "/m1.webp",
    title: "Classy",
    id: 1,
  },
  {
    url: "/m2.jpg",
    title: "Model",
    id: 2,
  },
  {
    url: "/m3.webp",
    title: "Paglait",
    id: 3,
  },
  {
    url: "/m4.webp",
    title: "Pretty",
    id: 4,
  },
  {
    url: "/m8.webp",
    title: "Sanskari",
    id: 5,
  },
  {
    url: "/m6.webp",
    title: "Sushil",
    id: 6,
  },
  {
    url: "/m7.webp",
    title: "Best Smile",
    id: 7,
  },
];
