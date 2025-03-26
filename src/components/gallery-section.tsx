import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Gallery</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Explore the VTOL EGG concept through detailed images and visualizations.
          </p>
        </div>
        
        <Tabs defaultValue="renders" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="renders">3D Renders</TabsTrigger>
            <TabsTrigger value="angles">Multiple Angles</TabsTrigger>
          </TabsList>
          
          <TabsContent value="renders" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/vtol-egg1.jpg"
                      alt="VTOL EGG Front View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/vtol-egg2.jpg"
                      alt="VTOL EGG Side View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden md:col-span-2">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src="/vtol-egg5.jpg"
                      alt="VTOL EGG Perspective View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="angles" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/vtol-egg3.jpg"
                      alt="VTOL EGG Front Angle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/vtol-egg4.jpg"
                      alt="VTOL EGG Rear Angle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src="/vtol-egg1.jpg"
                      alt="VTOL EGG Top Angle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
