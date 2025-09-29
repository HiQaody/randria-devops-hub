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
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Jacquinot</span>
            <span className="block text-green-300">RANDRIANOMENJANAHARY</span>
          </h1>
          
          <div className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 text-blue-100">
            Développeur Full Stack | DevSecOps | Architecte CI/CD
          </div>
          
          <blockquote className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-200 italic">
            "Architecte de solutions cloud-natives spécialisé dans l'automatisation sécurisée des déploiements à grande échelle"
          </blockquote>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 min-w-[180px]"
            >
              <Download className="w-5 h-5 mr-2" />
              Télécharger mon CV
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="border-white text-primary hover:bg-white hover:scale-105 hover:text-primary min-w-[180px] transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Voir mes projets
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-white text-primary hover:bg-white hover:scale-105 hover:text-primary min-w-[180px] transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Me contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/jacquinot-randrianomenjanahary"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/HiQaody"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://randria.vercel.app/"
              className="text-white hover:text-green-300 transition-colors duration-300 transform hover:scale-110"
              aria-label="Portfolio"
            >
              <ExternalLink className="w-8 h-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce mx-auto block text-white hover:text-green-300 transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-card absolute top-20 left-10 w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold">
          K8s
        </div>
        <div className="floating-card absolute top-40 right-20 w-20 h-20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "1s" }}>
          Docker
        </div>
        <div className="floating-card absolute bottom-32 left-20 w-18 h-18 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "2s" }}>
          React
        </div>
        <div className="floating-card absolute bottom-20 right-10 w-16 h-16 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold" style={{ animationDelay: "3s" }}>
          Jenkins
        </div>
      </div>
    </section>
  );
};

export default HeroSection;