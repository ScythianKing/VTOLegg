"use client";

import { AnimatedSection } from "@/components/animated-section";
import { ModelViewer } from "@/components/model-viewer";
import { ImageCarousel } from "@/components/image-carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GallerySectionEnhanced() {
  const images = [
    { src: "/VTOL EGG1.JPG", alt: "VTOL EGG Concept - Front View" },
    { src: "/VTOL EGG2.JPG", alt: "VTOL EGG Concept - Side View" },
    { src: "/VTOL EGG3.JPG", alt: "VTOL EGG Concept - Top View" },
    { src: "/VTOL EGG4.JPG", alt: "VTOL EGG Concept - Rear View" },
    { src: "/VTOL EGG5.JPG", alt: "VTOL EGG Concept - Interior View" },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-[700px] mb-8">
            Explore the VTOL EGG concept through our interactive gallery. View the design from multiple angles and interact with our 3D model.
          </p>
        </div>

        <Tabs defaultValue="images" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="images">Concept Images</TabsTrigger>
            <TabsTrigger value="interactive">Interactive Model</TabsTrigger>
          </TabsList>
          <TabsContent value="images" className="space-y-4">
            <AnimatedSection>
              <Card>
                <CardContent className="p-4">
                  <ImageCarousel images={images} />
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          <TabsContent value="interactive">
            <AnimatedSection delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ModelViewer 
                  fallbackImageSrc="/VTOL EGG1.JPG" 
                  alt="VTOL EGG Interactive Model"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Interactive Model</h3>
                  <p className="text-muted-foreground">
                    Use the controls to rotate and explore the VTOL EGG concept from different angles. This interactive model showcases the unique bi-copter design with its egg-shaped cockpit and dual propellers.
                  </p>
                  <p className="text-muted-foreground">
                    The compact design allows for vertical takeoff and landing while maintaining road-legal dimensions for ground transportation.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
