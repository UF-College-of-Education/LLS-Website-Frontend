import React, { useEffect, useRef, useState } from "react";

interface HeroCarouselProps {
  images: string[],
  interval?: number,
  alt?: string
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({
  images,
  interval = 3000,
  alt = "Caregivers supporting their loved ones"
}) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance logic
  useEffect(() => {
    setFade(true);
    timeoutRef.current = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % images.length);
        setFade(true);
      }, 500); // fade duration in ms to match CSS
    }, interval);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, interval, images.length]);

  // Handler for dot click
  const handleDotClick = (idx: number) => {
    if (idx === current) return;
    setFade(false);
    setTimeout(() => {
      setCurrent(idx);
      setFade(true);
    }, 300);
    if (timeoutRef.current) clearTimeout(timeoutRef.current); // Cancel scheduled change
  };

  return (
    <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
      <img
        src={images[current]}
        alt={alt}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ zIndex: 5 }}
      />
      {/* Carousel dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20">
        <div className="flex space-x-8">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`
                w-1 h-1 rounded-full transition-all duration-300
                ${current === idx ? "bg-white shadow-md scale-125" : "bg-white/50 hover:bg-white/80"}
                outline-none focus:ring-2 ring-blue-400
                border border-white
              `}
              style={{
                boxShadow: current === idx ? "0 0 0 3px #C5026D66" : undefined
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;