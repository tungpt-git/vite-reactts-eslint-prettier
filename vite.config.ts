import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import dynamicImport from 'vite-plugin-dynamic-import';
import path from 'path';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: true,
    }),
    dynamicImport(),
    vitePluginImp({
      optimize: true,
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false,
        },
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '~',
        replacement: path.resolve(__dirname),
      },
    ],
  },
});
