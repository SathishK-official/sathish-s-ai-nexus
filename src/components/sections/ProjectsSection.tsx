import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink, Github, Play } from 'lucide-react';
import { projectsData } from '@/config/portfolio';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  images: string[];
  videoUrl: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="projects" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            MY WORK
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">PROJECTS</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden cursor-pointer group hover:border-primary/50 transition-colors duration-200 reflection-hover"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-heading tracking-wider">
                  {project.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-secondary text-secondary-foreground text-xs font-body"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-heading tracking-wider mb-3">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground tracking-wide">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-secondary-foreground font-body leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-heading text-sm text-primary tracking-wider mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm font-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images */}
                {selectedProject.images.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-heading text-sm text-primary tracking-wider mb-3">
                      GALLERY
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.images.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`${selectedProject.title} screenshot ${i + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoUrl && (
                    <Button variant="volcanic" asChild>
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LIVE DEMO
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="hero" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        SOURCE CODE
                      </a>
                    </Button>
                  )}
                  {selectedProject.videoUrl && (
                    <Button variant="glass" asChild>
                      <a href={selectedProject.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        WATCH VIDEO
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
