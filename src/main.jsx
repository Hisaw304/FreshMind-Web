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

// Google Analytics
const GA_MEASUREMENT_ID = "G-2ZXB2X942K";

window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", GA_MEASUREMENT_ID);

const script = document.createElement("script");
script.async = true;
script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(script);

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
