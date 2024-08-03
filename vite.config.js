import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio07/', // replace 'Portfolio07' with your repo name
  plugins: [react()],
});
