"use client";

import { AnimatedSection } from "@/components/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ConceptSectionEnhanced() {
  return (
    <section id="concept" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Concept Overview</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The VTOL EGG represents a revolutionary approach to personal air mobility with its unique bi-copter design.
          </p>
        </AnimatedSection>
        
        <Tabs defaultValue="design" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="features">Key Features</TabsTrigger>
            <TabsTrigger value="innovation">Innovation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <AnimatedSection delay={0.1}>
                <div className="relative aspect-square">
                  <Image
                    src="/vtol-egg-design.jpg"
                    alt="VTOL EGG Design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2} className="space-y-6">
                <h3 className="text-2xl font-bold">Bi-Copter Configuration</h3>
                <p>
                  The VTOL EGG features a unique bi-copter design with two large counter-rotating propellers mounted above an egg-shaped cockpit. This configuration offers several advantages over traditional multi-rotor designs:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Simplified mechanical design with fewer moving parts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Improved efficiency through larger propeller diameter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Enhanced stability through counter-rotation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Reduced noise profile compared to multiple smaller rotors</span>
                  </li>
                </ul>
                <p>
                  The egg-shaped cockpit provides aerodynamic efficiency while maximizing interior space for the pilot and passenger. The two-wheel configuration enables ground transportation capabilities, making it a true flying car rather than just an aircraft.
                </p>
              </AnimatedSection>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Dual-Mode Transportation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The VTOL EGG functions as both an aircraft and a ground vehicle, offering true flying car capabilities:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Vertical takeoff and landing from any flat surface</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Two-wheel configuration for road travel</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Seamless transition between air and ground modes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ability to drive to charging stations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Electric Propulsion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The all-electric powertrain provides numerous advantages:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Zero direct emissions during operation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Reduced noise compared to combustion engines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Lower maintenance requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Instant torque for responsive control</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3}>
                <Card>
                  <CardHeader>
                    <CardTitle>Simplified Controls</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The control system is designed for ease of use:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Automated flight systems for stability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Intuitive joystick-based controls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Minimal training required compared to helicopters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Automated takeoff and landing capabilities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <Card>
                  <CardHeader>
                    <CardTitle>Compact Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      The compact form factor offers practical advantages:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Small footprint for urban environments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Fits in standard parking spaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Potential for home storage in garage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Maneuverability in tight spaces</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </TabsContent>
          
          <TabsContent value="innovation" className="mt-6">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Innovative Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    The VTOL EGG concept represents a fresh approach to the flying car challenge, focusing on practical implementation rather than theoretical perfection. Key innovations include:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Regulatory Strategy</h4>
                      <p className="text-sm text-muted-foreground">
                        The concept proposes an innovative regulatory approach by initially registering as a motorcycle or ultralight aircraft to navigate the complex certification landscape. This strategy could potentially accelerate time-to-market while regulatory frameworks for urban air mobility continue to evolve.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Bi-Copter Configuration</h4>
                      <p className="text-sm text-muted-foreground">
                        While most eVTOL designs use 4-8 rotors, the VTOL EGG's bi-copter approach simplifies the mechanical design while maintaining stability through counter-rotation and sophisticated control systems. This configuration offers potential advantages in efficiency, maintenance, and noise reduction.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">True Dual-Mode Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Unlike many flying car concepts that are essentially aircraft with folding wings, the VTOL EGG is designed from the ground up as both an aircraft and ground vehicle. The two-wheel configuration enables practical road use while maintaining aerodynamic efficiency for flight.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Staged Development Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        The business model proposes a pragmatic staged approach to development, starting with a prototype and progressing through limited production before scaling to mass manufacturing. This approach acknowledges the technical and regulatory challenges while providing a realistic path to market.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
