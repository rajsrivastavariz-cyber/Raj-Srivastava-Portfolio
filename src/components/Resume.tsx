import { motion } from 'motion/react';
import { Download, ExternalLink, FileText } from 'lucide-react';

const resumeUrl = '/resume/Raj-Srivastava-Resume.pdf';
const resumeFileName = 'Raj-Srivastava-Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="section-block resume-section">
      <div className="section-heading-row">
        <p className="section-kicker">Resume</p>
        <h2>My Resume</h2>
      </div>

      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
      >
        <p className="resume-supporting-text">
          Explore my professional background, business analytics experience, education, and technical skills.
        </p>

        <div className="resume-header">
          <div className="resume-icon" aria-hidden="true">
            <FileText size={28} />
          </div>

          <div className="resume-copy">
            <h3>{resumeFileName}</h3>
            <p>View or download my professional resume.</p>
          </div>
        </div>

        <div className="resume-actions">
          <a
            className="btn btn-primary"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            View Resume
          </a>

          <a
            className="btn btn-secondary"
            href={resumeUrl}
            download={resumeFileName}
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
