import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Listen on IPv4 localhost so browsers/tools using 127.0.0.1 don't get ERR_CONNECTION_REFUSED
    host: '127.0.0.1',
    port: 5173,
  },
})
