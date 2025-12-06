// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
// import Projects from "./components/Projects/Projects";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Hero />
//         <Projects />
//         <About />
//         <WorkExperience />
//         <Certifications />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <WorkExperience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
