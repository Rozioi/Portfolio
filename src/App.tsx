import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.scss";
import Header from "./features/Header/Header";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Projects from "./features/Projects/Projects";
import ProjectDetail from "./features/Projects/ProjectDetail";
import Snowfall from "react-snowfall";

const createEmojiImage = (emoji: string): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");
  const size = 20;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, size, size);

    ctx.fillStyle = "white";
    ctx.font = `${size}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText(emoji, size / 2, size / 2);
  }

  return canvas;
};

function AppContent() {
  const [snowflakeImages, setSnowflakeImages] = useState<HTMLCanvasElement[]>([]);

  useEffect(() => {
    const images = ["❄"].map(createEmojiImage);
    setSnowflakeImages(images);
  }, []);
  const [activeLink, setActiveLink] = useState<string>("home");
  const location = useLocation();
  const isManualScroll = useRef(false);

  const observeSections = () => {
    const sections = document.querySelectorAll("section");
    let activeSection: string | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px 0px",
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isManualScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== activeSection) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            activeSection = entry.target.id;
            window.history.pushState(null, "", `#${activeSection}`);
            setActiveLink(activeSection);
          }, 100);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/projects") {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        handleLinkClick(hash);
      } else if (location.pathname === "/") {
        handleLinkClick("home");
      }
      observeSections();
    }
  }, [location]);

  const handleLinkClick = (link: string) => {
    isManualScroll.current = true;
    setActiveLink(link);

    const targetElement = document.getElementById(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${link}`);
    }

    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  return (
    <>
      {snowflakeImages.length > 0 && (
        <Snowfall
          color="white"
          images={snowflakeImages}
          wind={[0.6, 2]}
          radius={[15, 25]}
          snowflakeCount={30}
          style={{
            zIndex: 1000,
            position: "fixed",
            pointerEvents: "none",
          }}
        />
      )}

      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

function App() {
  return <AppContent />;
}

export default App;
