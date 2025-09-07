import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Yessine Zghal',
    'hero.subtitle': 'Data Science — AI Engineering',
    'hero.description': 'Experienced Data Scientist and AI Engineer specializing in machine learning research, deep learning architectures, and end-to-end MLOps solutions. Currently pursuing advanced studies at Université Laval while contributing to cutting-edge AI research projects.',
    'hero.location': 'Quebec City, QC, Canada',
    'hero.download_cv': 'Download CV',
    'hero.contact_me': 'Contact Me',
    'hero.view_projects': 'View Projects',
    
    // About Section
    'about.title': 'My Journey',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.subtitle': 'Deep technical expertise in artificial intelligence and data science',
    'skills.ai_ml_title': 'AI & Machine Learning',
    'skills.ai_ml_desc': 'Developing intelligent systems with deep learning architectures, neural networks, and advanced ML algorithms for complex problem-solving and predictive analytics.',
    'skills.llms_genai_title': 'LLMs & Generative AI',
    'skills.llms_genai_desc': 'Building applications with Large Language Models, implementing RAG systems, fine-tuning transformers, and creating intelligent conversational AI experiences.',
    'skills.data_science_title': 'Data Science & Analytics',
    'skills.data_science_desc': 'Extracting insights from complex datasets through statistical analysis, predictive modeling, and creating compelling data visualizations for strategic decision-making.',
    'skills.technical_expertise': 'Technical Expertise',
    'skills.programming': 'Programming',
    'skills.ai_frameworks': 'AI/ML Frameworks',
    'skills.llms_genai': 'LLMs & GenAI',
    'skills.data_cloud': 'Data & Cloud',
    'skills.visualization': 'Visualization',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.subtitle': 'Professional journey in data science and artificial intelligence',
    
    // Education Section
    'education.title': 'Education',
    'education.subtitle': 'Academic background and continuous learning',
    
    // Projects Section
    'projects.title': 'Projects',
    'projects.subtitle': 'Explore my data science and machine learning projects with detailed technical insights',
    'projects.featured_projects': 'Featured Projects',
    'projects.view_details': 'View Details',
    'projects.project_overview': 'Project Overview',
    'projects.objective': 'Objective',
    'projects.technologies_used': 'Technologies Used',
    'projects.process_steps': 'Process & Steps',
    'projects.input': 'Input',
    'projects.output': 'Output',
    'projects.results': 'Results',
    'projects.view_code': 'View Code',
    'projects.live_demo': 'Live Demo',
    
    // Project 1 - Real Research Project
    'projects.research.title': 'Multi-Modal Deep Learning for Medical Diagnosis',
    'projects.research.short': 'Advanced research project combining computer vision and NLP for automated medical report generation and diagnosis assistance',
    'projects.research.full': 'Led a comprehensive research initiative at Université Laval focusing on multi-modal deep learning approaches for medical diagnosis. The project integrates medical imaging analysis with clinical text processing to provide automated diagnostic assistance. Collaborated with medical professionals and researchers to develop a system that can analyze medical images while generating contextual reports, significantly improving diagnostic accuracy and reducing analysis time.',
    'projects.research.objective': 'Develop an automated medical diagnosis system using multi-modal deep learning to simultaneously analyze medical images and generate contextual clinical reports, improving diagnostic accuracy by 25%.',
    'projects.research.input': 'Medical images (X-rays, MRI, CT scans), historical clinical reports, anonymized patient data',
    'projects.research.output': 'Automated diagnostic reports, confidence scores, region-of-interest visualizations, clinical recommendations',
    'projects.research.results': '25% improvement in diagnostic accuracy, 40% reduction in analysis time, publication pending in leading medical journal',
    
    // Project 2 - Industry Project  
    'projects.fintech.title': 'Real-Time Fraud Detection System for Financial Transactions',
    'projects.fintech.short': 'Scalable machine learning system for detecting fraudulent transactions in real-time using ensemble methods and streaming analytics',
    'projects.fintech.full': 'Developed a real-time fraud detection system for a major financial institution. The project involves building a scalable ML pipeline capable of processing millions of transactions per day while maintaining sub-100ms latency. Utilized advanced ensemble algorithms and online learning to adapt to new fraud patterns.',
    'projects.fintech.objective': 'Build a robust and scalable fraud detection system capable of processing 10M+ transactions/day with 99.5% accuracy and less than 0.1% false positives.',
    'projects.fintech.input': 'Real-time transaction streams, historical transaction data, user behavioral patterns, geographical indicators',
    'projects.fintech.output': 'Real-time risk scores, automated fraud alerts, monitoring dashboards, trend analysis reports',
    'projects.fintech.results': '60% reduction in fraud losses, 35% improvement in detection accuracy, estimated annual savings of $2.5M',
    
    // Project 3 - AI Research
    'projects.nlp.title': 'Multilingual NLP Pipeline for Canadian Government Documents',
    'projects.nlp.short': 'Advanced NLP system for processing and analyzing government documents in English and French with automated translation and summarization',
    'projects.nlp.full': 'Collaborated with the Canadian government to develop an advanced NLP system capable of processing, analyzing, and automatically summarizing bilingual government documents. The project integrates state-of-the-art language models with machine translation and extractive/abstractive summarization techniques to improve document processing efficiency.',
    'projects.nlp.objective': 'Create a bilingual NLP pipeline to automate government document processing, reducing processing time by 70% while maintaining quality and analysis accuracy.',
    'projects.nlp.input': 'Government documents in French and English, legal texts, official reports, administrative correspondence',
    'projects.nlp.output': 'Automated bilingual summaries, high-quality translations, named entity extraction, document classification, analytical insights',
    'projects.nlp.results': 'Processing 50,000+ documents/month, 70% reduction in processing time, 45% improvement in administrative efficiency',
    
    // Project Process Steps - English
    'projects.research.step1': 'Literature Review: Comprehensive analysis of current multi-modal learning approaches in medical diagnosis',
    'projects.research.step2': 'Data Collection: Collaborated with medical institutions to gather anonymized imaging and clinical data',
    'projects.research.step3': 'Model Architecture: Designed novel attention-based fusion mechanisms for image-text integration',
    'projects.research.step4': 'Clinical Validation: Extensive testing with medical professionals and comparison with existing methods',
    'projects.research.step5': 'Deployment & Publication: System deployment in pilot hospitals and research publication preparation',
    
    'projects.fintech.step1': 'System Architecture: Designed scalable microservices architecture for real-time transaction processing',
    'projects.fintech.step2': 'Feature Engineering: Developed advanced behavioral and transactional features using domain expertise',
    'projects.fintech.step3': 'Model Development: Implemented ensemble methods combining gradient boosting, neural networks, and anomaly detection',
    'projects.fintech.step4': 'Real-time Pipeline: Built streaming analytics pipeline using Apache Kafka and Apache Spark',
    'projects.fintech.step5': 'Production Deployment: Deployed system with comprehensive monitoring, A/B testing, and continuous learning',
    
    'projects.nlp.step1': 'Requirements Analysis: Collaborated with government stakeholders to define specific processing needs',
    'projects.nlp.step2': 'Multi-lingual Pipeline: Developed robust text preprocessing for French-English document processing',
    'projects.nlp.step3': 'Model Fine-tuning: Fine-tuned transformer models on government document corpus for domain adaptation',
    'projects.nlp.step4': 'Quality Assurance: Implemented comprehensive testing protocols with human evaluation metrics',
    'projects.nlp.step5': 'Integration & Scaling: Integrated with existing government systems and scaled for high-volume processing',
    
    // Publications Section
    'projects.publications': 'Research Publications',
    'projects.read_paper': 'Read Paper',
    
    // Publications & Awards Section
    'publications.title': 'Publications & Awards',
    'publications.subtitle': 'Research publications, academic achievements, and conference presentations',
    'publications.research_publications': 'Research Publications',
    'publications.awards_recognition': 'Awards & Recognition',
    'publications.conferences_presentations': 'Conferences & Presentations',
    'publications.download_pdf': 'Download PDF',
    'publications.view_pdf': 'View PDF',
    'publications.view_online': 'View Online',
    
    // PDF Viewer
    'pdf.mobile_title': 'View Resume',
    'pdf.mobile_description': 'For the best viewing experience on mobile, download the PDF or open in fullscreen.',
    'pdf.open_fullscreen': 'Open in Browser',
    'pdf.zoom_in': 'Zoom In',
    'pdf.zoom_out': 'Zoom Out',
    'pdf.rotate': 'Rotate',
    'pdf.download': 'Download',
    'pdf.close': 'Close',
    
    // Hero Section
    'hero.resume_title': 'Yessine Zghal - Resume',
    'hero.download': 'Download',
    
    // Awards Section
    'projects.awards': 'Awards & Conferences',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s discuss your next AI project, research collaboration, or career opportunity',
    'contact.get_in_touch': 'Get in Touch',
    'contact.information': 'Contact Information',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.linkedin': 'LinkedIn',
    'contact.gitlab': 'GitLab',
    'contact.quick_contact': 'Quick Contact',
    'contact.collaboration': 'Collaboration Inquiry',
    'contact.job_opportunity': 'Job Opportunity',
    'contact.consultation': 'Technical Consultation',
    'contact.schedule_meeting': 'Schedule a Meeting',
    'contact.booking_description': 'Book a convenient time slot directly through Microsoft Bookings. All times are in Quebec Time (EST/EDT).',
    'contact.book_meeting': 'Book Meeting with Microsoft Bookings',
    'contact.available_times': 'Available Times',
    'contact.meeting_types': 'Meeting Types',
    'contact.consultation_30': '• Consultation (30 min)',
    'contact.discussion_60': '• Project Discussion (60 min)',
    'contact.booking_benefits': 'Microsoft Bookings Benefits:',
    'contact.benefit_1': '• Automatic calendar integration',
    'contact.benefit_2': '• Email confirmations & reminders',
    'contact.benefit_3': '• Teams meeting links included',
    'contact.benefit_4': '• Easy rescheduling options',
    'contact.benefit_5': '• Time zone conversion',
    'contact.availability_status': 'Available for new opportunities',
    'contact.availability_description': 'Currently open for research collaborations, consulting projects, and full-time positions in AI/ML.',
    'contact.schedule_hours': 'Monday - Friday\n9:00 AM - 5:00 PM EST',
    
    // Experience Section - Content
    'experience.research_xai.title': 'Research Assistant — Explainable AI (XAI)',
    'experience.research_xai.company': 'CIRRELT Lab, Université Laval',
    'experience.research_xai.description': 'Leading advanced research in explainable AI for medical applications, focusing on glucose monitoring and forecasting systems.',
    'experience.research_xai.achievement1': 'Designed novel instance-based counterfactual explanation framework for CGM forecasting',
    'experience.research_xai.achievement2': 'Built graph attention mechanism for temporal feature interactions and lagged causality',
    'experience.research_xai.achievement3': 'Developed dual-graph training system for hypoglycemia pattern identification',
    'experience.research_xai.achievement4': 'Created counterfactual engine for transforming unsafe forecasts into safe ones',

    'experience.research_ai.title': 'Research Assistant — AI Engineer',
    'experience.research_ai.company': 'CIRRELT Laboratory, Laval University',
    'experience.research_ai.description': 'Advanced AI research focusing on large language models and educational technology integration.',
    'experience.research_ai.achievement1': 'Prepared and annotated large educational datasets using GPT-4 for automated labeling',
    'experience.research_ai.achievement2': 'Fine-tuned DeepSeek-8B LLM for intelligent question-answering assistance',
    'experience.research_ai.achievement3': 'Applied parameter-efficient fine-tuning techniques (QLoRA, low-rank adaptation)',
    'experience.research_ai.achievement4': 'Designed and deployed RAG system integrated with I4EvoSim education platform',

    'experience.research_dl.title': 'Research Assistant - Deep Learning',
    'experience.research_dl.company': 'CIRRELT Laboratory, Laval University',
    'experience.research_dl.description': 'Specialized research in Physics-Informed Neural Networks and advanced deep learning methodologies.',
    'experience.research_dl.achievement1': 'Developed PINN framework for Hamilton-Jacobi-Bellman equations with discrete control',
    'experience.research_dl.achievement2': 'Transformed classical HJB formulation into differentiable deep learning method',
    'experience.research_dl.achievement3': 'Integrated PINN with reinforcement learning for high-dimensional control tasks',
    'experience.research_dl.achievement4': 'Validated framework against analytical solutions ensuring theoretical robustness',
    'experience.research_dl.achievement5': 'Contributed to scientific article documenting methodology and benchmarks',

    'experience.research_ds.title': 'Research Assistant - Data Science & Deep Learning',
    'experience.research_ds.company': 'CIRRELT Lab, Université Laval',
    'experience.research_ds.description': 'Comprehensive research in medical data science, focusing on continuous glucose monitoring and advanced forecasting models.',
    'experience.research_ds.achievement1': 'Processed and engineered features from T1DEXI datasets for pediatric CGM research',
    'experience.research_ds.achievement2': 'Developed reproducible pipelines for multi-source data ingestion and quality control',
    'experience.research_ds.achievement3': 'Designed advanced forecasting models for Continuous Glucose Monitoring (CGM)',
    'experience.research_ds.achievement4': 'Trained models on Compute Canada clusters using distributed GPU resources',
    'experience.research_ds.achievement5': 'Conducted clinical evaluations and applied explainable AI methods for glucose trajectories',

    'experience.research_intern.title': 'Research Intern - Data Science',
    'experience.research_intern.company': 'CIRRELT Lab, Université Laval',
    'experience.research_intern.description': 'Initial research experience focusing on automated machine learning pipelines and model optimization for medical applications.',
    'experience.research_intern.achievement1': 'Built automated pipeline for T1DEXI adult patient selection and time-series integration',
    'experience.research_intern.achievement2': 'Developed GMSE as custom loss function integrated into XGBoost and deep learning models',
    'experience.research_intern.achievement3': 'Designed 30-minute CGM forecasting framework using neural architectures',
    'experience.research_intern.achievement4': 'Applied Optuna for hyperparameter tuning and Keras Tuner for deep learning optimization',
    'experience.research_intern.achievement5': 'Incorporated SHAP method for XGBoost explainability and feature importance analysis',

    'experience.ai_intern_talan.title': 'AI Intern',
    'experience.ai_intern_talan.company': 'TALAN Tunisia',
    'experience.ai_intern_talan.description': 'Industrial AI internship focusing on large-scale data pipeline development and real-time processing systems.',
    'experience.ai_intern_talan.achievement1': 'Designed and deployed data pipeline on Azure for large-scale voice broadcasting workflows',
    'experience.ai_intern_talan.achievement2': 'Implemented real-time event streaming with Apache Kafka and parallel data processing',
    'experience.ai_intern_talan.achievement3': 'Optimized data storage and retrieval by integrating MongoDB as persistence layer',
    'experience.ai_intern_talan.achievement4': 'Ensured low-latency and fault-tolerant data flow for analytics and reporting',

    'experience.ai_intern_sfax.title': 'AI Intern',
    'experience.ai_intern_sfax.company': 'Digital Research Center of Sfax',
    'experience.ai_intern_sfax.description': 'Early career experience in financial AI, developing predictive models for stock market analysis.',
    'experience.ai_intern_sfax.achievement1': 'Developed web application for stock forecasting with analytical dashboard',
    'experience.ai_intern_sfax.achievement2': 'Created predictive models for financial market analysis and trend identification',

    // Education Section - Content
    'education.masters.degree': 'Master\'s with Thesis in Management Sciences — Operations and Decision Systems',
    'education.masters.school': 'Université Laval',
    'education.masters.description': 'Advanced graduate program focusing on operations research, decision systems, and artificial intelligence applications in management sciences.',
    'education.masters.achievement1': 'Research in Explainable AI for Medical Applications',
    'education.masters.achievement2': 'CIRRELT Lab Research Assistant',
    'education.masters.achievement3': 'Publications in AI/ML conferences',

    'education.research_masters.degree': 'Research Master\'s in Intelligent Systems',
    'education.research_masters.school': 'National School of Computer Science (ENSI)',
    'education.research_masters.description': 'Specialized master\'s program in artificial intelligence and intelligent systems with focus on advanced machine learning techniques.',
    'education.research_masters.achievement1': 'Research in AI and Machine Learning',
    'education.research_masters.achievement2': 'Advanced coursework in intelligent systems',
    'education.research_masters.achievement3': 'Preparation for international graduate studies',

    'education.engineering.degree': 'Engineering Degree in Computer Science',
    'education.engineering.school': 'National School of Computer Science (ENSI)',
    'education.engineering.description': 'Comprehensive engineering program covering all aspects of computer science with specialization in machine learning, distributed systems, and modern software engineering.',
    'education.engineering.achievement1': 'Strong foundation in computer science fundamentals',
    'education.engineering.achievement2': 'Specialized in AI and distributed systems',
    'education.engineering.achievement3': 'Practical experience in modern technologies',

    'education.preparatory.degree': 'Preparatory Institute for Engineering Studies',
    'education.preparatory.school': 'Physics and Chemistry Track',
    'education.preparatory.description': 'Intensive preparatory program focusing on advanced mathematics, physics, and chemistry to prepare for competitive engineering school admissions.',
    'education.preparatory.achievement1': 'Top 7% national ranking',
    'education.preparatory.achievement2': 'Strong mathematical and scientific foundation',
    'education.preparatory.achievement3': 'Admission to prestigious ENSI',

    // Projects Section - Content
    'projects.traffic_rl.title': 'Deep Reinforcement Learning for Traffic-Light Control',
    'projects.traffic_rl.short': 'Built a SUMO-based simulation environment to model real-world traffic flows and evaluate reinforcement learning policies.',
    'projects.traffic_rl.full': 'This comprehensive project involved creating an intelligent traffic management system using deep reinforcement learning. The system uses SUMO (Simulation of Urban Mobility) to create realistic traffic scenarios and tests various RL algorithms including Deep Q-Network (DQN), Double DQN (DDQN), and Deep Recurrent Q-Network (DRQN). The project includes both single-agent and multi-agent approaches, where multiple intersections can coordinate their traffic light decisions. The implementation follows MLOps best practices with Docker containerization for consistent environments and Jenkins pipelines for automated training and deployment.',
    'projects.traffic_rl.objective': 'Develop a traffic optimization framework by benchmarking DQN, DDQN, and DRQN under single-agent and multi-agent settings to improve traffic flow efficiency by 30%.',
    'projects.traffic_rl.step1': 'Literature Review: Comprehensive analysis of current reinforcement learning approaches in traffic control',
    'projects.traffic_rl.step2': 'Environment Setup: Built SUMO-based simulation environment for realistic traffic modeling',
    'projects.traffic_rl.step3': 'Algorithm Implementation: Developed and compared DQN, DDQN, and DRQN algorithms',
    'projects.traffic_rl.step4': 'Multi-Agent Coordination: Implemented multi-agent systems for intersection coordination',
    'projects.traffic_rl.step5': 'MLOps Integration: Applied Docker and Jenkins for automated training and deployment',
    'projects.traffic_rl.input': 'Real-world traffic data, intersection layouts, vehicle flow patterns, traffic light timing constraints',
    'projects.traffic_rl.output': 'Optimized traffic light control policies, traffic flow metrics, performance comparisons, automated deployment pipelines',
    'projects.traffic_rl.results': '30% improvement in traffic flow efficiency, reduced waiting times, successful MLOps implementation for reproducible workflows',

    'projects.kubeflow.title': 'Kubeflow Pipeline "Digits-Recognizer" (MNIST)',
    'projects.kubeflow.short': 'Designed an end-to-end ML pipeline with Kubeflow for dataset preprocessing, model training, and evaluation.',
    'projects.kubeflow.full': 'A production-ready machine learning pipeline built on Google Kubernetes Engine (GKE) using Kubeflow. The pipeline automates the entire ML workflow from data ingestion to model deployment. Features include automated hyperparameter tuning, distributed training, model versioning with MinIO object storage, and scalable inference serving with KServe. The system includes comprehensive monitoring, logging, and A/B testing capabilities for model performance evaluation.',
    'projects.kubeflow.objective': 'Create a production-ready ML pipeline with automated hyperparameter tuning, distributed training, and scalable inference serving.',
    'projects.kubeflow.step1': 'Pipeline Design: Architected end-to-end ML pipeline using Kubeflow on GKE',
    'projects.kubeflow.step2': 'Data Processing: Implemented automated dataset preprocessing and validation',
    'projects.kubeflow.step3': 'Model Training: Set up distributed CNN training with automated metric tracking',
    'projects.kubeflow.step4': 'Model Deployment: Deployed inference endpoints via KServe with auto-scaling',
    'projects.kubeflow.step5': 'Monitoring & Validation: Established comprehensive monitoring and A/B testing',
    'projects.kubeflow.input': 'MNIST digit image dataset, training configurations, hyperparameter ranges, deployment specifications',
    'projects.kubeflow.output': 'Trained CNN models, inference endpoints, performance metrics, automated deployment pipelines, monitoring dashboards',
    'projects.kubeflow.results': '95%+ accuracy on MNIST dataset, automated model versioning in MinIO, scalable inference with KServe, comprehensive MLOps workflow',

    'projects.apple_cv.title': 'Computer Vision Pipeline "Apple-Classifier"',
    'projects.apple_cv.short': 'Created a robust vision pipeline by applying data augmentation techniques to apple image datasets.',
    'projects.apple_cv.full': 'A comprehensive computer vision solution for fruit classification with industrial-grade deployment capabilities. The project implements advanced data augmentation strategies to improve model robustness and generalization. Features include automated model optimization, performance benchmarking, and real-time inference API. The system supports batch processing, real-time predictions, and includes comprehensive error handling and monitoring. Deployed using FastAPI for high-performance inference with automatic documentation and testing.',
    'projects.apple_cv.objective': 'Build a robust computer vision pipeline with data augmentation, model optimization, and real-time inference deployment.',
    'projects.apple_cv.step1': 'Data Preparation: Applied data augmentation techniques (flip, rotation, zoom, brightness) to apple datasets',
    'projects.apple_cv.step2': 'Model Development: Trained and optimized CNN with EarlyStopping for best performance',
    'projects.apple_cv.step3': 'Performance Evaluation: Evaluated using accuracy, F1-score, confusion matrix, and learning curves',
    'projects.apple_cv.step4': 'Model Export: Exported best-performing model in ONNX format for cross-platform compatibility',
    'projects.apple_cv.step5': 'Deployment: Deployed real-time inference service using FastAPI with CI/CD workflow',
    'projects.apple_cv.input': 'Apple image datasets, augmentation parameters, training configurations, deployment specifications',
    'projects.apple_cv.output': 'Trained CNN models, ONNX exports, FastAPI inference service, performance metrics, CI/CD pipelines',
    'projects.apple_cv.results': 'High accuracy fruit classification, robust data augmentation pipeline, real-time FastAPI inference service, automated CI/CD with Jenkins',

    'projects.hospital.title': 'Hospital Management Platform',
    'projects.hospital.short': 'Online solution to support medical staff during COVID-19 pandemic.',
    'projects.hospital.full': 'A full-stack web application designed to address the critical needs of healthcare facilities during the COVID-19 pandemic. The platform provides comprehensive tools for managing patient records, staff schedules, resource allocation, and real-time reporting. Features include secure patient data management, automated scheduling, inventory tracking, and administrative dashboards with analytics. Built with Laravel for robust backend functionality and Bootstrap for responsive design.',
    'projects.hospital.objective': 'Develop a comprehensive hospital management system to support medical staff during COVID-19 with patient tracking and resource management.',
    'projects.hospital.step1': 'Requirements Analysis: Collaborated with healthcare professionals to define critical needs',
    'projects.hospital.step2': 'System Architecture: Designed secure, scalable web application architecture',
    'projects.hospital.step3': 'Backend Development: Built robust Laravel backend with patient management features',
    'projects.hospital.step4': 'Frontend Design: Created responsive Bootstrap interface for medical staff',
    'projects.hospital.step5': 'Testing & Deployment: Comprehensive testing and deployment for healthcare use',
    'projects.hospital.input': 'Patient data, staff schedules, medical resources, COVID-19 protocols, healthcare workflows',
    'projects.hospital.output': 'Patient management system, staff scheduling tools, resource tracking, real-time dashboards, reporting tools',
    'projects.hospital.results': 'Successful deployment in healthcare facilities, improved staff coordination during COVID-19, streamlined patient management workflows',

    // Common labels
    'experience.key_achievements': 'Key Achievements',
    'education.academic_performance': 'Academic Performance',
    'education.academic_achievement': 'Academic Achievement',
    'education.key_coursework': 'Key Coursework',
    'education.achievements_highlights': 'Achievements & Highlights',
    'education.status.in_progress': 'In Progress',
    'education.status.completed': 'Completed',

    // Theme
    'theme.toggle': 'Toggle theme',
    'language.toggle': 'Switch language'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.projects': 'Projets',
    'nav.publications': 'Publications',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Yessine Zghal',
    'hero.subtitle': 'Science des Données — Ingénierie IA',
    'hero.description': 'Data Scientist et Ingénieur IA expérimenté spécialisé dans la recherche en apprentissage automatique, les architectures d\'apprentissage profond et les solutions MLOps complètes. Actuellement en études avancées à l\'Université Laval tout en contribuant à des projets de recherche IA de pointe.',
    'hero.location': 'Ville de Québec, QC, Canada',
    'hero.download_cv': 'Télécharger CV',
    'hero.contact_me': 'Me Contacter',
    'hero.view_projects': 'Voir les Projets',
    
    // About Section
    'about.title': 'Mon Parcours',
    
    // Skills Section
    'skills.title': 'Compétences',
    'skills.subtitle': 'Expertise technique approfondie en intelligence artificielle et sciences des données',
    'skills.ai_ml_title': 'IA & Apprentissage automatique',
    'skills.ai_ml_desc': 'Développement de systèmes intelligents avec des architectures d\'apprentissage profond, réseaux de neurones et algorithmes ML avancés pour la résolution de problèmes complexes et l\'analytique prédictive.',
    'skills.llms_genai_title': 'LLMs & IA Générative',
    'skills.llms_genai_desc': 'Création d\'applications avec de grands modèles de langage, implémentation de systèmes RAG, fine-tuning de transformers et développement d\'expériences d\'IA conversationnelle intelligentes.',
    'skills.data_science_title': 'Science des Données & Analytique',
    'skills.data_science_desc': 'Extraction d\'insights à partir de jeux de données complexes grâce à l\'analyse statistique, la modélisation prédictive et la création de visualisations de données convaincantes pour la prise de décision stratégique.',
    'skills.technical_expertise': 'Expertise Technique',
    'skills.programming': 'Programmation',
    'skills.ai_frameworks': 'Frameworks IA/ML',
    'skills.llms_genai': 'LLMs & IA Générative',
    'skills.data_cloud': 'Données & Cloud',
    'skills.visualization': 'Visualisation',
    
    // Experience Section
    'experience.title': 'Expérience',
    'experience.subtitle': 'Parcours professionnel en science des données et intelligence artificielle',
    
    // Education Section
    'education.title': 'Formation',
    'education.subtitle': 'Parcours académique et apprentissage continu',
    
    // Projects Section
    'projects.title': 'Projets',
    'projects.subtitle': 'Explorez mes projets de science des données et d\'apprentissage automatique avec des aperçus techniques détaillés',
    'projects.featured_projects': 'Projets Vedettes',
    'projects.view_details': 'Voir les détails',
    'projects.project_overview': 'Aperçu du Projet',
    'projects.objective': 'Objectif',
    'projects.technologies_used': 'Technologies Utilisées',
    'projects.process_steps': 'Processus et Étapes',
    'projects.input': 'Entrée',
    'projects.output': 'Sortie',
    'projects.results': 'Résultats',
    'projects.view_code': 'Voir le Code',
    'projects.live_demo': 'Démo en Direct',
    
    // Project 1 - Real Research Project
    'projects.research.title': 'Apprentissage Profond Multi-Modal pour le Diagnostic Médical',
    'projects.research.short': 'Projet de recherche avancé combinant vision par ordinateur et NLP pour la génération automatisée de rapports médicaux et l\'assistance au diagnostic',
    'projects.research.full': 'Dirigé une initiative de recherche complète à l\'Université Laval axée sur les approches d\'apprentissage profond multi-modal pour le diagnostic médical. Le projet intègre l\'analyse d\'imagerie médicale avec le traitement de texte clinique pour fournir une assistance diagnostique automatisée. Collaboration avec des professionnels médicaux et des chercheurs pour développer un système capable d\'analyser les images médicales tout en générant des rapports contextuels, améliorant significativement la précision diagnostique et réduisant le temps d\'analyse.',
    // Project 1 - Real Research Project  
    'projects.research.objective': 'Développer un système de diagnostic médical automatisé utilisant l\'apprentissage profond multi-modal pour analyser simultanément les images médicales et générer des rapports cliniques contextuels, améliorant la précision diagnostique de 25%.',
    'projects.research.input': 'Images médicales (radiographies, IRM, CT scans), rapports cliniques historiques, données de patients anonymisées',
    'projects.research.output': 'Rapports de diagnostic automatisés, scores de confiance, visualisations des régions d\'intérêt, recommandations cliniques',
    'projects.research.results': 'Amélioration de 25% de la précision diagnostique, réduction de 40% du temps d\'analyse, publication en cours dans une revue médicale de premier plan',
    
    // Project 2 - Industry Project  
    'projects.fintech.title': 'Système de Détection de Fraude en Temps Réel pour Transactions Financières',
    'projects.fintech.short': 'Système d\'apprentissage automatique scalable pour détecter les transactions frauduleuses en temps réel utilisant des méthodes d\'ensemble et l\'analytique de streaming',
    'projects.fintech.full': 'Développement d\'un système de détection de fraude en temps réel pour une institution financière majeure. Le projet implique la construction d\'un pipeline ML scalable capable de traiter des millions de transactions par jour tout en maintenant une latence inférieure à 100ms. Utilisation d\'algorithmes d\'ensemble avancés et d\'apprentissage en ligne pour s\'adapter aux nouveaux patterns de fraude.',
    'projects.fintech.objective': 'Construire un système de détection de fraude robuste et scalable capable de traiter 10M+ transactions/jour avec 99.5% de précision et moins de 0.1% de faux positifs.',
    'projects.fintech.input': 'Flux de transactions en temps réel, historiques transactionnels, données comportementales des utilisateurs, indicateurs géographiques',
    'projects.fintech.output': 'Scores de risque en temps réel, alertes de fraude automatisées, tableaux de bord de monitoring, rapports d\'analyse des tendances',
    'projects.fintech.results': 'Réduction de 60% des pertes dues à la fraude, amélioration de 35% de la précision de détection, économies estimées à 2.5M$ annuellement',
    
    
    // Project 3 - AI Research
    'projects.nlp.title': 'Pipeline NLP Multilingue pour Documents Gouvernementaux Canadiens',
    'projects.nlp.short': 'Système NLP avancé pour le traitement et l\'analyse de documents gouvernementaux en anglais et français avec traduction automatique et résumé',
    'projects.nlp.full': 'Collaboration avec le gouvernement canadien pour développer un système NLP avancé capable de traiter, analyser et résumer automatiquement des documents gouvernementaux bilingues. Le projet intègre des modèles de langage de pointe avec des techniques de traduction automatique et de résumé extractif/abstractif pour améliorer l\'efficacité du traitement documentaire.',
    'projects.nlp.objective': 'Créer un pipeline NLP bilingue pour automatiser le traitement de documents gouvernementaux, réduisant le temps de traitement de 70% tout en maintenant la qualité et la précision des analyses.',
    'projects.nlp.input': 'Documents gouvernementaux en français et anglais, textes légaux, rapports officiels, correspondances administratives',
    'projects.nlp.output': 'Résumés automatiques bilingues, traductions de haute qualité, extraction d\'entités nommées, classification de documents, insights analytiques',
    'projects.nlp.results': 'Traitement de 50,000+ documents/mois, réduction de 70% du temps de traitement, amélioration de 45% de l\'efficacité administrative',
    
    // Project Process Steps - French
    'projects.research.step1': 'Revue de Littérature: Analyse exhaustive des approches actuelles d\'apprentissage multi-modal en diagnostic médical',
    'projects.research.step2': 'Collecte de Données: Collaboration avec institutions médicales pour rassembler données d\'imagerie et cliniques anonymisées',
    'projects.research.step3': 'Architecture de Modèle: Conception de mécanismes de fusion basés sur l\'attention pour l\'intégration image-texte',
    'projects.research.step4': 'Validation Clinique: Tests approfondis avec professionnels médicaux et comparaison avec méthodes existantes',
    'projects.research.step5': 'Déploiement & Publication: Déploiement système dans hôpitaux pilotes et préparation publication recherche',
    
    'projects.fintech.step1': 'Architecture Système: Conception d\'architecture microservices scalable pour traitement transactions temps réel',
    'projects.fintech.step2': 'Ingénierie des Fonctionnalités: Développement de caractéristiques comportementales et transactionnelles avancées',
    'projects.fintech.step3': 'Développement de Modèle: Implémentation méthodes d\'ensemble combinant gradient boosting, réseaux de neurones et détection d\'anomalies',
    'projects.fintech.step4': 'Pipeline Temps Réel: Construction pipeline analytique de streaming avec Apache Kafka et Apache Spark',
    'projects.fintech.step5': 'Déploiement Production: Déploiement système avec monitoring complet, tests A/B et apprentissage continu',
    
    'projects.nlp.step1': 'Analyse des Exigences: Collaboration avec parties prenantes gouvernementales pour définir besoins de traitement spécifiques',
    'projects.nlp.step2': 'Pipeline Multilingue: Développement préprocessing texte robuste pour traitement documents français-anglais',
    'projects.nlp.step3': 'Fine-tuning de Modèle: Fine-tuning modèles transformer sur corpus documents gouvernementaux pour adaptation domaine',
    'projects.nlp.step4': 'Assurance Qualité: Implémentation protocoles de test complets avec métriques d\'évaluation humaine',
    'projects.nlp.step5': 'Intégration & Mise à l\'Échelle: Intégration avec systèmes gouvernementaux existants et mise à l\'échelle pour traitement haut volume',
    
    // Publications Section
    'projects.publications': 'Publications de Recherche',
    'projects.read_paper': 'Lire l\'Article',
    
    // Publications & Awards Section
        // Publications & Awards Section
    'publications.title': 'Publications et Prix',
    'publications.subtitle': 'Contributions de recherche publiées, réalisations académiques et présentations de conférences',
    'publications.research_publications': 'Publications de Recherche',
    'publications.awards_recognition': 'Prix et Reconnaissance',
    'publications.conferences_presentations': 'Conférences et Présentations',
    'publications.download_pdf': 'Télécharger PDF',
    'publications.view_pdf': 'Voir PDF',
    'publications.view_online': 'Voir en Ligne',
    
    // PDF Viewer
    'pdf.mobile_title': 'Voir le CV',
    'pdf.mobile_description': 'Pour une meilleure expérience de visualisation sur mobile, téléchargez le PDF ou ouvrez en plein écran.',
    'pdf.open_fullscreen': 'Ouvrir dans le Navigateur',
    'pdf.zoom_in': 'Zoom Avant',
    'pdf.zoom_out': 'Zoom Arrière',
    'pdf.rotate': 'Rotation',
    'pdf.download': 'Télécharger',
    'pdf.close': 'Fermer',
    
    // Hero Section
    'hero.resume_title': 'Yessine Zghal - CV',
    'hero.download': 'Télécharger',
    
    // Dynamic content translations
    'publications.paper_title': 'Une approche personnalisée basée sur les données pour prédire les niveaux de glucose sanguin chez les patients diabétiques de type 1 qui s\'exercent en conditions de vie libre',
    'publications.paper_abstract': 'Ce document vise à évaluer si une approche basée sur les données peut prédire avec précision et sécurité les niveaux de glucose sanguin chez les patients atteints de diabète de type 1 qui s\'exercent en conditions de vie libre. Plusieurs modèles de régression d\'apprentissage automatique (XGBoost, Random Forest) et d\'apprentissage profond (LSTM, CNN-LSTM, Dual-encoder avec couche d\'attention) ont été considérés. Les ensembles de données utilisés pour l\'entraînement et les tests des modèles ont été dérivés de l\'Initiative d\'exercice pour le diabète de type 1 (T1DEXI). Un total de 79 patients de T1DEXI ont répondu à nos critères d\'inclusion. Pour les prédictions faites 30 minutes à l\'avance, les valeurs médianes et moyennes de RMSE étaient de 16,85 mg/dL et 17,74 mg/dL, respectivement.',
    
    'publications.awards.pcd_title': 'Défi PCD — 2e Place',
    'publications.awards.pcd_org': 'LessJam: optimisation des feux de circulation',
    'publications.awards.pcd_desc': 'Obtention de la deuxième place dans le Défi PCD (Post-Conference Data) axé sur les algorithmes d\'optimisation des feux de circulation. Le défi impliquait le développement de solutions efficaces pour la gestion du trafic urbain en utilisant l\'apprentissage automatique et les techniques d\'optimisation.',
    'publications.awards.pcd_impact': 'Reconnaissance pour les algorithmes innovants d\'optimisation du trafic',
    'publications.awards.pcd_type': 'Défi d\'Optimisation du Trafic',
    'publications.awards.pcd_category': 'Prix de Compétition',
    
    'publications.awards.tunisia_title': 'Sommet Numérique de Tunisie — 2e Place',
    'publications.awards.tunisia_org': 'Hack4Impact',
    'publications.awards.tunisia_desc': 'Obtention de la deuxième place au hackathon du Sommet Numérique de Tunisie, en compétition dans la catégorie Hack4Impact. Développement de solutions innovantes pour répondre aux défis sociaux et environnementaux en utilisant les technologies numériques et les approches basées sur l\'IA.',
    'publications.awards.tunisia_impact': 'Démonstration du leadership dans les solutions technologiques à impact social',
    'publications.awards.tunisia_type': 'Hackathon d\'Impact Social',
    'publications.awards.tunisia_category': 'Prix de Hackathon',
    
    'publications.conferences.jopt_name': 'JOPT 2025',
    'publications.conferences.jopt_full': 'Conférence Conjointe sur l\'Optimisation et la Science de la Décision',
    'publications.conferences.jopt_role': 'Présentateur',
    'publications.conferences.jopt_session': 'Approches basées sur l\'IA pour la gestion des soins de santé',
    'publications.conferences.jopt_title': 'Prédiction du Glucose Sanguin dans le Diabète de Type 1 Pédiatrique Pendant l\'Exercice en Utilisant ResLSTM en Conditions de Vie Libre',
    'publications.conferences.jopt_desc': 'Présentation de recherche sur les modèles d\'apprentissage profond pour la prédiction du glucose sanguin chez les patients T1D pédiatriques utilisant l\'architecture ResLSTM',
    
    'publications.conferences.cors_name': 'CORS 2025',
    'publications.conferences.cors_full': 'Conférence Annuelle de la Société Canadienne de Recherche Opérationnelle',
    'publications.conferences.cors_role': 'Présentateur et Président de Session',
    'publications.conferences.cors_title': 'Prédiction du Glucose Sanguin dans le Diabète de Type 1 Pédiatrique Pendant l\'Exercice en Utilisant ResLSTM en Conditions de Vie Libre',
    'publications.conferences.cors_desc': 'Présentation de recherche sur la prédiction du glucose sanguin T1D pédiatrique et service comme président de session à la 66e conférence annuelle CORS, dirigeant les discussions sur les méthodologies de recherche opérationnelle et les applications',
    
    // Status translations
    'publications.status.published': 'Publié',
    'publications.status.completed': 'Terminé',
    'publications.status.scheduled': 'Planifié',
    'publications.status.under_review': 'En Révision',
    
    // Common terms
    'publications.citations': 'Citations',
    'publications.impact': 'Impact',
    'publications.status': 'Statut',
    'publications.role': 'Rôle',
    'publications.session': 'Session',
    'publications.chaired_by': 'Présidé par',
    'publications.presentation_title': 'Titre de la Présentation',
    'publications.presentation': 'Présentation',
    'publications.view_conference': 'Voir la Conférence',
    
    // Awards Section
    'projects.awards': 'Prix & Conférences',
    
    // Contact Section
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Discutons de votre prochain projet IA, collaboration de recherche, ou opportunité de carrière',
    'contact.get_in_touch': 'Prendre contact',
    'contact.information': 'Informations de Contact',
    'contact.email': 'Courriel',
    'contact.location': 'Localisation',
    'contact.linkedin': 'LinkedIn',
    'contact.gitlab': 'GitLab',
    'contact.quick_contact': 'Contact Rapide',
    'contact.collaboration': 'Demande de Collaboration',
    'contact.job_opportunity': 'Opportunité d\'Emploi',
    'contact.consultation': 'Consultation Technique',
    'contact.schedule_meeting': 'Planifier une Rencontre',
    'contact.booking_description': 'Réservez un créneau horaire pratique directement via Microsoft Bookings. Tous les horaires sont en heure du Québec (EST/EDT).',
    'contact.book_meeting': 'Réserver une Rencontre avec Microsoft Bookings',
    'contact.available_times': 'Heures Disponibles',
    'contact.meeting_types': 'Types de Rencontre',
    'contact.consultation_30': '• Consultation (30 min)',
    'contact.discussion_60': '• Discussion de Projet (60 min)',
    'contact.booking_benefits': 'Avantages de Microsoft Bookings :',
    'contact.benefit_1': '• Intégration automatique du calendrier',
    'contact.benefit_2': '• Confirmations et rappels par courriel',
    'contact.benefit_3': '• Liens de réunion Teams inclus',
    'contact.benefit_4': '• Options de reprogrammation faciles',
    'contact.benefit_5': '• Conversion de fuseau horaire',
    'contact.availability_status': 'Disponible pour de nouvelles opportunités',
    'contact.availability_description': 'Actuellement ouvert aux collaborations de recherche, projets de consultation, et postes à temps plein en IA/ML.',
    'contact.schedule_hours': 'Lundi - Vendredi\n9h00 - 17h00 EST',
    
    // Experience Section - Content
    'experience.research_xai.title': 'Assistant de Recherche — IA Explicable (XAI)',
    'experience.research_xai.company': 'Laboratoire CIRRELT, Université Laval',
    'experience.research_xai.description': 'Direction de recherches avancées en IA explicable pour applications médicales, axées sur les systèmes de surveillance et prévision du glucose.',
    'experience.research_xai.achievement1': 'Conception d\'un cadre d\'explications contrefactuelles basé sur les instances pour la prévision CGM',
    'experience.research_xai.achievement2': 'Construction de mécanisme d\'attention graphique pour interactions temporelles et causalité décalée',
    'experience.research_xai.achievement3': 'Développement de système d\'entraînement dual-graphe pour identification des patterns d\'hypoglycémie',
    'experience.research_xai.achievement4': 'Création de moteur contrefactuel pour transformer les prévisions dangereuses en sécurisées',

    'experience.research_ai.title': 'Assistant de Recherche — Ingénieur IA',
    'experience.research_ai.company': 'Laboratoire CIRRELT, Université Laval',
    'experience.research_ai.description': 'Recherche IA avancée axée sur les grands modèles de langage et l\'intégration technologique éducative.',
    'experience.research_ai.achievement1': 'Préparation et annotation de grands jeux de données éducatifs avec GPT-4 pour étiquetage automatisé',
    'experience.research_ai.achievement2': 'Fine-tuning de LLM DeepSeek-8B pour assistance intelligente question-réponse',
    'experience.research_ai.achievement3': 'Application de techniques de fine-tuning efficaces en paramètres (QLoRA, adaptation low-rank)',
    'experience.research_ai.achievement4': 'Conception et déploiement de système RAG intégré à la plateforme éducative I4EvoSim',

    'experience.research_dl.title': 'Assistant de Recherche - Apprentissage Profond',
    'experience.research_dl.company': 'Laboratoire CIRRELT, Université Laval',
    'experience.research_dl.description': 'Recherche spécialisée en Réseaux de Neurones Informés par la Physique et méthodologies avancées d\'apprentissage profond.',
    'experience.research_dl.achievement1': 'Développement de cadre PINN pour équations Hamilton-Jacobi-Bellman avec contrôle discret',
    'experience.research_dl.achievement2': 'Transformation de formulation HJB classique en méthode d\'apprentissage profond différentiable',
    'experience.research_dl.achievement3': 'Intégration PINN avec apprentissage par renforcement pour tâches de contrôle haute dimension',
    'experience.research_dl.achievement4': 'Validation du cadre contre solutions analytiques assurant robustesse théorique',
    'experience.research_dl.achievement5': 'Contribution à article scientifique documentant méthodologie et benchmarks',

    'experience.research_ds.title': 'Assistant de Recherche - Science des Données & Apprentissage Profond',
    'experience.research_ds.company': 'Laboratoire CIRRELT, Université Laval',
    'experience.research_ds.description': 'Recherche complète en science des données médicales, axée sur surveillance continue du glucose et modèles de prévision avancés.',
    'experience.research_ds.achievement1': 'Traitement et ingénierie de fonctionnalités à partir des jeux de données T1DEXI pour recherche CGM pédiatrique',
    'experience.research_ds.achievement2': 'Développement de pipelines reproductibles pour ingestion multi-sources et contrôle qualité',
    'experience.research_ds.achievement3': 'Conception de modèles de prévision avancés pour Surveillance Continue du Glucose (CGM)',
    'experience.research_ds.achievement4': 'Entraînement de modèles sur clusters Compute Canada utilisant ressources GPU distribuées',
    'experience.research_ds.achievement5': 'Conduite d\'évaluations cliniques et application de méthodes IA explicables pour trajectoires glucose',

    'experience.research_intern.title': 'Stagiaire de Recherche - Science des Données',
    'experience.research_intern.company': 'Laboratoire CIRRELT, Université Laval',
    'experience.research_intern.description': 'Expérience de recherche initiale axée sur pipelines d\'apprentissage automatique automatisés et optimisation de modèles pour applications médicales.',
    'experience.research_intern.achievement1': 'Construction de pipeline automatisé pour sélection patients adultes T1DEXI et intégration séries temporelles',
    'experience.research_intern.achievement2': 'Développement de GMSE comme fonction de perte personnalisée intégrée dans XGBoost et modèles apprentissage profond',
    'experience.research_intern.achievement3': 'Conception de cadre de prévision CGM 30-minutes utilisant architectures neuronales',
    'experience.research_intern.achievement4': 'Application d\'Optuna pour réglage hyperparamètres et Keras Tuner pour optimisation apprentissage profond',
    'experience.research_intern.achievement5': 'Incorporation de méthode SHAP pour explicabilité XGBoost et analyse importance fonctionnalités',

    'experience.ai_intern_talan.title': 'Stagiaire IA',
    'experience.ai_intern_talan.company': 'TALAN Tunisie',
    'experience.ai_intern_talan.description': 'Stage IA industriel axé sur développement pipeline données grande échelle et systèmes de traitement temps réel.',
    'experience.ai_intern_talan.achievement1': 'Conception et déploiement de pipeline données sur Azure pour workflows diffusion vocale grande échelle',
    'experience.ai_intern_talan.achievement2': 'Implémentation streaming événements temps réel avec Apache Kafka et traitement données parallèle',
    'experience.ai_intern_talan.achievement3': 'Optimisation stockage et récupération données en intégrant MongoDB comme couche persistance',
    'experience.ai_intern_talan.achievement4': 'Assurance flux données faible latence et tolérant aux pannes pour analytics et reporting',

    'experience.ai_intern_sfax.title': 'Stagiaire IA',
    'experience.ai_intern_sfax.company': 'Centre de Recherche Numérique de Sfax',
    'experience.ai_intern_sfax.description': 'Expérience début de carrière en IA financière, développement modèles prédictifs pour analyse marché boursier.',
    'experience.ai_intern_sfax.achievement1': 'Développement application web pour prévision boursière avec tableau de bord analytique',
    'experience.ai_intern_sfax.achievement2': 'Création modèles prédictifs pour analyse marché financier et identification tendances',

    // Education Section - Content
    'education.masters.degree': 'Maîtrise avec Mémoire en Sciences de Gestion — Systèmes d\'Exploitation et de Décision',
    'education.masters.school': 'Université Laval',
    'education.masters.description': 'Programme d\'études supérieures avancé axé sur recherche opérationnelle, systèmes de décision et applications intelligence artificielle en sciences de gestion.',
    'education.masters.achievement1': 'Recherche en IA Explicable pour Applications Médicales',
    'education.masters.achievement2': 'Assistant de Recherche Laboratoire CIRRELT',
    'education.masters.achievement3': 'Publications dans conférences IA/ML',

    'education.research_masters.degree': 'Maîtrise de Recherche en Systèmes Intelligents',
    'education.research_masters.school': 'École Nationale des Sciences de l\'Informatique (ENSI)',
    'education.research_masters.description': 'Programme de maîtrise spécialisé en intelligence artificielle et systèmes intelligents avec focus sur techniques avancées d\'apprentissage automatique.',
    'education.research_masters.achievement1': 'Recherche en IA et Apprentissage Automatique',
    'education.research_masters.achievement2': 'Cours avancés en systèmes intelligents',
    'education.research_masters.achievement3': 'Préparation pour études supérieures internationales',

    'education.engineering.degree': 'Diplôme d\'Ingénieur en Informatique',
    'education.engineering.school': 'École Nationale des Sciences de l\'Informatique (ENSI)',
    'education.engineering.description': 'Programme d\'ingénierie complet couvrant tous aspects de l\'informatique avec spécialisation en apprentissage automatique, systèmes distribués et génie logiciel moderne.',
    'education.engineering.achievement1': 'Base solide en fondamentaux de l\'informatique',
    'education.engineering.achievement2': 'Spécialisé en IA et systèmes distribués',
    'education.engineering.achievement3': 'Expérience pratique en technologies modernes',

    'education.preparatory.degree': 'Institut Préparatoire aux Études d\'Ingénieur',
    'education.preparatory.school': 'Filière Physique et Chimie',
    'education.preparatory.description': 'Programme préparatoire intensif axé sur mathématiques avancées, physique et chimie pour préparer aux admissions compétitives écoles d\'ingénieurs.',
    'education.preparatory.achievement1': 'Classement 7% supérieur national',
    'education.preparatory.achievement2': 'Base mathématique et scientifique solide',
    'education.preparatory.achievement3': 'Admission à ENSI prestigieuse',

    // Projects Section - Content
    'projects.traffic_rl.title': 'Apprentissage par Renforcement Profond pour Contrôle Feux de Circulation',
    'projects.traffic_rl.short': 'Construction d\'environnement de simulation basé SUMO pour modéliser flux de trafic réel et évaluer politiques d\'apprentissage par renforcement.',
    'projects.traffic_rl.full': 'Ce projet complet impliquait la création d\'un système de gestion de trafic intelligent utilisant l\'apprentissage par renforcement profond. Le système utilise SUMO (Simulation of Urban Mobility) pour créer des scénarios de trafic réalistes et teste divers algorithmes RL incluant Deep Q-Network (DQN), Double DQN (DDQN), et Deep Recurrent Q-Network (DRQN). Le projet inclut approches mono-agent et multi-agent, où multiples intersections peuvent coordonner leurs décisions de feux de circulation. L\'implémentation suit les meilleures pratiques MLOps avec containerisation Docker pour environnements cohérents et pipelines Jenkins pour entraînement et déploiement automatisés.',
    'projects.traffic_rl.objective': 'Développer un cadre d\'optimisation de trafic en comparant DQN, DDQN et DRQN dans paramètres mono-agent et multi-agent pour améliorer l\'efficacité du flux de trafic de 30%.',
    'projects.traffic_rl.step1': 'Revue de Littérature : Analyse exhaustive des approches actuelles d\'apprentissage par renforcement dans contrôle de trafic',
    'projects.traffic_rl.step2': 'Configuration Environnement : Construction d\'environnement de simulation basé SUMO pour modélisation trafic réaliste',
    'projects.traffic_rl.step3': 'Implémentation Algorithmes : Développement et comparaison algorithmes DQN, DDQN et DRQN',
    'projects.traffic_rl.step4': 'Coordination Multi-Agent : Implémentation systèmes multi-agent pour coordination intersections',
    'projects.traffic_rl.step5': 'Intégration MLOps : Application Docker et Jenkins pour entraînement et déploiement automatisés',
    'projects.traffic_rl.input': 'Données de trafic réel, configurations d\'intersections, patterns de flux véhicules, contraintes temporelles feux de circulation',
    'projects.traffic_rl.output': 'Politiques de contrôle feux de circulation optimisées, métriques de flux de trafic, comparaisons de performance, pipelines de déploiement automatisés',
    'projects.traffic_rl.results': 'Amélioration de 30% de l\'efficacité du flux de trafic, réduction des temps d\'attente, implémentation MLOps réussie pour workflows reproductibles',

    'projects.kubeflow.title': 'Pipeline Kubeflow "Recognizer-Digits" (MNIST)',
    'projects.kubeflow.short': 'Conception d\'un pipeline ML de bout en bout avec Kubeflow pour préprocessing jeu de données, entraînement modèle et évaluation.',
    'projects.kubeflow.full': 'Un pipeline d\'apprentissage automatique prêt pour la production construit sur Google Kubernetes Engine (GKE) utilisant Kubeflow. Le pipeline automatise tout le workflow ML de l\'ingestion de données au déploiement de modèle. Fonctionnalités incluent réglage automatique hyperparamètres, entraînement distribué, versioning de modèle avec stockage objet MinIO, et service d\'inférence scalable avec KServe. Le système inclut surveillance complète, journalisation et capacités de tests A/B pour évaluation performance modèle.',
    'projects.kubeflow.objective': 'Créer un pipeline ML prêt pour production avec réglage automatique hyperparamètres, entraînement distribué et service d\'inférence scalable.',
    'projects.kubeflow.step1': 'Conception Pipeline : Architecture pipeline ML de bout en bout utilisant Kubeflow sur GKE',
    'projects.kubeflow.step2': 'Traitement Données : Implémentation préprocessing automatisé jeu de données et validation',
    'projects.kubeflow.step3': 'Entraînement Modèle : Configuration entraînement CNN distribué avec suivi automatique métriques',
    'projects.kubeflow.step4': 'Déploiement Modèle : Déploiement endpoints d\'inférence via KServe avec auto-scaling',
    'projects.kubeflow.step5': 'Surveillance & Validation : Établissement surveillance complète et tests A/B',
    'projects.kubeflow.input': 'Jeu de données images MNIST, configurations d\'entraînement, plages hyperparamètres, spécifications déploiement',
    'projects.kubeflow.output': 'Modèles CNN entraînés, endpoints d\'inférence, métriques de performance, pipelines déploiement automatisés, tableaux de bord surveillance',
    'projects.kubeflow.results': '95%+ précision sur jeu de données MNIST, versioning automatique modèle dans MinIO, inférence scalable avec KServe, workflow MLOps complet',

    'projects.apple_cv.title': 'Pipeline Vision par Ordinateur "Apple-Classifier"',
    'projects.apple_cv.short': 'Création pipeline vision robuste en appliquant techniques d\'augmentation de données aux jeux de données d\'images de pommes.',
    'projects.apple_cv.full': 'Une solution de vision par ordinateur complète pour classification de fruits avec capacités de déploiement de niveau industriel. Le projet implémente stratégies avancées d\'augmentation de données pour améliorer robustesse et généralisation du modèle. Fonctionnalités incluent optimisation automatique modèle, benchmarking performance et API d\'inférence temps réel. Le système supporte traitement par lot, prédictions temps réel et inclut gestion d\'erreurs et surveillance complètes. Déployé utilisant FastAPI pour inférence haute performance avec documentation et tests automatiques.',
    'projects.apple_cv.objective': 'Construire un pipeline vision par ordinateur robuste avec augmentation de données, optimisation modèle et déploiement d\'inférence temps réel.',
    'projects.apple_cv.step1': 'Préparation Données : Application techniques augmentation données (flip, rotation, zoom, luminosité) aux jeux de données pommes',
    'projects.apple_cv.step2': 'Développement Modèle : Entraînement et optimisation CNN avec EarlyStopping pour meilleure performance',
    'projects.apple_cv.step3': 'Évaluation Performance : Évaluation utilisant précision, F1-score, matrice de confusion et courbes d\'apprentissage',
    'projects.apple_cv.step4': 'Export Modèle : Export modèle performant en format ONNX pour compatibilité cross-plateforme',
    'projects.apple_cv.step5': 'Déploiement : Déploiement service d\'inférence temps réel utilisant FastAPI avec workflow CI/CD',
    'projects.apple_cv.input': 'Jeux de données images pommes, paramètres augmentation, configurations entraînement, spécifications déploiement',
    'projects.apple_cv.output': 'Modèles CNN entraînés, exports ONNX, service d\'inférence FastAPI, métriques performance, pipelines CI/CD',
    'projects.apple_cv.results': 'Classification fruits haute précision, pipeline augmentation données robuste, service inférence FastAPI temps réel, CI/CD automatisé avec Jenkins',

    'projects.hospital.title': 'Plateforme de Gestion Hospitalière',
    'projects.hospital.short': 'Solution en ligne pour soutenir personnel médical pendant pandémie COVID-19.',
    'projects.hospital.full': 'Une application web full-stack conçue pour répondre aux besoins critiques des établissements de santé pendant la pandémie COVID-19. La plateforme fournit outils complets pour gestion dossiers patients, planification personnel, allocation ressources et reporting temps réel. Fonctionnalités incluent gestion sécurisée données patients, planification automatisée, suivi inventaire et tableaux de bord administratifs avec analytics. Construit avec Laravel pour fonctionnalité backend robuste et Bootstrap pour design responsive.',
    'projects.hospital.objective': 'Développer un système complet de gestion hospitalière pour soutenir personnel médical pendant COVID-19 avec suivi patients et gestion ressources.',
    'projects.hospital.step1': 'Analyse Exigences : Collaboration avec professionnels santé pour définir besoins critiques',
    'projects.hospital.step2': 'Architecture Système : Conception architecture application web sécurisée et scalable',
    'projects.hospital.step3': 'Développement Backend : Construction backend Laravel robuste avec fonctionnalités gestion patients',
    'projects.hospital.step4': 'Design Frontend : Création interface Bootstrap responsive pour personnel médical',
    'projects.hospital.step5': 'Tests & Déploiement : Tests complets et déploiement pour usage sanitaire',
    'projects.hospital.input': 'Données patients, horaires personnel, ressources médicales, protocoles COVID-19, workflows santé',
    'projects.hospital.output': 'Système gestion patients, outils planification personnel, suivi ressources, tableaux de bord temps réel, outils reporting',
    'projects.hospital.results': 'Déploiement réussi dans établissements santé, coordination personnel améliorée pendant COVID-19, workflows gestion patients rationalisés',

    // Common labels in French
    'experience.key_achievements': 'Réalisations Clés',
    'education.academic_performance': 'Performance Académique',
    'education.academic_achievement': 'Réalisation Académique',
    'education.key_coursework': 'Cours Principaux',
    'education.achievements_highlights': 'Réalisations et Points Forts',
    'education.status.in_progress': 'En Cours',
    'education.status.completed': 'Terminé',

    // Theme
    'theme.toggle': 'Changer le thème',
    'language.toggle': 'Changer la langue'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language') as Language;
      if (saved) return saved;
      const browserLang = navigator.language.toLowerCase();
      return browserLang.startsWith('fr') ? 'fr' : 'en';
    }
    return 'en';
  });

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
