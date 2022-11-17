import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'generated/index.ts'),
      name: 'cloudflare-bread',
      fileName: 'cloudflare-bread',
    },
  },
  plugins: [dts()],
});
