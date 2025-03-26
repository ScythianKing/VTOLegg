"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ModelViewerProps {
  modelSrc?: string;
  fallbackImageSrc: string;
  alt: string;
}

export function ModelViewer({ fallbackImageSrc, alt }: ModelViewerProps) {
  const [rotation, setRotation] = useState(0);
  
  const handleRotateLeft = () => {
    setRotation(prev => prev - 45);
  };
  
  const handleRotateRight = () => {
    setRotation(prev => prev + 45);
  };

  return (
    <div className="relative w-full aspect-square bg-muted/20 rounded-lg overflow-hidden">
      <div 
        className="w-full h-full flex items-center justify-center transition-transform duration-500"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img
          src={fallbackImageSrc}
          alt={alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleRotateLeft}
          className="bg-background/80 backdrop-blur-sm"
        >
          Rotate Left
        </Button>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleRotateRight}
          className="bg-background/80 backdrop-blur-sm"
        >
          Rotate Right
        </Button>
      </div>
    </div>
  );
}
