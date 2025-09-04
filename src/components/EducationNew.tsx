import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: "Master's with Thesis in Management Sciences — Operations and Decision Systems",
      school: "Université Laval",
      location: "Quebec City, QC, Canada",
      period: "Jan. 2024 - Dec. 2025",
      description: "Advanced graduate program focusing on operations research, decision systems, and artificial intelligence applications in management sciences.",
      gpa: "GPA 3.9",
      coursework: ["GIF-7010", "GLO-7027", "MQT-7014", "MQT-7015", "MQT-6021", "ADM-7900 (Time Series & XAI)"],
      achievements: ["Research in Explainable AI for Medical Applications", "CIRRELT Lab Research Assistant", "Publications in AI/ML conferences"],
      status: "In Progress"
    },
    {
      degree: "Research Master's in Intelligent Systems",
      school: "National School of Computer Science (ENSI)",
      location: "Manouba, Tunisia",
      period: "Sept. 2022 - Sept. 2023",
      description: "Specialized master's program in artificial intelligence and intelligent systems with focus on advanced machine learning techniques.",
      coursework: ["Data Mining", "Data Engineering", "Robotics", "Advanced AI Systems"],
      achievements: ["Research in AI and Machine Learning", "Advanced coursework in intelligent systems", "Preparation for international graduate studies"],
      status: "Completed"
    },
    {
      degree: "Engineering Degree in Computer Science",
      school: "National School of Computer Science (ENSI)",
      location: "Manouba, Tunisia", 
      period: "Sept. 2020 - Sept. 2023",
      description: "Comprehensive engineering program covering all aspects of computer science with specialization in machine learning, distributed systems, and modern software engineering.",
      coursework: ["ML/DL", "Distributed Databases", "Distributed Systems", "Networks", "Security", "Parallel Architecture", "IoT"],
      achievements: ["Strong foundation in computer science fundamentals", "Specialized in AI and distributed systems", "Practical experience in modern technologies"],
      status: "Completed"
    },
    {
      degree: "Preparatory Institute for Engineering Studies",
      school: "Physics and Chemistry Track",
      location: "Sfax, Tunisia",
      period: "Sept. 2018 - Jun. 2020",
      description: "Intensive preparatory program focusing on advanced mathematics, physics, and chemistry to prepare for competitive engineering school admissions.",
      achievement: "National exam rank: 85 / 1200",
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Engineering Fundamentals"],
      achievements: ["Top 7% national ranking", "Strong mathematical and scientific foundation", "Admission to prestigious ENSI"],
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('education.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-blue-600 font-semibold">
                        {edu.school}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* GPA Display */}
                  {edu.gpa && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Academic Performance:</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-400 italic">{edu.gpa}</p>
                    </div>
                  )}

                  {/* National Exam Rank for Preparatory */}
                  {edu.achievement && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Academic Achievement:</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-400 italic">{edu.achievement}</p>
                    </div>
                  )}
                  
                  {/* Key Coursework */}
                  {edu.coursework && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">Key Coursework:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white">Achievements & Highlights:</h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-yellow-500 mt-1">★</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.status && (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 flex items-center justify-center">
                        <div className={`w-2 h-2 rounded-full ${
                          edu.status === 'In Progress' 
                            ? 'bg-blue-500 animate-pulse' 
                            : 'bg-green-500'
                        }`}></div>
                      </div>
                      <span className={`font-medium ${
                        edu.status === 'In Progress' 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {edu.status}
                      </span>
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

export default Education;
