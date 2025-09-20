import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  ExternalLink,
  Clock,
  Wifi,
  Calendar,
  Send
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "randrianomenjanaharyjacquinot@gmail.com",
      href: "mailto:randrianomenjanaharyjacquinot@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone",
      value: "+261 34 01 793 45",
      href: "tel:+261340179345",
      color: "text-secondary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Andrainjato, Fianarantsoa, Madagascar",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "#",
      color: "hover:text-gray-900"
    },
    {
      name: "Portfolio",
      icon: <ExternalLink className="w-5 h-5" />,
      href: "#",
      color: "hover:text-primary"
    }
  ];

  const availability = [
    {
      icon: <Clock className="w-5 h-5 text-primary" />,
      title: "Horaires flexibles",
      description: "Disponible pour missions soir/nuit et week-ends"
    },
    {
      icon: <Wifi className="w-5 h-5 text-secondary" />,
      title: "Remote",
      description: "100% télétravail avec excellente connexion fibre"
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      title: "Démarrage",
      description: "Immédiat"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-surface-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Travaillons ensemble !</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Prêt à contribuer à vos projets avec passion et expertise technique
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in-up">
            <Card className="tech-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-primary" />
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-surface-alt ${info.color}`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground mb-1">{info.label}</div>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Réseaux professionnels</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-lg bg-surface-alt text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Disponibilités</h4>
                  <div className="space-y-4">
                    {availability.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        {item.icon}
                        <div>
                          <div className="font-medium text-foreground">{item.title}</div>
                          <div className="text-muted-foreground text-sm">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="tech-card h-full">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3 text-secondary" />
                  Envoyez-moi un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Entreprise / Organisation
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Nom de votre entreprise"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Objet de votre message"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Décrivez votre projet, vos besoins, ou toute question..."
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                    size="lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>

                {/* Response Time Notice */}
                <div className="mt-6 p-4 bg-surface-alt rounded-lg border border-border">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Réponse garantie sous 24h ouvrées</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à démarrer votre projet ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Discutons de vos besoins et voyons comment je peux contribuer à votre succès
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Planifier un appel
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email direct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;