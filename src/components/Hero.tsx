import { motion, useReducedMotion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { personal } = portfolioData;

  return (
    <section className="hero-section" aria-label="Profile introduction">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            className="eyebrow premium-eyebrow"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
          >
            BUSINESS ANALYTICS · DATA &amp; BUSINESS INTELLIGENCE
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
          >
            {personal.name}
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.7 }}
          >
            {personal.title}
          </motion.p>

          <motion.p
            className="hero-description"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.7 }}
          >
            {personal.summary}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <a className="btn btn-primary" href="#projects">
              Explore My Work
            </a>
            <a
              className="btn btn-secondary"
              href="/resume/Raj-Srivastava-Resume.pdf"
              download="Raj-Srivastava-Resume.pdf"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="profile-visual-wrap"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 28 }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.01 }}
        >
          <div className="profile-frame">
            <img
              src="/images/profile.png"
              alt="Raj Srivastava - Business Analytics Professional"
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
