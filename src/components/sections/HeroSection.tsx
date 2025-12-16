import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/portfolio';
import { useRef } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

interface HeroSectionProps {
  onUnlock: () => void;
}

const HeroSection = ({ onUnlock }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `linear-gradient(to bottom, hsl(0 0% 3% / 0.2), hsl(0 0% 3% / 0.45)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* Static background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest">
            WELCOME TO MY UNIVERSE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide mb-4 text-foreground"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary tracking-wider">
            {siteConfig.role}
          </span>
          <span className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground tracking-wider">
            <TypeAnimation
              sequence={siteConfig.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-foreground"
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-muted-foreground/70 text-base md:text-lg max-w-4xl mx-auto mb-8 font-body italic leading-relaxed text-center"
        >
          More than a profile — this is proof of growth through building. These projects reflect my technical strengths,
          <br className="hidden md:block" />
          problem-solving mindset, and the experience gained from designing, testing, and refining AI-driven solutions
          <br className="hidden md:block" />
          into functional real-world applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          "{siteConfig.quote}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="volcanic"
            size="xl"
            onClick={onUnlock}
            className="group"
          >
            <ChevronDown className="mr-2 group-hover:animate-bounce" />
            SHOWUP
          </Button>
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToProjects}
          >
            <FolderOpen className="mr-2" />
            PROJECTS
          </Button>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
