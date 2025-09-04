import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 5;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-secondary rounded-full opacity-15 blur-3xl animate-float"></div>
      
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-block relative">
            <div className="text-6xl font-black text-gradient-neural glow-text animate-pulse">YZ</div>
            <div className="absolute inset-0 text-6xl font-black text-gradient-neural animate-ping opacity-20">YZ</div>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-tech-blue rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-tech-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-tech-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="glass-card h-2 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-muted-foreground font-medium">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
