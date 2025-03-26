import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">VTOL EGG</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#concept" className="text-sm font-medium transition-colors hover:text-primary">
            Concept
          </Link>
          <Link href="/#technical" className="text-sm font-medium transition-colors hover:text-primary">
            Technical
          </Link>
          <Link href="/#business" className="text-sm font-medium transition-colors hover:text-primary">
            Business
          </Link>
          <Link href="/#gallery" className="text-sm font-medium transition-colors hover:text-primary">
            Gallery
          </Link>
          <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild className="hidden md:flex">
            <Link href="/#contact">Get Involved</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
