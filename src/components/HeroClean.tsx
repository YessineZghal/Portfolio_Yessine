import { Button } from "@/components/ui/button";
import { Mail, MapPin, Linkedin, Github, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import yessinePhoto from "@/assets/yessine.jpg";
import PDFViewer from "./PDFViewer";

const Hero = () => {
  const { t } = useLanguage();
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-40 w-16 h-16 bg-blue-400/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-32 right-60 w-8 h-8 bg-blue-300/40 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-blue-400/25 rounded-full blur-lg animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-40 w-12 h-12 bg-blue-300/35 rounded-full blur-md animate-float" style={{ animationDelay: '1.5s' }}></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-blue-600">Yessine</span>
                <br />
                <span className="text-slate-900 dark:text-white">Zghal</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                {t("hero.subtitle")}
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                {t("hero.description")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                {t("hero.contact_me")}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-200"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.view_projects")}
              </Button>
              <Button 
                variant="ghost" 
                size="lg"
                className="text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-full transition-all duration-200"
                onClick={() => setIsPDFOpen(true)}
              >
                <Download className="mr-2 h-5 w-5" />
                {t("hero.download_cv")}
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20"
                onClick={() => window.open('https://www.linkedin.com/in/zghal-yessine/', '_blank')}
              >
                <Linkedin className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20"
                onClick={() => window.open('https://git.valeria.science/yezgh', '_blank')}
              >
                <Github className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-10 h-10 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/20"
                onClick={() => window.open('mailto:yessine.zghal.1@ulaval.ca?subject=Portfolio Contact&body=Hello Yessine,%0D%0A%0D%0AI found your portfolio and would like to discuss...', '_blank')}
              >
                <Mail className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Enhanced Professional Photo Styling */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800">
                <img
                  src={yessinePhoto}
                  alt="Yessine Zghal - Data Scientist & AI Engineer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                
                {/* Professional Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                
                {/* Status Indicator */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Available</span>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400/60 rounded-full blur-sm animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300/50 rounded-full blur-md animate-pulse"></div>
              <div className="absolute top-8 -left-8 w-6 h-6 bg-blue-500/40 rounded-full blur-sm animate-float"></div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl px-6 py-3 shadow-lg">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">{t("hero.location")}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
               onClick={() => window.open('mailto:yessine.zghal.1@ulaval.ca?subject=Portfolio Contact - Meeting Request&body=Hello Yessine,%0D%0A%0D%0AI would like to schedule a meeting to discuss...', '_blank')}
          >
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">yessine.zghal.1@ulaval.ca</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewer
        pdfUrl="/RS_Yessine_ZGHAL.pdf"
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
        title={t("hero.resume_title") || "Yessine Zghal - Resume"}
      />
    </section>
  );
};

export default Hero;
