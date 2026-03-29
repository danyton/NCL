import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Development server configuration
  server: {
    port: 5173,
    open: true,
    // Enable HMR for better development experience
    hmr: true,
  },
  
  // Build optimization
  build: {
    minify: 'terser',
    target: 'esnext',
  },
})
