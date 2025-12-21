import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Monitor, Wrench, BookOpen, Library, Calculator } from 'lucide-react';
import { skillsData } from '@/config/portfolio';


const categories = [
  { id: 'libsAndAlgorithms', label: 'AI & ML', icon: BookOpen, data: skillsData.libsAndAlgorithms },
  { id: 'tools', label: 'TOOLS', icon: Wrench, data: skillsData.tools },
  { id: 'libraries', label: 'LIBRARIES', icon: Library, data: skillsData.libraries },
  { id: 'languages', label: 'LANGUAGES', icon: Code, data: skillsData.languages },
  { id: 'applications', label: 'APPLICATIONS', icon: Monitor, data: skillsData.applications },
  { id: 'mathematics', label: 'MATHEMATICS', icon: Calculator, data: skillsData.mathematics },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('libsAndAlgorithms');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const activeData = categories.find((c) => c.id === activeCategory)?.data || [];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-volcanic-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            EXPERTISE
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">SKILLS</span>
          </h2>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-heading text-xs sm:text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'glass-card text-muted-foreground hover:text-primary hover:border-primary/50'
              }`}
            >
              <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="truncate">{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-4 sm:p-6 md:p-10 volcanic-glow"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {activeData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="relative"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-heading text-sm sm:text-base text-foreground tracking-wide">
                      {skill.name}
                    </span>
                    <span className="font-heading text-xs sm:text-sm text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSkill === skill.name || !hoveredSkill ? `${skill.level}%` : '0%' }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-volcanic-orange relative"
                    >
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-volcanic-orange blur-sm opacity-50" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
