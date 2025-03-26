"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay before showing
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
          
          // Once visible, stop observing
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
      style={{ 
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
