import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows external access
    port: 8080, // Forces Replit to use port 8080
    strictPort: true,
    allowedHosts: [".replit.dev"], // Allows all Replit subdomains
  },
});
