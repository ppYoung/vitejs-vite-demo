import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Unocss from '@unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss({})],
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'https://mct-data.ssc.test.shopeemobile.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
