import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StoreContext from "./providers/StoreContext.tsx";
import { defaultStore } from "./providers/StoreContext.const.ts";

ReactDOM.createRoot(document.getElementById("root")!, {
  onRecoverableError(error, errorInfo) {
    console.log(error, errorInfo);
  },
}).render(
  <React.StrictMode>
    <StoreContext.Provider value={defaultStore}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
