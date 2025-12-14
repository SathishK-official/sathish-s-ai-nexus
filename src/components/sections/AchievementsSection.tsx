import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Award, Calendar, Building } from 'lucide-react';
import { achievementsData } from '@/config/portfolio';

interface Achievement {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  date: string;
  organization: string;
  images: string[];
}

const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="achievements" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            RECOGNITION
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">ACHIEVEMENTS</span>
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedAchievement(achievement)}
              className="glass-card overflow-hidden cursor-pointer group hover:border-primary/50 transition-colors duration-200 reflection-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={achievement.thumbnail}
                  alt={achievement.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-heading tracking-wider">
                  {achievement.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-sm font-body">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {achievement.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    {achievement.organization}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAchievement(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative h-64">
                <img
                  src={selectedAchievement.thumbnail}
                  alt={selectedAchievement.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-heading tracking-wider mb-3">
                    {selectedAchievement.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                    {selectedAchievement.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="flex items-center gap-2 text-primary font-body">
                    <Calendar className="w-4 h-4" />
                    {selectedAchievement.date}
                  </span>
                  <span className="flex items-center gap-2 text-muted-foreground font-body">
                    <Building className="w-4 h-4" />
                    {selectedAchievement.organization}
                  </span>
                </div>

                <p className="text-secondary-foreground font-body leading-relaxed mb-6">
                  {selectedAchievement.description}
                </p>

                {/* Images */}
                {selectedAchievement.images.length > 0 && (
                  <div>
                    <h4 className="font-heading text-sm text-primary tracking-wider mb-3">
                      GALLERY
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedAchievement.images.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`${selectedAchievement.title} image ${i + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AchievementsSection;
