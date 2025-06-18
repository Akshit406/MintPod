import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.css";`
      }
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096, // 4kb
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@heroicons/react']
  }
})