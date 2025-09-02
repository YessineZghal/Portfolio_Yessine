import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Maîtrise en sciences de l'administration - opérations et systèmes de décision - avec mémoire",
      institution: "Université Laval",
      period: "Janvier 2024 – Décembre 2025",
      location: "Québec, Canada",
      gpa: "Moyenne cumulative de 3,9",
      courses: ["GIF-7010", "GLO-7027", "MQT-7014", "MQT-7015", "MQT-6021", "ADM-7900"],
      description: "Séries chronologiques et XAI",
      status: "En cours"
    },
    {
      degree: "Maîtrise de recherche en systèmes intelligents",
      institution: "École nationale supérieure d'informatique (ENSI)",
      period: "Sept. 2022 – Sept. 2023",
      location: "Manouba, Tunisie",
      courses: ["Exploration de données", "Ingénierie des données", "Robotique"],
      equivalence: "Équivalence MIFI (Québec) : Maîtrise (domaine : sciences de l'informatique)",
      status: "Complété"
    },
    {
      degree: "Diplôme d'ingénieur en informatique",
      institution: "École nationale supérieure d'informatique (ENSI)",
      period: "Sept. 2020 – Sept. 2023",
      location: "Manouba, Tunisie",
      courses: ["ML/DL", "bases de données distribuées", "systèmes distribués", "réseaux", "sécurité", "architecture parallèle", "IoT"],
      equivalence: "Équivalence MIFI (Québec) : Baccalauréat et Diplôme d'études supérieures spécialisées (DESS) (domaine : génie informatique)",
      status: "Complété"
    },
    {
      degree: "Diplôme d'études secondaires (DES) + 1 année d'études collégiales préuniversitaires réussie",
      institution: "Institut préparatoire aux études d'ingénieur (IPEIS)",
      period: "Septembre 2018 – Juin 2020",
      location: "Sfax, Tunisie",
      description: "Physique et chimie",
      achievement: "Classement à l'examen national compétitif : 85 / 1200",
      equivalence: "Équivalence MIFI (Québec) : Diplôme d'études secondaires (DES) + 1 année d'études collégiales préuniversitaires réussie (profil sciences)",
      status: "Complété"
    }
  ];

  const certifications = [
    {
      name: "Apprentissage par renforcement",
      provider: "Spécialisation Coursera",
      icon: <Award className="h-4 w-4" />
    },
    {
      name: "Apprentissage profond",
      provider: "Spécialisation Coursera",
      icon: <Award className="h-4 w-4" />
    },
    {
      name: "Opérations d'apprentissage automatique (MLOps)",
      provider: "Spécialisation Coursera",
      icon: <Award className="h-4 w-4" />
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Formation
            <span className="block text-2xl md:text-3xl font-normal text-muted-foreground mt-2">
              Parcours académique et certifications
            </span>
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Parcours Académique
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      {edu.gpa && (
                        <p className="text-primary font-medium mb-2">{edu.gpa}</p>
                      )}
                      {edu.achievement && (
                        <p className="text-accent font-medium mb-2">{edu.achievement}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </Badge>
                      <Badge variant="secondary">
                        <MapPin className="h-3 w-3 mr-1" />
                        {edu.location}
                      </Badge>
                      <Badge 
                        variant={edu.status === "En cours" ? "default" : "secondary"}
                        className={edu.status === "En cours" ? "bg-accent text-accent-foreground" : ""}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                  )}

                  {edu.courses && (
                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Cours principaux :</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge 
                            key={course}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.equivalence && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Équivalence :</span> {edu.equivalence}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary/20 transition-colors">
                      {cert.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;