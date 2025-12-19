import React from "react";
import styles from "./About.module.scss";

// small skills array — you can extend or move to src/data later
const skills = [
  "React", "JavaScript (ES6+)", "TypeScript (ready)", "SCSS / CSS Modules",
  "Accessibility (WCAG)", "Performance (Lighthouse)", "Testing (Jest, RTL)",
  "Node.js / Express", "Git / CI", "Design systems / Storybook"
];

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="about-heading">About</h2>


          <p>
            Full-Stack Software Engineer with 3+ years of experience at Accenture, specializing in frontend-centric development and AI-driven backend systems. Strong expertise in React.js, Next.js, TypeScript, Tailwind CSS, MUI, and Storybook, with a proven track record of building scalable, accessible, and high-performance user interfaces for enterprise clients like Hindustan Unilever and Bank of Baroda. <br /><br />

            Experienced in designing and integrating backend services using Node.js, FastAPI, and microservices architectures, along with hands-on work in AI systems including LLM integrations, RAG pipelines, LangGraph, and automation workflows. Adept at improving performance, accessibility (WCAG), and developer efficiency through reusable component systems and optimized CI/CD pipelines on AWS and Azure. <br /><br />

            A results-driven engineer with strong problem-solving skills, clear stakeholder communication, and a long-term focus on building impactful, production-ready software at scale.
          </p>
        </div>

        <div className={styles.side} aria-labelledby="skills-heading">
          <h3 id="skills-heading">Skills</h3>
          <ul className={styles.skills}>
            {skills.map(s => <li key={s} className={styles.skill}>{s}</li>)}
          </ul>
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href="public/sahil-kumar.pdf" download aria-label="Download resume">
            Download CV
          </a>
          <a className={styles.secondary} href="#projects">See projects</a>
        </div>
      </div>
    </section>
  );
}
