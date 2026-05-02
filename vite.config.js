import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Локально "/" ; збірка під GitHub Pages: https://dev-dot-me.github.io/masha-portfolio/
  base: command === 'serve' ? '/' : '/masha-portfolio/',
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
