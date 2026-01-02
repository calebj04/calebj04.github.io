import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./components/Home.tsx";
import Card from "./components/Card.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/experience", element: <Card /> },
  { path: "/projects", element: <Card /> },
  { path: "/skills", element: <Card /> },
  { path: "/about", element: <Card /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <div className="w-screen h-screen flex justify-center items-center">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
