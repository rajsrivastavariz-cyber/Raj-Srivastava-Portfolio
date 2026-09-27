import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section-block">
      <div className="section-heading-row">
        <p className="section-kicker">Projects</p>
        <h2>Business-impact work</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${index === 0 ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-header">
              <span className="project-tag">{project.category}</span>
              <span className="project-status">{project.status}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-points">
              {project.details.slice(0, 3).map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="project-footer">
              <div className="tool-list">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              {project.link ? (
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} in a new tab`}
                >
                  <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="project-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
