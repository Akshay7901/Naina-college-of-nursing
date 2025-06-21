import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true, // allows access via IP or tunnel (like ngrok)
    allowedHosts: [
      'ee47-2404-7c80-5c-2a80-b180-6728-9812-6f51.ngrok-free.app'
    ]
  }
});
