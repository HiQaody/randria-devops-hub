import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/jacquinot-randrianomenjanahary",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/HiQaody",
      color: "hover:text-gray-800"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:randrianomenjanaharyjacquinot@gmail.com",
      color: "hover:text-primary"
    }
  ];

  const quickLinks = [
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Parcours", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              Jacquinot RANDRIANOMENJANAHARY
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Architecte de solutions cloud-natives spécialisé dans l'automatisation sécurisée des déploiements à grande échelle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-lg bg-surface-alt text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors project-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="text-muted-foreground">
                <div className="font-medium">Email</div>
                <a 
                  href="mailto:randrianomenjanaharyjacquinot@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  randrianomenjanaharyjacquinot@gmail.com
                </a>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium">Téléphone</div>
                <a 
                  href="tel:+261340179345"
                  className="hover:text-primary transition-colors"
                >
                  +261 34 01 793 45
                </a>
              </div>
              <div className="text-muted-foreground">
                <div className="font-medium">Localisation</div>
                <div>Andrainjato, Fianarantsoa, Madagascar</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2025 Jacquinot RANDRIANOMENJANAHARY. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Développé avec</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>et</span>
              <span className="text-primary font-medium">React + TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;