import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BusinessSection() {
  return (
    <section id="business" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Business Analysis</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Transforming the VTOL EGG concept into a successful business venture requires strategic planning and execution.
          </p>
        </div>
        
        <Tabs defaultValue="development" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="market">Market Analysis</TabsTrigger>
            <TabsTrigger value="strategy">Strategy</TabsTrigger>
          </TabsList>
          
          <TabsContent value="development" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Development Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p>
                    The VTOL EGG will follow a multi-stage development approach to transform the concept into a commercially viable product:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</div>
                        <h4 className="font-medium">Proposal Development</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Creating a comprehensive proposal to attract engineering talent and initial investors.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</div>
                        <h4 className="font-medium">Prototype Development</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Building a working prototype, potentially starting with a scaled model to validate the concept.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</div>
                        <h4 className="font-medium">Investment Rounds</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Conducting investor meetings and crowdfunding campaigns to secure necessary capital.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</div>
                        <h4 className="font-medium">Waitlist & Deposits</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Gathering customer deposits for a waitlist to generate initial revenue and validate market demand.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">5</div>
                        <h4 className="font-medium">Limited Production</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Initial small-scale manufacturing to fulfill early orders and refine the production process.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">6</div>
                        <h4 className="font-medium">Mass Production</h4>
                      </div>
                      <p className="text-sm text-muted-foreground pl-11">
                        Scaling to full production capacity to meet growing demand and reduce unit costs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="market" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Target Market</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The VTOL EGG concept targets several key market segments:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Early adopters of personal aviation technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Urban commuters seeking alternatives to ground transportation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Technology enthusiasts with significant disposable income</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Potential commercial applications (air taxi services)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Competitive Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">The personal aviation vehicle (PAV) and urban air mobility (UAM) space is becoming increasingly competitive:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Established aerospace companies (Airbus, Boeing, Embraer)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Well-funded startups (Joby Aviation, Lilium, Archer, EHang)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Automotive companies entering the space (Hyundai, Toyota)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Funding Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Initial Funding Needs</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Concept & Design Phase: $500K-1M</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Prototype Development: $2M-5M</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Testing & Certification: $10M-20M</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Initial Production: $50M-100M+</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Potential Funding Sources</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Angel Investors & Venture Capital</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Crowdfunding Campaigns</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Strategic Partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Government Grants & Customer Deposits</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="strategy" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regulatory Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    The strategy of initially registering as a motorcycle or ultralight to bypass stricter regulations is creative but carries risks:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Regulatory arbitrage may face pushback from aviation authorities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Safety concerns could trigger regulatory intervention</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Public perception issues if seen as circumventing safety regulations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>SWOT Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Strengths</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Innovative bi-copter design with unique egg-shaped cockpit</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Dual-mode capability (ground and air transportation)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Electric propulsion aligns with sustainability trends</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Weaknesses</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Limited range due to battery constraints</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Complex regulatory pathway</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Competing against well-funded established players</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Opportunities</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Growing interest in urban air mobility solutions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Potential for regulatory frameworks to evolve favorably</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Battery technology improvements could enhance performance</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Threats</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Regulatory barriers could prevent or delay market entry</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Established competitors with deeper resources</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Public acceptance challenges for new aviation technology</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="flex justify-center mt-8">
                <Button asChild size="lg">
                  <Link href="#contact">Get Involved</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
