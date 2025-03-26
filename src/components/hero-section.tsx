import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Future of Personal Aviation
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                VTOL EGG is a revolutionary electric bi-copter with on-road capabilities, 
                designed to transform personal transportation.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#concept">Explore Concept</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#technical">Technical Specs</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:ml-auto flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                <Image
                  src="/vtol-egg-hero.jpg"
                  alt="VTOL EGG Flying Car Concept"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
