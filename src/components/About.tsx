import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import yessinePhoto from "@/assets/yessine.jpg";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold uppercase tracking-wide">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                As a research data scientist and machine learning specialist with hands-on experience 
                across the full MLOps pipeline, I work with large-scale, real-time research data to 
                build reliable and interpretable AI solutions. I have expertise in designing and 
                deploying end-to-end ML systems, covering data ingestion, preprocessing, modeling, 
                CI/CD automation, and scalable deployment using cloud-native tools such as Docker, 
                Kubernetes, Jenkins/GitLab CI, and KServe.
              </p>
              
              <p>
                My research focuses on time series forecasting and explainable AI, with applied 
                projects in the field of healthcare (blood glucose prediction for type 1 diabetes) 
                and decision support systems. These projects have real-world impact, helping improve 
                patient outcomes through accurate prediction models and providing interpretable 
                insights for medical professionals.
              </p>

              <p>
                At the same time, I am closely interested in large language models (LLMs) and their 
                integration into multi-agent frameworks such as MCP, exploring how agents can improve 
                automation, reasoning, and adaptive decision-making in complex environments. This 
                intersection of traditional ML, explainable AI, and modern LLM technologies allows 
                me to create comprehensive solutions that are both innovative and practical.
              </p>
            </div>

            {/* Professional Achievement Tags */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-2 rounded-full font-medium border-0">
                Research Data Scientist
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 px-4 py-2 rounded-full font-medium border-0">
                MLOps Pipeline Expert
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-4 py-2 rounded-full font-medium border-0">
                Explainable AI
              </Badge>
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 rounded-full font-medium border-0">
                Time Series Forecasting
              </Badge>
              <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200 px-4 py-2 rounded-full font-medium border-0">
                Healthcare AI
              </Badge>
              <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-full font-medium border-0">
                LLMs & Multi-Agent Systems
              </Badge>
            </div>
          </div>

          {/* Right Side - Enhanced Professional Profile */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Animated background elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              
              {/* Main profile card */}
              <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-sm w-full hover:shadow-3xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-center space-y-6">
                  <div className="relative inline-block">
                    {/* Profile image with enhanced styling */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-blue-100 dark:ring-blue-900/30">
                      <img
                        src={yessinePhoto}
                        alt="Yessine Zghal - Data Scientist & AI Engineer"
                        className="w-40 h-40 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Enhanced professional badge */}
                    <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-slate-800">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Tech icons */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-800">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Yessine Zghal
                    </h3>
                    <div className="space-y-1">
                      <p className="text-slate-600 dark:text-slate-400 font-semibold">
                        Data Scientist & AI Engineer
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        🎓 Université Laval, Quebec
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-500">
                        🔬 Specializing in MLOps & LLMs
                      </p>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-600 dark:text-slate-400">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
