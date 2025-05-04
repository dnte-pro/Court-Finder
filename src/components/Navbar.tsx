import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { House, Search } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <House className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">House<span className="text-primary">Finder</span></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Home
            </Link>
            <Link to="/properties" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Properties
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Contact
            </Link>
            <ThemeToggle />
            <Button variant="default" size="sm" className="ml-4">
              Sign In
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} 
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect animate-fade-in">
          <div className="container px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="py-2 text-foreground font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/properties" className="py-2 text-foreground font-medium" onClick={() => setIsMenuOpen(false)}>
              Properties
            </Link>
            <Link to="/about" className="py-2 text-foreground font-medium" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="py-2 text-foreground font-medium" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Button variant="default" size="sm" className="w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
