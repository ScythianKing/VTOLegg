"use client";

import { useState, useEffect } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface SpecItem {
  name: string;
  value: string;
  percentage: number;
}

interface SpecAccordionProps {
  title: string;
  specs: SpecItem[];
}

export function AnimatedSpecAccordion({ title, specs }: SpecAccordionProps) {
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(specs.map(() => 0));
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      // Animate percentages one by one with delay
      specs.forEach((spec, index) => {
        setTimeout(() => {
          setAnimatedPercentages(prev => {
            const newPercentages = [...prev];
            newPercentages[index] = spec.percentage;
            return newPercentages;
          });
        }, index * 100);
      });
    }
  }, [isOpen, specs]);

  return (
    <Accordion 
      type="single" 
      collapsible 
      className="w-full"
      onValueChange={(value) => setIsOpen(!!value)}
    >
      <AccordionItem value="specs">
        <AccordionTrigger className="text-lg font-medium">{title}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4 pt-2">
            {specs.map((spec, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">{spec.name}</span>
                  <span className="text-sm">{spec.value}</span>
                </div>
                <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                  <div
                    className="h-full bg-primary transition-all duration-1000"
                    style={{ width: `${animatedPercentages[index]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
