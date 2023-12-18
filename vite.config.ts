import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

// Check if we are in development mode
const isDevelopment = process.env.NODE_ENV === 'development';

const config = {
  plugins: [sveltekit()],
  server: isDevelopment ? {
    https: {
      key: fs.readFileSync('localhost.key'),
      cert: fs.readFileSync('localhost.crt')
    }
  } : {}
};

export default config;
