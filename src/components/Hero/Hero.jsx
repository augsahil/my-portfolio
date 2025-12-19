import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.title}>
            Hi — I'm Sahil Kumar
          </h1>
          <p className={styles.lead}>
            Software Engineer — Full-Stack Developer — AI Engineer
          </p>
          <br />

          <ul className={styles.meta}>
            <li>Full-Stack Software Engineer with strong expertise in React, Next.js, Node.js, and FastAPI, building scalable, high-performance web applications and microservices.
            </li>
            <li>
              Experienced AI Engineer specializing in LLM integrations, RAG pipelines, and multi-agent systems, with solid cloud, DevOps, and system design fundamentals.</li>
          </ul>
        </div>

        <div className={styles.avatarWrap} aria-hidden>
          {/* Replace with real image path in public/images/ */}
          <img
            className={styles.avatar}
            src="src/assets/sahil.jpg"
            alt="Portrait of Sahil"
            width="160"
            height="160"
          />
        </div>
      </div>
    </section>
  );
}
