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
      color: "text-tech-blue"
    },
    {
      title: "Apprentissage automatique",
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Dask", "Spark", "Kafka", "Matplotlib", "Seaborn", "scikit-learn", "Keras", "Deep Learning", "Vision", "TALN", "RL/DRL"],
      color: "text-tech-cyan"
    },
    {
      title: "MLOps",
      icon: <Cog className="h-6 w-6" />,
      skills: ["Kubeflow", "Docker", "Git/GitLab", "Jenkins", "Airflow", "CI/CT/CD", "DVC", "MLflow", "TFX", "Neptune", "Vertex AI", "XAI"],
      color: "text-tech-purple"
    },
    {
      title: "Mathématiques",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Statistiques", "Probabilités", "Optimisation", "Théorie des graphes", "Théorie des jeux"],
      color: "text-tech-blue"
    },
    {
      title: "Plateformes",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Linux", "Azure", "GCP"],
      color: "text-tech-cyan"
    },
    {
      title: "Données",
      icon: <Database className="h-6 w-6" />,
      skills: ["ETL/ELT", "Intégration des données", "SQL", "MongoDB"],
      color: "text-tech-purple"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Compétences
            <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-2">
              Expertise technique approfondie
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${category.color} transition-colors group-hover:scale-110 duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
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