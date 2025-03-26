"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
}

export function ImageCarousel({ images, autoPlay = true, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    
    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setTimeout(() => {
        handleNext();
      }, interval);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, autoPlay, interval, isPaused, isTransitioning]);

  return (
    <div 
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="aspect-[16/9] bg-muted/20 relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentIndex 
                ? 'opacity-100 translate-x-0' 
                : index < currentIndex || (currentIndex === 0 && index === images.length - 1)
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={handlePrevious}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentIndex(index);
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 500);
              }
            }}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
