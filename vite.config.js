import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio_7/', // replace 'Portfolio_7' with your repo name
  plugins: [react()],
});
