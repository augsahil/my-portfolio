// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/globals.scss";

import App from "./App.jsx";
import { setHeaderOffsetVar } from "./utils/scrollOffset";

// Mount React app
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Run after initial render + keep in sync on resize
window.addEventListener("load", () => {
  setHeaderOffsetVar();
  window.addEventListener("resize", setHeaderOffsetVar);
});
