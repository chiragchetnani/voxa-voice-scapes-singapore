
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-voxa-darker/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-voxa-teal to-voxa-cyan bg-clip-text text-transparent">
              VOXA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-voxa-light-text hover:text-voxa-teal transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-voxa-light-text hover:text-voxa-teal transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-voxa-light-text hover:text-voxa-teal transition-colors">
              Use Cases
            </a>
            <a href="#" className="text-voxa-light-text hover:text-voxa-teal transition-colors">
              Pricing
            </a>
            <Button className="bg-voxa-teal text-voxa-darker hover:bg-voxa-teal/90">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-voxa-light-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-voxa-secondary/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-voxa-light-text hover:text-voxa-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-voxa-light-text hover:text-voxa-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#use-cases"
                className="text-voxa-light-text hover:text-voxa-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="#"
                className="text-voxa-light-text hover:text-voxa-teal transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <Button 
                className="bg-voxa-teal text-voxa-darker hover:bg-voxa-teal/90 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
