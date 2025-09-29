import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Mail, ExternalLink } from "lucide-react";
import cv_path from "@/assets/CV_Jacquinot_RANDRIANOMENJANAHARY (1).pdf";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Accueil", id: "hero" },
    { label: "À propos", id: "about" },
    { label: "Compétences", id: "skills" },
    { label: "Projets", id: "projects" },
    { label: "Parcours", id: "experience" },
    { label: "Contact", id: "contact" }
  ];

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cv_path;
    link.download = "CV_Jacquinot_RANDRIANOMENJANAHARY.pdf";
    link.click();
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className={`text-xl font-bold hover:scale-105 transition-all ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              JR
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-colors px-3 py-2 text-sm font-medium relative group ${
                    scrolled 
                      ? "text-muted-foreground hover:text-primary" 
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant={scrolled ? "outline" : "outline"}
              size="sm"
              className={`transition-all ${
                scrolled
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "border-white/30 text-gray hover:bg-white hover:text-primary"
              }`}
              onClick={handleDownloadCv}
            >
              <Download className="w-4 h-4 mr-2" />
              CV
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                scrolled 
                  ? "text-muted-foreground hover:text-primary" 
                  : "text-white/90 hover:text-white"
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-lg border-b border-border">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex space-x-3 pt-4 px-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <Download className="w-4 h-4 mr-2" />
                  CV
                </Button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className="flex-1"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;