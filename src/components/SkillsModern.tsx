import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  BarChart3, 
  Cog
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("skills.programming"),
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C/C++", "Bash", "Java"],
      color: "text-tech-blue",
      bgColor: "bg-tech-blue/10",
      gradient: "from-tech-blue to-tech-cyan"
    },
    {
      title: t("skills.machine_learning"),
      icon: <Brain className="h-6 w-6" />,
      skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Dask", "Spark", "Kafka", "Matplotlib", "Seaborn", "scikit-learn", "Keras", "Deep Learning", "Vision", "TALN", "RL/DRL"],
      color: "text-tech-cyan",
      bgColor: "bg-tech-cyan/10",
      gradient: "from-tech-cyan to-tech-purple"
    },
    {
      title: t("skills.mlops"),
      icon: <Cog className="h-6 w-6" />,
      skills: ["Kubeflow", "Docker", "Git/GitLab", "Jenkins", "Airflow", "CI/CT/CD", "DVC", "MLflow", "TFX", "Neptune", "Vertex AI", "XAI"],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      gradient: "from-tech-purple to-tech-pink"
    },
    {
      title: t("skills.mathematics"),
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Statistiques", "Probabilités", "Optimisation", "Théorie des graphes", "Théorie des jeux"],
      color: "text-tech-green",
      bgColor: "bg-tech-green/10",
      gradient: "from-tech-green to-tech-cyan"
    },
    {
      title: t("skills.platforms"),
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Linux", "Azure", "GCP"],
      color: "text-tech-orange",
      bgColor: "bg-tech-orange/10",
      gradient: "from-tech-orange to-tech-yellow"
    },
    {
      title: t("skills.data"),
      icon: <Database className="h-6 w-6" />,
      skills: ["ETL/ELT", "Intégration des données", "SQL", "MongoDB"],
      color: "text-tech-purple",
      bgColor: "bg-tech-purple/10",
      gradient: "from-tech-purple to-tech-blue"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-8 blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-accent rounded-full opacity-3 blur-3xl animate-float-delayed"></div>
      
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="glass-card px-6 py-2 text-sm font-medium tracking-wider uppercase">
              Technical Expertise
            </Badge>
          </div>
          <h2 className="text-fluid-2xl font-black mb-8 text-gradient-neural glow-text">
            {t("skills.title")}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Skills Grid with Enhanced Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group hover:shadow-neural hover:-translate-y-3 transition-all duration-500 animate-on-scroll bg-glass border-border/30 backdrop-blur-xl overflow-hidden relative interactive-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`${category.color} transition-all duration-500 group-hover:scale-125 p-3 rounded-xl ${category.bgColor} group-hover:shadow-glow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 75)}ms` }}
                    >
                      <div className="group/skill relative">
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-full opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300`}></div>
                        <div className="relative glass-card hover:bg-primary/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default hover:scale-105 hover:shadow-soft">
                          {skill}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Expertise Level</span>
                    <span className="text-sm font-bold text-primary">Expert</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 group-hover:animate-gradient`}
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300">
            <p className="text-lg font-medium text-muted-foreground">
              Ready to build something amazing together?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
