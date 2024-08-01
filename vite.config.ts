import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  env: {
    'VITE_API_URL': process.env.VITE_API_URL,
    'VITE_API_TOKEN': process.env.VITE_API_TOKEN,
  },
}as any)
