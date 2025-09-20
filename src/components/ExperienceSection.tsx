import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Shield, Code, Server, Smartphone } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "DevSecOps Engineer",
      company: "AGVM - PNUD",
      period: "Mars 2025 - Présent",
      location: "Madagascar",
      type: "Mission",
      description: "Sécurisation et automatisation des pipelines CI/CD pour le Programme des Nations Unies pour le Développement",
      achievements: [
        "🔐 Sécurisation CI/CD : Jenkins + SonarQube + Trivy",
        "📊 Monitoring avancé : Stack Prometheus/Grafana/Alertmanager", 
        "🚀 Automatisation : Déploiements zéro-downtime avec Kubernetes"
      ],
      technologies: ["Jenkins", "Kubernetes", "SonarQube", "Prometheus", "Grafana", "Docker", "Trivy"],
      icon: <Shield className="w-6 h-6 text-secondary" />,
      current: true
    },
    {
      role: "Lead DevOps",
      company: "Bibliothèque Numérique EMIT",
      period: "Juin 2024 - Septembre 2024",
      location: "Fianarantsoa, Madagascar",
      type: "Projet académique",
      description: "Refonte complète de l'infrastructure et migration vers une architecture microservices",
      achievements: [
        "🏗️ Architecture : Migration monolithe → microservices",
        "⚡️ Performance : Optimisation des temps de réponse (-60%)",
        "🔒 Conformité : Mise en place RGPD et chiffrement bout-en-bout"
      ],
      technologies: ["Spring Boot", "NextJS", "Jenkins", "Docker", "PostgreSQL", "Redis"],
      icon: <Server className="w-6 h-6 text-primary" />,
      current: false
    },
    {
      role: "Développeur Full Stack",
      company: "ITDC Mada",
      period: "Janvier 2025 - Mai 2025",
      location: "Andrainjato, Fianarantsoa",
      type: "Stage professionnel",
      description: "Développement d'applications web modernes pour le secteur médical",
      achievements: [
        "🎨 Frontend : Refonte CHU Andrainjato (ReactJS + MUI)",
        "⚙️ Backend : API NestJS avec authentification JWT",
        "📱 Responsive : Support 100% mobile-first"
      ],
      technologies: ["ReactJS", "NestJS", "Material-UI", "JWT", "PostgreSQL", "TypeScript"],
      icon: <Code className="w-6 h-6 text-secondary" />,
      current: false
    }
  ];

  const education = [
    {
      degree: "Master I Modélisation Informatique",
      institution: "École de Management et d'Innovation Technologique (EMIT)",
      period: "2025 - Présent",
      specialization: "Architecture Cloud et DevOps",
      status: "En cours",
      icon: "🎓"
    },
    {
      degree: "Licence Professionnelle Informatique",
      institution: "EMIT Fianarantsoa",
      period: "2023 - 2024",
      specialization: "Mention : Bien",
      status: "Diplômé",
      icon: "📜"
    }
  ];

  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "CNCF",
      status: "En cours",
      year: "2025",
      icon: "☸️"
    },
    {
      name: "Docker Certified Associate",
      issuer: "Docker Inc.",
      status: "Certifié",
      year: "2024",
      icon: "🐳"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "Certifié",
      year: "2023",
      icon: "☁️"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Parcours Professionnel</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un parcours orienté vers l'excellence technique et l'innovation continue
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Building className="w-6 h-6 mr-3 text-primary" />
            Expériences Professionnelles
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`tech-card ${exp.current ? 'ring-2 ring-primary/20' : ''} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-surface-alt">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground flex items-center gap-3">
                          {exp.role}
                          {exp.current && (
                            <Badge className="bg-secondary text-secondary-foreground">
                              Actuel
                            </Badge>
                          )}
                        </CardTitle>
                        <div className="text-lg font-medium text-primary mb-2">{exp.company}</div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <Badge variant="outline">{exp.type}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Réalisations clés</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies utilisées</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary"
                            className="skill-badge"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              🎓 Formation
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{edu.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <div className="text-primary font-medium mb-2">{edu.institution}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{edu.period}</span>
                          <Badge className={edu.status === "En cours" ? "bg-primary" : "bg-secondary"}>
                            {edu.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2">{edu.specialization}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              🏆 Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                        <div className="text-primary font-medium mb-2">{cert.issuer}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">{cert.year}</span>
                          <Badge className={cert.status === "En cours" ? "bg-primary" : "bg-secondary"}>
                            {cert.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-surface-alt rounded-xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2023</div>
              <div className="text-sm text-muted-foreground">Début études supérieures</div>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">2024</div>
              <div className="text-sm text-muted-foreground">Premiers projets DevOps</div>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-primary"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-sm text-muted-foreground">Expert DevSecOps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;