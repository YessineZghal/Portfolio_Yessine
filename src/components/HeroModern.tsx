import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Linkedin, Github, Download, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/50 to-background/80"></div>
      
      {/* Floating Neural Network Inspired Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float blur-2xl neural-glow"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-pulse-slow blur-lg"></div>
      <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-accent rounded-full opacity-8 animate-float-delayed blur-3xl"></div>
      <div className="absolute top-1/2 right-20 w-28 h-28 bg-tech-pink/20 rounded-full animate-neural blur-xl"></div>
      
      {/* Particle Container */}
      <div className="particles-container">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-tech-cyan/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-tech-purple/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-tech-blue/50 rounded-full animate-bounce"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Photo with Enhanced Effects */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-neural rounded-full opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-30 group-hover:opacity-50 animate-pulse-slow blur-lg"></div>
              <img
                src={profilePhoto}
                alt={`${t("hero.title")} - Data Scientist & AI Engineer`}
                className="relative w-48 h-48 rounded-full border-4 border-white/20 shadow-strong hover:shadow-neural transition-all duration-500 hover:scale-105 interactive-card"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 w-6 h-6 bg-tech-green rounded-full border-4 border-background shadow-glow animate-pulse">
                <div className="w-full h-full bg-tech-green rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          </div>

          {/* Main Title with Enhanced Typography */}
          <h1 className="text-fluid-3xl font-black mb-8 leading-tight tracking-tight">
            <span className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Yessine
            </span>
            <span className="block text-gradient-neural animate-gradient glow-text">
              Zghal
            </span>
          </h1>

          {/* Subtitle with Glass Effect */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Badge variant="secondary" className="glass-card px-8 py-3 text-lg font-medium mb-6 hover:scale-105 transition-transform duration-300">
              {t("hero.subtitle")}
            </Badge>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
              {t("hero.description")}
            </p>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300 group hover-scale">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-tech-blue group-hover:scale-110 transition-transform" />
                <span className="font-medium">{t("hero.location")}</span>
              </div>
            </div>
            <div className="glass-card px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300 group hover-scale">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-tech-cyan group-hover:scale-110 transition-transform" />
                <span className="font-medium">yessine.zghal.1@ulaval.ca</span>
              </div>
            </div>
            <div className="glass-card px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-300 group hover-scale">
              <span className="font-medium">418-905-0170</span>
            </div>
          </div>

          {/* Modern Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg"
              className="btn-modern bg-gradient-primary hover:shadow-glow text-white border-0 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-3 h-5 w-5" />
              {t("hero.download_cv")}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-border/30 hover:bg-primary/5 hover:border-primary/30 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Linkedin className="mr-3 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card border-border/30 hover:bg-primary/5 hover:border-primary/30 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              <Github className="mr-3 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-card p-4 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 group">
          <ChevronDown className="w-6 h-6 text-primary group-hover:text-tech-cyan transition-colors" />
        </div>
      </div>

      {/* Background Decoration Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-cyan/20 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
