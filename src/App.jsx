import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { portfolioData } from "./data/portfolio";

const { personal } = portfolioData;

const metrics = [
  { value: "1+", label: "Years in analytics" },
  { value: "3", label: "Core domains" },
  { value: "10+", label: "KPI focus" },
  { value: "2", label: "Languages" },
];

function App() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div id="top" className="portfolio-page">
      <motion.div
        className="scroll-progress"
        style={{ scaleX, opacity: reduceMotion ? 0.8 : 1 }}
      />

      <Navbar />

      <main className="main-shell">
        <Hero />

        <section
          className="section-block stats-section"
          aria-label="Portfolio metrics"
        >
          <div className="stats-grid">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="stat-card"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <span className="stat-value">{metric.value}</span>
                <span className="stat-label">{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <Reveal className="about-section" id="about">
          <div className="section-heading-row compact">
            <p className="section-kicker">About</p>
            <h2>Turning data into business decisions.</h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="about-lead">{personal.summary}</p>
            </div>
            <div className="about-facts">
              <div>
                <span>Location</span>
                <strong>{personal.location}</strong>
              </div>
              <div>
                <span>Email</span>
                <strong>{personal.email}</strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{personal.phone}</strong>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="section-stripe" />

        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
