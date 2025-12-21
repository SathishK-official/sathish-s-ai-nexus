import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/portfolio';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: siteConfig.social.github, color: 'hover:text-foreground' },
  { name: 'LinkedIn', icon: Linkedin, url: siteConfig.social.linkedin, color: 'hover:text-[#0A66C2]' },
  { name: 'Gmail', icon: Mail, url: siteConfig.social.gmail, color: 'hover:text-[#EA4335]' },
  { name: 'Instagram', icon: Instagram, url: siteConfig.social.instagram, color: 'hover:text-[#E4405F]' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent!',
      description: 'Thank you for reaching out. I will get back to you soon.',
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-volcanic-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            <span className="gradient-text">CONTACT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 volcanic-glow">
              <h3 className="font-heading text-xl sm:text-2xl text-foreground tracking-wide mb-4 sm:mb-6">
                SEND ME A MESSAGE
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 font-body text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 font-body text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary h-10 sm:h-12 font-body text-sm sm:text-base"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none font-body text-sm sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  variant="volcanic"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      SENDING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 sm:gap-6"
          >
            <div className="glass-card p-4 sm:p-6 md:p-8 volcanic-glow">
              <h3 className="font-heading text-xl sm:text-2xl text-foreground tracking-wide mb-4 sm:mb-6">
                CONTACT INFO
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-xs sm:text-sm font-body">Email</p>
                    <p className="text-foreground font-body text-sm sm:text-base truncate">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs sm:text-sm font-body">Location</p>
                    <p className="text-foreground font-body text-sm sm:text-base">Available Worldwide</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs sm:text-sm font-body">Phone</p>
                    <p className="text-foreground font-body text-sm sm:text-base">Available on request</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-4 sm:p-6 md:p-8 volcanic-glow">
              <h3 className="font-heading text-lg sm:text-xl text-foreground tracking-wide mb-4 sm:mb-6">
                CONNECT WITH ME
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/50 ${social.color}`}
                    aria-label={`Visit ${social.name}`}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-20 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground font-body">
            © {new Date().getFullYear()} <span className="text-primary">{siteConfig.name}</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
