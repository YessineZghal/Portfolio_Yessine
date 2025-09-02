import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-tech-blue/10 to-tech-cyan/20"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-pulse-slow blur-lg"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-accent rounded-full opacity-15 animate-float blur-2xl" style={{ animationDelay: '1s' }}></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-30 group-hover:opacity-50 animate-pulse-slow blur-lg"></div>
              <img
                src={profilePhoto}
                alt="Yessine Zghal - Data Scientist & AI Engineer"
                className="relative w-40 h-40 rounded-full border-4 border-white/30 shadow-glow hover:shadow-glow-hover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Yessine
            </span>
            <span className="block text-gradient bg-gradient-to-r from-white via-tech-cyan to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
              Zghal
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect inline-block px-6 py-3 rounded-full mb-6 hover:bg-white/20 transition-all duration-300">
              <span className="text-white/90 font-medium">Science des Données — Ingénierie IA</span>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Data Scientist spécialisé dans la recherche et l'apprentissage automatique, 
              maîtrisant l'ensemble du pipeline MLOps pour des solutions IA innovantes.
            </p>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-5 w-5" />
              <span>Québec, Canada</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <Mail className="h-5 w-5" />
              <span>yessine.zghal.1@ulaval.ca</span>
            </div>
            <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <span>418-905-0170</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              variant="default" 
              size="lg"
              className="bg-white text-tech-blue hover:bg-white/90 shadow-medium hover:shadow-glow hover:scale-105 transition-all duration-300 neon-border"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
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