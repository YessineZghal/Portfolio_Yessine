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
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information & Quick Actions */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900/20 dark:to-slate-800 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('contact.information')}
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div 
                    className="flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-700/50 rounded-xl hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 cursor-pointer group"
                    onClick={() => handleQuickEmail("collaboration")}
                  >
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{t('contact.email')}</h4>
                      <p className="text-slate-600 dark:text-slate-400">yessine.zghal.1@ulaval.ca</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-white/80 dark:bg-slate-700/50 rounded-xl">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{t('contact.location')}</h4>
                      <p className="text-slate-600 dark:text-slate-400">Quebec City, QC, Canada</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      onClick={() => window.open('https://www.linkedin.com/in/zghal-yessine/', '_blank')}
                    >
                      <Linkedin className="mr-2 h-5 w-5 text-blue-600" />
                      {t('contact.linkedin')}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="flex-1 border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                      onClick={() => window.open('https://git.valeria.science/yezgh', '_blank')}
                    >
                      <Gitlab className="mr-2 h-5 w-5 text-orange-600" />
                      {t('contact.gitlab')}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Options */}
            <Card className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {t('contact.quick_contact')}
                </h3>
                
                <div className="grid gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white justify-start"
                    onClick={() => handleQuickEmail("collaboration")}
                  >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    {t('contact.collaboration')}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 justify-start"
                    onClick={() => handleQuickEmail("job")}
                  >
                    <Building className="mr-3 h-5 w-5" />
                    {t('contact.job_opportunity')}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 justify-start"
                    onClick={() => handleQuickEmail("consultation")}
                  >
                    <User className="mr-3 h-5 w-5" />
                    {t('contact.consultation')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Microsoft Bookings Scheduler */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('contact.schedule_meeting')}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {t('contact.booking_description')}
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                    onClick={() => window.open('https://outlook.office365.com/owa/calendar/Connecting@UlavalDTI.onmicrosoft.com/bookings/', '_blank')}
                  >
                    <Calendar className="mr-3 h-6 w-6" />
                    {t('contact.book_meeting')}
                  </Button>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 bg-white/50 dark:bg-slate-700/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-slate-900 dark:text-white">{t('contact.available_times')}</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-line">
                        {t('contact.schedule_hours')}
                      </p>
                    </div>

                    <div className="p-4 bg-white/50 dark:bg-slate-700/30 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <span className="font-semibold text-slate-900 dark:text-white">{t('contact.meeting_types')}</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('contact.consultation_30')}<br />
                        {t('contact.discussion_60')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800 dark:text-blue-300">
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
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-slate-900 dark:text-white">{t('contact.availability_status')}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
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
