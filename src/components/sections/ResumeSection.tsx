import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award,
  User,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig, educationData, skillsData, projectsData, achievementsData } from '@/config/portfolio';

type TabId = 'summary' | 'education' | 'skills' | 'projects' | 'certifications';

interface Tab {
  id: TabId;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'summary', label: 'Summary', icon: <User className="w-4 h-4" /> },
  { id: 'education', label: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { id: 'projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
];

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('summary');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/SATHISH_K_resume.pdf';
    link.download = 'SATHISH_K_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/resume-pdf', '_blank');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'summary':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="font-heading text-xl text-foreground tracking-wide flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Professional Summary
              </h3>
              <p className="text-secondary-foreground font-body leading-relaxed text-base">
                {siteConfig.about.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {siteConfig.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground font-body">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 'education':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card p-6 border-l-4 border-l-primary">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h4 className="font-heading text-lg text-foreground tracking-wide">
                      {edu.degree}
                    </h4>
                    <span className="text-primary text-sm font-heading tracking-wider bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-primary/80 font-body text-sm mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground font-body text-sm">{edu.description}</p>
                  {edu.gpa && (
                    <div className="mt-3 inline-flex items-center gap-2 bg-volcanic-orange/10 px-3 py-1.5 rounded-lg">
                      <Award className="w-4 h-4 text-volcanic-orange" />
                      <span className="text-sm font-heading text-volcanic-orange tracking-wide">{edu.gpa}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'skills':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {Object.entries(skillsData).map(([category, skills], catIndex) => (
              <div key={category} className="space-y-3">
                <h4 className="font-heading text-sm text-primary tracking-widest uppercase">
                  {category === 'libsAndAlgorithms' ? 'AI & ML' : 
                   category === 'libraries' ? 'Data Libraries' :
                   category === 'applications' ? 'Applications' :
                   category === 'mathematics' ? 'Mathematics' : category}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (catIndex * 0.1) + (index * 0.05) }}
                      className="group relative overflow-hidden"
                    >
                      <div className="p-3 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-body text-foreground">{skill.name}</span>
                          <span className="text-xs font-heading text-primary">{skill.level}%</span>
                        </div>
                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: (catIndex * 0.1) + (index * 0.05) }}
                            className="h-full bg-gradient-to-r from-primary to-volcanic-orange rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        );

      case 'projects':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {projectsData.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading text-base text-foreground tracking-wide group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-xs font-body text-primary/70 bg-primary/10 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-body text-sm line-clamp-2 mb-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs font-body text-muted-foreground bg-muted/50 px-2 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'certifications':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {achievementsData
              .filter(a => a.category === 'Certification')
              .map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-volcanic-orange/5 border border-primary/20"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base text-foreground tracking-wide">{cert.title}</h4>
                    <p className="text-primary text-sm font-body">{cert.organization} • {cert.date}</p>
                    <p className="text-muted-foreground font-body text-sm mt-1">{cert.description}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="section-container relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-volcanic-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            MY RESUME
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">RESUME</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Resume Header Card */}
          <div className="glass-card volcanic-glow mb-4 sm:mb-6 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 via-volcanic-orange/10 to-primary/5 p-4 sm:p-6 md:p-8">
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Profile Info */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-volcanic-orange flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl text-foreground tracking-wide">
                      {siteConfig.name}
                    </h3>
                    <p className="text-primary font-heading text-xs sm:text-sm tracking-wider mt-1 line-clamp-2">
                      {siteConfig.tagline}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-3 text-muted-foreground text-xs sm:text-sm font-body">
                      <span className="flex items-center gap-1 sm:gap-1.5 truncate max-w-full sm:max-w-[200px]">
                        <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        <span className="truncate">{siteConfig.email}</span>
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        {siteConfig.phone}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                        {siteConfig.location.split(' - ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleViewResume}
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    VIEW PDF
                  </Button>
                  <Button variant="volcanic" size="sm" onClick={handleDownload} className="text-xs sm:text-sm">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    DOWNLOAD
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Resume Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Tab Navigation */}
            <div className="lg:col-span-1">
              <div className="glass-card p-3 sm:p-4 lg:sticky lg:top-24">
                <nav className="flex lg:flex-col gap-1.5 sm:gap-2 overflow-x-auto lg:overflow-x-visible no-scrollbar">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-heading text-xs sm:text-sm tracking-wider transition-all duration-300 whitespace-nowrap flex-shrink-0 lg:flex-shrink lg:w-full ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                          : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto hidden lg:block" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-3">
              <div className="glass-card p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[400px]">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
