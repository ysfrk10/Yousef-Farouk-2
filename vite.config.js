// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
   base: "/Yousef-Farouk-2/",   // حط هنا اسم الريبو مع الشرطة في الأول والأخر
  optimizeDeps: {
    include: ["ogl"],
  },
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
