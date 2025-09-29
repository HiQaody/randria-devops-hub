import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Award, Shield, Zap, BarChart3, Clock, Users } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TisRadar - Plateforme de monitoring temps réel",
      period: "Octobre 2024 - Présent",
      status: "Production",
      url: "https://tisradar.emit.mg",
      description: "Visualisation de 10K+ points de données/minute en temps réel avec architecture microservices",
      challenge: "Visualiser 10K+ points de données/minute en temps réel",
      solution: "Architecture microservices avec WebSocket et cache Redis",
      results: [
        { icon: <Zap className="w-4 h-4" />, text: "Latence < 100ms", color: "text-primary" },
        { icon: <BarChart3 className="w-4 h-4" />, text: "+60% trafic organique", color: "text-secondary" },
        { icon: <Award className="w-4 h-4" />, text: "Top 3 projets EMIT 2024", color: "text-primary" }
      ],
      technologies: ["ReactJS", "NodeJS", "MongoDB", "WebSocket", "Redis", "Grafana"],
      architecture: "ReactJS → API NodeJS → MongoDB → Dashboard Grafana",
      featured: true
    },
    {
      title: "AGVM-PNUD - Pipeline sécurisé",
      period: "Mars 2025 - Présent",
      status: "En développement",
      description: "Pipeline CI/CD sécurisé avec 5 couches de sécurité intégrées",
      challenge: "Intégration de 5 couches de sécurité (SAST, DAST, secrets scanning)",
      solution: "Pipeline Jenkins avec SonarQube, Trivy et monitoring temps réel",
      results: [
        { icon: <Shield className="w-4 h-4" />, text: "0 incident sécurité", color: "text-secondary" },
        { icon: <Clock className="w-4 h-4" />, text: "70% réduction temps déploiement", color: "text-primary" },
        { icon: <BarChart3 className="w-4 h-4" />, text: "15+ métriques critiques", color: "text-secondary" }
      ],
      technologies: ["Jenkins", "SonarQube", "Docker", "Kubernetes", "Trivy", "Slack"],
      architecture: "Code → Jenkins → SonarQube → Docker → K8s Deploy",
      featured: true
    },
    {
      title: "Bibliothèque Numérique EMIT",
      period: "Juin 2024 - Septembre 2024",
      status: "Terminé",
      url: "https://emilib.emit.mg",
      description: "Système complet de gestion documentaire avec 7 microservices",
      challenge: "Migration d'une architecture monolithique vers microservices",
      solution: "7 microservices Spring Boot/NextJS avec CI/CD Jenkins",
      results: [
        { icon: <Zap className="w-4 h-4" />, text: "99.9% disponibilité", color: "text-primary" },
        { icon: <BarChart3 className="w-4 h-4" />, text: "40% réduction coûts", color: "text-secondary" },
        { icon: <Shield className="w-4 h-4" />, text: "Chiffrement AES-256", color: "text-primary" }
      ],
      technologies: ["Spring Boot", "NextJS", "Jenkins", "PostgreSQL", "Redis", "Docker"],
      architecture: "7 microservices Spring Boot/NextJS",
      featured: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-secondary text-secondary-foreground";
      case "En développement": return "bg-primary text-primary-foreground";
      case "Terminé": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-surface-alt to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Projets Phares</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réalisations marquantes démontrant mon expertise en architecture cloud-native et DevSecOps
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`tech-card ${project.featured ? 'ring-2 ring-primary/20' : ''} animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-xl lg:text-2xl text-foreground">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">
                          <Award className="w-3 h-3 mr-1" />
                          Projet phare
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-muted-foreground">{project.period}</span>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.url && (
                    <div className="flex gap-2">
                      <Button onClick={() => window.open(project.url, '_blank')} variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground">{project.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-secondary" />
                        Solution
                      </h4>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        Résultats
                      </h4>
                      <div className="space-y-2">
                        {project.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-3">
                            <div className={result.color}>{result.icon}</div>
                            <span className="text-muted-foreground">{result.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Architecture</h4>
                      <div className="bg-surface-alt rounded-lg p-4">
                        <code className="text-sm text-muted-foreground font-mono">
                          {project.architecture}
                        </code>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Projets réalisés</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
            <div className="text-muted-foreground">Disponibilité moyenne</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary mb-2">70%</div>
            <div className="text-muted-foreground">Réduction temps déploiement</div>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-secondary mb-2">0</div>
            <div className="text-muted-foreground">Incidents sécurité</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;