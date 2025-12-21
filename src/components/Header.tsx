import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
  isLocked: boolean;
}

const Header = ({ activeSection, isLocked }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const visibleNavItems = isLocked 
    ? siteConfig.navigation.filter(item => item.id === 'home')
    : siteConfig.navigation;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary to-volcanic-orange flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-display text-lg sm:text-xl">SK</span>
          </div>
          <span className="hidden sm:block font-heading text-base sm:text-lg tracking-wider text-foreground">
            SATHISH<span className="text-primary">.</span>
          </span>
        </motion.div>

        {/* Desktop Navigation - centered when locked */}
        <div className={cn(
          "hidden lg:flex items-center gap-1 xl:gap-2 p-1 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30",
          isLocked && "absolute left-1/2 -translate-x-1/2"
        )}>
          {visibleNavItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'px-3 xl:px-4 py-2 font-heading text-xs xl:text-sm tracking-wider rounded-lg transition-all duration-300 reflection-hover whitespace-nowrap',
                activeSection === item.id
                  ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
              )}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Empty div to balance flex when locked on desktop */}
        {isLocked && <div className="hidden lg:block w-8 sm:w-10" />}
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {visibleNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'px-4 py-3 font-heading text-sm tracking-wider text-left rounded-lg transition-all duration-300 reflection-hover',
                    activeSection === item.id
                      ? 'text-primary-foreground bg-primary shadow-lg shadow-primary/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
