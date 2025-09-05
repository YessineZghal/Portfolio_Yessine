import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: t('experience.research_xai.title'),
      company: t('experience.research_xai.company'),
      location: "Quebec City, QC",
      period: "May 2025 - Present",
      type: "Full-time",
      description: t('experience.research_xai.description'),
      skills: ["Explainable AI", "Graph Neural Networks", "LSTM", "Medical AI", "Counterfactual Analysis"],
      achievements: [
        t('experience.research_xai.achievement1'),
        t('experience.research_xai.achievement2'),
        t('experience.research_xai.achievement3'),
        t('experience.research_xai.achievement4')
      ]
    },
    {
      title: t('experience.research_ai.title'),
      company: t('experience.research_ai.company'),
      location: "Quebec City, QC",
      period: "January 2025 - April 2025",
      type: "Full-time",
      description: t('experience.research_ai.description'),
      skills: ["LLMs", "GPT-4", "RAG Systems", "QLoRA", "Educational AI"],
      achievements: [
        t('experience.research_ai.achievement1'),
        t('experience.research_ai.achievement2'),
        t('experience.research_ai.achievement3'),
        t('experience.research_ai.achievement4')
      ]
    },
    {
      title: t('experience.research_dl.title'),
      company: t('experience.research_dl.company'),
      location: "Quebec City, QC", 
      period: "Sept. 2024 - April 2025",
      type: "Full-time",
      description: t('experience.research_dl.description'),
      skills: ["Physics-Informed Neural Networks", "Hamilton-Jacobi-Bellman", "Reinforcement Learning", "Scientific Computing"],
      achievements: [
        t('experience.research_dl.achievement1'),
        t('experience.research_dl.achievement2'),
        t('experience.research_dl.achievement3'),
        t('experience.research_dl.achievement4'),
        t('experience.research_dl.achievement5')
      ]
    },
    {
      title: t('experience.research_ds.title'),
      company: t('experience.research_ds.company'),
      location: "Quebec City, QC",
      period: "Sept. 2023 - Aug. 2024",
      type: "Full-time", 
      description: t('experience.research_ds.description'),
      skills: ["Medical Data Science", "Time Series", "LSTM", "Transformer", "Distributed Computing"],
      achievements: [
        t('experience.research_ds.achievement1'),
        t('experience.research_ds.achievement2'),
        t('experience.research_ds.achievement3'),
        t('experience.research_ds.achievement4'),
        t('experience.research_ds.achievement5')
      ]
    },
    {
      title: t('experience.research_intern.title'),
      company: t('experience.research_intern.company'),
      location: "Quebec City, QC",
      period: "Feb. 2023 - Aug. 2023",
      type: "Full-time",
      description: t('experience.research_intern.description'),
      skills: ["AutoML", "T1DEXI", "XGBoost", "Random Forest", "Hyperparameter Optimization"],
      achievements: [
        t('experience.research_intern.achievement1'),
        t('experience.research_intern.achievement2'),
        t('experience.research_intern.achievement3'),
        t('experience.research_intern.achievement4'),
        t('experience.research_intern.achievement5')
      ]
    },
    {
      title: t('experience.ai_intern_talan.title'),
      company: t('experience.ai_intern_talan.company'),
      location: "On-site",
      period: "Jul. 2022 - Aug. 2022",
      type: "Full-time",
      description: t('experience.ai_intern_talan.description'),
      skills: ["Azure", "Apache Kafka", "Apache Spark", "MongoDB", "Real-time Processing"],
      achievements: [
        t('experience.ai_intern_talan.achievement1'),
        t('experience.ai_intern_talan.achievement2'),
        t('experience.ai_intern_talan.achievement3'),
        t('experience.ai_intern_talan.achievement4')
      ]
    },
    {
      title: t('experience.ai_intern_sfax.title'),
      company: t('experience.ai_intern_sfax.company'),
      location: "Remote",
      period: "Jul. 2021 - Aug. 2021", 
      type: "Full-time",
      description: t('experience.ai_intern_sfax.description'),
      skills: ["Financial AI", "Stock Forecasting", "Web Development", "Analytics Dashboard"],
      achievements: [
        t('experience.ai_intern_sfax.achievement1'),
        t('experience.ai_intern_sfax.achievement2')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  {exp.achievements && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">{t('experience.key_achievements')}</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  {exp.type && (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-green-600 dark:text-green-400">{exp.type}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
