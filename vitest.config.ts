import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'tests/setup.ts',
    css: true,
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '.next/*',
        'next.config.js',
        'postcss.config.mjs',
        'tailwind.config.ts',
        'vitest.config.ts',
        '**/*.config.*',
        '**/node_modules/**',
        '**/dist/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
