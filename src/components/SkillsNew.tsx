import { Code, BarChart3, Rocket, Brain, MessageSquare, Database, Cpu, Zap, GitBranch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsModern = () => {
  const { t } = useLanguage();

  const skills = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: t('skills.ai_ml_title'),
      description: t('skills.ai_ml_desc')
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-600" />,
      title: t('skills.llms_genai_title'), 
      description: t('skills.llms_genai_desc')
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-600" />,
      title: t('skills.data_science_title'),
      description: t('skills.data_science_desc')
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group text-center space-y-6 p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="flex justify-center">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-200 dark:group-hover:from-blue-800/30 dark:group-hover:to-blue-700/30 transition-all duration-500">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                {skill.description}
              </p>
              
              <div className="w-0 group-hover:w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            {t('skills.technical_expertise')}
          </h3>
          
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="group text-center space-y-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/10 p-4 rounded-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Code className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors">{t('skills.programming')}</h4>
                <div className="space-y-4">
                  <div className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 transition-colors cursor-default">Python</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">R</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">SQL</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">JavaScript</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">TypeScript</div>
                </div>
              </div>
              
              <div className="group text-center space-y-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/10 p-4 rounded-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Brain className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors">{t('skills.ai_frameworks')}</h4>
                <div className="space-y-4">
                  <div className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 transition-colors cursor-default">TensorFlow</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">PyTorch</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Scikit-learn</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Keras</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">OpenCV</div>
                </div>
              </div>
              
              <div className="group text-center space-y-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/10 p-4 rounded-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors">{t('skills.llms_genai')}</h4>
                <div className="space-y-4">
                  <div className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 transition-colors cursor-default">OpenAI GPT</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Hugging Face</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">LangChain</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">RAG Systems</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Fine-tuning</div>
                </div>
              </div>
              
              <div className="group text-center space-y-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/10 p-4 rounded-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Database className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors">{t('skills.data_cloud')}</h4>
                <div className="space-y-4">
                  <div className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 transition-colors cursor-default">Apache Spark</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">AWS/Azure</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Docker</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Kubernetes</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">MLOps</div>
                </div>
              </div>
              
              <div className="group text-center space-y-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-transparent dark:hover:from-blue-900/10 p-4 rounded-xl transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-blue-600 mb-6 group-hover:text-blue-700 transition-colors">{t('skills.visualization')}</h4>
                <div className="space-y-4">
                  <div className="text-slate-700 dark:text-slate-300 font-medium hover:text-blue-600 transition-colors cursor-default">Matplotlib</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Plotly</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Seaborn</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">Tableau</div>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors cursor-default">D3.js</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsModern;
