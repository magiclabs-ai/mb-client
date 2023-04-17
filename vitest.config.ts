import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      all: true,
      include: ['src/**/*.ts'],
      exclude: ['src/models/style.ts', 'src/models/occasion.ts'],
      provider: 'istanbul',
      reporter: ['text', 'json-summary', 'json', 'html']
    }
  }
})
