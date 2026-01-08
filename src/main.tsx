import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import "./index.css";

import Home from "./components/pages/Home";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
// import About from "./components/pages/About";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageTransition>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </HashRouter>
    </PageTransition>
  </React.StrictMode>
);
