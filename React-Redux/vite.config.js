import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // eslint-disable-next-line no-undef
    port: parseFloat(process.env.VITE_PORT),
  },
});
