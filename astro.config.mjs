import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react()],
  site: "https://polbq.github.io",
  base: process.env.NODE_ENV === "production"
    ? "/portfolio-pol"
    : "",
  vite: {plugins: [tailwindcss()],},
});