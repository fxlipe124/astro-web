import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages serve em https://fxlipe124.github.io/astro/ — base /astro/
// faz Astro prefixar URLs e assets corretamente. Trocar pra "/" + adicionar
// public/CNAME se um custom domain for configurado depois.
export default defineConfig({
  site: "https://fxlipe124.github.io",
  base: "/astro",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
});
