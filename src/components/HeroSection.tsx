import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 115, 232, 0.9), rgba(52, 168, 83, 0.9)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-128 md:h-128 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
        <div className="animate-fade-in-up max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="block">Jacquinot</span>
            <span className="block text-green-300 break-words">RANDRIANOMENJANAHARY</span>
          </h1>
          
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-3 sm:mb-4 text-blue-100 px-2">
            <span className="hidden sm:inline">Développeur Full Stack | DevSecOps | Architecte CI/CD</span>
            <span className="sm:hidden">Développeur Full Stack<br />DevSecOps | Architecte CI/CD</span>
          </div>
          
          <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 italic px-2">
            "Architecte de solutions cloud-natives spécialisé dans l'automatisation sécurisée des déploiements à grande échelle"
          </blockquote>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-2">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 w-full sm:w-auto sm:min-w-[180px] text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Télécharger mon CV</span>
              <span className="sm:hidden">Mon CV</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="border-white text-gray-400 hover:bg-white hover:scale-105 hover:text-primary w-full sm:w-auto sm:min-w-[180px] transition-all duration-300 text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Voir mes projets</span>
              <span className="sm:hidden">Projets</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-white text-gray-400 hover:bg-white hover:scale-105 hover:text-primary w-full sm:w-auto sm:min-w-[180px] transition-all duration-300 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Me contacter</span>
              <span className="sm:hidden">Contact</span>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
            <a
              href="https://www.linkedin.com/in/jacquinot-randrianomenjanahary"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://github.com/HiQaody"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://randria.vercel.app/"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mx-auto block text-white hover:text-green-300 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>

      {/* Floating Tech Icons - Hidden on mobile for better performance */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="floating-card absolute top-20 left-4 lg:left-10 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-xs lg:text-sm font-bold">
          K8s
        </div>
        <div className="floating-card absolute top-32 lg:top-40 right-4 lg:right-20 w-14 h-14 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "1s" }}>
          Docker
        </div>
        <div className="floating-card absolute bottom-24 lg:bottom-32 left-4 lg:left-20 w-14 h-14 lg:w-18 lg:h-18 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "2s" }}>
          React
        </div>
        <div className="floating-card absolute bottom-12 lg:bottom-20 right-4 lg:right-10 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "3s" }}>
          Jenkins
        </div>
      </div>
    </section>
  );
};

export default HeroSection;