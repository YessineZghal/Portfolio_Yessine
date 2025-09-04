import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GitCommit, 
  Calendar, 
  Code2, 
  GitBranch,
  Activity,
  Zap
} from "lucide-react";

const CodingActivity = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Example activity data - you can update these with real stats
  const activityStats = {
    week: {
      commits: 47,
      projects: 8,
      languages: ["Python", "TypeScript", "SQL"],
      mostActiveDay: "Wednesday"
    },
    month: {
      commits: 189,
      projects: 12,
      languages: ["Python", "TypeScript", "SQL", "R", "JavaScript"],
      mostActiveDay: "Tuesday"
    },
    year: {
      commits: 2156,
      projects: 34,
      languages: ["Python", "TypeScript", "SQL", "R", "JavaScript", "Java"],
      mostActiveDay: "Tuesday"
    }
  };

  const recentActivity = [
    {
      date: "Today",
      commits: 8,
      projects: ["Medical AI Dashboard", "Data Pipeline"],
      type: "feature"
    },
    {
      date: "Yesterday",
      commits: 12,
      projects: ["NLP Research", "API Development"],
      type: "bugfix"
    },
    {
      date: "2 days ago",
      commits: 6,
      projects: ["Fraud Detection", "Analytics System"],
      type: "feature"
    },
    {
      date: "3 days ago",
      commits: 15,
      projects: ["ML Pipeline", "Database Optimization"],
      type: "enhancement"
    }
  ];

  const currentStats = activityStats[selectedPeriod as keyof typeof activityStats];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "bugfix": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "enhancement": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Activity className="h-8 w-8 text-green-600" />
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
              Coding Activity
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Live development activity and contribution statistics
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white dark:bg-slate-700 rounded-lg p-1 shadow-lg">
            {["week", "month", "year"].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 capitalize ${
                  selectedPeriod === period
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Stats Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Activity Stats
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GitCommit className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700 dark:text-slate-300">Commits</span>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      {currentStats.commits}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GitBranch className="h-5 w-5 text-blue-600" />
                      <span className="text-slate-700 dark:text-slate-300">Projects</span>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      {currentStats.projects}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-purple-600" />
                      <span className="text-slate-700 dark:text-slate-300">Most Active</span>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                      {currentStats.mostActiveDay}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Languages Used
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {currentStats.languages.map((lang, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600"
                    >
                      <Code2 className="mr-1 h-3 w-3" />
                      {lang}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                  Recent Activity
                </h3>
                
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Zap className="h-4 w-4 text-blue-600" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {activity.commits} commits
                            </span>
                            <Badge className={getTypeColor(activity.type)}>
                              {activity.type}
                            </Badge>
                          </div>
                          
                          <div className="text-sm text-slate-600 dark:text-slate-400">
                            {activity.projects.join(", ")}
                          </div>
                        </div>
                        
                        <div className="text-sm text-slate-500 dark:text-slate-500">
                          {activity.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <button
                    onClick={() => window.open('https://git.valeria.science/yezgh', '_blank')}
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  >
                    <GitBranch className="h-4 w-4" />
                    View Full GitLab Profile
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingActivity;
