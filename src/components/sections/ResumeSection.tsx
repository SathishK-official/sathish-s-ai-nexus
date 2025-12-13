import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Placeholder resume content - replace with actual PDF viewer when resume is provided
  const resumeContent = {
    sections: [
      {
        title: 'Summary',
        content:
          'Innovative AI/ML Engineer with 5+ years of experience developing cutting-edge machine learning solutions. Expertise in deep learning, NLP, and computer vision. Proven track record of deploying production-ready ML systems.',
      },
      {
        title: 'Experience',
        items: [
          {
            role: 'Senior ML Engineer',
            company: 'Tech Corp',
            period: '2022 - Present',
            description: 'Lead development of NLP models for enterprise applications.',
          },
          {
            role: 'ML Engineer',
            company: 'AI Startup',
            period: '2020 - 2022',
            description: 'Built computer vision pipelines for autonomous systems.',
          },
        ],
      },
      {
        title: 'Education',
        items: [
          {
            degree: 'M.S. in Artificial Intelligence',
            institution: 'Stanford University',
            period: '2020 - 2022',
          },
          {
            degree: 'B.Tech in Computer Science',
            institution: 'IIT',
            period: '2016 - 2020',
          },
        ],
      },
    ],
  };

  return (
    <section id="resume" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
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
          className="max-w-4xl mx-auto"
        >
          {/* Resume preview card */}
          <div className="glass-card volcanic-glow overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-volcanic-orange/20 p-6 md:p-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground tracking-wide">
                    SATHISH KRISHNAMOORTHI
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    AI/ML Engineer Resume
                  </p>
                </div>
              </div>
              <Button variant="volcanic">
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD
              </Button>
            </div>

            {/* Resume content - scrollable */}
            <div className="p-6 md:p-8 max-h-[600px] overflow-y-auto">
              <div className="space-y-8">
                {/* Summary */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-3 border-b border-border/50 pb-2">
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="text-secondary-foreground font-body leading-relaxed">
                    {resumeContent.sections[0].content}
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-4 border-b border-border/50 pb-2">
                    EXPERIENCE
                  </h4>
                  <div className="space-y-6">
                    {resumeContent.sections[1].items?.map((item, index) => (
                      <div key={index} className="relative pl-4 border-l-2 border-primary/30">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                        <h5 className="font-heading text-base text-foreground tracking-wide">
                          {item.role}
                        </h5>
                        <p className="text-primary text-sm font-body">
                          {item.company} | {item.period}
                        </p>
                        <p className="text-muted-foreground font-body text-sm mt-1">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-4 border-b border-border/50 pb-2">
                    EDUCATION
                  </h4>
                  <div className="space-y-4">
                    {resumeContent.sections[2].items?.map((item, index) => (
                      <div key={index} className="relative pl-4 border-l-2 border-primary/30">
                        <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                        <h5 className="font-heading text-base text-foreground tracking-wide">
                          {item.degree}
                        </h5>
                        <p className="text-muted-foreground text-sm font-body">
                          {item.institution} | {item.period}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scroll indicators */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
                    <ChevronUp className="w-4 h-4" />
                    <span>Scroll for more</span>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-muted-foreground text-sm font-body mt-6"
          >
            Upload your resume PDF to enable full document viewing and download
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
