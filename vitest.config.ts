import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
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
  }
});
