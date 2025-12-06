import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-labelledby="hero-heading">
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-heading" className={styles.title}>
            Hi — I'm Sahil Kr.
          </h1>
          <p className={styles.lead}>
            Frontend Engineer building fast, accessible web apps with React and clean UI design.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primary} href="#projects">See my work</a>
            <a className={styles.secondary} href="#contact">Get in touch</a>
          </div>

          <ul className={styles.meta}>
            <li>React · SCSS</li>
            <li>TypeScript-ready</li>
            <li>Accessible UI</li>
          </ul>
        </div>

        <div className={styles.avatarWrap} aria-hidden>
          {/* Replace with real image path in public/images/ */}
          <img
            className={styles.avatar}
            src="/images/avatar.jpg"
            alt="Portrait of Sahil"
            width="160"
            height="160"
          />
        </div>
      </div>
    </section>
  );
}
