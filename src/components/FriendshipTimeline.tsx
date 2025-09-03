"use client";
import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import {useRef, useState, useEffect} from "react";
import {cn} from "@/components/libs/utils";
import Image from "next/image";

interface TimelineItem {
  id: number;
  image: string;
  message: string;
  date: string;
  title: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    image: "/m1.webp",
    message:
      "The day when I first saw you as a strict, uncool big sister of my friend.",
    date: "29 October 2023",
    title: "First Meeting",
  },
  {
    id: 2,
    image: "/first_talk.webp",
    message:
      "The day when i first talked to you and realised that you are exactly opposite to what i thought of you in the first place.",
    date: "24 March 2024",
    title: "First Adventure",
  },
  {
    id: 3,
    image: "/first_trip.webp",
    message:
      "Our first trip to Chennai where i gladly got the chance to know more about you throughout the trip.",
    date: "24 May 2024",
    title: "Endless Laughter",
  },
  {
    id: 4,
    image: "/bestone.webp",
    message:
      "I don't know about you but this memory of us is the bestest one.. I always adore our bonding where everyone just being happy together.",
    date: "27 May 2024",
    title: "Peace and Calm",
  },
  {
    id: 5,
    image: "/beach.webp",
    message:
      "My beach memories are priceless coz i always feel at peace when i'm with you at the shore like a dream come true.",
    date: "28 May 2024",
    title: "Peace and Calm",
  },
  {
    id: 6,
    image: "/dj_night.webp",
    message:
      "Do you remember when we danced like our souls left our bodies? everyone were breathless but that was out of the world experience",
    date: "31 May 2024",
    title: "Dancing our souls out",
  },
  {
    id: 7,
    image: "/fav_spot.webp",
    message:
      "Our Favourite spot where we find our own calmness and peace in the serendity of the campus. Well this spot is very less explored by others. So this is our Peaceful spot forever.",
    date: "1 June 2024",
    title: "Our Spot",
  },
  {
    id: 8,
    image: "/sunrise.webp",
    message:
      "After that fight this sunrise feels like a new beginning of something new. You remember that i slept in my room and you called me and then i came running not to miss this moment. and that sprinklers that worked as rain to make that moment even more heavenly",
    date: "2 June 2024",
    title: "New Beginnings",
  },
  {
    id: 9,
    image: "/fav_outfit.webp",
    message:
      "The day when you literally liked my this shirt and from that day i even love that shirt even more. I keep that shirt with more care as it's your fav shirt. Look at you, you look so elegant and pretty that day like a real life doll.",
    date: "2 June 2024",
    title: "Our Fav Outfit",
  },
  {
    id: 10,
    image: "/golden_beach.webp",
    message:
      "You remember when everyone busy in the ocean are we are busy doing bakaiti in our own special way. We danced, did the chaos, ran over the sand, and created lots of memories which are really special to me.",
    date: "3 June 2024",
    title: "Memories through chaos",
  },
  {
    id: 11,
    image: "/last_day.webp",
    message:
      "The day when out trip finally came to an end i realised that these 7-10 days i have lived my dream life with you and may be these days were the one where my heart decided that it's you. I cried on the train because i was angry and sad that why didn;t i met you before.. and why god waited this much to bring you into my life.",
    date: "5 June 2024",
    title: "Parting Ways from Trip",
  },
  {
    id: 12,
    image: "/exams.webp",
    message:
      " But we used to meet each other during the exams and the those laughter in the whole foodcourt.. sometimes we just forget where awe are... Those fun short journeys during exams are also good",
    date: "7 July 2024",
    title: "Short trips on exams",
  },
  {
    id: 13,
    image: "/bday_girl.webp",
    message:
      "Last year we celebrated your birthday. I felt good seeing the smile on your face. But the fact is may be you don't like your birthday but for me it's kind of festival celebration. So I am here creating this memory website for you. I don't know what you gonna say about it.. Might be chances that i am gonna get scolded for this for sure...",
    date: "1 September 2024",
    title: "Birthday Celebration",
  },
];

