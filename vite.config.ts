import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all addresses, including LAN and public addresses
    port: 3000,
    fs: {
      allow: ['..'] // Allow serving files from one level up to allow symlinked node_modules
    },
    watch: {
      usePolling: true, // Necessary for some environments like Docker or WSL
    },
    allowedHosts: true // Allow all hosts - disables host checking
  }
})