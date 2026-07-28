// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import "./assets/style.css";
import "./assets/pages.css";
import "./assets/blog.css";
import "./assets/ai.css";

import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
