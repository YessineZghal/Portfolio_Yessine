import { Award, BookOpen, Calendar, MapPin, ExternalLink, Users, Trophy, Eye, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import pcdImage from "@/assets/pcd.jpeg";
import tdsImage from "@/assets/tds.jpeg";

const PublicationsAwards = () => {
  const { t, language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);

  const getPublicationData = () => ({
    title: language === 'fr' ? t('publications.paper_title') : "A data-driven personalized approach to predict blood glucose levels in type-1 diabetes patients exercising in free-living conditions",
    authors: ["Anas Neumann", "Yessine Zghal", "Marzia Angela Cremona", "Adnene Hajji", "Michael Morin", "Monia Rekik"],
    journal: "Computers in Biology and Medicine",
    year: "2025",
    volume: "Volume 190",
    pages: "110015",
    status: language === 'fr' ? t('publications.status.published') : "Published",
    type: language === 'fr' ? "Article de Journal" : "Journal Article",
    venue: "Computers in Biology and Medicine",
    abstract: language === 'fr' ? t('publications.paper_abstract') : "This paper aims to assess whether a data-driven approach can accurately and safely predict blood glucose levels in patients with type 1 diabetes exercising in free-living conditions. Multiple machine learning (XGBoost, Random Forest) and deep learning (LSTM, CNN-LSTM, Dual-encoder with Attention layer) regression models were considered. The datasets used for training and testing the models were derived from the Type 1 Diabetes Exercise Initiative (T1DEXI). A total of 79 patients in T1DEXI met our inclusion criteria. For predictions made 30 min ahead, the median and mean RMSE values were 16.85 mg/dL and 17.74 mg/dL, respectively. Data-driven approaches can accurately predict blood glucose levels in type 1 diabetes patients exercising in free-living conditions.",
    keywords: language === 'fr' ? 
      ["Diabète de type 1", "Prédiction du glucose sanguin", "Intelligence artificielle", "Activité physique", "Exercice", "Conditions de vie libre"] :
      ["Type-1 diabetes", "Blood glucose prediction", "Artificial intelligence", "Physical activity", "Exercise", "Free-living conditions"],
    doi: "10.1016/j.compbiomed.2025.110015",
    url: "https://www.sciencedirect.com/science/article/pii/S001048252500366X",
    pdfPath: "/src/assets/1-s2.0-S001048252500366X-main.pdf",
    citationCount: 0,
    highlights: language === 'fr' ? [
      "L'IA peut prédire avec précision les niveaux de glucose chez les patients T1D en conditions de vie libre",
      "Une approche personnalisée est nécessaire pour prédire avec précision les niveaux de glucose dans le T1D",
      "Les modèles d'apprentissage profond affinés sont les plus performants, en moyenne",
      "Un RMSE moyen de 17,74 mg/dL est obtenu sur 79 patients",
      "La plupart des prédictions étaient cliniquement sûres"
    ] : [
      "AI can accurately predict BGLs of T1D patients in free-living conditions",
      "A personalized approach is required to accurately predict BGLs in T1D",
      "Fine-tuned deep learning models are the best performing, on average",
      "An average RMSE of 17.74 mg/dL is obtained over 79 patients",
      "Most of the predictions were clinically safe"
    ]
  });

  const getAwardsData = () => [
    {
      title: language === 'fr' ? t('publications.awards.pcd_title') : "PCD Challenge — 2nd Place",
      organization: language === 'fr' ? t('publications.awards.pcd_org') : "LessJam: traffic-light optimization",
      year: "2025",
      category: language === 'fr' ? t('publications.awards.pcd_category') : "Competition Award",
      description: language === 'fr' ? t('publications.awards.pcd_desc') : "Achieved second place in the PCD (Post-Conference Data) Challenge focusing on traffic-light optimization algorithms. The challenge involved developing efficient solutions for urban traffic management using machine learning and optimization techniques.",
      impact: language === 'fr' ? t('publications.awards.pcd_impact') : "Recognition for innovative traffic optimization algorithms",
      type: language === 'fr' ? t('publications.awards.pcd_type') : "Traffic Optimization Challenge",
      image: pcdImage
    },
    {
      title: language === 'fr' ? t('publications.awards.tunisia_title') : "Tunisia Digital Summit — 2nd Place",
      organization: language === 'fr' ? t('publications.awards.tunisia_org') : "Hack4Impact",
      year: "2025",
      category: language === 'fr' ? t('publications.awards.tunisia_category') : "Hackathon Award",
      description: language === 'fr' ? t('publications.awards.tunisia_desc') : "Secured second place at the Tunisia Digital Summit hackathon, competing in the Hack4Impact category. Developed innovative solutions addressing social and environmental challenges using digital technologies and AI-driven approaches.",
      impact: language === 'fr' ? t('publications.awards.tunisia_impact') : "Demonstrated leadership in social impact technology solutions",
      type: language === 'fr' ? t('publications.awards.tunisia_type') : "Social Impact Hackathon",
      image: tdsImage
    }
  ];

  const getConferencesData = () => [
    {
      name: t('publications.conferences.jopt_name'),
      fullName: language === 'fr' ? t('publications.conferences.jopt_full') : "Joint Conference on Optimization and Decision Science",
      role: language === 'fr' ? t('publications.conferences.jopt_role') : "Presenter",
      location: language === 'fr' ? "HEC Montréal, QC, Canada" : "HEC Montreal, QC, Canada",
      date: language === 'fr' ? "12-14 mai 2025" : "May 12-14, 2025",
      presentationDate: language === 'fr' ? "13 mai 2025 - 16h20 - 16h45" : "May 13, 2025 - 4:20 PM - 4:45 PM",
      type: language === 'fr' ? "Conférence Internationale" : "International Conference",
      session: language === 'fr' ? t('publications.conferences.jopt_session') : "AI-based approaches for healthcare management",
      chairPerson: "Monia Rekik",
      title: language === 'fr' ? t('publications.conferences.jopt_title') : "Blood Glucose Prediction in Pediatric Type 1 Diabetes During Exercise Using ResLSTM in Free-Living Conditions",
      description: language === 'fr' ? t('publications.conferences.jopt_desc') : "Presenting research on deep learning models for blood glucose prediction in pediatric T1D patients using ResLSTM architecture",
      status: language === 'fr' ? t('publications.status.completed') : "Completed",
      url: "https://symposia.cirrelt.ca/JOPT2025/en/schedule?slot_id=2601"
    },
    {
      name: t('publications.conferences.cors_name'),
      fullName: language === 'fr' ? t('publications.conferences.cors_full') : "Canadian Operational Research Society Annual Conference",
      role: language === 'fr' ? t('publications.conferences.cors_role') : "Presenter & Session Chair",
      location: language === 'fr' ? "Edmonton, AB, Canada" : "Edmonton, AB, Canada",
      date: "2025",
      type: language === 'fr' ? "Conférence Nationale" : "National Conference",
      title: language === 'fr' ? t('publications.conferences.cors_title') : "Blood Glucose Prediction in Pediatric Type 1 Diabetes During Exercise Using ResLSTM in Free-Living Conditions",
      description: language === 'fr' ? t('publications.conferences.cors_desc') : "Presented research on pediatric T1D blood glucose prediction and served as session chair at the 66th annual CORS conference, leading discussions on operational research methodologies and applications",
      status: language === 'fr' ? t('publications.status.completed') : "Completed",
      url: "https://www.cors.ca/content/cors-annual-conferences"
    }
  ];

  const publications = [getPublicationData()];
  const awards = getAwardsData();
  const conferences = getConferencesData();

  // Image Modal Component
  const ImageModal = ({ image, title, onClose }) => (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        <div className="p-4">
          <img 
            src={image} 
            alt={`${title} certificate`}
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section id="publications-awards" className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('publications.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('publications.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {/* Publications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('publications.research_publications')}
              </h3>
            </div>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {pub.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                          {pub.journal} {pub.volume && `• ${pub.volume}`} {pub.pages && `• ${pub.pages}`}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {pub.authors.join(", ")} • {pub.year}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          pub.status === 'Published' 
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                            : pub.status === 'Under Review'
                            ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                        }`}>
                          {pub.status}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {t('publications.citations')}: {pub.citationCount}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pub.abstract}
                    </p>
                    
                    {pub.highlights && (
                      <div className="space-y-2">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          {language === 'fr' ? 'Points Clés' : 'Key Highlights'}
                        </h5>
                        <ul className="space-y-1">
                          {pub.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                              <span className="text-green-500 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {pub.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-2 text-sm">
                        <ExternalLink className="h-4 w-4 text-slate-500" />
                        <span className="text-slate-500 dark:text-slate-400">DOI: {pub.doi}</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {pub.pdfPath && (
                          <a
                            href={pub.pdfPath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200"
                          >
                            <BookOpen className="h-4 w-4" />
                            {t('publications.download_pdf')}
                          </a>
                        )}
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {t('publications.view_online')}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-8 w-8 text-amber-600" />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('publications.awards_recognition')}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-200 dark:border-amber-800"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        {award.title}
                      </h4>
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        {award.year}
                      </span>
                    </div>
                    
                    <p className="text-amber-700 dark:text-amber-300 font-semibold">
                      {award.organization}
                    </p>
                    
                    <div className="flex gap-2">
                      <span className="inline-block px-3 py-1 bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium">
                        {award.category}
                      </span>
                      <span className="inline-block px-3 py-1 bg-orange-200 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium">
                        {award.type}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {award.description}
                    </p>
                    
                    {/* View Certificate Button */}
                    {award.image && (
                      <button
                        onClick={() => setSelectedImage({ image: award.image, title: award.title })}
                        className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors duration-200"
                      >
                        <Eye className="h-4 w-4" />
                        {language === 'fr' ? 'Voir le Certificat' : 'View Certificate'}
                      </button>
                    )}
                    
                    <div className="pt-2 border-t border-amber-200 dark:border-amber-800">
                      <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">
                        {t('publications.impact')}: {award.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conferences Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-8 w-8 text-green-600" />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('publications.conferences_presentations')}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-1 gap-6">
              {conferences.map((conf, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                          {conf.name}
                        </h4>
                        {conf.fullName && (
                          <p className="text-green-700 dark:text-green-300 font-medium text-sm">
                            {conf.fullName}
                          </p>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg text-sm font-medium">
                        {conf.type}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <p className="text-green-700 dark:text-green-300 font-semibold">
                          {t('publications.role')}: {conf.role}
                        </p>
                        
                        {conf.title && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {t('publications.presentation_title')}:
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                              "{conf.title}"
                            </p>
                          </div>
                        )}
                        
                        {conf.session && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                              {t('publications.session')}:
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                              {conf.session}
                            </p>
                          </div>
                        )}
                        
                        {conf.chairPerson && (
                          <p className="text-slate-600 dark:text-slate-400 text-sm">
                            <span className="font-medium">{t('publications.chaired_by')}:</span> {conf.chairPerson}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <Calendar className="h-4 w-4" />
                          <span>{conf.date}</span>
                        </div>
                        
                        {conf.presentationDate && (
                          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">
                              {t('publications.presentation')}: {conf.presentationDate}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <MapPin className="h-4 w-4" />
                          <span>{conf.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {conf.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-green-200 dark:border-green-700">
                      <span className={`inline-block px-3 py-1 rounded-lg text-sm font-medium ${
                        conf.status === 'Completed' || conf.status === 'Terminé'
                          ? 'bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-200'
                          : conf.status === 'Scheduled' || conf.status === 'Planifié'
                          ? 'bg-blue-200 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200'
                          : 'bg-yellow-200 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200'
                      }`}>
                        {t('publications.status')}: {conf.status}
                      </span>
                      
                      {conf.url && (
                        <a
                          href={conf.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {t('publications.view_conference')}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.image}
          title={selectedImage.title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default PublicationsAwards;
