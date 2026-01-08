import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import "./index.css";

import Home from "./components/pages/Home";
import Experience from "./components/pages/Experience";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
// import About from "./components/pages/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/experience", element: <Experience /> },
  { path: "/projects", element: <Projects /> },
  { path: "/skills", element: <Skills /> },
  // { path: "/about", element: <About /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PageTransition>
      <RouterProvider router={router} />
    </PageTransition>
  </React.StrictMode>
);
