"use client";

import { developmentStages, fundingRequirements, swotAnalysis } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";

export function BusinessSectionEnhanced() {
  return (
    <section id="business" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Business Analysis</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Transforming the VTOL EGG concept into a successful business venture requires strategic planning and execution.
          </p>
        </AnimatedSection>
        
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
                    {developmentStages.map((stage, index) => (
                      <AnimatedSection key={index} delay={index * 0.1} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                            {index + 1}
                          </div>
                          <h4 className="font-medium">{stage.title}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-11">
                          {stage.description}
                        </p>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="market" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection delay={0.1}>
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
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
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
              </AnimatedSection>
              
              <AnimatedSection delay={0.3} className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Funding Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Initial Funding Needs</h4>
                        <ul className="space-y-2">
                          {fundingRequirements.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item.phase}: {item.amount}</span>
                            </li>
                          ))}
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
              </AnimatedSection>
            </div>
          </TabsContent>
          
          <TabsContent value="strategy" className="mt-6">
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
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
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle>SWOT Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Strengths</h4>
                        <ul className="space-y-2">
                          {swotAnalysis.strengths.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Weaknesses</h4>
                        <ul className="space-y-2">
                          {swotAnalysis.weaknesses.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Opportunities</h4>
                        <ul className="space-y-2">
                          {swotAnalysis.opportunities.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Threats</h4>
                        <ul className="space-y-2">
                          {swotAnalysis.threats.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
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
