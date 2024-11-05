import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from "vite-plugin-qiankun";

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import cdnImport from 'vite-plugin-cdn-import';

// 配置 CDN 链接
const cdn = {
  // Vue
  vue: 'https://unpkg.com/vue@3.5.12/dist/vue.global.js',
  // Vue Router
  vueRouter: 'https://unpkg.com/vue-router@4.4.5/dist/vue-router.global.js',
  // Pinia
  // pinia: 'https://unpkg.com/pinia@2.2.6/dist/pinia.iife.js',
  // Element Plus
  elementPlus: 'https://unpkg.com/element-plus@2.8.7/dist/index.full.js',
  elementPlusCSS: 'https://unpkg.com/element-plus@2.8.7/dist/index.css'
};

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
    vue(),
    qiankun("app-vue3", { useDevMode: true }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    cdnImport({
      modules: [
        {
          name: 'vue',
          var: 'Vue',
          path: cdn.vue,
          imports: ['createApp', 'reactive', 'ref', 'computed', 'watch', 'onMounted'],
          external: true
        },
        {
          name: 'vue-router',
          var: 'VueRouter',
          path: cdn.vueRouter,
          imports: ['createRouter', 'createWebHistory'],
          external: true
        },
        {
          name: 'element-plus',
          var: 'ElementPlus',
          path: cdn.elementPlus,
          css: cdn.elementPlusCSS,
          external: true
        },
        // {
        //   name: 'pinia',
        //   var: 'Pinia',
        //   path: cdn.pinia,
        //   imports: ['createPinia'],
        //   external: true
        // },
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