export const FriendshipTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <div ref={containerRef} className="relative bg-black min-h-screen py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight py-2">
          Our Friendship Timeline
        </h2>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto px-4">
          A journey through our beautiful friendship moments
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Timeline Items Container with Tracing Beam */}
        <div className="relative">
          {/* Tracing Beam */}
          <TracingBeam scrollProgress={scrollYProgress} />

          {/* Timeline Items */}
          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={item.id}
                item={item}
                index={index}
                scrollProgress={scrollYProgress}
                totalCards={timelineData.length}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TracingBeam = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  return (
    <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 z-0">
      {/* Static beam line - full height */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 w-full" />

      {/* Animated tracing beam */}
      <motion.div
        className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"
        style={{
          height: useTransform(scrollProgress, [0, 1], ["0%", "100%"]),
        }}
      />

      {/* Glowing dot at the end */}
      <motion.div
        className="absolute -left-1 w-3 h-3 bg-white rounded-full shadow-lg shadow-purple-500/50 z-10"
        style={{
          top: useTransform(
            scrollProgress,
            [0, 1],
            ["0%", "calc(100% - 12px)"]
          ),
          opacity: useTransform(scrollProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
        }}
      />
    </div>
  );
};

const TimelineCard = ({
  item,
  index,
  scrollProgress,
  totalCards,
}: {
  item: TimelineItem;
  index: number;
  scrollProgress: MotionValue<number>;
  totalCards: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0; // First card (index 0) goes left, then alternates

  // Better animation triggers that work for any number of cards
  // Cards start animating earlier and have more generous timing
  const animationStart = Math.max(0, (index - 0.5) / totalCards);
  const animationPeak = (index + 0.3) / totalCards;
  const animationEnd = Math.min(1, (index + 1.5) / totalCards);

  const y = useTransform(
    scrollProgress,
    [animationStart, animationPeak],
    [80, 0]
  );

  const opacity = useTransform(
    scrollProgress,
    [animationStart, animationPeak, animationEnd],
    [0, 1, 1]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{y, opacity}}
      className="relative flex items-center justify-center mb-20 md:mb-32"
    >
      {/* Timeline Dot - Always centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-500 rounded-full z-20 shadow-lg shadow-purple-500/30" />

      {/* Card Container */}
      <div className="w-full max-w-6xl flex items-center">
        {/* Left Side Card */}
        {isLeft && (
          <div className="w-full md:w-1/2 flex justify-end pr-0 md:pr-8">
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md shadow-2xl ml-8 md:ml-0">
              <CardContent item={item} />
              {/* Pointer pointing right to center line */}
              <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white/20" />
              </div>
            </div>
          </div>
        )}

        {/* Right Side Card */}
        {!isLeft && (
          <>
            <div className="hidden md:block w-1/2"></div>
            <div className="w-full md:w-1/2 flex justify-start pl-0 md:pl-8">
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md shadow-2xl ml-8 md:ml-0">
                <CardContent item={item} />
                {/* Pointer pointing left to center line */}
                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-white/20" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

// Custom Lazy Image Component with Intersection Observer
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "100px", // Start loading 100px before the image comes into view
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={cn("relative overflow-hidden", className)}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse">
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      )}

      {/* Error State */}
      {imageError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-gray-400 text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">📷</div>
            <p className="text-sm">Image not found</p>
          </div>
        </div>
      )}

      {/* Actual Image - Only load when in view */}
      {isInView && (
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-all duration-700 group-hover:scale-110",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          priority={false} // Disable priority for lazy loading
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
};

const CardContent = ({item}: {item: TimelineItem}) => {
  return (
    <>
      {/* Card Content */}
      <div className="space-y-4">
        {/* Date Badge */}
        <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
          {item.date}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {item.title}
        </h3>

        {/* Lazy Loaded Image */}
        <div className="relative w-full h-48 md:h-56 rounded-lg overflow-hidden group">
          <LazyImage
            src={item.image}
            alt={item.title}
            className="w-full h-full"
          />
        </div>

        {/* Message */}
        <p className="text-gray-200 leading-relaxed text-sm md:text-base">
          {item.message}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-40" />
    </>
  );
};

export default FriendshipTimeline;
