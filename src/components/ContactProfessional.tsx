import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  MapPin, 
  Linkedin, 
  GitlabIcon as Gitlab, 
  Calendar, 
  Clock, 
  CheckCircle,
  User,
  Building,
  MessageSquare
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactProfessional = () => {
  const { t } = useLanguage();

  const handleQuickEmail = (type: string) => {
    let subject = "";
    let body = "";

    switch (type) {
      case "collaboration":
        subject = "Portfolio Contact - Collaboration Opportunity";
        body = `Hello Yessine,

I found your portfolio and I'm interested in discussing a potential collaboration opportunity.

[Please describe your project/opportunity here]

Best regards,
[Your Name]`;
        break;
      case "job":
        subject = "Portfolio Contact - Job Opportunity";
        body = `Hello Yessine,

I'm reaching out regarding a potential job opportunity that might interest you.

Position: [Job Title]
Company: [Company Name]
Location: [Location]

[Brief description of the role]

Best regards,
[Your Name]`;
        break;
      case "consultation":
        subject = "Portfolio Contact - Technical Consultation";
        body = `Hello Yessine,

I would like to inquire about your availability for a technical consultation.

Project Type: [Brief description]
Timeline: [Expected timeline]
Scope: [Project scope]

Best regards,
[Your Name]`;
        break;
    }

    const emailUrl = `mailto:yessine.zghal.1@ulaval.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information & Quick Actions */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  {t('contact.information')}
                </h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div 
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 dark:bg-slate-700/50 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer group touch-manipulation min-h-[60px]"
                    onClick={() => handleQuickEmail("collaboration")}
                  >
                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors flex-shrink-0">
                      <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{t('contact.email')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm break-all">yessine.zghal.1@ulaval.ca</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white/80 dark:bg-slate-700/50 rounded-xl min-h-[60px]">
                    <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{t('contact.location')}</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">Quebec City, QC, Canada</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:flex-1 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 h-12 sm:min-h-[48px] touch-manipulation rounded-xl"
                      onClick={() => window.open('https://www.linkedin.com/in/zghal-yessine/', '_blank')}
                    >
                      <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base truncate">{t('contact.linkedin')}</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:flex-1 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20 h-12 sm:min-h-[48px] touch-manipulation rounded-xl"
                      onClick={() => window.open('https://git.valeria.science/yezgh', '_blank')}
                    >
                      <Gitlab className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base truncate">{t('contact.gitlab')}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  {t('contact.quick_contact')}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-center sm:justify-start h-12 sm:h-auto sm:min-h-[48px] touch-manipulation rounded-xl font-medium"
                    onClick={() => handleQuickEmail("collaboration")}
                  >
                    <MessageSquare className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{t('contact.collaboration')}</span>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 justify-center sm:justify-start h-12 sm:h-auto sm:min-h-[48px] touch-manipulation rounded-xl font-medium"
                    onClick={() => handleQuickEmail("job")}
                  >
                    <Building className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{t('contact.job_opportunity')}</span>
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 justify-center sm:justify-start h-12 sm:h-auto sm:min-h-[48px] touch-manipulation rounded-xl font-medium"
                    onClick={() => handleQuickEmail("consultation")}
                  >
                    <User className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{t('contact.consultation')}</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Microsoft Bookings Scheduler */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {t('contact.schedule_meeting')}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  {t('contact.booking_description')}
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-14 sm:h-auto sm:min-h-[52px] touch-manipulation rounded-xl font-medium"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/Connecting@UlavalDTI.onmicrosoft.com/bookings/', '_blank')}
                  >
                    <Calendar className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{t('contact.book_meeting')}</span>
                  </Button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 sm:mt-6">
                    <div className="p-3 sm:p-4 bg-white/50 dark:bg-slate-700/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{t('contact.available_times')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line">
                        {t('contact.schedule_hours')}
                      </p>
                    </div>

                    <div className="p-3 sm:p-4 bg-white/50 dark:bg-slate-700/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                        <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{t('contact.meeting_types')}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {t('contact.consultation_30')}<br />
                        {t('contact.discussion_60')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div className="text-xs sm:text-sm text-blue-800 dark:text-blue-300 min-w-0">
                        <p className="font-semibold mb-2">{t('contact.booking_benefits')}</p>
                        <ul className="space-y-1">
                          <li>{t('contact.benefit_1')}</li>
                          <li>{t('contact.benefit_2')}</li>
                          <li>{t('contact.benefit_3')}</li>
                          <li>{t('contact.benefit_4')}</li>
                          <li>{t('contact.benefit_5')}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">{t('contact.availability_status')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {t('contact.availability_description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactProfessional;
