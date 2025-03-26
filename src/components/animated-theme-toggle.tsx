"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
}

export function AnimatedThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      className={`relative h-10 w-10 rounded-full bg-muted p-2 transition-transform duration-200 hover:scale-110 active:scale-90 ${className}`}
      onClick={toggleTheme}
      variant="ghost"
    >
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isDark ? 'opacity-0' : 'opacity-100'}`}
      >
        <Sun className="h-5 w-5" />
      </div>
      
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}
      >
        <Moon className="h-5 w-5" />
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
