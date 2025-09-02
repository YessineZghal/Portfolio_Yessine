import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Assistant(e) de recherche — IA explicable (XAI)",
      company: "CIRELT, Université Laval",
      period: "Mai 2025 – Présent",
      location: "Québec, Canada",
      type: "Temps plein",
      description: [
        "Conception d'un nouveau cadre d'explication contrefactuelle basé sur des instances pour la prévision CGM.",
        "Création d'un mécanisme d'attention graphique appliqué par horodatage pour capturer les interactions temporelles et la causalité décalée.",
        "Relié le premier graphe à un second graphe afin de construire un modèle graphique basé sur les shapelets, permettant un apprentissage à double graphe pour identifier des modèles spécifiques correspondant à des cas d'hypoglycémie, de glycémie normale et d'hyperglycémie."
      ],
      skills: ["IA explicable", "Apprentissage par graphes", "Prévision CGM", "Python"]
    },
    {
      title: "Assistant(e) de recherche — Ingénierie IA",
      company: "Laboratoire CIRELT, Université Laval",
      period: "Janvier 2025 — Avril 2025",
      location: "Québec, Canada",
      type: "Temps plein",
      description: [
        "Préparation et annotation de grands ensembles de données éducatives à l'aide de GPT-4 pour l'étiquetage automatisé et la génération de contenu.",
        "Adaptation et réglage fin du LLM DeepSeek-8B pour prendre en charge l'aide intelligente à la réponse aux questions des étudiants, améliorant ainsi la précision des réponses et le raisonnement contextuel.",
        "Application de techniques de réglage fin efficaces en termes de paramètres, telles que QLoRA et les méthodes d'adaptation de rang faible, afin d'optimiser l'efficacité de la formation LLM tout en conservant des performances élevées."
      ],
      skills: ["LLM", "GPT-4", "DeepSeek", "QLoRA", "Fine-tuning", "NLP"]
    },
    {
      title: "Assistant(e) de recherche — Deep Learning",
      company: "Laboratoire CIRELT, Université Laval",
      period: "Sept. 2024 – Avril 2025",
      location: "Québec, Canada",
      type: "Temps plein",
      description: [
        "Développement d'un cadre de réseau neuronal informé par la physique (PINN) pour résoudre les équations de Hamilton-Jacobi-Bellman (HJB) avec un contrôle discret en cas de défaillance du système.",
        "Transformation de la formulation HJB classique en une méthode d'apprentissage profond différentiable, permettant une optimisation basée sur le gradient et une évolutivité.",
        "Intégration de l'approche PINN avec des méthodes d'apprentissage par renforcement pour évaluer les performances dans des tâches de contrôle à haute dimension."
      ],
      skills: ["PINN", "Deep Learning", "Physics-Informed ML", "Reinforcement Learning"]
    },
    {
      title: "Assistant(e) de recherche — Science des données et apprentissage profond",
      company: "CIRELT, Université Laval",
      period: "Sept. 2023 – Août 2024",
      location: "Québec, Canada",
      type: "Temps plein",
      description: [
        "Traitement et ingénierie des caractéristiques des ensembles de données T1DEXIP (pédiatriques), y compris le nettoyage, l'harmonisation sur 5 minutes, l'alignement et la construction de caractéristiques décalées, basées sur des fenêtres et statistiques.",
        "Développement de pipelines reproductibles pour l'ingestion multisource, le contrôle qualité, la normalisation par patient et la gestion des versions des ensembles de données afin de garantir la transparence et la reproductibilité.",
        "Conception et évaluation de modèles de prévision avancés pour la surveillance continue du glucose (CGM), notamment LSTMKAN, Residual LSTM et des architectures basées sur Transformer, avec des stratégies adaptées aux cohortes adultes et pédiatriques T1DEXI."
      ],
      skills: ["Data Science", "Time Series", "LSTM", "Transformer", "Healthcare AI"]
    },
    {
      title: "Stagiaire de recherche — Data Science",
      company: "CIRELT, Université Laval",
      period: "Fév. 2023 – Août 2023",
      location: "Québec, Canada",
      type: "Temps plein",
      description: [
        "Création d'un pipeline automatisé pour la sélection de patients adultes T1DEXI et l'intégration de séries chronologiques provenant de plusieurs sources, garantissant l'alignement cohérent des données CGM et cliniques.",
        "Développement de GMSE en tant que fonction de perte personnalisée pour l'entraînement des modèles et intégration de celle-ci dans le modèle XGBoost et le modèle d'apprentissage profond.",
        "Conception d'un cadre initial de prévision CGM de 30 minutes à l'aide d'architectures neuronales personnalisées avec des stratégies d'apprentissage par transfert."
      ],
      skills: ["Pipeline Development", "XGBoost", "Transfer Learning", "Healthcare Data"]
    }
  ];

  return (
    <section className="py-20 bg-section-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Expérience Professionnelle
            <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-2">
              Parcours en recherche et développement IA
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      <Calendar className="h-3 w-3 mr-1" />
                      {exp.period}
                    </Badge>
                    <Badge variant="secondary">
                      <MapPin className="h-3 w-3 mr-1" />
                      {exp.location}
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                      {exp.type}
                    </Badge>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
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

export default Experience;