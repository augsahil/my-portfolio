// src/data/work.js
const work = [
  {
    id: 1,
    company: "Accenture",
    title: "Software Engineer",
    location: "Gurugram, India",
    start: "Oct 2022",
    end: "Present",
    bullets: [
      "Architected AI-driven SEO automation system using FastAPI, LangGraph, and RAG pipelines, orchestrating 8+ specialized AI agents for content analysis, metadata generation, and comprehensive SEO auditing",
      "Integrated OpenAI LLMs with LangGraph for consistent, context-aware content generation and multi-step validation workflows, reducing manual content review time by 60%",
      "Built Azure Storage pipelines supporting automated PDF and Excel generation for enterprise reporting and analytics",
      "Developed scalable comparison engines processing large Excel datasets using optimized algorithms and data structures",
      "Implemented real-time voice-streaming backend services for AI-assisted communication using Python, LiveKit (WebRTC), and WebSockets, enabling bi-directional audio with sub-second latency",
      "Containerized microservices with Docker and automated deployments using Azure DevOps CI/CD pipelines, achieving 50% faster release cycles",
      "Engineered reusable UI component systems using React.js, Next.js, Tailwind CSS, MUI, and Storybook for Fortune 500 clients, reducing development redundancy by 40% across enterprise projects",
      "Delivered accessible, high-performance interfaces improving Lighthouse scores by 30%, optimizing Core Web Vitals and ensuring WCAG compliance",
      "Integrated complex frontends with REST APIs, JWT authentication flows, and microservices architectures, handling millions of user sessions",
      "Developed full-stack features using Node.js, Express, MongoDB, and MySQL, building scalable backend services with 99.9% uptime",
      "Collaborated within global Agile teams on sprint delivery, code reviews, and production deployments"
    ],
    tech: ["React.js", "Next.js", "FastAPI", "LangChain", "LangGraph", "Azure", "Docker", "Python", "JavaScript", "TypeScript", "Tailwind CSS", "Material-UI", "Storybook", "Node.js", "Express", "MongoDB", "MySQL", "AWS", "Azure"],
    logo: "src/assets/acc.png"
  },
  {
    id: 2,
    company: "National Institute of Technology, Andhra Pradesh",
    title: "Bachelor of Technology - Computer Science Engineering",
    location: "Andhra Pradesh, India",
    start: "Aug 2018",
    end: "Aug 2022",
    bullets: [
      "CGPA: 7.7/10",
      "Focused on Computer Science fundamentals including Data Structures, Algorithms, and Software Engineering principles."
    ],
    tech: ["Data Structures & Algorithms", "System Design", "OOP"],
    logo: "src/assets/nit.png"
  }
];

export default work;
