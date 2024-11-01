import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  base:'/tools/',
  server: {  
    proxy: {  
      '/api': {  
        target: 'http://apis.juhe.cn', // 目标API服务器的地址  
        changeOrigin: true, // 是否改变请求的原点  
        rewrite: (path) => path.replace(/^\/api/, '') // 重写路径，去掉前缀  
      }
    }  
  },
})
