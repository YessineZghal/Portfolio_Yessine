import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-500",
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      )}
    >
      <Button
        onClick={scrollToTop}
        size="lg"
        className="glass-card hover:shadow-neural w-14 h-14 rounded-full p-0 group hover:scale-110 transition-all duration-300 border-border/30"
      >
        <ChevronUp className="h-6 w-6 text-primary group-hover:text-tech-cyan transition-colors duration-300" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
