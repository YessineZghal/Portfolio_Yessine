import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: t('projects.traffic_rl.title'),
      shortDescription: t('projects.traffic_rl.short'),
      fullDescription: t('projects.traffic_rl.full'),
      image: "/placeholder.svg",
      technologies: ["DQN", "DDQN", "DRQN", "SUMO", "Multi-Agent RL", "Docker", "Jenkins", "MLOps", "Python", "TensorFlow"],
      objective: t('projects.traffic_rl.objective'),
      process: [
        t('projects.traffic_rl.step1'),
        t('projects.traffic_rl.step2'),
        t('projects.traffic_rl.step3'),
        t('projects.traffic_rl.step4'),
        t('projects.traffic_rl.step5')
      ],
      input: t('projects.traffic_rl.input'),
      output: t('projects.traffic_rl.output'),
      results: t('projects.traffic_rl.results'),
      github: "https://github.com/yessinezghal/traffic-rl-control",
      demo: "https://traffic-demo.example.com"
    },
    {
      id: 2,
      title: t('projects.kubeflow.title'),
      shortDescription: t('projects.kubeflow.short'),
      fullDescription: t('projects.kubeflow.full'),
      image: "/placeholder.svg",
      technologies: ["Kubeflow", "TensorFlow", "Keras", "Docker", "GKE", "KServe", "MinIO", "CNN", "Python", "Kubernetes"],
      objective: t('projects.kubeflow.objective'),
      process: [
        t('projects.kubeflow.step1'),
        t('projects.kubeflow.step2'),
        t('projects.kubeflow.step3'),
        t('projects.kubeflow.step4'),
        t('projects.kubeflow.step5')
      ],
      input: t('projects.kubeflow.input'),
      output: t('projects.kubeflow.output'),
      results: t('projects.kubeflow.results'),
      github: "https://github.com/yessinezghal/kubeflow-mnist-pipeline",
      demo: "https://kubeflow-demo.example.com"
    },
    {
      id: 3,
      title: t('projects.apple_cv.title'),
      shortDescription: t('projects.apple_cv.short'),
      fullDescription: t('projects.apple_cv.full'),
      image: "/placeholder.svg",
      technologies: ["CNN", "Computer Vision", "TensorFlow", "Keras", "ONNX", "FastAPI", "Jenkins", "Data Augmentation", "Python", "Docker"],
      objective: t('projects.apple_cv.objective'),
      process: [
        t('projects.apple_cv.step1'),
        t('projects.apple_cv.step2'),
        t('projects.apple_cv.step3'),
        t('projects.apple_cv.step4'),
        t('projects.apple_cv.step5')
      ],
      input: t('projects.apple_cv.input'),
      output: t('projects.apple_cv.output'),
      results: t('projects.apple_cv.results'),
      github: "https://github.com/yessinezghal/apple-classifier-cv",
      demo: "https://apple-classifier-demo.example.com"
    },
    {
      id: 4,
      title: t('projects.hospital.title'),
      shortDescription: t('projects.hospital.short'),
      fullDescription: t('projects.hospital.full'),
      image: "/placeholder.svg",
      technologies: ["Laravel", "Bootstrap", "MySQL", "jQuery", "PHP", "JavaScript", "CSS", "HTML"],
      objective: t('projects.hospital.objective'),
      process: [
        t('projects.hospital.step1'),
        t('projects.hospital.step2'),
        t('projects.hospital.step3'),
        t('projects.hospital.step4'),
        t('projects.hospital.step5')
      ],
      input: t('projects.hospital.input'),
      output: t('projects.hospital.output'),
      results: t('projects.hospital.results'),
      github: "https://github.com/yessinezghal/hospital-management",
      demo: "https://hospital-demo.example.com"
    }
  ];

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('projects.project_overview')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('projects.objective')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('projects.technologies_used')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('projects.process_steps')}</h3>
                <div className="space-y-3">
                  {project.process.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t('projects.input')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {project.input}
                  </p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{t('projects.output')}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {project.output}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">{t('projects.results')}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.results}
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Github className="mr-2 h-4 w-4" />
                  {t('projects.view_code')}
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {t('projects.live_demo')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('projects.featured_projects')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="space-y-4">
                <div className="w-full h-48 bg-slate-200 dark:bg-slate-600 rounded-xl flex items-center justify-center">
                  <span className="text-slate-500 dark:text-slate-400">Project Image</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-400 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">{t('projects.view_details')}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
