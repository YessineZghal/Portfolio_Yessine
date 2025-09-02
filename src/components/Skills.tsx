import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  BarChart3, 
  Cog,
  GitBranch,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programmation",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C/C++", "Bash", "Java"],
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10"
    },
    {
      title: "Apprentissage automatique",
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Dask", "Spark", "Kafka", "Matplotlib", "Seaborn", "scikit-learn", "Keras", "Deep Learning", "Vision", "TALN", "RL/DRL"],
      color: "text-tech-cyan",
      bgColor: "bg-tech-cyan/10"
    },
    {
      title: "MLOps",
      icon: <Cog className="h-6 w-6" />,
      skills: ["Kubeflow", "Docker", "Git/GitLab", "Jenkins", "Airflow", "CI/CT/CD", "DVC", "MLflow", "TFX", "Neptune", "Vertex AI", "XAI"],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10"
    },
    {
      title: "Mathématiques",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Statistiques", "Probabilités", "Optimisation", "Théorie des graphes", "Théorie des jeux"],
      color: "text-tech-green",
      bgColor: "bg-tech-green/10"
    },
    {
      title: "Plateformes",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Linux", "Azure", "GCP"],
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10"
    },
    {
      title: "Données",
      icon: <Database className="h-6 w-6" />,
      skills: ["ETL/ELT", "Intégration des données", "SQL", "MongoDB"],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Compétences
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Expertise technique approfondie en intelligence artificielle et sciences des données
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-glow hover:-translate-y-2 transition-all duration-500 animate-slide-up border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Gradient Background */}
              <div className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${category.color} transition-all duration-300 group-hover:scale-125 p-2 rounded-lg ${category.bgColor}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      <div className="group/skill relative">
                        <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover/skill:opacity-20 transition-opacity duration-200"></div>
                        <div className="relative bg-secondary/50 text-secondary-foreground hover:bg-secondary/80 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 cursor-default hover:scale-105">
                          {skill}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;