import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { BASE_URL } from "./shared/store/env.ts";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={BASE_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
