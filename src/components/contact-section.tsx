import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get Involved</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Join us in revolutionizing personal transportation with the VTOL EGG flying car concept.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Interested in the VTOL EGG project? Reach out to discuss collaboration, investment, or just to learn more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      First name
                    </label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Last name
                    </label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email
                  </label>
                  <Input id="email" placeholder="john.doe@example.com" type="email" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    I'm interested in
                  </label>
                  <select 
                    id="interest"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select an option</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="engineering">Engineering Collaboration</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="preorder">Pre-ordering Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Tell us how you'd like to be involved..." className="min-h-[120px]" />
                </div>
                
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/john-shubin-09065968/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    linkedin.com/in/john-shubin-09065968/
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Instagram</h4>
                  <a href="https://www.instagram.com/jshubin_farms/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    @jshubin_farms
                  </a>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Website</h4>
                  <a href="https://shubinfarms.com" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    shubinfarms.com
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Join Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  We're looking for passionate individuals and organizations to help bring the VTOL EGG concept to life:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Aerospace Engineers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Electric Propulsion Specialists</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Battery Technology Experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Regulatory Consultants</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Investors & Strategic Partners</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
