import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Shield, Users, TrendingUp, Award, Code, Cloud, Database } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Participation active à 5+ hackathons et projets open source"
    },
    {
      icon: <Shield className="w-8 h-8 text-secondary" />,
      title: "Sécurité",
      description: "Intégration DevSecOps dans 100% de mes projets récents"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaboration",
      description: "Leadership technique dans des équipes multiculturelles"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Performance",
      description: "Optimisation systématique des métriques clés (temps de chargement, disponibilité, coûts)"
    }
  ];

  const achievements = [
    { icon: <Award className="w-5 h-5" />, text: "Top 3 projets EMIT 2024" },
    { icon: <Shield className="w-5 h-5" />, text: "0 incident sécurité depuis 12 mois" },
    { icon: <Code className="w-5 h-5" />, text: "70% réduction temps de déploiement" },
    { icon: <Cloud className="w-5 h-5" />, text: "99.9% disponibilité infrastructure" },
    { icon: <Database className="w-5 h-5" />, text: "40% réduction coûts cloud" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-surface-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">À Propos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile */}
          <div className="animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Profil</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ingénieur logiciel passionné par la transformation digitale, avec 3 ans d'expérience en développement Full Stack et DevOps. Expert en conception d'architectures microservices, sécurisation CI/CD et optimisation des performances.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-4 bg-surface rounded-r-lg">
                <p className="text-xl font-medium text-primary italic">
                  "Automatiser l'ordinaire pour se concentrer sur l'extraordinaire"
                </p>
              </blockquote>
            </div>

            {/* Achievements */}
            <div className="bg-card border border-card-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Réalisations clés</h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary">{achievement.icon}</div>
                    <span className="text-muted-foreground">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8">Mes valeurs</h3>
            <div className="grid gap-6">
              {values.map((value, index) => (
                <Card key={index} className="tech-card group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 rounded-lg bg-surface-alt group-hover:bg-primary/10 transition-colors">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Années d'expérience</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Hackathons</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-muted-foreground">Disponibilité</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;