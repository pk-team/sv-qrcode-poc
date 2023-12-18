import { sveltekit } from '@sveltejs/kit/vite';
import fs from 'fs';

const config = {
  plugins: [sveltekit()],
  server: {
    https: {
      key: fs.readFileSync('localhost.key'),
      cert: fs.readFileSync('localhost.crt')
    }
  }
};

export default config;
