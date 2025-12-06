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
            I'm Sahil — a frontend engineer who builds fast, accessible, and maintainable user interfaces.
            I enjoy component-driven design, optimizing performance, and improving developer experience.
          </p>

          <p>
            I work primarily with React and modern frontend tooling. I care about readable code, clear documentation,
            and delivering business impact through measurable improvements.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/resume.pdf" download aria-label="Download resume">
              Download CV
            </a>
            <a className={styles.secondary} href="#projects">See projects</a>
          </div>
        </div>

        <aside className={styles.side} aria-labelledby="skills-heading">
          <h3 id="skills-heading">Skills</h3>
          <ul className={styles.skills}>
            {skills.map(s => <li key={s} className={styles.skill}>{s}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
