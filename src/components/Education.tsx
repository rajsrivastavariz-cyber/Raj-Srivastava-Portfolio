import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-block">
      <div className="section-heading-row">
        <p className="section-kicker">Education</p>
        <h2>Academic foundation</h2>
      </div>

      <div className="education-grid">
        {education.map((item, index) => (
          <motion.article
            key={`${item.degree}-${item.institution}`}
            className="education-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className="education-status">{item.status}</p>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.period}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Education;
