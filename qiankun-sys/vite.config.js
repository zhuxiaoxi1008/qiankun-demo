import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 9000,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  plugins: [
    qiankun("app-vue3", { useDevMode: true }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
