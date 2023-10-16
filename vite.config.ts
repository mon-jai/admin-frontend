import rollupReplace from "@rollup/plugin-replace"
import react from "@vitejs/plugin-react"
import * as path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    rollupReplace({
      preventAssignment: true,
      values: {
        __DEV__: JSON.stringify(true),
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
    }),
    react({ babel: { plugins: ["babel-plugin-styled-components"] } }),
  ],
  resolve: process.env.USE_SOURCE
    ? {
        alias: {
          "@remix-run/router": path.resolve(__dirname, "../../packages/router/index.ts"),
          "react-router": path.resolve(__dirname, "../../packages/react-router/index.ts"),
          "react-router-dom": path.resolve(__dirname, "../../packages/react-router-dom/index.tsx"),
        },
      }
    : {},
})
