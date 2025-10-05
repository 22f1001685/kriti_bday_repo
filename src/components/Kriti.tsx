"use client";
import {motion, useScroll, useTransform, MotionValue} from "framer-motion";
import {useRef, useState, useEffect} from "react";
import {cn} from "@/components/libs/utils";
import Image from "next/image";

interface TimelineItem {
  id: number;
  image: string;
  message: string;
  title: string;
}

// to add the image link first put them in the public folder NS RENAME THEM TO SMALLER NAME AND THEN use /image_name.jpg
const timelineData: TimelineItem[] = [
  {
    id: 1,
    image: "/parents.webp",
    message:
      "Just two cuties. Her lovely parents who always support her in every decision she takes. And they are the most loving and caring parents ever. I really admire their bonding and love for each other.",
    title: "Kriti's Mummy Papa",
  },
  {
    id: 2,
    image: "/siblings.webp",
    message:
      "Kriti with her siblings. Such a lovely and fun memory.",
    title: "Kriti with her Siblings"
  },
  {
    id: 3,
    image: "/with_atika.webp",
    message:  
      "Kriti with her bestie Atika. They both are so cute together. Such a lovely friendship.",
    title: "Kriti with her best friend Atika",
  },
  {
    id: 4,
    image: "/childhood.webp",
    message:
      "Kriti with her Sister Shalu Di. Such a cute childhood memory. ",
    title: "Kriti with her Shalu Di",
  },
  {
    id: 5,
    image: "/saree.webp",
    message:
      "Kriti in Saree looks like a princess from a fairytale. Such a graceful and elegant look.",
    title: "Kriti in Saree"
  },
  {
    id: 6,
    image: "/lehanga.webp",
    message:
    "Kriti in Lehanga looks like a queen. Such a stunning and beautiful look.",
    title: "Kriti in Lehanga"
  },
  {
    id: 7,
    image: "/raw.webp",
    message:
      "Kriti in this picture looks so peaceful and calm. The raw beauty of Kriti is just mesmerizing.",
    title: "Peace and Calm"
  },
  {
    id: 8,
    image: "/simple.webp",
    message:
      "Its a simple candid picture of Kriti. But the beauty of this picture is just out of the world. The way she is posing with that innocent smile is just heart melting.",
    title: "Simple yet Beautiful"
  },
  {
    id: 9,
    image: "/black_dress.webp",
    message:
      "Remember how you were so nervous before the ramp walk. You rocked that ramp walk like a pro and i was so proud of you. You looked so stunning in that black dress.",
    title: "Kriti after ramp walk"
  },
  {
    id: 10,
    image: "/iitm_logo.webp",
    message:
      "Joining IIT Madras was a big step for you. I wish you will achieve great things in life. This is just the beginning of a new journey.",
    title: "New Beginning"
  },
  {
    id: 11,
    image: "/gajra.webp",
    message:
      "Gajra in your hair adds to your beauty. You look so elegant and traditional. Saree and Gajra is a match made in heaven and you nailed that look perfectly.",
    title: "Gajra in Hair"
  },
  {
    id: 12,
    image: "/hnm.webp",
    message:
      "Ofcourse you love shopping. Who doesn't? But the way you shop is just amazing. You have a great taste in clothes and accessories. I love to see you shopping and giving me fashion advice.",
    title: "Kriti doing shopping"
  },
  {
    id: 13,
    image: "/ladyboss.webp",
    message:
      "The bossy look of Kriti is just adorable. I love the way you carry yourself with so much confidence and grace.",
    title: "Bossy Look"
  },
  {
    id: 14,
    image: "/long_hairs.webp",
    message:
      "Kriti flaunting her long hairs. The way you take care of your hairs is just commendable. Long hairs suit you the best.",
    title: "Kriti flaunting her long hairs"
  }
];

export const Kriti = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<{src: string, alt: string} | null>(null);
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
          Kriti Singh
        </h2>
        <p className="text-gray-300 text-lg mt-4 max-w-2xl mx-auto px-4">
          Kriti in multiple avatars - a journey through cherished moments
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
                onImageClick={(src, alt) => setModalImage({src, alt})}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
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
  onImageClick,
}: {
  item: TimelineItem;
  index: number;
  scrollProgress: MotionValue<number>;
  totalCards: number;
  onImageClick: (src: string, alt: string) => void;
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
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-2xl ml-8 md:ml-0">
              <CardContent item={item} onImageClick={onImageClick} />
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
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 md:p-6 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-2xl ml-8 md:ml-0">
                <CardContent item={item} onImageClick={onImageClick} />
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
            "object-contain transition-all duration-700 group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{ 
            objectPosition: 'center center',
            objectFit: 'contain'
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          priority={false} // Disable priority for lazy loading
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      )}

      {/* Subtle gradient overlay for better text contrast if needed */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </div>
  );
};

// Image Modal Component
const ImageModal = ({src, alt, onClose}: {src: string, alt: string, onClose: () => void}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      
      {/* Close button */}
      <button
        className="absolute top-4 right-4 z-60 text-white hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Image container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="object-contain w-full h-full"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}
        />
        
        {/* Image caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <p className="text-center font-medium">{alt}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CardContent = ({item, onImageClick}: {item: TimelineItem, onImageClick: (src: string, alt: string) => void}) => {
  return (
    <>
      {/* Card Content */}
      <div className="space-y-4">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {item.title}
        </h3>

        {/* Lazy Loaded Image */}
        <div 
          className="relative w-full h-64 md:h-72 bg-gray-800 rounded-lg overflow-hidden group flex items-center justify-center cursor-pointer transform transition-transform hover:scale-[1.02]"
          onClick={() => onImageClick(item.image, item.title)}
        >
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

export default Kriti;
