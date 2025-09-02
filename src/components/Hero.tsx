import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Yessine Zghal - Data Scientist & AI Engineer"
                className="w-40 h-40 rounded-full border-4 border-white/20 shadow-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-tech-gradient opacity-20"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Yessine
            <span className="block bg-gradient-to-r from-tech-cyan to-white bg-clip-text text-transparent">
              Zghal
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Science des Données — Ingénierie IA
            </Badge>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Data Scientist spécialisé dans la recherche et l'apprentissage automatique, 
              maîtrisant l'ensemble du pipeline MLOps pour des solutions IA innovantes.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Québec, Canada</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>yessine.zghal.1@ulaval.ca</span>
            </div>
            <div className="flex items-center gap-2">
              <span>418-905-0170</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-white text-tech-blue hover:bg-white/90 shadow-medium"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;