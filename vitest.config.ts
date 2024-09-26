import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      include: ['src/**/*.ts(x)'],
      reporter: ['text', 'json', 'html'],
      all: true,
      thresholds: {
        branches: 100,
        lines: 100,
        functions: 100,
        statements: 100
      }
    },
    setupFiles: ['./.vitest/setup.ts']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
