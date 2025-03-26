"use client";

import { technicalSpecs } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSpecAccordion } from "@/components/animated-spec-accordion";
import { AnimatedSection } from "@/components/animated-section";

export function TechnicalSectionEnhanced() {
  return (
    <section id="technical" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Specifications</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The VTOL EGG combines cutting-edge electric propulsion technology with innovative design to create a practical flying car.
          </p>
        </AnimatedSection>
        
        <Tabs defaultValue="specs" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="feasibility">Feasibility</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Weight & Power</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedSpecAccordion 
                      title="Weight & Power Specifications" 
                      specs={technicalSpecs.weightPower} 
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Battery & Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedSpecAccordion 
                      title="Battery & Range Specifications" 
                      specs={technicalSpecs.batteryRange} 
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Propulsion System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedSpecAccordion 
                      title="Propulsion System Specifications" 
                      specs={technicalSpecs.propulsion} 
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Speed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedSpecAccordion 
                      title="Speed Specifications" 
                      specs={technicalSpecs.speed} 
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>Charging</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AnimatedSpecAccordion 
                      title="Charging Specifications" 
                      specs={technicalSpecs.charging} 
                    />
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Operational Capabilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Vertical Takeoff & Landing</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          The VTOL EGG can take off and land vertically from any flat surface with sufficient clearance, eliminating the need for runways.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Highway Integration</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Capable of taking off and landing on highways at speed, allowing for seamless transition between ground and air travel.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Automated Navigation</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          GPS-guided navigation system with collision detection and avoidance for safe, autonomous flight operations.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Noise Reduction</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Toroidal-shaped fan blades and ducted propeller design significantly reduce noise pollution compared to traditional aircraft.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </TabsContent>
          
          <TabsContent value="feasibility" className="mt-6">
            <AnimatedSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle>Technical Feasibility Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The VTOL EGG concept is technically feasible with current or near-future technology, but with some limitations primarily related to battery technology.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Technical Challenges</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Battery technology limitations (weight and energy density)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Complex control systems for bi-copter configuration</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Transition between vertical and horizontal flight</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Regulatory certification pathway</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Technological Enablers</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Advances in electric motor efficiency and power density</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Improvements in battery technology (approaching 300 Wh/kg)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Development of sophisticated flight control algorithms</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Lightweight aerospace materials and manufacturing techniques</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Future Improvements</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Improvements in battery technology (reaching 300-400 Wh/kg) would significantly enhance the practicality of this concept by extending range and reducing weight.
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
