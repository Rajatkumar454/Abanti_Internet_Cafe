import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/data": "https://abantiinternetcafe.netlify.app/"
  //   }
  // },
  plugins: [react()],
})
