import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-block">
      <div className="section-heading-row">
        <p className="section-kicker">Certifications</p>
        <h2>Learning and capability building</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((item, index) => (
          <motion.article
            key={`${item.name}-${item.year ?? 'na'}`}
            className="cert-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
          >
            <div className="cert-meta">
              <span>{item.year ?? 'Ongoing'}</span>
              <span>{item.id ?? 'Credential'}</span>
            </div>
            <h3>{item.name}</h3>
            {item.provider ? <p>{item.provider}</p> : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
