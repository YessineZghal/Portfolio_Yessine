import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "Research Assistant — Explainable AI (XAI)",
      company: "CIRRELT Lab, Université Laval",
      location: "Quebec City, QC",
      period: "May 2025 - Present",
      type: "Full-time",
      description: "Leading advanced research in explainable AI for medical applications, focusing on glucose monitoring and forecasting systems.",
      skills: ["Explainable AI", "Graph Neural Networks", "LSTM", "Medical AI", "Counterfactual Analysis"],
      achievements: [
        "Designed novel instance-based counterfactual explanation framework for CGM forecasting",
        "Built graph attention mechanism for temporal feature interactions and lagged causality",
        "Developed dual-graph training system for hypoglycemia pattern identification",
        "Created counterfactual engine for transforming unsafe forecasts into safe ones"
      ]
    },
    {
      title: "Research Assistant — AI Engineer",
      company: "CIRRELT Laboratory, Laval University",
      location: "Quebec City, QC",
      period: "January 2025 - April 2025",
      type: "Full-time",
      description: "Advanced AI research focusing on large language models and educational technology integration.",
      skills: ["LLMs", "GPT-4", "RAG Systems", "QLoRA", "Educational AI"],
      achievements: [
        "Prepared and annotated large educational datasets using GPT-4 for automated labeling",
        "Fine-tuned DeepSeek-8B LLM for intelligent question-answering assistance",
        "Applied parameter-efficient fine-tuning techniques (QLoRA, low-rank adaptation)",
        "Designed and deployed RAG system integrated with I4EvoSim education platform"
      ]
    },
    {
      title: "Research Assistant - Deep Learning",
      company: "CIRRELT Laboratory, Laval University",
      location: "Quebec City, QC", 
      period: "Sept. 2024 - April 2025",
      type: "Full-time",
      description: "Specialized research in Physics-Informed Neural Networks and advanced deep learning methodologies.",
      skills: ["Physics-Informed Neural Networks", "Hamilton-Jacobi-Bellman", "Reinforcement Learning", "Scientific Computing"],
      achievements: [
        "Developed PINN framework for Hamilton-Jacobi-Bellman equations with discrete control",
        "Transformed classical HJB formulation into differentiable deep learning method",
        "Integrated PINN with reinforcement learning for high-dimensional control tasks",
        "Validated framework against analytical solutions ensuring theoretical robustness",
        "Contributed to scientific article documenting methodology and benchmarks"
      ]
    },
    {
      title: "Research Assistant - Data Science & Deep Learning",
      company: "CIRRELT Lab, Université Laval",
      location: "Quebec City, QC",
      period: "Sept. 2023 - Aug. 2024",
      type: "Full-time", 
      description: "Comprehensive research in medical data science, focusing on continuous glucose monitoring and advanced forecasting models.",
      skills: ["Medical Data Science", "Time Series", "LSTM", "Transformer", "Distributed Computing"],
      achievements: [
        "Processed and engineered features from T1DEXI datasets for pediatric CGM research",
        "Developed reproducible pipelines for multi-source data ingestion and quality control",
        "Designed advanced forecasting models for Continuous Glucose Monitoring (CGM)",
        "Trained models on Compute Canada clusters using distributed GPU resources",
        "Conducted clinical evaluations and applied explainable AI methods for glucose trajectories"
      ]
    },
    {
      title: "Research Intern - Data Science",
      company: "CIRRELT Lab, Université Laval",
      location: "Quebec City, QC",
      period: "Feb. 2023 - Aug. 2023",
      type: "Full-time",
      description: "Initial research experience focusing on automated machine learning pipelines and model optimization for medical applications.",
      skills: ["AutoML", "T1DEXI", "XGBoost", "Random Forest", "Hyperparameter Optimization"],
      achievements: [
        "Built automated pipeline for T1DEXI adult patient selection and time-series integration",
        "Developed GMSE as custom loss function integrated into XGBoost and deep learning models",
        "Designed 30-minute CGM forecasting framework using neural architectures",
        "Applied Optuna for hyperparameter tuning and Keras Tuner for deep learning optimization",
        "Incorporated SHAP method for XGBoost explainability and feature importance analysis"
      ]
    },
    {
      title: "AI Intern",
      company: "TALAN Tunisia",
      location: "On-site",
      period: "Jul. 2022 - Aug. 2022",
      type: "Full-time",
      description: "Industrial AI internship focusing on large-scale data pipeline development and real-time processing systems.",
      skills: ["Azure", "Apache Kafka", "Apache Spark", "MongoDB", "Real-time Processing"],
      achievements: [
        "Designed and deployed data pipeline on Azure for large-scale voice broadcasting workflows",
        "Implemented real-time event streaming with Apache Kafka and parallel data processing",
        "Optimized data storage and retrieval by integrating MongoDB as persistence layer",
        "Ensured low-latency and fault-tolerant data flow for analytics and reporting"
      ]
    },
    {
      title: "AI Intern",
      company: "Digital Research Center of Sfax",
      location: "Remote",
      period: "Jul. 2021 - Aug. 2021", 
      type: "Full-time",
      description: "Early career experience in financial AI, developing predictive models for stock market analysis.",
      skills: ["Financial AI", "Stock Forecasting", "Web Development", "Analytics Dashboard"],
      achievements: [
        "Developed web application for stock forecasting with analytical dashboard",
        "Created predictive models for financial market analysis and trend identification"
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
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">Key Achievements</h4>
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
