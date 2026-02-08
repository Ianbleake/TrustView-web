import "./i18n";
import { App } from "./App";
import "./styles/index.css";
import "./styles/app.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./services/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
);
