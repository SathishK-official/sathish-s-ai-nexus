import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Building } from 'lucide-react';
import { experienceData } from '@/config/portfolio';

const ExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="experience" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-volcanic-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            CAREER PATH
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-volcanic-orange to-primary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 -translate-y-1 lava-pulse z-10" />

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.03, 
                      rotateX: -2, 
                      rotateY: 3,
                      translateY: -8 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="glass-card p-6 md:p-8 reflection-hover overflow-hidden volcanic-glow"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </div>
                    </div>

                    <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2 tracking-wide">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-4 h-4 text-primary" />
                      <p className="text-primary font-heading text-sm tracking-wider">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-xs tracking-wider">
                      {exp.type}
                    </span>
                  </motion.div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
