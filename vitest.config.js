import path from 'path';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

const setupFile = path.resolve(__dirname, 'test-utils/test.setup.js');

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
    }),
    Components({
      dirs: ['./components'],
      directoryAsNamespace: true,
      deep: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: [setupFile],
    exclude: [...configDefaults.exclude],
    reporters: ['default'],
    coverage: {
      all: true,
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'composables/useEndpoints.js',
        '**/constants.js',
      ],
      include: [
        'pages',
        'plugins',
        'server',
        'composables',
        'components',
      ],
    },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
    },
  },
});
