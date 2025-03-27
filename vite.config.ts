import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // If using React
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [
    react(), // Add the React plugin if necessary
    svgr(), // Add the SVGR plugin
  ],
});
