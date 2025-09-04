import { useEffect } from 'react';

export function SmoothScrollManager() {
  useEffect(() => {
    // Enhanced smooth scrolling with performance optimization
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(href.slice(1));
        
        if (element) {
          // Use modern scrollIntoView with optimal settings
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
          
          // Update URL without triggering navigation
          window.history.pushState(null, '', href);
        }
      }
    };

    // Use passive listeners for better performance
    document.addEventListener('click', handleClick, { passive: false });
    
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    // Optimize scroll performance with passive listeners
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Any scroll-based animations can be handled here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
