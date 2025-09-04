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
      title: "Deep Reinforcement Learning for Traffic-Light Control",
      shortDescription: "Built a SUMO-based simulation environment to model real-world traffic flows and evaluate reinforcement learning policies.",
      fullDescription: "This comprehensive project involved creating an intelligent traffic management system using deep reinforcement learning. The system uses SUMO (Simulation of Urban Mobility) to create realistic traffic scenarios and tests various RL algorithms including Deep Q-Network (DQN), Double DQN (DDQN), and Deep Recurrent Q-Network (DRQN). The project includes both single-agent and multi-agent approaches, where multiple intersections can coordinate their traffic light decisions. The implementation follows MLOps best practices with Docker containerization for consistent environments and Jenkins pipelines for automated training and deployment.",
      image: "/placeholder.svg",
      technologies: ["DQN", "DDQN", "DRQN", "SUMO", "Multi-Agent RL", "Docker", "Jenkins", "MLOps", "Python", "TensorFlow"],
      objective: "Develop a traffic optimization framework by benchmarking DQN, DDQN, and DRQN under single-agent and multi-agent settings to improve traffic flow efficiency by 30%.",
      process: [
        "Literature Review: Comprehensive analysis of current reinforcement learning approaches in traffic control",
        "Environment Setup: Built SUMO-based simulation environment for realistic traffic modeling",
        "Algorithm Implementation: Developed and compared DQN, DDQN, and DRQN algorithms",
        "Multi-Agent Coordination: Implemented multi-agent systems for intersection coordination",
        "MLOps Integration: Applied Docker and Jenkins for automated training and deployment"
      ],
      input: "Real-world traffic data, intersection layouts, vehicle flow patterns, traffic light timing constraints",
      output: "Optimized traffic light control policies, traffic flow metrics, performance comparisons, automated deployment pipelines",
      results: "30% improvement in traffic flow efficiency, reduced waiting times, successful MLOps implementation for reproducible workflows",
      github: "https://github.com/yessinezghal/traffic-rl-control",
      demo: "https://traffic-demo.example.com"
    },
    {
      id: 2,
      title: "Kubeflow Pipeline \"Digits-Recognizer\" (MNIST)",
      shortDescription: "Designed an end-to-end ML pipeline with Kubeflow for dataset preprocessing, model training, and evaluation.",
      fullDescription: "A production-ready machine learning pipeline built on Google Kubernetes Engine (GKE) using Kubeflow. The pipeline automates the entire ML workflow from data ingestion to model deployment. Features include automated hyperparameter tuning, distributed training, model versioning with MinIO object storage, and scalable inference serving with KServe. The system includes comprehensive monitoring, logging, and A/B testing capabilities for model performance evaluation.",
      image: "/placeholder.svg",
      technologies: ["Kubeflow", "TensorFlow", "Keras", "Docker", "GKE", "KServe", "MinIO", "CNN", "Python", "Kubernetes"],
      objective: "Create a production-ready ML pipeline with automated hyperparameter tuning, distributed training, and scalable inference serving.",
      process: [
        "Pipeline Design: Architected end-to-end ML pipeline using Kubeflow on GKE",
        "Data Processing: Implemented automated dataset preprocessing and validation",
        "Model Training: Set up distributed CNN training with automated metric tracking",
        "Model Deployment: Deployed inference endpoints via KServe with auto-scaling",
        "Monitoring & Validation: Established comprehensive monitoring and A/B testing"
      ],
      input: "MNIST digit image dataset, training configurations, hyperparameter ranges, deployment specifications",
      output: "Trained CNN models, inference endpoints, performance metrics, automated deployment pipelines, monitoring dashboards",
      results: "95%+ accuracy on MNIST dataset, automated model versioning in MinIO, scalable inference with KServe, comprehensive MLOps workflow",
      github: "https://github.com/yessinezghal/kubeflow-mnist-pipeline",
      demo: "https://kubeflow-demo.example.com"
    },
    {
      id: 3,
      title: "Computer Vision Pipeline \"Apple-Classifier\"",
      shortDescription: "Created a robust vision pipeline by applying data augmentation techniques to apple image datasets.",
      fullDescription: "A comprehensive computer vision solution for fruit classification with industrial-grade deployment capabilities. The project implements advanced data augmentation strategies to improve model robustness and generalization. Features include automated model optimization, performance benchmarking, and real-time inference API. The system supports batch processing, real-time predictions, and includes comprehensive error handling and monitoring. Deployed using FastAPI for high-performance inference with automatic documentation and testing.",
      image: "/placeholder.svg",
      technologies: ["CNN", "Computer Vision", "TensorFlow", "Keras", "ONNX", "FastAPI", "Jenkins", "Data Augmentation", "Python", "Docker"],
      objective: "Build a robust computer vision pipeline with data augmentation, model optimization, and real-time inference deployment.",
      process: [
        "Data Preparation: Applied data augmentation techniques (flip, rotation, zoom, brightness) to apple datasets",
        "Model Development: Trained and optimized CNN with EarlyStopping for best performance",
        "Performance Evaluation: Evaluated using accuracy, F1-score, confusion matrix, and learning curves",
        "Model Export: Exported best-performing model in ONNX format for cross-platform compatibility",
        "Deployment: Deployed real-time inference service using FastAPI with CI/CD workflow"
      ],
      input: "Apple image datasets, augmentation parameters, training configurations, deployment specifications",
      output: "Trained CNN models, ONNX exports, FastAPI inference service, performance metrics, CI/CD pipelines",
      results: "High accuracy fruit classification, robust data augmentation pipeline, real-time FastAPI inference service, automated CI/CD with Jenkins",
      github: "https://github.com/yessinezghal/apple-classifier-cv",
      demo: "https://apple-classifier-demo.example.com"
    },
    {
      id: 4,
      title: "Hospital Management Platform",
      shortDescription: "Online solution to support medical staff during COVID-19 pandemic.",
      fullDescription: "A full-stack web application designed to address the critical needs of healthcare facilities during the COVID-19 pandemic. The platform provides comprehensive tools for managing patient records, staff schedules, resource allocation, and real-time reporting. Features include secure patient data management, automated scheduling, inventory tracking, and administrative dashboards with analytics. Built with Laravel for robust backend functionality and Bootstrap for responsive design.",
      image: "/placeholder.svg",
      technologies: ["Laravel", "Bootstrap", "MySQL", "jQuery", "PHP", "JavaScript", "CSS", "HTML"],
      objective: "Develop a comprehensive hospital management system to support medical staff during COVID-19 with patient tracking and resource management.",
      process: [
        "Requirements Analysis: Collaborated with healthcare professionals to define critical needs",
        "System Architecture: Designed secure, scalable web application architecture",
        "Backend Development: Built robust Laravel backend with patient management features",
        "Frontend Design: Created responsive Bootstrap interface for medical staff",
        "Testing & Deployment: Comprehensive testing and deployment for healthcare use"
      ],
      input: "Patient data, staff schedules, medical resources, COVID-19 protocols, healthcare workflows",
      output: "Patient management system, staff scheduling tools, resource tracking, real-time dashboards, reporting tools",
      results: "Successful deployment in healthcare facilities, improved staff coordination during COVID-19, streamlined patient management workflows",
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
