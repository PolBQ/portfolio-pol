import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://polbq.github.io",
  base: process.env.NODE_ENV === "production" ? "/portfolio-pol" : "",
  vite: {
    plugins: [tailwindcss()],
  },
});