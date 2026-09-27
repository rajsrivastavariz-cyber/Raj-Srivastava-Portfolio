import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section-block">
      <div className="section-heading-row">
        <p className="section-kicker">Skills</p>
        <h2>Core capability stack</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group, groupIndex) => (
          <motion.article
            key={group.category}
            className="skill-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.08 }}
          >
            <h3>{group.category}</h3>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
