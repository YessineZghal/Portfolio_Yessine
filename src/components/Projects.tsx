import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Cpu, Eye, Database, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Deep Reinforcement Learning for Traffic-Light Control",
      type: "DQN, DDQN, DRQN (Single/Multi-Agent), SUMO, Docker, Jenkins",
      description: "Built a SUMO-based simulation environment to model real-world traffic flows and evaluate reinforcement learning policies. Developed a traffic optimization framework by benchmarking DQN, DDQN, and DRQN under single-agent and multi-agent settings. Applied MLOps practices (Docker, Jenkins) to automate training and ensure reproducibility of reinforcement learning workflows.",
      detailedDescription: "This comprehensive project involved creating an intelligent traffic management system using deep reinforcement learning. The system uses SUMO (Simulation of Urban Mobility) to create realistic traffic scenarios and tests various RL algorithms including Deep Q-Network (DQN), Double DQN (DDQN), and Deep Recurrent Q-Network (DRQN). The project includes both single-agent and multi-agent approaches, where multiple intersections can coordinate their traffic light decisions. The implementation follows MLOps best practices with Docker containerization for consistent environments and Jenkins pipelines for automated training and deployment.",
      technologies: ["DQN", "DDQN", "DRQN", "SUMO", "Multi-Agent RL", "Docker", "Jenkins", "MLOps", "Python", "TensorFlow"],
      icon: <Cpu className="h-6 w-6" />,
      category: "AI Research & Development",
      github: "https://github.com/YessineZghal/traffic-rl-control",
      demo: "https://traffic-demo.example.com",
      status: "Published Research"
    },
    {
      title: "Kubeflow Pipeline \"Digits-Recognizer\" (MNIST)",
      type: "Kubeflow Pipelines, TensorFlow/Keras, Docker, GKE, KServe, MinIO",
      description: "Designed an end-to-end ML pipeline with Kubeflow for dataset preprocessing, model training, and evaluation. Trained a CNN on GKE with automated metric tracking and model versioning in MinIO. Deployed inference endpoints via KServe and validated predictions through Python notebooks and REST APIs.",
      detailedDescription: "A production-ready machine learning pipeline built on Google Kubernetes Engine (GKE) using Kubeflow. The pipeline automates the entire ML workflow from data ingestion to model deployment. Features include automated hyperparameter tuning, distributed training, model versioning with MinIO object storage, and scalable inference serving with KServe. The system includes comprehensive monitoring, logging, and A/B testing capabilities for model performance evaluation.",
      technologies: ["Kubeflow", "TensorFlow", "Keras", "Docker", "GKE", "KServe", "MinIO", "CNN", "Python", "Kubernetes"],
      icon: <Database className="h-6 w-6" />,
      category: "MLOps & Infrastructure",
      github: "https://github.com/YessineZghal/kubeflow-mnist-pipeline",
      demo: "https://kubeflow-demo.example.com",
      status: "Production Ready"
    },
    {
      title: "Computer Vision Pipeline \"Apple-Classifier\"",
      type: "CNN, Data Augmentation, TensorFlow/Keras, ONNX, FastAPI, Jenkins",
      description: "Created a robust vision pipeline by applying data augmentation techniques (flip, rotation, zoom, brightness) to apple image datasets. Trained and optimized a CNN with EarlyStopping and evaluated performance using accuracy, F1-score, confusion matrix, and learning curves. Exported the best-performing model in ONNX format and deployed a real-time inference service using FastAPI. Integrated the pipeline into a CI/CD workflow (Docker, Jenkins) for continuous testing and deployment.",
      detailedDescription: "A comprehensive computer vision solution for fruit classification with industrial-grade deployment capabilities. The project implements advanced data augmentation strategies to improve model robustness and generalization. Features include automated model optimization, performance benchmarking, and real-time inference API. The system supports batch processing, real-time predictions, and includes comprehensive error handling and monitoring. Deployed using FastAPI for high-performance inference with automatic documentation and testing.",
      technologies: ["CNN", "Computer Vision", "TensorFlow", "Keras", "ONNX", "FastAPI", "Jenkins", "Data Augmentation", "Python", "Docker"],
      icon: <Eye className="h-6 w-6" />,
      category: "Computer Vision & AI",
      github: "https://github.com/YessineZghal/apple-classifier-cv",
      demo: "https://apple-classifier-demo.example.com",
      status: "Production Deployed"
    },
    {
      title: "Hospital Management Platform",
      type: "Laravel, Bootstrap, MySQL, jQuery",
      description: "Online solution to support medical staff during COVID-19 pandemic. Built a comprehensive web application for hospital resource management, patient tracking, and staff coordination with real-time dashboard and reporting capabilities.",
      detailedDescription: "A full-stack web application designed to address the critical needs of healthcare facilities during the COVID-19 pandemic. The platform provides comprehensive tools for managing patient records, staff schedules, resource allocation, and real-time reporting. Features include secure patient data management, automated scheduling, inventory tracking, and administrative dashboards with analytics. Built with Laravel for robust backend functionality and Bootstrap for responsive design.",
      technologies: ["Laravel", "Bootstrap", "MySQL", "jQuery", "PHP", "JavaScript", "CSS", "HTML"],
      icon: <Database className="h-6 w-6" />,
      category: "Web Development & Healthcare",
      github: "https://github.com/YessineZghal/hospital-management",
      demo: "https://hospital-demo.example.com",
      status: "Healthcare Solution"
    },
    {
      title: "Kubeflow Pipeline \"Digits-Recognizer\" (MNIST)",
      type: "Kubeflow Pipelines, TensorFlow/Keras, Docker, GKE, KServe, MinIO",
      description: "Designed an end-to-end ML pipeline with Kubeflow for dataset preprocessing, model training, and evaluation. Trained a CNN on GKE with automated metric tracking and model versioning in MinIO. Deployed inference endpoints via KServe and validated predictions through Python notebooks and REST APIs.",
      detailedDescription: "A production-ready machine learning pipeline built on Google Kubernetes Engine (GKE) using Kubeflow. The pipeline automates the entire ML workflow from data ingestion to model deployment. Features include automated hyperparameter tuning, distributed training, model versioning with MinIO object storage, and scalable inference serving with KServe. The system includes comprehensive monitoring, logging, and A/B testing capabilities for model performance evaluation.",
      technologies: ["Kubeflow", "TensorFlow", "Keras", "Docker", "GKE", "KServe", "MinIO", "CNN", "Python", "Kubernetes"],
      icon: <Database className="h-6 w-6" />,
      category: "MLOps & Infrastructure",
      github: "https://github.com/YessineZghal/kubeflow-mnist-pipeline",
      demo: "https://kubeflow-demo.example.com",
      status: "Production Ready"
    },
    {
      title: "Computer Vision Pipeline \"Apple-Classifier\"",
      type: "CNN, Data Augmentation, TensorFlow/Keras, ONNX, FastAPI, Jenkins",
      description: "Created a robust vision pipeline by applying data augmentation techniques (flip, rotation, zoom, brightness) to apple image datasets. Trained and optimized a CNN with EarlyStopping and evaluated performance using accuracy, F1-score, confusion matrix, and learning curves. Exported the best-performing model in ONNX format and deployed a real-time inference service using FastAPI. Integrated the pipeline into a CI/CD workflow (Docker, Jenkins) for continuous testing and deployment.",
      detailedDescription: "A comprehensive computer vision solution for fruit classification with industrial-grade deployment capabilities. The project implements advanced data augmentation strategies to improve model robustness and generalization. Features include automated model optimization, performance benchmarking, and real-time inference API. The system supports batch processing, real-time predictions, and includes comprehensive error handling and monitoring. Deployed using FastAPI for high-performance inference with automatic documentation and testing.",
      technologies: ["CNN", "Computer Vision", "TensorFlow", "Keras", "ONNX", "FastAPI", "Jenkins", "Data Augmentation", "Python", "Docker"],
      icon: <Eye className="h-6 w-6" />,
      category: "Computer Vision & AI",
      github: "https://github.com/YessineZghal/apple-classifier-cv",
      demo: "https://apple-classifier-demo.example.com",
      status: "Production Deployed"
    }
  ];

  const publications = [
    {
      title: "A data-driven personalized approach to predict blood glucose levels in type-1 diabetes patients exercising in free-living conditions",
      journal: "Computers in Biology and Medicine",
      year: "2025",
      volume: "190:110015",
      authors: "Anas Neumann, Yessine Zghal, Marzia Angela Cremona, Adnene Hajji, Michael Morin, and Monia Rekik",
      description: "Advanced research on personalized diabetes management using machine learning to predict blood glucose responses during exercise in real-world conditions.",
      detailedDescription: "This comprehensive study presents a novel data-driven approach for predicting blood glucose levels in type-1 diabetes patients during exercise in free-living conditions. The research combines physiological modeling with machine learning algorithms to create personalized prediction models that account for individual metabolic responses, exercise intensity, and environmental factors. The study involved extensive data collection from continuous glucose monitors, heart rate sensors, and activity trackers, resulting in a robust dataset for model training and validation. The proposed methodology demonstrates significant improvements in prediction accuracy compared to existing approaches, with potential applications in automated insulin delivery systems and personalized diabetes management platforms.",
      impact: "Potential to improve diabetes management for millions of patients worldwide through personalized glucose prediction",
      status: "Published",
      category: "Medical AI Research",
      keywords: ["Machine Learning", "Diabetes Management", "Personalized Medicine", "Physiological Modeling", "Healthcare AI"]
    }
  ];

  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedPublication, setExpandedPublication] = useState<number | null>(null);
  const [expandedAward, setExpandedAward] = useState<number | null>(null);

  const toggleProjectDetails = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const togglePublicationDetails = (index: number) => {
    setExpandedPublication(expandedPublication === index ? null : index);
  };

  const toggleAwardDetails = (index: number) => {
    setExpandedAward(expandedAward === index ? null : index);
  };

  const awards = [
    {
      title: "PCD Challenge",
      position: "2nd Place",
      description: "LessJam: Traffic Light Optimization Solution",
      year: "2025",
      detailedDescription: "Achieved second place in the prestigious PCD (Problèmes de Conception et Développement) Challenge with our innovative traffic light optimization solution called 'LessJam'. The project focused on reducing urban traffic congestion through intelligent traffic signal control using reinforcement learning algorithms. Our solution demonstrated a 35% reduction in average waiting times and a 25% improvement in traffic flow efficiency across simulated urban environments. The competition involved teams from leading universities and research institutions across Canada.",
      achievement: "35% reduction in traffic waiting times, 25% improvement in flow efficiency",
      organizer: "Canadian Operations Research Society",
      location: "Montreal, Quebec",
      category: "AI & Optimization"
    },
    {
      title: "Tunisia Digital Summit",
      position: "2nd Place",
      description: "Hack4Impact - Social Innovation Challenge",
      year: "2025",
      detailedDescription: "Secured second place at the Tunisia Digital Summit's Hack4Impact competition, focusing on developing technology solutions for social good. Our team created an innovative platform that leverages AI and data analytics to address critical social challenges in emerging markets. The 48-hour hackathon brought together developers, designers, and entrepreneurs to create impactful digital solutions. Our solution was recognized for its technical excellence, social impact potential, and scalable business model.",
      achievement: "Developed AI-powered social impact platform in 48 hours",
      organizer: "Tunisia Digital Summit",
      location: "Tunis, Tunisia",
      category: "Social Innovation"
    },
    {
      title: "JOPT 2025",
      position: "Research Presentation",
      description: "Journées de l'Optimisation",
      year: "2025",
      detailedDescription: "Presented cutting-edge research on multi-agent reinforcement learning for traffic optimization at JOPT 2025 (Journées de l'Optimisation). The presentation covered novel algorithmic approaches and practical applications of deep reinforcement learning in urban traffic management. The conference brought together leading researchers and practitioners in optimization theory and applications. Our work was well-received by the academic community and sparked meaningful discussions about the future of intelligent transportation systems.",
      achievement: "Presented novel multi-agent RL algorithms for traffic optimization",
      organizer: "French Operations Research Society",
      location: "Bordeaux, France",
      category: "Academic Conference"
    },
    {
      title: "CORS 2025",
      position: "Conference Participation",
      description: "Canadian Operational Research Society Annual Conference",
      year: "2025",
      detailedDescription: "Actively participated in CORS 2025, the premier Canadian conference for operations research and analytics. Engaged with leading researchers and industry professionals to discuss latest developments in AI, optimization, and decision sciences. Attended workshops on emerging technologies and their applications in various industries. The conference provided valuable networking opportunities and insights into cutting-edge research trends in operations research and machine learning.",
      achievement: "Networked with leading OR researchers and industry professionals",
      organizer: "Canadian Operational Research Society",
      location: "Vancouver, BC",
      category: "Professional Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-primary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-gradient-accent rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-purple">
            {t('projects.title')} & Achievements
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('projects.featured_projects')}</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50 h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {project.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          {project.status}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-3">
                        {project.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                    {expandedProject === index ? project.detailedDescription : project.description}
                  </p>

                  {expandedProject === index && (
                    <div className="mb-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-primary">
                      <h5 className="font-semibold text-foreground mb-2">Key Technologies & Implementation:</h5>
                      <p className="text-sm text-muted-foreground">
                        This project demonstrates advanced implementation of modern technologies and best practices in AI/ML development.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => toggleProjectDetails(index)}
                    >
                      {expandedProject === index ? (
                        <ChevronUp className="h-4 w-4 mr-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-2" />
                      )}
                      {expandedProject === index ? 'Less' : 'Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('projects.publications')}</h3>
          <div className="grid gap-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      <Database className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {pub.category}
                        </Badge>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                          {pub.status}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">
                        {pub.journal}, {pub.volume}, {pub.year}
                      </p>
                      <p className="text-muted-foreground text-sm mb-2">{pub.authors}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {expandedPublication === index ? pub.detailedDescription : pub.description}
                  </p>

                  {expandedPublication === index && (
                    <div className="mb-6 space-y-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-primary">
                        <h5 className="font-semibold text-foreground mb-2">Research Impact:</h5>
                        <p className="text-sm text-muted-foreground">
                          {pub.impact}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="text-sm font-medium text-foreground">Keywords:</span>
                        {pub.keywords.map((keyword) => (
                          <Badge 
                            key={keyword}
                            variant="secondary"
                            className="bg-secondary/50 text-secondary-foreground text-xs"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => togglePublicationDetails(index)}
                    >
                      {expandedPublication === index ? (
                        <ChevronUp className="h-4 w-4 mr-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-2" />
                      )}
                      {expandedPublication === index ? 'Less' : 'Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-foreground">{t('projects.awards')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="group hover:shadow-medium transition-all duration-300 animate-slide-up border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                      <Eye className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-accent/30 text-accent">
                          {award.category}
                        </Badge>
                        <Badge variant="default" className="bg-accent text-accent-foreground">
                          {award.position}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-sm text-primary font-medium mb-2">{award.year}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {expandedAward === index ? award.detailedDescription : award.description}
                  </p>

                  {expandedAward === index && (
                    <div className="mb-6 space-y-3">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-primary">
                        <h5 className="font-semibold text-foreground mb-2">Achievement:</h5>
                        <p className="text-sm text-muted-foreground">{award.achievement}</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-foreground">Organizer:</span>
                          <p className="text-muted-foreground">{award.organizer}</p>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Location:</span>
                          <p className="text-muted-foreground">{award.location}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => toggleAwardDetails(index)}
                    >
                      {expandedAward === index ? (
                        <ChevronUp className="h-4 w-4 mr-2" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-2" />
                      )}
                      {expandedAward === index ? 'Less' : 'Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;