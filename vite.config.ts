import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,      // automatically opens browser
    strictPort: true // error if port 3000 is busy
  }
})
