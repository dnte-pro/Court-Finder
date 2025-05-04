
import React from "react";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-background border-t border-border py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">HouseFinder</h3>
                <p className="text-muted-foreground">
                  Find your dream home with our extensive listings of properties for sale and rent.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a></li>
                  <li><a href="/properties" className="text-muted-foreground hover:text-foreground transition-colors">Properties</a></li>
                  <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                  <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Property Types</h3>
                <ul className="space-y-2">
                  <li><a href="/properties?type=house" className="text-muted-foreground hover:text-foreground transition-colors">Houses</a></li>
                  <li><a href="/properties?type=apartment" className="text-muted-foreground hover:text-foreground transition-colors">Apartments</a></li>
                  <li><a href="/properties?type=condo" className="text-muted-foreground hover:text-foreground transition-colors">Condos</a></li>
                  <li><a href="/properties?type=townhouse" className="text-muted-foreground hover:text-foreground transition-colors">Townhouses</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                <address className="not-italic text-muted-foreground">
                  <p>123 Main Street</p>
                  <p>Anytown, USA 12345</p>
                  <p className="mt-2">Email: info@housefinder.com</p>
                  <p>Phone: (123) 456-7890</p>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} HouseFinder. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};
