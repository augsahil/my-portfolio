import React from "react";
import styles from "./Projects.module.scss";

export default function ProjectCard({ p }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {/* replace images in public/images/ */}
        <img src={p.image} alt={p.title} width="560" height="320" loading="lazy" />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{p.title} <span className={styles.year}>{p.year}</span></h3>
        <p className={styles.desc}>{p.description}</p>

        <div className={styles.meta}>
          <div className={styles.tags}>
            {p.tech.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
</div>
          <div className={styles.links}>
            {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">Code</a>}
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live</a>}
          </div>
        
      </div>
    </article>
  );
}
