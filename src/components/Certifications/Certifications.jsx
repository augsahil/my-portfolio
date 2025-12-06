// src/components/Certifications/Certifications.jsx
import React from "react";
import certs from "../../data/certifications";
import styles from "./Certifications.module.scss";

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section} aria-labelledby="certs-heading">
      <div className={styles.inner}>
        <h2 id="certs-heading">Certifications</h2>

        <div className={styles.grid}>
          {certs.map(c => (
            <article key={c.id} className={styles.card}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.issuer}>{c.issuer} · <span className={styles.year}>{c.year}</span></p>
              <div className={styles.actions}>
                {c.link ? (
                  <a className={styles.view} href={c.link} target="_blank" rel="noopener noreferrer">View</a>
                ) : (
                  <span className={styles.noLink}>No link</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
