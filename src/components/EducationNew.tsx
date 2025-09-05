import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('education.masters.degree'),
      school: t('education.masters.school'),
      location: "Quebec City, QC, Canada",
      period: "Jan. 2024 - Dec. 2025",
      description: t('education.masters.description'),
      gpa: "GPA 3.9",
      coursework: ["GIF-7010", "GLO-7027", "MQT-7014", "MQT-7015", "MQT-6021", "ADM-7900 (Time Series & XAI)"],
      achievements: [t('education.masters.achievement1'), t('education.masters.achievement2'), t('education.masters.achievement3')],
      status: t('education.status.in_progress')
    },
    {
      degree: t('education.research_masters.degree'),
      school: t('education.research_masters.school'),
      location: "Manouba, Tunisia",
      period: "Sept. 2022 - Sept. 2023",
      description: t('education.research_masters.description'),
      coursework: ["Data Mining", "Data Engineering", "Robotics", "Advanced AI Systems"],
      achievements: [t('education.research_masters.achievement1'), t('education.research_masters.achievement2'), t('education.research_masters.achievement3')],
      status: t('education.status.completed')
    },
    {
      degree: t('education.engineering.degree'),
      school: t('education.engineering.school'),
      location: "Manouba, Tunisia", 
      period: "Sept. 2020 - Sept. 2023",
      description: t('education.engineering.description'),
      coursework: ["ML/DL", "Distributed Databases", "Distributed Systems", "Networks", "Security", "Parallel Architecture", "IoT"],
      achievements: [t('education.engineering.achievement1'), t('education.engineering.achievement2'), t('education.engineering.achievement3')],
      status: t('education.status.completed')
    },
    {
      degree: t('education.preparatory.degree'),
      school: t('education.preparatory.school'),
      location: "Sfax, Tunisia",
      period: "Sept. 2018 - Jun. 2020",
      description: t('education.preparatory.description'),
      achievement: "National exam rank: 85 / 1200",
      coursework: ["Advanced Mathematics", "Physics", "Chemistry", "Engineering Fundamentals"],
      achievements: [t('education.preparatory.achievement1'), t('education.preparatory.achievement2'), t('education.preparatory.achievement3')],
      status: t('education.status.completed')
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
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">{t('education.academic_performance')}:</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-400 italic">{edu.gpa}</p>
                    </div>
                  )}

                  {/* National Exam Rank for Preparatory */}
                  {edu.achievement && (
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">{t('education.academic_achievement')}:</h4>
                      <p className="text-sm text-yellow-700 dark:text-yellow-400 italic">{edu.achievement}</p>
                    </div>
                  )}
                  
                  {/* Key Coursework */}
                  {edu.coursework && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{t('education.key_coursework')}:</h4>
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
                    <h4 className="font-semibold text-slate-900 dark:text-white">{t('education.achievements_highlights')}:</h4>
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
