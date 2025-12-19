import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];


export default function Header() {
  const [active, setActive] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], header[id]");
    if (!sections) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -50% 0px", // tune when a section counts as active
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // close mobile menu on click
  const onNavClick = () => setMobileOpen(false);

  return (
    <header className={styles.header} id="site-header">
      <div className={styles.container}>
        <h1 className={styles.logo}>SAHIL KUMAR</h1>

        <nav className={`${styles.nav} ${mobileOpen ? styles.open : ""}`} aria-label="Main navigation">
          {LINKS.map(l => {
            const isActive = active === l.id;
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={onNavClick}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
