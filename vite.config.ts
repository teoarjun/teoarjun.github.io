import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const commitCount = (() => {
  try { return execSync('git rev-list --count HEAD').toString().trim() } catch { return '0' }
})()

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    __APP_VERSION__: JSON.stringify(process.env.VITE_APP_VERSION ?? `v1.${commitCount}`),
  },
})
