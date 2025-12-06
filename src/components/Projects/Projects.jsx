import React, { useMemo, useState } from "react";
import projectsData from "../../data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.scss";

export default function Projects() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");

  // derive tags from projects
  const tags = useMemo(() => {
    const s = new Set();
    projectsData.forEach(p => p.tech.forEach(t => s.add(t)));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchesTag = activeTag === "All" || p.tech.includes(activeTag);
      const matchesQuery = query.trim() === "" || (
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.join(" ").toLowerCase().includes(query.toLowerCase())
      );
      return matchesTag && matchesQuery;
    });
  }, [activeTag, query]);

  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.header}>
        <h2 id="projects-heading">Selected Projects</h2>

        <div className={styles.controls}>
          <div className={styles.filterRow}>
            {tags.map(t => (
              <button
                key={t}
                className={`${styles.tagBtn} ${activeTag === t ? styles.active : ""}`}
                onClick={() => setActiveTag(t)}
                aria-pressed={activeTag === t}
              >
                {t}
              </button>
            ))}
          </div>

          <input
            className={styles.search}
            placeholder="Search projects, tech, description..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search projects"
          />
        </div>
      </div>

      <div className={styles.grid}>
        {filtered.length === 0 ? (
          <p className={styles.empty}>No projects match your filters.</p>
        ) : (
          filtered.map(p => <ProjectCard key={p.id} p={p} />)
        )}
      </div>
    </section>
  );
}
