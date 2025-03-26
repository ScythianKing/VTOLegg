"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";
import Image from "next/image";
import Link from "next/link";

export function HeroSectionEnhanced() {
  return (
    <section className="relative min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vtol-egg-hero.jpg"
          alt="VTOL EGG Flying Car"
          fill
          className="object-cover opacity-20 dark:opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background"></div>
      </div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              The Future of Personal Transportation
            </h1>
            <p className="text-xl text-muted-foreground">
              Introducing the VTOL EGG, a revolutionary electric bi-copter flying car concept that combines vertical takeoff and landing with practical on-road capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#concept">Explore Concept</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#technical">Technical Specs</Link>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3} className="relative aspect-square md:aspect-auto">
            <div className="relative h-full w-full max-h-[500px]">
              <Image
                src="/vtol-egg5.jpg"
                alt="VTOL EGG Flying Car"
                fill
                className="object-contain rounded-lg shadow-xl"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
        
        <AnimatedSection delay={0.6} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">2</h3>
            <p className="text-muted-foreground">Counter-rotating propellers</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">30-45</h3>
            <p className="text-muted-foreground">Minutes flight time</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">50-80</h3>
            <p className="text-muted-foreground">Kilometer range</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">120</h3>
            <p className="text-muted-foreground">km/h max speed</p>
          </div>
        </AnimatedSection>
      </div>
      
      <ScrollToTopButton />
    </section>
  );
}
