import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { siteConfig } from '@/config/portfolio';
import profileImage from '@/assets/profile-image.jpg';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-volcanic-orange/5 rounded-full blur-3xl" />

      <div ref={ref} className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-heading text-sm tracking-widest mb-4">
            GET TO KNOW ME
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-heading text-lg tracking-wider mb-4">
              {siteConfig.about.greeting}
            </p>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {siteConfig.name}
            </h3>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-xl md:text-2xl text-primary tracking-wider">
                {siteConfig.role}
              </span>
              <span className="font-heading text-xl md:text-2xl text-foreground tracking-wider">
                <TypeAnimation
                  sequence={siteConfig.roles.flatMap((role) => [role, 2000])}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              {siteConfig.about.description}
            </p>
            <ul className="space-y-3">
              {siteConfig.about.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-secondary-foreground font-body"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Disco border animation container */}
              <div className="disco-border rounded-2xl p-1">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-card">
                  <img
                    src={profileImage}
                    alt="SATHISH KRISHNAMOORTHI - AI/ML Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
