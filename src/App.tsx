import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layouts/MainLayout';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from './components/ProjectDetail';


function App() {
  const [activeSection, setActiveSection] = useState("home");
  const sections = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(sections.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <Router>
      <MainLayout activeSection={activeSection} scrollToSection={scrollToSection}>
        <Routes>
          <Route path="/" element={<Portfolio sections={sections} scrollToSection={scrollToSection} />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />

        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
