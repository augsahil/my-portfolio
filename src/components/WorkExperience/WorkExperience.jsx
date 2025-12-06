// src/components/WorkExperience/WorkExperience.jsx
import React from "react";
import work from "../../data/work";
import styles from "./WorkExperience.module.scss";

export default function WorkExperience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.inner}>
        <h2 id="experience-heading">Work Experience</h2>

        <ol className={styles.timeline}>
          {work.map(item => (
            <li key={item.id} className={styles.item}>
              <div className={styles.head}>
                <div className={styles.meta}>
                  <strong className={styles.company}>{item.company}</strong>
                  <span className={styles.role}>{item.title}</span>
                </div>
                <div className={styles.period}>
                  <span>{item.start}</span> — <span>{item.end}</span>
                </div>
              </div>

              <div className={styles.body}>
                <p className={styles.location}>{item.location}</p>
                <ul className={styles.bullets}>
                  {item.bullets.map((b,i) => <li key={i}>{b}</li>)}
                </ul>

                <div className={styles.tech}>
                  {item.tech.map(t => <span key={t} className={styles.techTag}>{t}</span>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
