import { Toaster } from "@/components/ui/sonner";
import "@/index.css";
import router from "@/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors />
  </StrictMode>
);
