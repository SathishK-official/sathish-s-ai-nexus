import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import ContactSection from '@/components/sections/ContactSection';
import FloatingShapes from '@/components/FloatingShapes';
import ScrollToTop from '@/components/ScrollToTop';
import PageTransition from '@/components/PageTransition';
import { siteConfig } from '@/config/portfolio';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navigation.map((nav) => nav.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleUnlock = () => {
    setIsLocked(false);
    setTimeout(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <FloatingShapes />
      <Header activeSection={activeSection} isLocked={isLocked} />
      <ScrollToTop />
      
      <main>
        <HeroSection onUnlock={handleUnlock} />
        
        {!isLocked && (
          <>
            <PageTransition delay={0.1}>
              <AboutSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <EducationSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <ProjectsSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <ExperienceSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <SkillsSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <AchievementsSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <ResumeSection />
            </PageTransition>
            <PageTransition delay={0.1}>
              <ContactSection />
            </PageTransition>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
