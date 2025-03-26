import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function TechnicalSection() {
  return (
    <section id="technical" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Technical Specifications</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The VTOL EGG combines cutting-edge electric propulsion technology with innovative design to create a practical flying car.
          </p>
        </div>
        
        <Tabs defaultValue="specs" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="feasibility">Feasibility</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Weight & Power</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Total Weight</span>
                      <span className="text-sm">390-520 kg (860-1150 lbs)</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Power Requirement</span>
                      <span className="text-sm">120-160 kW total</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Per Motor</span>
                      <span className="text-sm">60-80 kW each</span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Thrust-to-Weight Ratio</span>
                      <span className="text-sm">Minimum 1.2:1</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Battery & Range</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Battery Capacity</span>
                      <span className="text-sm">40-60 kWh</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Energy Density</span>
                      <span className="text-sm">200-250 Wh/kg</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Range</span>
                      <span className="text-sm">50-80 km (30-50 miles)</span>
                    </div>
                    <Progress value={55} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Flight Time</span>
                      <span className="text-sm">30-45 minutes</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Propulsion System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Propeller Diameter</span>
                        <span className="text-sm">1.2-1.5 meters (4-5 feet) each</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Number of Blades</span>
                        <span className="text-sm">5-7 blades per propeller</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">RPM Range</span>
                        <span className="text-sm">2000-3000 RPM (variable)</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Thrust per Propeller</span>
                        <span className="text-sm">235-315 kg (515-690 lbs)</span>
                      </div>
                      <Progress value={70} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="performance" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Speed</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Maximum Speed</span>
                      <span className="text-sm">120-150 km/h (75-93 mph)</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Cruise Speed</span>
                      <span className="text-sm">80-100 km/h (50-62 mph)</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Ground Speed</span>
                      <span className="text-sm">40-60 km/h (25-37 mph)</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Charging</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Standard Charging</span>
                      <span className="text-sm">1-2 hours</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Fast Charging</span>
                      <span className="text-sm">20-30 minutes</span>
                    </div>
                    <Progress value={55} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
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
            </div>
          </TabsContent>
          
          <TabsContent value="feasibility" className="mt-6">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
