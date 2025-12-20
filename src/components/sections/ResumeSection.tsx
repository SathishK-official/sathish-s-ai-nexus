import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileText, Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/portfolio';

const ResumeSection = () => {
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
            <div className="bg-gradient-to-r from-primary/20 to-volcanic-orange/20 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/30 flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground tracking-wide">
                    {siteConfig.name}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    AI Engineer | LLM & RAG Specialist
                  </p>
                </div>
              </div>
              <Button variant="volcanic" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD PDF
              </Button>
            </div>

            {/* Resume content - scrollable */}
            <div className="p-6 md:p-8 max-h-[600px] overflow-y-auto">
              <div className="space-y-8">
                {/* Summary */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-3 border-b border-border/50 pb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    PROFESSIONAL SUMMARY
                  </h4>
                  <p className="text-secondary-foreground font-body leading-relaxed">
                    AI Engineer specializing in LLM applications and RAG systems. Built 5 production-ready AI projects serving 100+ users with 90%+ accuracy. Proficient in Python, LangChain, OpenAI APIs, and vector databases. Strong expertise in prompt engineering, NLP, and deploying scalable ML applications.
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    EDUCATION
                  </h4>
                  <div className="relative pl-4 border-l-2 border-primary/30">
                    <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <h5 className="font-heading text-base text-foreground tracking-wide">
                      B.Tech in Artificial Intelligence & Data Science
                    </h5>
                    <p className="text-primary text-sm font-body">
                      Sir Issac Newton College of Engineering and Technology | 2022 - 2026
                    </p>
                    <p className="text-muted-foreground font-body text-sm mt-1">
                      CGPA: 7.5/10 | Coursework: Machine Learning, Deep Learning, NLP, RAG Systems, Linear Algebra, Statistics
                    </p>
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    TECHNICAL SKILLS
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-body">
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">CORE PYTHON:</span>
                      <p className="text-muted-foreground">Functions, OOP, Data Structures</p>
                    </div>
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">LIBRARIES:</span>
                      <p className="text-muted-foreground">NumPy, Pandas, Matplotlib, Seaborn, scikit-learn</p>
                    </div>
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">DEEP LEARNING:</span>
                      <p className="text-muted-foreground">TensorFlow, PyTorch, CNNs, Transfer Learning</p>
                    </div>
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">MODERN AI:</span>
                      <p className="text-muted-foreground">LLMs, Prompt Engineering, Hugging Face, LangChain</p>
                    </div>
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">TOOLS:</span>
                      <p className="text-muted-foreground">Git, GitHub, Jupyter, Flask, Docker, SQL</p>
                    </div>
                    <div>
                      <span className="text-foreground font-heading text-xs tracking-wider">MATH:</span>
                      <p className="text-muted-foreground">Linear Algebra, Statistics, Probability</p>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-4 border-b border-border/50 pb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    PRODUCTION AI PROJECTS
                  </h4>
                  <div className="space-y-4">
                    <div className="relative pl-4 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                      <h5 className="font-heading text-base text-foreground tracking-wide">
                        DocuMind AI - RAG Document Intelligence
                      </h5>
                      <p className="text-primary text-sm font-body">LangChain, ChromaDB, OpenAI | 2025</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        90%+ accuracy, 80% reduced search time, serving 100+ users
                      </p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                      <h5 className="font-heading text-base text-foreground tracking-wide">
                        CareerGPT - AI Career Platform
                      </h5>
                      <p className="text-primary text-sm font-body">GPT-4, spaCy, NLP | 2025</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        95%+ resume parsing accuracy, 88% job matching fit accuracy
                      </p>
                    </div>
                    <div className="relative pl-4 border-l-2 border-primary/30">
                      <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                      <h5 className="font-heading text-base text-foreground tracking-wide">
                        ATS Resume Analyzer
                      </h5>
                      <p className="text-primary text-sm font-body">spaCy, GPT-3.5, TF-IDF | 2024</p>
                      <p className="text-muted-foreground font-body text-sm mt-1">
                        96% parsing accuracy, Featured on LinkedIn
                      </p>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h4 className="font-heading text-lg text-primary tracking-wider mb-3 border-b border-border/50 pb-2">
                    CERTIFICATIONS
                  </h4>
                  <ul className="text-muted-foreground font-body text-sm space-y-1">
                    <li>• Machine Learning Specialization - Coursera</li>
                    <li>• Deep Learning - Great Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-muted-foreground text-sm font-body mt-6 space-y-1"
          >
            <p>{siteConfig.email} | {siteConfig.phone}</p>
            <p>{siteConfig.location}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
