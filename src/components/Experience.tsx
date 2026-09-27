import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-block">
      <div className="section-heading-row">
        <p className="section-kicker">Experience</p>
        <h2>Commercial and research exposure</h2>
      </div>

      <div className="timeline-list">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="timeline-item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <div className="timeline-topline">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <ul>
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
