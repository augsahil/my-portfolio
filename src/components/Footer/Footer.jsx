import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <small>© {new Date().getFullYear()} Sahil. Built with React + SCSS.</small>

        <nav className={styles.nav}>
          <a href="/resume.pdf" download>Resume</a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
