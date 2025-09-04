import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.education"), href: "#education" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  }, [language, setLanguage]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/20 shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight">
              Y<span className="text-primary">Z</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/70 hover:text-foreground transition-colors duration-200 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="h-9 px-3 hover:bg-muted/50 transition-colors duration-200"
              title={t("language.toggle")}
            >
              <Globe className="h-4 w-4 mr-1" />
              <span className="text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="h-9 w-9 p-0 hover:bg-muted/50 transition-colors duration-200"
              title={t("theme.toggle")}
            >
              <div className="relative w-4 h-4">
                <Sun className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-300",
                  theme === 'light' ? "rotate-0 scale-100" : "rotate-90 scale-0"
                )} />
                <Moon className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-300",
                  theme === 'dark' ? "rotate-0 scale-100" : "-rotate-90 scale-0"
                )} />
              </div>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9 p-0 hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="relative w-6 h-6">
                  <Menu className={cn(
                    "h-5 w-5 absolute inset-0.5 transition-all duration-200",
                    isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                  )} />
                  <X className={cn(
                    "h-5 w-5 absolute inset-0.5 transition-all duration-200",
                    isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                  )} />
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 transition-all duration-300 origin-top",
          isOpen 
            ? "scale-y-100 opacity-100 visible" 
            : "scale-y-0 opacity-0 invisible"
        )}>
          <div className="bg-background/95 backdrop-blur-xl border border-border/20 rounded-lg mx-4 my-2 shadow-lg">
            <div className="p-4 space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-md transition-all duration-200 font-medium"
                  style={{ 
                    transitionDelay: isOpen ? `${index * 30}ms` : '0ms' 
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;