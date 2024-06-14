import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@app/ui/index.css";
import "@app/ui/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
