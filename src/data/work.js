// src/data/work.js
const work = [
  {
    id: 1,
    company: "Accenture",
    title: "Software Engineer — Full-Stack",
    location: "Accenture (Remote/On-site)",
    start: "Oct 2022",
    end: "Present",
    bullets: [
      "Frontend & backend development for enterprise clients using React, Node.js and cloud tooling.",
      "Worked on large-scale projects for Hindustan Unilever and Bank of Baroda.",
      "Improved component reusability and accessibility across product teams; reduced bundle size and improved Lighthouse scores."
    ],
    tech: ["React", "Node.js", "AWS", "Jenkins"],
    logo: "/images/company-accenture.png" // optional
  },
  {
    id: 2,
    company: "Earlier Company / Internship",
    title: "Frontend Developer (Intern)",
    location: "Company Name",
    start: "Jun 2021",
    end: "Jul 2022",
    bullets: [
      "Built UI components and assisted with design system documentation.",
      "Collaborated with cross-functional teams and wrote unit tests."
    ],
    tech: ["React", "SCSS"],
    logo: "/images/company-intern.png"
  }
];

export default work;
