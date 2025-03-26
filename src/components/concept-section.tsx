import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ConceptSection() {
  return (
    <section id="concept" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Concept Overview</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            The VTOL EGG is a personal aviation vehicle designed to revolutionize urban mobility with its unique bi-copter configuration.
          </p>
        </div>
        
        <Tabs defaultValue="design" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="vision">Vision</TabsTrigger>
          </TabsList>
          
          <TabsContent value="design" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Egg-Shaped Cockpit</h3>
                <p className="text-muted-foreground">
                  The distinctive egg-shaped cockpit provides aerodynamic efficiency while maintaining structural integrity. The design places the battery under the passenger for a low center of gravity, ensuring stability in flight.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Single passenger design (initial model)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Future models planned for dual passengers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Optimized for both air and ground travel</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="rounded-xl overflow-hidden border shadow-md">
                  <Image
                    src="/vtol-egg-design.jpg"
                    alt="VTOL EGG Design"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Propulsion System</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Two electric motors with ducted propellers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Swivel capability via electric servo motors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Variable RPM for precise maneuvering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Protective mesh to prevent foreign object ingestion</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Ground Transportation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Two-wheel configuration with negatively canted wheels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Spokeless wheel design with rim bearings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Caliper-style brakes for reliable stopping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Forward/reverse thrust from propellers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Control Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>GPS navigation for automated flight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Car-like controls for ground operation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Collision detection and avoidance systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Automated takeoff and landing capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="vision" className="mt-6">
            <div className="space-y-6">
              <p className="text-lg">
                The VTOL EGG aims to transform personal transportation by creating the first practical flying car in the USA, much like Ford did with the automobile. This ambitious vision combines the convenience of road travel with the freedom of flight, all in an environmentally friendly electric vehicle.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>To revolutionize urban mobility by providing a safe, efficient, and accessible personal aviation vehicle that can seamlessly transition between air and ground transportation.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Long-term Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Develop a range of models for different use cases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Establish new regulatory frameworks for flying cars</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Create a network of vertiports for urban air mobility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
