import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Server, 
  Monitor,
  GitBranch,
  Container,
  Cpu,
  Layers
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = {
    "Cloud & DevOps": {
      icon: <Cloud className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "Docker", level: 95, icon: "🐳" },
        { name: "Kubernetes", level: 90, icon: "☸️" },
        { name: "Jenkins", level: 88, icon: "⚙️" },
        { name: "Prometheus", level: 85, icon: "📊" },
        { name: "Grafana", level: 85, icon: "📈" },
        { name: "SonarQube", level: 80, icon: "🔍" }
      ]
    },
    "Développement": {
      icon: <Code className="w-6 h-6" />,
      color: "text-secondary",
      skills: [
        { name: "Spring Boot", level: 92, icon: "🍃" },
        { name: "ReactJS", level: 90, icon: "⚛️" },
        { name: "Python Flask", level: 85, icon: "🐍" },
        { name: "Angular", level: 80, icon: "🅰️" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "Flutter", level: 75, icon: "📱" }
      ]
    },
    "Data & IA": {
      icon: <Database className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "PostgreSQL", level: 90, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "MySQL", level: 88, icon: "🐬" },
        { name: "TensorFlow", level: 70, icon: "🧠" },
        { name: "MinIO", level: 80, icon: "📦" },
        { name: "GitHub Actions", level: 85, icon: "🔄" }
      ]
    }
  };

  const specializations = [
    {
      title: "DevSecOps",
      description: "Sécurisation des pipelines CI/CD (Jenkins/GitHub Actions)",
      icon: <Shield className="w-8 h-8 text-secondary" />,
      technologies: ["Jenkins", "SonarQube", "Trivy", "OWASP", "Vault"]
    },
    {
      title: "Microservices",
      description: "Architecture Spring Boot/Node.js avec communication asynchrone",
      icon: <Layers className="w-8 h-8 text-primary" />,
      technologies: ["Spring Boot", "Node.js", "RabbitMQ", "Redis", "Kong"]
    },
    {
      title: "Cloud Native",
      description: "Déploiement Kubernetes avec monitoring Prometheus/Grafana",
      icon: <Server className="w-8 h-8 text-secondary" />,
      technologies: ["Kubernetes", "Helm", "Istio", "Prometheus", "Grafana"]
    },
    {
      title: "Performance",
      description: "Optimisation frontend (ReactJS) et backend (cache, scaling)",
      icon: <Monitor className="w-8 h-8 text-primary" />,
      technologies: ["React", "Redis", "CDN", "Load Balancer", "Monitoring"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise complète en développement moderne et DevOps, avec une spécialisation en sécurité et performance
          </p>
        </div>

        {/* Skills Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="Cloud & DevOps" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-11 mb-8">
              {Object.entries(skillCategories).map(([category, data]) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="flex items-center space-x-2 py-3 md:py-2"
                >
                  <span className={data.color}>{data.icon}</span>
                  <span>{category}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(skillCategories).map(([category, data]) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.skills.map((skill, index) => (
                    <Card key={index} className="tech-card">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-2xl">{skill.icon}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{skill.name}</h4>
                            <div className="text-sm text-muted-foreground">{skill.level}% maîtrise</div>
                          </div>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Specializations */}
        <div className="animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">Spécialisations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {specializations.map((spec, index) => (
              <Card key={index} className="tech-card">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-surface-alt">
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{spec.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {spec.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="skill-badge"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="mt-16 bg-surface-alt rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Stack Technique Principal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Spring", icon: "🍃" },
              { name: "Docker", icon: "🐳" },
              { name: "K8s", icon: "☸️" },
              { name: "Jenkins", icon: "⚙️" },
              { name: "PostgreSQL", icon: "🐘" }
            ].map((tech, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-card border border-card-border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <div className="text-sm font-medium text-foreground">{tech.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;