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
    'projects.research.title': 'Multi-Modal Deep Learning for Medical Diagnosis',
    'projects.research.short': 'Advanced research project combining computer vision and NLP for automated medical report generation and diagnosis assistance',
    'projects.research.full': 'Led a comprehensive research initiative at Université Laval focusing on multi-modal deep learning approaches for medical diagnosis. The project integrates medical imaging analysis with clinical text processing to provide automated diagnostic assistance. Collaborated with medical professionals and researchers to develop a system that can analyze medical images while generating contextual reports, significantly improving diagnostic accuracy and reducing analysis time.',
    'projects.research.objective': 'Développer un système de diagnostic médical automatisé utilisant l\'apprentissage profond multi-modal pour analyser simultanément les images médicales et générer des rapports cliniques contextuels, améliorant la précision diagnostique de 25%.',
    'projects.research.input': 'Images médicales (radiographies, IRM, CT scans), rapports cliniques historiques, données de patients anonymisées',
    'projects.research.output': 'Rapports de diagnostic automatisés, scores de confiance, visualisations des régions d\'intérêt, recommandations cliniques',
    'projects.research.results': 'Amélioration de 25% de la précision diagnostique, réduction de 40% du temps d\'analyse, publication en cours dans une revue médicale de premier plan',
    
    // Project 2 - Industry Project  
    'projects.fintech.title': 'Real-Time Fraud Detection System for Financial Transactions',
    'projects.fintech.short': 'Scalable machine learning system for detecting fraudulent transactions in real-time using ensemble methods and streaming analytics',
    'projects.fintech.full': 'Développement d\'un système de détection de fraude en temps réel pour une institution financière majeure. Le projet implique la construction d\'un pipeline ML scalable capable de traiter des millions de transactions par jour tout en maintenant une latence inférieure à 100ms. Utilisation d\'algorithmes d\'ensemble avancés et d\'apprentissage en ligne pour s\'adapter aux nouveaux patterns de fraude.',
    'projects.fintech.objective': 'Construire un système de détection de fraude robuste et scalable capable de traiter 10M+ transactions/jour avec 99.5% de précision et moins de 0.1% de faux positifs.',
    'projects.fintech.input': 'Flux de transactions en temps réel, historiques transactionnels, données comportementales des utilisateurs, indicateurs géographiques',
    'projects.fintech.output': 'Scores de risque en temps réel, alertes de fraude automatisées, tableaux de bord de monitoring, rapports d\'analyse des tendances',
    'projects.fintech.results': 'Réduction de 60% des pertes dues à la fraude, amélioration de 35% de la précision de détection, économies estimées à 2.5M$ annuellement',
    
    // Project 3 - AI Research
    'projects.nlp.title': 'Multilingual NLP Pipeline for Canadian Government Documents',
    'projects.nlp.short': 'Advanced NLP system for processing and analyzing government documents in English and French with automated translation and summarization',
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
