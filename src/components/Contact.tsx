import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Contact
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Parlons de vos projets IA
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Intéressé par une collaboration en recherche, développement IA ou consultation ? 
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <Card className="animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">yessine.zghal.1@ulaval.ca</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">418-905-0170</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localisation</p>
                    <p className="text-muted-foreground">Québec, Canada</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="animate-slide-up" style={{ animationDelay: "150ms" }}>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Actions Rapides</h3>
              
              <div className="space-y-4">
                <Button 
                  className="w-full justify-start h-auto p-4 bg-primary hover:bg-primary/90"
                  onClick={() => window.open('mailto:yessine.zghal.1@ulaval.ca', '_blank')}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">Envoyer un Email</p>
                    <p className="text-sm opacity-90">Discussion directe</p>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Réseau professionnel</p>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4"
                  onClick={() => window.open('https://github.com', '_blank')}
                >
                  <Github className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">Projets et code</p>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto p-4"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  <div className="text-left">
                    <p className="font-medium">Planifier un Appel</p>
                    <p className="text-sm text-muted-foreground">Consultation gratuite</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Availability */}
        <Card className="animate-slide-up" style={{ animationDelay: "300ms" }}>
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Disponibilité</h3>
            <p className="text-muted-foreground mb-6">
              Actuellement en train de terminer ma maîtrise et disponible pour des collaborations 
              de recherche, projets IA, et opportunités professionnelles à partir de 2026.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-accent/10 rounded-lg text-accent">
                <p className="font-medium">Recherche & Développement</p>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg text-primary">
                <p className="font-medium">Consultation IA</p>
              </div>
              <div className="px-4 py-2 bg-tech-cyan/10 rounded-lg text-tech-cyan">
                <p className="font-medium">Projets MLOps</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;