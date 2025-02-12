import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/myPortfolio/",
  build:{
    outDir: "./docs"
  },
  css:{
    modules:{
      localsConvention: "camelCase",
    }
  }
})
