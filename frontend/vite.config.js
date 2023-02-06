import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ 
      imports: ["vue", "vue-router","vuex"]
    }),
    VueSetupExtend(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  base: '/admin-ui',
  server: {
    open: true
  },
  build: {
    assetsDir: "static",
  }
})
