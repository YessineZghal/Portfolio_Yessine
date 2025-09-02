import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cpu, Eye, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Apprentissage par renforcement pour le contrôle des feux de circulation",
      type: "DQN, DDQN, DRON (mono/multi-agent)",
      description: "Création d'un environnement de simulation basé sur SUMO pour modéliser les flux de trafic réels et évaluer les politiques d'apprentissage par renforcement. Développement d'un cadre d'optimisation du trafic en comparant DQN, DDQN et DRQN dans des configurations à agent unique et à agents multiples. Application des pratiques MLOps (Docker, Jenkins) pour automatiser la formation et garantir la reproductibilité des workflows d'apprentissage par renforcement.",
      technologies: ["DQN", "DDQN", "DRQN", "SUMO", "Multi-Agent RL", "Docker", "Jenkins", "MLOps"],
      icon: <Cpu className="h-6 w-6" />,
      category: "Recherche & Développement"
    },
    {
      title: "Pipeline Kubeflow « Digits-Recognizer » (MNIST)",
      type: "Kubeflow Pipelines, TensorFlow/Keras, Docker, GKE, KServe, MinIO",
      description: "Conception d'un pipeline ML de bout en bout avec Kubeflow pour le prétraitement des ensembles de données, la formation des modèles et l'évaluation. Formation d'un CNN sur GKE avec suivi automatisé des métriques et gestion des versions des modèles dans MinIO. Déploiement de points de terminaison d'inférence via KServe et validation des prédictions à l'aide de notebooks Python et d'API REST.",
      technologies: ["Kubeflow", "TensorFlow", "Keras", "Docker", "GKE", "KServe", "MinIO", "CNN"],
      icon: <Database className="h-6 w-6" />,
      category: "MLOps & Infrastructure"
    },
    {
      title: "Vision du pipeline « Apple-Classifier »",
      type: "CNN, augmentation de données, TensorFlow/Keras, ONNX, FastAPI, Jenkins",
      description: "Création d'un pipeline de vision robuste en appliquant des techniques d'augmentation de données (retournement, rotation, zoom, luminosité) à des ensembles de données d'images de pommes.",
      technologies: ["CNN", "Computer Vision", "TensorFlow", "Keras", "ONNX", "FastAPI", "Jenkins", "Data Augmentation"],
      icon: <Eye className="h-6 w-6" />,
      category: "Computer Vision"
    }
  ];

  const publications = [
    {
      title: "A data-driven personalized approach to predict blood glucose levels in type-1 diabetes patients exercising in free-living conditions",
      journal: "Computers in Biology and Medicine",
      year: "2025",
      volume: "190:110015",
      authors: "Anas Neumann, Yessine Zghal, Marzia Angela Cremona, Adnene Hajji, Michael Morin, and Monia Rekik"
    }
  ];

  const awards = [
    {
      title: "PCD Challenge",
      position: "2e place",
      description: "LessJam : optimisation des feux de circulation",
      year: "2025"
    },
    {
      title: "Tunisia Digital Summit",
      position: "2e place",
      description: "Hack4Impact",
      year: "2025"
    },
    {
      title: "JOPT 2025",
      position: "Participation",
      year: "2025"
    },
    {
      title: "CORS 2025",
      position: "Participation",
      year: "2025"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-accent rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-purple">
            Projets & Réalisations
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Innovation en IA et recherche appliquée
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Projets Principaux</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50 h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3 border-accent/30 text-accent">
                        {project.category}
                      </Badge>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-3">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Publications</h3>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-muted-foreground mb-2">{pub.authors}</p>
                      <p className="text-sm text-primary font-medium">
                        {pub.journal}, {pub.volume}, {pub.year}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Lire
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Prix & Conférences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {award.title}
                  </h4>
                  {award.position && (
                    <Badge variant="default" className="mb-2 bg-accent text-accent-foreground">
                      {award.position}
                    </Badge>
                  )}
                  {award.description && (
                    <p className="text-sm text-muted-foreground mb-2">{award.description}</p>
                  )}
                  <p className="text-sm text-primary font-medium">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;