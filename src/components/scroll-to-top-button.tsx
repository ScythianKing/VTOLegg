"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className={`rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <ChevronUp className="h-5 w-5" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  );
}
