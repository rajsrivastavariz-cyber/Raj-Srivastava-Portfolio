import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section-block contact-block">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let’s build data-driven opportunities.</h2>
        </div>

        <div className="contact-actions">
          <a
            className="btn btn-primary"
            href={`mailto:${personal.email}?subject=${encodeURIComponent('Portfolio inquiry')}&body=${encodeURIComponent('Hello Raj,\n\nI came across your portfolio and would like to connect with you.\n\nBest regards,')}`}
          >
            Email Me
          </a>
          <a className="btn btn-secondary" href={personal.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
