import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ConceptSection } from "@/components/concept-section";
import { TechnicalSection } from "@/components/technical-section";
import { BusinessSection } from "@/components/business-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <TechnicalSection />
        <BusinessSection />
        <GallerySection />
        <ContactSection />
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 VTOL EGG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
