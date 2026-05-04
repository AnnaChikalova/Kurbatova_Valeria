import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: https://AnnaChikalova.github.io/Kurbatova_Valeria/
const repoBase = '/Kurbatova_Valeria/'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? repoBase : '/',
})
