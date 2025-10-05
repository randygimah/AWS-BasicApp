import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" })],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  server: {
    port: 1234,
  },
});
