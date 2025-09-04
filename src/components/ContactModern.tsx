import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Calendar, Send, MessageCircle, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "yessine.zghal.1@ulaval.ca",
      action: "mailto:yessine.zghal.1@ulaval.ca",
      gradient: "from-tech-blue to-tech-cyan",
      color: "text-tech-blue"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "418-905-0170",
      action: "tel:+14189050170",
      gradient: "from-tech-green to-tech-cyan",
      color: "text-tech-green"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t("hero.location"),
      value: "Quebec, Canada",
      action: "",
      gradient: "from-tech-purple to-tech-pink",
      color: "text-tech-purple"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub", 
      url: "#",
      color: "hover:text-gray-800 dark:hover:text-white"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-primary rounded-full opacity-3 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-secondary rounded-full opacity-5 blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-accent rounded-full opacity-2 blur-3xl animate-float-delayed"></div>
      
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-mesh opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <Badge variant="outline" className="glass-card px-6 py-2 text-sm font-medium tracking-wider uppercase">
              Get In Touch
            </Badge>
          </div>
          <h2 className="text-fluid-2xl font-black mb-8 text-gradient-neural glow-text">
            {t("contact.title")}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium mb-6">
            {t("contact.subtitle")}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intéressé par une collaboration en recherche, développement IA ou consultation ? 
            N'hésitez pas à me contacter pour discuter de vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <Card 
              key={method.title}
              className="group hover:shadow-neural hover:-translate-y-3 transition-all duration-500 bg-glass border-border/30 backdrop-blur-xl overflow-hidden relative interactive-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
              
              <CardContent className="p-8 relative z-10 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${method.color} bg-gradient-to-br ${method.gradient} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-muted-foreground font-medium mb-4">
                  {method.value}
                </p>
                {method.action && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="glass-card border-border/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
                    onClick={() => window.open(method.action)}
                  >
                    {t("contact.get_in_touch")}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <Card className="bg-glass border-border/30 backdrop-blur-xl overflow-hidden relative">
          {/* Form Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tech-cyan/5"></div>
          
          <CardContent className="p-8 md:p-12 relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">Send me a message</h3>
              </div>
              <p className="text-muted-foreground">
                Ready to start your next AI project? Let's discuss how we can work together.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input 
                    placeholder="Your full name"
                    className="glass-card border-border/30 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="glass-card border-border/30 focus:border-primary/50 transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input 
                  placeholder="Project collaboration opportunity"
                  className="glass-card border-border/30 focus:border-primary/50 transition-colors duration-300"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  rows={6}
                  className="glass-card border-border/30 focus:border-primary/50 transition-colors duration-300 resize-none"
                />
              </div>
              
              <div className="flex justify-center">
                <Button 
                  size="lg"
                  className="btn-modern bg-gradient-primary hover:shadow-glow text-white border-0 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Social Links & Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Social Links */}
          <Card className="bg-glass border-border/30 backdrop-blur-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="h-6 w-6 text-primary" />
                Connect & Follow
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    className={`glass-card border-border/30 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                    <span className="ml-2">{social.name}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className="bg-glass border-border/30 backdrop-blur-xl">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-tech-green rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">Available for new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-tech-blue rounded-full"></div>
                  <span className="text-muted-foreground">Response time: 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-tech-purple rounded-full"></div>
                  <span className="text-muted-foreground">GMT-5 (Quebec time)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
