
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-softsell-blue to-softsell-teal p-2 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-white">
                <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9z"></path>
                <path d="M2 13h20"></path>
                <path d="m9 13 1.5-5"></path>
                <path d="M13.9 13h.2"></path>
                <path d="M18.4 13h.2"></path>
              </svg>
            </div>
            <span className="text-xl font-bold">SoftSell</span>
          </a>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
          <a href="#why-choose-us" className="text-sm font-medium hover:text-primary">Why Choose Us</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
          <a href="#contact" className="text-sm font-medium hover:text-primary">Contact</a>
          <ThemeToggle />
          <Button className="bg-softsell-teal hover:bg-softsell-teal/90">Get a Quote</Button>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-16 inset-x-0 bg-background shadow-lg border-b md:hidden">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#how-it-works" className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </a>
              <a href="#why-choose-us" className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
                Why Choose Us
              </a>
              <a href="#testimonials" className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </a>
              <a href="#contact" className="text-sm font-medium px-4 py-2 hover:bg-muted rounded-md" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="flex items-center justify-between px-4">
                <ThemeToggle />
                <Button className="bg-softsell-teal hover:bg-softsell-teal/90">Get a Quote</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
