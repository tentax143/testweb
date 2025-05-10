import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { queryClient } from "./lib/queryClient";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <App />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </BrowserRouter>
);
