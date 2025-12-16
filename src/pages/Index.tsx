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
      
      <main>
        <HeroSection onUnlock={handleUnlock} />
        
        {!isLocked && (
          <>
            <AboutSection />
            <EducationSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            <AchievementsSection />
            <ResumeSection />
            <ContactSection />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
