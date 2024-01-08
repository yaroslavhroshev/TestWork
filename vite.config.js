import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  base: '/TestWork',
  server: {
    open: true,
  },
  build: {
    target: 'esnext',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
});
