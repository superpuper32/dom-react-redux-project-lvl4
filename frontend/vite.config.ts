import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~react-toastify': path.resolve(__dirname, 'node_modules/react-toastify'),
    }
  },
  server: {
    port: 5002,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
      },
      '/socket.io': {
        target: 'ws://localhost:5001',
        ws: true,
        rewriteWsOrigin: true,
      },
    },
  },
})
