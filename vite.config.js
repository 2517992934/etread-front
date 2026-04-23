import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import path from 'path' // 记得先 npm install @types/node -D 喔

export default defineConfig({
  plugins: [
    vue(),
    VueDevTools()  // 启用 Vue Devtools
  ],
  resolve: {
    alias: {
      // 以后用 @ 就直接代表 src 目录啦，不用写长长的路径
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000, // 咱们前端住在 3000 端口
    proxy: {
      // 以后碰到 /api 开头的请求，就悄悄转交给后端妈妈
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // 书城服务（开发环境）
      '/book-api': {
        target: 'http://localhost:8082',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/book-api/, '')
      },
      // 段评/评论服务（开发环境）
      '/comment-api': {
        target: 'http://localhost:8083',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/comment-api/, '')
      }
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/test/setup.ts']
  }
})