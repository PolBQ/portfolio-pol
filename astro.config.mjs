import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://polbq.github.io",
  base: "/portfolio-pol",

  vite: {
    plugins: [tailwindcss()],
  },
});